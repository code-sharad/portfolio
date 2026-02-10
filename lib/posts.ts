import fs from "fs";
import path from "path";

export interface PostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    author: string;
}

export interface Post extends PostMeta {
    content: string;
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

/**
 * Parse frontmatter from markdown content.
 * Expects --- delimited YAML-style frontmatter at the top.
 */
function parseFrontmatter(fileContent: string): {
    meta: Record<string, any>;
    content: string;
} {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = fileContent.match(frontmatterRegex);

    if (!match) {
        return { meta: {}, content: fileContent };
    }

    const rawMeta = match[1];
    const content = match[2];
    const meta: Record<string, any> = {};

    for (const line of rawMeta.split("\n")) {
        const colonIndex = line.indexOf(":");
        if (colonIndex === -1) continue;

        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();

        // Remove surrounding quotes
        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1);
        }

        // Parse arrays like ["tag1", "tag2"]
        if (value.startsWith("[") && value.endsWith("]")) {
            meta[key] = value
                .slice(1, -1)
                .split(",")
                .map((item) => item.trim().replace(/^["']|["']$/g, ""));
        } else {
            meta[key] = value;
        }
    }

    return { meta, content };
}

/**
 * Get all posts sorted by date (newest first).
 */
export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(POSTS_DIR)) {
        return [];
    }

    const files = fs
        .readdirSync(POSTS_DIR)
        .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

    const posts: PostMeta[] = files.map((file) => {
        const filePath = path.join(POSTS_DIR, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { meta } = parseFrontmatter(fileContent);
        const slug = file.replace(/\.(md|mdx)$/, "");

        return {
            slug,
            title: meta.title || slug,
            description: meta.description || "",
            date: meta.date || "",
            tags: Array.isArray(meta.tags) ? meta.tags : [],
            author: meta.author || "",
        };
    });

    // Sort by date, newest first
    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

/**
 * Get a single post by slug, including its markdown content.
 */
export function getPostBySlug(slug: string): Post | null {
    const mdPath = path.join(POSTS_DIR, `${slug}.md`);
    const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);

    let filePath: string;
    if (fs.existsSync(mdPath)) {
        filePath = mdPath;
    } else if (fs.existsSync(mdxPath)) {
        filePath = mdxPath;
    } else {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { meta, content } = parseFrontmatter(fileContent);

    return {
        slug,
        title: meta.title || slug,
        description: meta.description || "",
        date: meta.date || "",
        tags: Array.isArray(meta.tags) ? meta.tags : [],
        author: meta.author || "",
        content,
    };
}

/**
 * Get all post slugs for static generation.
 */
export function getAllPostSlugs(): string[] {
    if (!fs.existsSync(POSTS_DIR)) {
        return [];
    }

    return fs
        .readdirSync(POSTS_DIR)
        .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
        .map((file) => file.replace(/\.(md|mdx)$/, ""));
}
