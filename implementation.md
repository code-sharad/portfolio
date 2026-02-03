# MDX Project Details Feature

Add "More Details" button to project cards that links to dynamic `/project/[slug]` pages rendering server-side MDX content from a `/content` folder.

## User Review Required

> [!IMPORTANT]
> **MDX Package Choice**: Using `@next/mdx` with dynamic imports per [Next.js official MDX guide](https://nextjs.org/docs/app/guides/mdx). This is cleaner than `next-mdx-remote` for local files.

> [!NOTE]
> You'll add MDX files to `/content/[slug].mdx`. I'll create a sample file for testing.

---

## Proposed Changes

### Package Dependencies

#### [MODIFY] [package.json](file:///wsl.localhost/Ubuntu/home/ram/project/portfolio/package.json)

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

---

### Next.js Configuration

#### [MODIFY] next.config.js → [next.config.mjs](file:///wsl.localhost/Ubuntu/home/ram/project/portfolio/next.config.mjs)

Rename to `.mjs` and configure MDX:

```javascript
import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'media.licdn.com' }]
  }
}

const withMDX = createMDX({ extension: /\.(md|mdx)$/ })
export default withMDX(nextConfig)
```

---

### MDX Components (Required by @next/mdx)

#### [NEW] [mdx-components.tsx](file:///wsl.localhost/Ubuntu/home/ram/project/portfolio/mdx-components.tsx)

Define global MDX component mappings:

```tsx
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
    h2: (props) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
    p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
    // ... more styled components
    ...components,
  }
}
```

---

### Data Layer

#### [MODIFY] [data.ts](file:///wsl.localhost/Ubuntu/home/ram/project/portfolio/lib/data.ts)

Add `slug` field to `projectsData`:

```diff
 export const projectsData = [
   {
     title: "Coding Agent",
+    slug: "coding-agent",
     description: "...",
     ...
   },
```

---

### Project Card Component

#### [MODIFY] [project.tsx](file:///wsl.localhost/Ubuntu/home/ram/project/portfolio/app/components/project.tsx)

Add "More Details" button next to existing "View Project":

```tsx
import Link from "next/link";

// In the button section:
{slug && (
  <Link href={`/project/${slug}`} className="...">
    More Details
    <BsArrowUpRight className="w-4 h-4" />
  </Link>
)}
```

---

### Dynamic Route

#### [NEW] [page.tsx](file:///wsl.localhost/Ubuntu/home/ram/project/portfolio/app/project/[slug]/page.tsx)

Using dynamic imports per Next.js docs:

```tsx
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`)
  return <Post />
}

export function generateStaticParams() {
  return projectsData.filter(p => p.slug).map(p => ({ slug: p.slug }))
}

export const dynamicParams = false
```

#### [DELETE] [page.tsx](file:///wsl.localhost/Ubuntu/home/ram/project/portfolio/app/project/page.tsx)

Remove placeholder page.

---

### Content Folder

#### [NEW] /content folder at project root

Sample file: `content/coding-agent.mdx`

```mdx
# Coding Agent

An AI-powered coding assistant that reads your codebase...

## Features
- Intelligent code analysis
- Automatic PR creation
...
```

---

## Verification Plan

### Build Verification
```bash
npm run build
```

### Manual Browser Verification
1. Run `npm run dev`
2. Navigate to landing page → Projects section
3. Verify "More Details" button appears on cards with slugs
4. Click "More Details" → verify redirect to `/project/[slug]`
5. Verify MDX content renders with styling
