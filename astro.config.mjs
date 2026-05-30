// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://itrogers.com",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    // Cast works around a known type mismatch between Astro's bundled Vite
    // and the project's Vite (structurally identical Plugin types).
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  markdown: {
    shikiConfig: {
      // Matches the terminal/dev aesthetic of the site chrome.
      theme: "github-dark-default",
      wrap: false,
    },
  },
});
