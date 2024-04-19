import { defineConfig, splitVendorChunkPlugin } from 'vite'

import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [
        svelte(),
        splitVendorChunkPlugin()
    ],
    build: {
        minify: 'terser',
        terserOptions: {
            ecma: 5,
            compress: {
                unsafe: true,
                drop_console: true,
                booleans_as_integers: true
            },
            format: {
                ascii_only: true
            }
        }
    }
})
