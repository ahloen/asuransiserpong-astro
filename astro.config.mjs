import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://asuransiserpong.com',
  trailingSlash: 'ignore',
  redirects: {
    '/bengkel-rekanan-asuransi-mobil/jakarta-raya': '/bengkel-rekanan-asuransi-mobil',
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/archive/') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
