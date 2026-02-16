import { defineConfig } from "astro/config"

import netlify from "@astrojs/netlify"
import sitemap from "@astrojs/sitemap"
import purgecss from "astro-purgecss"

import tailwindcss from "@tailwindcss/vite"

import react from "@astrojs/react"

import icon from "astro-icon"

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
        react(),
        icon(),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
})