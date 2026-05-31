#!/usr/bin/env node
// Scaffold a new note in src/content/notes from a template.
// Usage: npm run new:note -- "Your note title"
//   title is optional; omit it to fill in the blank later.

import { mkdir, writeFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const NOTES_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "content", "notes");

const slugify = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const title = process.argv.slice(2).join(" ").trim();
const now = new Date();
const datePrefix = now.toISOString().slice(0, 10); // YYYY-MM-DD
const slug = title ? slugify(title) : "untitled";

const filename = `${datePrefix}-${slug}.md`;
const filepath = join(NOTES_DIR, filename);

const template = `---
title: "${title || ""}"
date: "${now.toISOString()}"
tags:
  - Notes
---

`;

await mkdir(NOTES_DIR, { recursive: true });

try {
  await access(filepath);
  console.error(`✗ Note already exists: ${filename}`);
  process.exit(1);
} catch {
  // doesn't exist — good
}

await writeFile(filepath, template, "utf8");
console.log(`✓ Created src/content/notes/${filename}`);
