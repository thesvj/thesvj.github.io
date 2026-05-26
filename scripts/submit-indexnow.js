import fs from 'fs';
import path from 'path';

const KEY = 'bfdc79d28e7545939e6a988d407e3a94';
const HOST = 'thesvj.github.io';
const SITEMAP_PATH = path.join(process.cwd(), 'build/sitemap.xml');

async function submitIndexNow() {
	try {
		if (!fs.existsSync(SITEMAP_PATH)) {
			console.error(`Sitemap not found at ${SITEMAP_PATH}. Make sure to build the site first.`);
			process.exit(1);
		}

		console.log('Reading sitemap.xml...');
		const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
		const urlMatches = sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g);
		const urls = Array.from(urlMatches).map((match) => match[1].trim());

		if (urls.length === 0) {
			console.warn('No URLs found in sitemap.xml.');
			return;
		}

		console.log(`Extracted ${urls.length} URLs from sitemap.xml:`);
		urls.forEach((u) => console.log(`  - ${u}`));

		const payload = {
			host: HOST,
			key: KEY,
			keyLocation: `https://${HOST}/${KEY}.txt`,
			urlList: urls
		};

		const endpoints = [
			'https://api.indexnow.org/indexnow',
			'https://www.bing.com/indexnow',
			'https://yandex.com/indexnow'
		];

		// 1. Submit to IndexNow endpoints
		for (const endpoint of endpoints) {
			console.log(`Submitting to ${endpoint}...`);
			try {
				const response = await fetch(endpoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json; charset=utf-8'
					},
					body: JSON.stringify(payload)
				});

				if (response.ok) {
					console.log(`✓ Successfully submitted to ${endpoint} (Status: ${response.status})`);
				} else {
					const text = await response.text();
					console.error(`✗ Failed to submit to ${endpoint} (Status: ${response.status}). Error: ${text}`);
				}
			} catch (err) {
				console.error(`✗ Network error when submitting to ${endpoint}:`, err.message);
			}
		}

	} catch (error) {
		console.error('An error occurred during submission:', error);
		process.exit(1);
	}
}

submitIndexNow();
