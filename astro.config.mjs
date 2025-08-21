import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  vite: {
    resolve: {
      alias: {
        '@assets': new URL('./src/assets', import.meta.url).pathname,
        '@components': new URL('./src/components', import.meta.url).pathname,
        '@css': new URL('./src/css', import.meta.url).pathname,
        '@data': new URL('./src/data', import.meta.url).pathname,
        '@layouts': new URL('./src/layouts', import.meta.url).pathname,
      },
    },
  },
});