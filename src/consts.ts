/**
 * Global site configuration. Edit here, it flows everywhere.
 */

export const SITE = {
  title: "Ian Rogers",
  tagline: "entrepreneur · engineer · writer",
  description:
    "Ian Rogers — entrepreneur, software engineer, and writer in Las Vegas. Notes, writing, and what I'm building right now.",
  url: "https://itrogers.com",
  author: "Ian Rogers",
  locale: "en",
  email: "ian@itrogers.com",
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: "~", href: "/" },
  { label: "writing", href: "/writing" },
  { label: "notes", href: "/notes" },
  { label: "now", href: "/now" },
  { label: "about", href: "/about" },
];

export const SOCIAL: { label: string; href: string; handle: string }[] = [
  { label: "GitHub", href: "https://github.com/itrogers", handle: "@itrogers" },
  { label: "X", href: "https://x.com/itrogers", handle: "@itrogers" },
  { label: "LinkedIn", href: "https://linkedin.com/in/itrogers", handle: "in/itrogers" },
];

/** Tech I work with — rendered on the homepage manifest. */
export const STACK: { label: string; icon: string }[] = [
  { label: "Node / TypeScript", icon: "js-logo" },
  { label: "React", icon: "react-logo" },
  { label: "Docker", icon: "docker-logo" },
  { label: "PHP / WordPress", icon: "wp-logo" },
  { label: "AWS / Linux", icon: "aws-logo" },
];
