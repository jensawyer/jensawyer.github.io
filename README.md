# Personal Site (React + Vite)

Dev: `npm ci`, then `npm run dev`
Build: `npm run build` (postbuild copies `index.html` → `404.html` for GitHub Pages SPA routing)

No Tailwind. Styles live in `src/index.css` using named classes.

## Content Locations
- About: `src/content/about.md` (first part collapses/expands)
- Help modes: `src/content/about.engineer.md`, `src/content/about.aiengineer.md`, `src/content/about.manager.md`
- Projects: `src/content/projects.ts` (+ group Markdown like `src/content/projects/eldritch-oracle.md`)
- Recommendations: Markdown files in `src/content/recos`
- Contact body: `src/content/contact.md`
- Contact links: `src/content/site.ts`

## Blog
- Posts: `src/content/blog/*.md` (filename `YYYY-MM-DD-slug.md`)
- Excerpt: first paragraph of the Markdown
- Title/date/tags: front‑matter

### Blog Images (with optional caption)
Place post images in `public/blog/<slug>/` and reference them with an absolute path.

- Example paths:
  - `public/blog/2025-04-18-tech-interview-process/diagram.webp`
  - Markdown: `![Alt text | Optional caption](/blog/2025-04-18-tech-interview-process/diagram.webp)`

Behavior:
- If the alt text contains a `|`, the text before `|` is used as `alt`, and the text after `|` renders as a `<figcaption>` under the image.
- If there’s no `|`, the image renders normally without a caption but still uses the same responsive styling.

Guidelines:
- Prefer `.webp` when possible. Keep image widths reasonable (~1200–1600px) to avoid bloat.
- Always provide meaningful alt text.

### Inline Accents in Markdown
For subtle emphasis without raw HTML, wrap inline text in backticks with a prefix:
- `` `accent:Important phrase` `` → accent color
- `` `muted:quieter aside` `` → muted text

## Accessibility & Security
- Raw HTML in Markdown is disabled.
- External links use `target="_blank"` + `rel="noopener noreferrer"`.
