import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
			smartypants: { quotes: false, ellipses: true, backticks: true, dashes: 'oldschool' },
			remarkPlugins: [remarkMath],
			rehypePlugins: [[rehypeKatex, { output: 'html' }], rehypeSlug],
			highlight: {
				highlighter: async (code, lang) => {
					const { codeToHtml } = await import('shiki');
					const html = await codeToHtml(code, {
						lang: lang || 'text',
						theme: 'github-dark-dimmed'
					});
					return html;
				}
			}
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false
		})
	}
};

export default config;
