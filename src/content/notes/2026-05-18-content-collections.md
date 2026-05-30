---
title: "TIL: Astro content collections + the glob loader"
date: "2026-05-18 14:30:00-08:00"
tags:
  - Astro
  - TIL
---

Astro 5's content layer lets you point a collection at a folder with the `glob()` loader and validate frontmatter with a Zod schema. Bad frontmatter fails the build instead of silently rendering wrong — which is how it should be.

```ts
const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({ date: z.coerce.date() }),
});
```
