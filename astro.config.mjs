import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://ericmaina.me",
  build: {
    inlineStylesheets: "never",
  },
  adapter: netlify({
    imageCDN: false
  }),
  integrations: [icon(), sitemap(), purgecss()]
});