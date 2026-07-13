import { defineConfig } from 'vite'
import { tanstackStartVite } from '@tanstack/start-vite'

export default defineConfig({
  plugins: [
    tanstackStartVite({
      // This tells your project to generate static HTML files
      // suitable for GitHub Pages hosting.
      experimental: {
        prerender: true,
      },
    }),
  ],
})
