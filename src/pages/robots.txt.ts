import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `
# Robots.txt for Eric Gathoni Portfolio
# https://ericmaina.me

User-agent: *
Allow: /

# Disallow API endpoints and private areas
Disallow: /api/
Disallow: /_astro/
Disallow: /admin/
Disallow: /private/

# Crawl delay for respectful crawling
Crawl-delay: 1

# Sitemap location
Sitemap: ${sitemapURL.href}

# Additional sitemaps
Sitemap: ${sitemapURL.href.replace('sitemap-index.xml', 'sitemap-0.xml')}

# Host
Host: ${sitemapURL.origin}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};