// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import svgr from 'vite-plugin-svgr';

import nodeAdapter from '@astrojs/node';

// https://astro.build/config
export default defineConfig({

  output: 'server',

  adapter: nodeAdapter({ mode: 'standalone' }),

  integrations: [react(), icon()],

  vite: {
    plugins: [tailwindcss(), svgr()]
  }
});