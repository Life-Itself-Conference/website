import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'assets',
  },
  integrations: [solidJs()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
