import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";
import { BsArrowLeft } from "react-icons/bs";

export const metadata: Metadata = {
    title: "Posts | Sharad Bhadait",
    description:
        "Blog posts, thoughts, and learnings on web development, AI, and technology.",
    openGraph: {
        title: "Posts | Sharad Bhadait",
        description:
            "Blog posts, thoughts, and learnings on web development, AI, and technology.",
        type: "website",
        url: "https://iamsharad.in/post",
    },
};

export default function PostsPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-stone-50 dark:bg-stone-950 overflow-x-hidden">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-28">
                {/* Navigation */}
                <nav className="mb-12">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                    >
                        <BsArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                </nav>

                {/* Header */}
                <header className="mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-950 dark:text-stone-50 leading-[1.1] mb-4">
                        Posts
                    </h1>
                    {/* <p className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
                        Thoughts, learnings, and ideas on web development, AI, and
                        technology.
                    </p> */}
                </header>

                {/* Posts List */}
                {posts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-stone-400 dark:text-stone-500 text-lg">
                            No posts yet. Check back soon!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/post/${post.slug}`}
                                className="group block"
                            >
                                <article className="relative py-5 sm:py-6 px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-2xl transition-colors group overflow-hidden">
                                    {/* Date */}
                                    <time className="block text-sm font-mono text-stone-400 dark:text-stone-500 mb-2 tracking-tight">
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </time>

                                    {/* Title */}
                                    <h2 className="group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[1px] text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-colors leading-snug pr-6 sm:pr-8 break-words">
                                        {post.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-stone-500 dark:text-stone-400 text-sm sm:text-[0.95rem] leading-relaxed line-clamp-2 mb-3 pr-6 sm:pr-8">
                                        {post.description}
                                    </p>

                                    {/* Tags */}
                                    {post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
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

                                    {/* Arrow indicator */}
                                    <div className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg
                                            className="w-5 h-5 text-stone-400 dark:text-stone-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </article>

                                {/* Separator */}
                                <div className="h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-800 to-transparent" />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
