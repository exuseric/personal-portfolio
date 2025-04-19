import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ericmaina.me",
  adapter: netlify({
    imageCDN: false
  }),
  integrations: [icon(), sitemap()]
});