# AGENTS.md

Guide for AI coding agents working in this repository. Read this before making changes.

## What this repo is

Personal portfolio and blog for Sharad Bhadait, live at <https://iamsharad.in>. Built with Next.js (App Router) with an MDX-driven content pipeline — projects and posts are authored as MDX/Markdown files and rendered dynamically, so most content changes should not require touching components.

## Tech stack

| Category    | Tools                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Framework   | Next.js 16 (App Router), React 19, TypeScript                        |
| Styling     | Tailwind CSS 4, shadcn/ui (Radix), custom "Stone" design system        |
| Content     | MDX (`@next/mdx`, `next-mdx-remote`), Markdown posts                  |
| Animation   | Framer Motion, Embla Carousel, pixel/splash-screen animations          |
| Misc        | Vercel Analytics, react-icons, lucide-react, custom frontmatter parser (`lib/posts.ts`) |

## Project structure

```
app/
  components/        # Page sections and UI (intro, projects, timeline, theme switch, …)
  post/              # Blog: listing page + [id] detail pages
  project/[slug]/    # MDX case study pages for each project
  layout.tsx         # Fonts (Outfit, EB Garamond), metadata, providers, footer
context/             # Theme + active-section React contexts
content/             # MDX project case studies
content/posts/       # Markdown blog posts
lib/                 # data.ts (site content config), posts.ts, types.ts, utils.ts
public/              # Images, favicons, resume PDF
```

## Key files and edit patterns

- **`lib/data.ts` is the content config** — site navigation, experience timeline, and project cards all live here. Most content updates (jobs, projects, skills) are edits to this file, not new components.
- **Project cards are double-sourced**: the card on the homepage comes from `projectsData` in `lib/data.ts`, while the detail page at `/project/[slug]` comes from `content/<slug>.mdx`. When adding or changing a project, update **both** and keep the `slug` matching the MDX filename.
- **Blog posts**: drop a `.md` file in `content/posts/` with `---` frontmatter (title, description, date, tags, author). `lib/posts.ts` parses frontmatter with a custom parser — no gray-matter dependency.
- **MDX rendering** uses the shared component map in `mdx-components.tsx`.
- **Design tokens**: the warm "Stone" palette and philosophy are documented in `design_system.md` — respect it when styling. Theme variables live in `app/globals.css` (light + dark).
- **Resume PDF** lives in `public/` and is referenced by the download button in `app/components/intro.tsx` — if the filename changes, update that href.
- **SEO**: metadata is in `app/layout.tsx` (canonical URL `https://iamsharad.in`), plus `app/sitemap.ts` and `app/robots.ts`. Keep these in sync when adding routes.

## Commands

```bash
pnpm install
pnpm dev        # dev server at http://localhost:3000
pnpm build      # production build
pnpm start      # serve production build
pnpm lint       # ESLint
```

Both `package-lock.json` and `pnpm-lock.yaml` are committed — prefer pnpm.

## Verification before finishing

1. `npx tsc --noEmit` — must pass
2. `pnpm lint` — no new warnings
3. If you touched anything under `app/`, run `pnpm build` to confirm the App Router routes still compile

## Conventions

- TypeScript throughout; keep types in `lib/types.ts` when shared
- Client components are marked `"use client"`; most page sections are client components using Framer Motion
- Icons: `react-icons` in `lib/data.ts`, inline SVGs and `lucide-react` in components
- Images live in `public/` and are imported statically in `lib/data.ts` (Next.js `Image` optimization)
- Do not add heavy new dependencies for content changes — the content pipeline is intentionally dependency-light
