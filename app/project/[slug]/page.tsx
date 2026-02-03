import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";

// Generate dynamic metadata for each project page
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Sharad Bhadait`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
            url: `https://sharad31.vercel.app/project/${slug}`,
        },
    };
}

// Attio-inspired MDX components - clean, modern, minimal with excellent typography
const components = {
    // Headings - Large, bold, with tight tracking (Attio style)
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

    // Paragraphs - Readable, comfortable line height
    // Handle case where paragraph contains only an image (to avoid figure inside p hydration error)
    p: ({ children, ...props }: any) => {
        // Check if the only child is an image
        const hasOnlyImage =
            children?.type?.name === 'img' ||
            children?.props?.src ||
            (typeof children === 'object' && children?.type === 'img');

        if (hasOnlyImage) {
            return <>{children}</>;
        }

        return (
            <p
                className="text-stone-600 dark:text-stone-400 leading-[1.8] mb-6 text-[1.0625rem]"
                {...props}
            >
                {children}
            </p>
        );
    },

    // Lists - Clean with proper spacing
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

    // Links - Subtle, professional
    a: ({ href, ...props }: any) => (
        <Link
            href={href || '#'}
            className="text-stone-900 dark:text-stone-100 font-medium underline decoration-stone-300 dark:decoration-stone-600 underline-offset-[3px] decoration-1 hover:decoration-stone-500 dark:hover:decoration-stone-400 transition-colors"
            {...props}
        />
    ),

    // Inline code - Minimal, clean (Attio style)
    code: (props: any) => (
        <code
            className="px-1.5 py-0.5 text-[0.875em] font-mono bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 rounded-md border border-stone-200/80 dark:border-stone-700/50"
            {...props}
        />
    ),

    // Code blocks - Clean, modern with subtle header
    pre: ({ children, ...props }: any) => (
        <div className="my-8 overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-950 dark:bg-black shadow-sm">
            {/* Minimal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-stone-800/50 bg-stone-900/50 dark:bg-stone-900/30">
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-600"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-600"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-600"></span>
                </div>
            </div>
            {/* Code content */}
            <pre
                className="p-5 overflow-x-auto text-[0.9rem] leading-relaxed text-stone-300 font-mono"
                {...props}
            >
                {children}
            </pre>
        </div>
    ),

    // Blockquotes - Clean left border, subtle background (Attio style)
    blockquote: (props: any) => (
        <blockquote
            className="my-8 pl-6 py-1 border-l-2 border-stone-300 dark:border-stone-600 text-stone-500 dark:text-stone-400 italic"
            {...props}
        />
    ),

    // Horizontal rule - Subtle divider
    hr: () => (
        <hr className="my-12 border-none h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-800 to-transparent" />
    ),

    // Strong - Slightly heavier weight
    strong: (props: any) => (
        <strong className="font-semibold text-stone-800 dark:text-stone-200" {...props} />
    ),

    // Emphasis
    em: (props: any) => (
        <em className="italic text-stone-700 dark:text-stone-300" {...props} />
    ),

    // Images and Videos - Attio-style clean presentation with next/image optimization
    img: ({ src, alt, ...props }: any) => {
        // Check if the source is a video (GitHub user attachments are often videos)
        const isVideo = src && (
            src.includes('user-attachments/assets') ||
            src.endsWith('.mp4') ||
            src.endsWith('.webm') ||
            src.endsWith('.mov')
        );

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

        // For GIFs, use unoptimized to preserve animation
        const isGif = src?.endsWith('.gif');

        // Regular image with next/image optimization
        return (
            <figure className="my-10">
                <div className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm relative">
                    <Image
                        src={src}
                        alt={alt || ''}
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

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Check if MDX file exists
    const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const source = fs.readFileSync(filePath, "utf-8");
    const project = projectsData.find((p) => p.slug === slug);

    return (
        <main className="min-h-screen bg-stone-50 dark:bg-stone-950">
            <article className="max-w-2xl mx-auto px-6 py-20 sm:py-28">
                {/* Navigation */}
                <nav className="mb-12">
                    <Link
                        href="/#projects"
                        className="group inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                    >
                        <BsArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Projects
                    </Link>
                </nav>

                {/* Project Link */}
                {(project as any)?.url && (
                    <div className="mb-10">
                        <a
                            href={(project as any).url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-full hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm"
                        >
                            View Live Project
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                )}

                {/* Content */}
                <div className="prose-reset">
                    <MDXRemote source={source} components={components} />
                </div>
            </article>
        </main>
    );
}

export function generateStaticParams() {
    return projectsData
        .filter((p) => p.slug)
        .map((p) => ({
            slug: p.slug,
        }));
}

export const dynamicParams = false;
