import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import type { Metadata } from "next";

// Generate dynamic metadata for each post page
export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const post = getPostBySlug(id);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: `${post.title} | Sharad Bhadait`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: `https://iamsharad.in/post/${id}`,
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
    };
}

// Attio-inspired MDX components — clean, modern, minimal
const components = {
    h1: (props: any) => (
        <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mt-12 mb-6 leading-[1.1]"
            {...props}
        />
    ),
    h2: (props: any) => (
        <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 mt-12 mb-4 leading-tight"
            {...props}
        />
    ),
    h3: (props: any) => (
        <h3
            className="text-xl font-semibold text-stone-800 dark:text-stone-200 mt-8 mb-3 leading-snug"
            {...props}
        />
    ),
    p: ({ children, ...props }: any) => {
        const hasOnlyImage =
            children?.type?.name === "img" ||
            children?.props?.src ||
            (typeof children === "object" && children?.type === "img");
        if (hasOnlyImage) return <>{children}</>;
        return (
            <p
                className="text-stone-600 dark:text-stone-400 leading-[1.8] mb-6 text-[1.0625rem]"
                {...props}
            >
                {children}
            </p>
        );
    },
    ul: (props: any) => (
        <ul
            className="space-y-3 mb-6 text-stone-600 dark:text-stone-400 text-[1.0625rem]"
            {...props}
        />
    ),
    ol: (props: any) => (
        <ol
            className="space-y-3 mb-6 text-stone-600 dark:text-stone-400 list-decimal list-outside ml-5 text-[1.0625rem]"
            {...props}
        />
    ),
    li: (props: any) => (
        <li
            className="leading-[1.7] pl-2 relative before:content-[''] before:absolute before:left-[-1rem] before:top-[0.75rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-stone-300 dark:before:bg-stone-600 list-none"
            {...props}
        />
    ),
    a: ({ href, ...props }: any) => (
        <Link
            href={href || "#"}
            className="text-stone-900 dark:text-stone-100 font-medium underline decoration-stone-300 dark:decoration-stone-600 underline-offset-[3px] decoration-1 hover:decoration-stone-500 dark:hover:decoration-stone-400 transition-colors"
            {...props}
        />
    ),
    code: (props: any) => (
        <code
            className="px-1.5 py-0.5 text-[0.875em] font-mono bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 rounded-md border border-stone-200/80 dark:border-stone-700/50"
            {...props}
        />
    ),
    pre: ({ children, ...props }: any) => (
        <div className="my-8 overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-950 dark:bg-black shadow-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-stone-800/50 bg-stone-900/50 dark:bg-stone-900/30">
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-600"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-600"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-600"></span>
                </div>
            </div>
            <pre
                className="p-5 overflow-x-auto text-[0.9rem] leading-relaxed text-stone-300 font-mono"
                {...props}
            >
                {children}
            </pre>
        </div>
    ),
    blockquote: (props: any) => (
        <blockquote
            className="my-8 pl-6 py-1 border-l-2 border-stone-300 dark:border-stone-600 text-stone-500 dark:text-stone-400 italic"
            {...props}
        />
    ),
    hr: () => (
        <hr className="my-12 border-none h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-800 to-transparent" />
    ),
    strong: (props: any) => (
        <strong
            className="font-semibold text-stone-800 dark:text-stone-200"
            {...props}
        />
    ),
    em: (props: any) => (
        <em
            className="italic text-stone-700 dark:text-stone-300"
            {...props}
        />
    ),
    img: ({ src, alt, ...props }: any) => {
        const isVideo =
            src &&
            (src.includes("user-attachments/assets") ||
                src.endsWith(".mp4") ||
                src.endsWith(".webm") ||
                src.endsWith(".mov"));

        if (isVideo) {
            return (
                <figure className="my-10">
                    <div className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm bg-stone-100 dark:bg-stone-900">
                        <video
                            src={src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            className="w-full h-auto"
                        />
                    </div>
                    {alt && (
                        <figcaption className="mt-3 text-center text-sm text-stone-500 dark:text-stone-400">
                            {alt}
                        </figcaption>
                    )}
                </figure>
            );
        }

        const isGif = src?.endsWith(".gif");

        return (
            <figure className="my-10">
                <div className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm relative">
                    <Image
                        src={src}
                        alt={alt || ""}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 800px"
                        unoptimized={isGif}
                        {...props}
                    />
                </div>
                {alt && (
                    <figcaption className="mt-3 text-center text-sm text-stone-500 dark:text-stone-400">
                        {alt}
                    </figcaption>
                )}
            </figure>
        );
    },
};

export default async function PostPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = getPostBySlug(id);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-stone-50 dark:bg-stone-950">
            <article className="max-w-2xl mx-auto px-6 py-20 sm:py-28">
                {/* Navigation */}
                <nav className="mb-12">
                    <Link
                        href="/post"
                        className="group inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                    >
                        <BsArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Posts
                    </Link>
                </nav>

                {/* Post Header */}
                <header className="mb-12">
                    <time className="block text-sm font-mono text-stone-400 dark:text-stone-500 mb-4 tracking-tight">
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 dark:text-stone-50 leading-[1.15] mb-4">
                        {post.title}
                    </h1>
                    <p className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                        {post.description}
                    </p>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-stone-200/60 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-800 to-transparent" />
                </header>

                {/* Post Content */}
                <div className="prose-reset">
                    <MDXRemote source={post.content} components={components} />
                </div>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-stone-200 dark:border-stone-800">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-stone-400 dark:text-stone-500">
                            Written by{" "}
                            <span className="font-medium text-stone-600 dark:text-stone-300">
                                {post.author}
                            </span>
                        </p>
                        <Link
                            href="/post"
                            className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                        >
                            All Posts →
                        </Link>
                    </div>
                </footer>
            </article>
        </main>
    );
}

export function generateStaticParams() {
    return getAllPostSlugs().map((slug) => ({ id: slug }));
}

export const dynamicParams = false;
