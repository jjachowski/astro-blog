import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig, sharpImageService } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jachowski.dev",
  integrations: [react(), tailwind(), sitemap()],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
