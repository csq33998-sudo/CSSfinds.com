import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const sitemapPaths = new Set([
  "/",
  "/about/",
  "/affiliate-disclosure/",
  "/cssbuy-accessories/",
  "/cssbuy-bags/",
  "/cssbuy-hoodies/",
  "/cssbuy-pants/",
  "/cssbuy-shoes/",
  "/cssbuy-tshirts/",
  "/editorial-methodology/",
  "/how-to-buy/",
  "/qc/",
]);

export default defineConfig({
  site: "https://cssfinds.com",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => sitemapPaths.has(new URL(page).pathname),
    }),
  ],
  vite: {
    cacheDir: ".vite-cache",
    optimizeDeps: {
      entries: [],
      noDiscovery: true,
      exclude: ["aria-query", "axobject-query", "cssesc"],
    },
  },
});
