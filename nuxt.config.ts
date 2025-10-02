// nuxt.config.ts
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.css'
    ],
    build: {
        transpile: ['vuetify']
    },
    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/test-utils',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }))
            })
        }
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls
            }
        }
    },
    app: {
        head: {
            title: 'fanTABulous',
            meta: [
                { name: 'theme-color', content: '#000000' },
                { name: 'description', content: 'fanTABulous — riff-ready tab parsing and musical metadata magic' },
                // Open Graph
                { property: 'og:title', content: 'fanTABulous — Tab Parsing for the Riff-Ready' },
                { property: 'og:description', content: 'Upload, parse, and preview musical tabs with metadata magic.' },
                { property: 'og:image', content: 'https://fanTABulous.netlify.app/og-image.png' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://fanTABulous.netlify.app' },

                // Twitter
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'fanTABulous — Tab Parsing for the Riff-Ready' },
                { name: 'twitter:description', content: 'Upload, parse, and preview musical tabs with metadata magic.' },
                { name: 'twitter:image', content: 'https://fanTABulous.netlify.app/og-image.png' }
            ],
            htmlAttrs: {
                lang: 'en'
            },
            link: [
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'manifest', href: '/site.webmanifest' }
            ],
        }
    }
});