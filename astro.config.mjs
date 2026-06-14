import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://cssfinds.com",
  integrations: [tailwind(), sitemap()],
  vite: {
    cacheDir: ".vite-cache",
    optimizeDeps: {
      entries: [],
      noDiscovery: true,
      exclude: ["aria-query", "axobject-query", "cssesc"],
    },
  },
});
