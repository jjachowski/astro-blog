import react from "@astrojs/react";
import { defineConfig, sharpImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
