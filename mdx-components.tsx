import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Headings
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mt-8 mb-6">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mt-8 mb-4 border-b border-stone-200 dark:border-stone-700 pb-2">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mt-6 mb-3">
                {children}
            </h3>
        ),
        // Paragraphs
        p: ({ children }) => (
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
                {children}
            </p>
        ),
        // Lists
        ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-stone-700 dark:text-stone-300 ml-4">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-stone-700 dark:text-stone-300 ml-4">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
        ),
        // Links
        a: ({ href, children }) => (
            <Link
                href={href || '#'}
                className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
                {children}
            </Link>
        ),
        // Code
        code: ({ children }) => (
            <code className="bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-sm font-mono text-stone-800 dark:text-stone-200">
                {children}
            </code>
        ),
        pre: ({ children }) => (
            <pre className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-4 rounded-lg overflow-x-auto mb-4">
                {children}
            </pre>
        ),
        // Blockquote
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-stone-300 dark:border-stone-600 pl-4 italic text-stone-600 dark:text-stone-400 my-4">
                {children}
            </blockquote>
        ),
        // Horizontal rule
        hr: () => (
            <hr className="border-stone-200 dark:border-stone-700 my-8" />
        ),
        // Strong and emphasis
        strong: ({ children }) => (
            <strong className="font-semibold text-stone-900 dark:text-stone-100">{children}</strong>
        ),
        em: ({ children }) => (
            <em className="italic">{children}</em>
        ),
        ...components,
    }
}
