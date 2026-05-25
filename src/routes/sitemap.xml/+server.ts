import type { RequestHandler } from './$types';
import { getAllPosts } from '$lib/utils/posts';

const BASE = 'https://thesvj.github.io';

function url(loc: string, priority: string, changefreq: string, lastmod?: string) {
	return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod ?? new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export const GET: RequestHandler = async () => {
	const posts = await getAllPosts();

	const staticPages = [
		url(BASE, '1.0', 'monthly'),
		url(`${BASE}/blog`, '0.8', 'weekly')
	];

	const postPages = posts.map((p) =>
		url(`${BASE}/blog/${p.slug}`, '0.7', 'monthly', p.date)
	);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...postPages].join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

export const prerender = true;
