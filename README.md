# itrogers.com

Personal site & living dev journal for Ian Rogers. Terminal-inspired, content-first,
and built to be updated often.

Built with **[Astro](https://astro.build)** + **[Tailwind CSS v4](https://tailwindcss.com)**,
deployed static on **Netlify**.

```
$ whoami
→ Ian Rogers — entrepreneur · engineer · writer
```

## Stack

- **Astro 5** (static output, zero JS shipped by default)
- **Tailwind CSS v4** — CSS-first config; all design tokens live in `src/styles/global.css` (`@theme`)
- **Content collections** (`astro:content`) with Zod-validated frontmatter
- **Shiki** for code highlighting · **@astrojs/rss** · **@astrojs/sitemap**
- Type-checked with `astro check`

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview    # serve the built site
npm run check      # type-check .astro + content
```

Requires Node 22+.

## Project layout

```
src/
  consts.ts            # site title, nav, social, homepage stack
  content.config.ts    # collection schemas (blog, notes, pages)
  styles/global.css    # design system: tokens, utilities, .article prose
  lib/utils.ts         # kebab, date formatting, reading time
  components/          # Header, Footer, TerminalWindow, PostRow, Icon, Tag, ...
  layouts/BaseLayout.astro
  pages/              # routes (see below)
  content/
    blog/   *.md       # long-form articles
    notes/  *.md       # the living stream (short notes / TILs)
    pages/  now.md, about.md
  assets/icons/        # inline SVGs (imported by Icon.astro)
public/
  media/               # images referenced as /media/... + avatars
  _redirects           # Netlify 301s from legacy Gatsby URLs
  favicon.svg, robots.txt
```

## Routes

`/` · `/writing` · `/writing/<slug>` · `/notes` · `/notes/<id>` · `/now` ·
`/about` · `/links` · `/tags` · `/tags/<tag>` · `/rss.xml` · `404`

## Writing content

**A new article** — add `src/content/blog/<anything>.md`:

```yaml
---
title: "My Post Title"
date: "2026-06-01 09:00:00-08:00"
slug: my-post-title        # the clean URL -> /writing/my-post-title
description: "One-line summary for SEO + RSS."
category: Code             # optional
tags: [Astro, TIL]         # optional
draft: false               # true hides it from the site
---

Markdown body. Code fences get Shiki highlighting. Images can use /media/<file>.
```

> URLs route off the `slug` field. If you change a slug after publishing, add a
> 301 in `public/_redirects` so old links keep working.

**A note** (the stream) — add `src/content/notes/<date>-<slug>.md`:

```yaml
---
title: "Optional short title"
date: "2026-06-01 09:00:00-08:00"
tags: [Notes]
---

A short note. Permalink is /notes/<filename-without-extension>.
```

**Now / About** — edit `src/content/pages/now.md` and `about.md`.

## Deploy

Pushed to the `master` branch → Netlify builds with `npm run build` and publishes
`dist/` (see `netlify.toml`). Legacy date-prefixed article URLs 301 to the new
`/writing/<slug>` paths via `public/_redirects`.

## Design

Terminal-inspired: mono UI chrome, serif long-form prose ("documents you `cat`"),
a refined low-chroma palette (aqua dominant, sparing green/amber). Tweak the whole
look from the tokens in `src/styles/global.css`.
