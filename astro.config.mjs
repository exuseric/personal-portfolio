import { defineConfig } from "astro/config"

import netlify from "@astrojs/netlify"
import sitemap from "@astrojs/sitemap"
import purgecss from "astro-purgecss"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
    site: "https://ericmaina.me",
    output: "static",
    build: {
        inlineStylesheets: "never",
    },

    adapter: netlify({
        imageCDN: false,
        functionPerRoute: false,
        _redirects: [
            // Security headers
            "/*    /.netlify/functions/entry    200",
            // Redirect www to non-www
            "https://www.ericmaina.me/* https://ericmaina.me/:splat 301!",
            // Force HTTPS
            "http://ericmaina.me/* https://ericmaina.me/:splat 301!",
        ],
    }),

    image: {
        responsiveStyles: true,
        layout: "constrained",
        domains: ["eu-west-2.graphassets.com"],
    },

    integrations: [
        sitemap(),
        purgecss({
            variables: true,
            keyframes: true,
            fontFace: true,
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
})
