import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Long-form articles. Migrated from the legacy Gatsby blog.
 * Routing uses the frontmatter `slug` (clean URLs at /writing/<slug>),
 * with 301s from the old date-prefixed paths in public/_redirects.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    slug: z.string().optional(),
    // legacy frontmatter fields, kept so old files validate untouched
    template: z.string().optional(),
    socialImage: z.string().optional(),
  }),
});

/**
 * Notes — the living stream. Short, timestamped dev notes / TILs / updates.
 * Reverse-chron feed at /notes, permalinks at /notes/<id>.
 */
const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

/**
 * Singleton markdown pages (now, about) — content the owner edits often,
 * kept in markdown rather than hardcoded in .astro.
 */
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    updated: z.coerce.date().optional(),
    template: z.string().optional(),
    socialImage: z.string().optional(),
  }),
});

export const collections = { blog, notes, pages };
