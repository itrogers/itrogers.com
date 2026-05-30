/** Shared helpers used across pages so links/labels stay consistent. */

/** URL-safe slug for tags. Predictable: lowercase, non-alphanumerics -> single hyphen. */
export function kebab(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "February 9, 2022" */
export function humanDate(d: Date): string {
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

/** "2022-02-09" — terminal-style, monospace-aligned. */
export function isoDate(d: Date): string {
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${d.getUTCFullYear()}-${m}-${day}`;
}

/** Posted within the last `days` days. */
export function isRecent(d: Date, days = 21): boolean {
  return Date.now() - d.getTime() <= days * 24 * 60 * 60 * 1000;
}

/** Estimated read time in minutes from raw text/html. */
export function readingMinutes(text: string): number {
  const words = text.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
