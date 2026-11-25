import type { APIRoute } from 'astro';

// Alias XML untuk /sitemap.xml agar URL lama (mis. yang terdaftar di GSC)
// tetap valid. Isinya menunjuk ke sitemap-0.xml yang digenerate otomatis
// oleh @astrojs/sitemap setiap build. Canonical tetap /sitemap-index.xml.
export const prerender = true;

export const GET: APIRoute = () => {
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    '<sitemap><loc>https://asuransiserpong.com/sitemap-0.xml</loc></sitemap>' +
    '</sitemapindex>';
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
