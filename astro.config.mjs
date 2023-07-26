import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig, sharpImageService } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jachowski.dev",
  integrations: [react(), tailwind(), sitemap(), mdx()],
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  image: {
    service: sharpImageService()
  }
});