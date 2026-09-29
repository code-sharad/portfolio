# Portfolio

Personal portfolio and blog — live at **[iamsharad.in](https://iamsharad.in)**

Built with Next.js (App Router) and MDX-driven content. Projects and posts are authored as MDX/Markdown files and rendered dynamically, so adding content doesn't require touching components.

## Tech Stack

| Category    | Tools                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Framework   | [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript  |
| Styling     | Tailwind CSS 4, shadcn/ui (Radix), custom "Stone" design system        |
| Content     | MDX (`@next/mdx`, `next-mdx-remote`), Markdown posts                  |
| Animation   | Framer Motion, Embla Carousel, pixel/splash-screen animations          |
| Misc        | Vercel Analytics, react-icons, lucide-react, custom frontmatter parser (`lib/posts.ts`) |

## Features

- **Sectioned single-page layout** — intro, about, projects, and experience, with a dynamic blog under `/post` and per-project case studies under `/project/[slug]`
- **MDX content pipeline** — project case studies live in `content/*.mdx` and blog posts in `content/posts/`; each is rendered with a shared component set (`mdx-components.tsx`)
- **Dark/light theme** — persisted theme context with a theme switcher and a custom warm "Stone" palette (see `design_system.md`)
- **Motion & polish** — Framer Motion section reveals, magnetic buttons, pixel transitions, splash screen, and a vertical experience timeline
- **SEO** — metadata API with canonical URL, `app/sitemap.ts` and `app/robots.ts`, plus Google Search Console verification
- **Vercel Analytics** wired in via `@vercel/analytics`

## Project Structure

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

## Getting Started

Requires Node.js 20.9+ (Next.js 16 minimum) and pnpm (or npm/yarn — both lockfiles are committed).

```bash
git clone https://github.com/code-sharad/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `pnpm dev`     | Start the dev server           |
| `pnpm build`   | Production build               |
| `pnpm start`   | Serve the production build     |
| `pnpm lint`    | Run ESLint                     |

## Adding Content

- **Project case study** — drop an `.mdx` file in `content/` with frontmatter (title, description, tags, etc.), add the project entry to `projectsData` in `lib/data.ts`, and reference it by `slug`. Images go in `public/`.
- **Blog post** — add a `.md` file to `content/posts/`; `lib/posts.ts` handles parsing and listing automatically.

## Deployment

The site is deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a production deploy; PRs get preview deployments. See the [Next.js deployment docs](https://nextjs.org/docs/app/getting-started/deploying) for other targets.

## License

Personal project — the code is visible for reference, but the content and design are my own. If you're building your own portfolio, feel free to use the structure as inspiration.
