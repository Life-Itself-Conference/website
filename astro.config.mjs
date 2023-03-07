import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  ...(import.meta.env.PROD
    ? {
        site: 'https://rightpoint.github.io',
        base: '/life-itself-2024',
      }
    : {}),
  build: {
    assets: 'assets',
  },
  integrations: [solidJs()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
