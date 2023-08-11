import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula-soft",
      wrap: true,
    },
  },
  site: "https://www.jachowski.dev",
  integrations: [react(), tailwind(), sitemap(), mdx()],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
