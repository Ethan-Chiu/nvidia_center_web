import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  integrations: [react(), astroI18next(), tailwind({
    applyBaseStyles: false
  }), mdx()]
});