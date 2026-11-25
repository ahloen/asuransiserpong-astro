import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));

// Petakan slug blog -> tanggal ISO (YYYY-MM-DD) dari frontmatter,
// supaya <lastmod> di sitemap selalu ikut tanggal artikel terbaru.
function parseIdDate(raw) {
  if (!raw) return undefined;
  const months = {
    jan: '01', feb: '02', mar: '03', apr: '04', mei: '05', may: '05',
    jun: '06', jul: '07', agu: '08', ags: '08', aug: '08', sep: '09',
    sept: '09', okt: '10', oct: '10', nov: '11', des: '12', dec: '12',
  };
  const m = String(raw).trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (m) {
    const mon = months[m[2].toLowerCase()];
    if (mon) return `${m[3]}-${mon}-${m[1].padStart(2, '0')}`;
  }
  const t = Date.parse(String(raw));
  if (!Number.isNaN(t)) return new Date(t).toISOString().slice(0, 10);
  return undefined;
}

function loadBlogLastmod() {
  const map = {};
  try {
    const dir = join(rootDir, 'src/content/blog');
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.md')) continue;
      const text = readFileSync(join(dir, file), 'utf8');
      const front = text.match(/^---\s*\n([\s\S]*?)\n---/);
      if (!front) continue;
      const get = (key) => front[1].match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?\\s*$`, 'm'))?.[1]?.trim();
      const iso = parseIdDate(get('dateModified')) ?? parseIdDate(get('date'));
      if (iso) map[file.replace(/\.md$/, '')] = iso;
    }
  } catch {
    // Kalau folder blog belum ada saat config dimuat, biarkan sitemap tanpa lastmod blog.
  }
  return map;
}

const blogLastmod = loadBlogLastmod();

export default defineConfig({
  output: 'static',
  site: 'https://asuransiserpong.com',
  trailingSlash: 'ignore',
  redirects: {
    '/bengkel-rekanan-asuransi-mobil/jakarta-raya': '/bengkel-rekanan-asuransi-mobil',
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/archive/'),
    serialize(item) {
      const path = new URL(item.url).pathname;
      const blogSlug = path.match(/^\/blog\/([^/]+)\/?$/)?.[1];

      if (blogSlug && blogLastmod[blogSlug]) {
        // Artikel: lastmod ikut frontmatter dateModified || date
        item.lastmod = blogLastmod[blogSlug];
        item.changefreq = 'monthly';
        item.priority = 0.8;
        return item;
      }
      if (path === '/') {
        item.changefreq = 'weekly';
        item.priority = 1.0;
        return item;
      }
      if (path === '/blog/' || path === '/blog') {
        item.changefreq = 'weekly';
        item.priority = 0.9;
        return item;
      }
      if (path.startsWith('/blog/kategori/')) {
        item.changefreq = 'monthly';
        item.priority = 0.6;
        return item;
      }
      if (
        path.startsWith('/asuransi-') ||
        path.startsWith('/bengkel-rekanan-asuransi-mobil')
      ) {
        item.changefreq = 'monthly';
        item.priority = 0.9;
        return item;
      }
      item.changefreq = 'monthly';
      item.priority = 0.5;
      return item;
    },
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
