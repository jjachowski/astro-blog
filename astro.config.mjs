import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
