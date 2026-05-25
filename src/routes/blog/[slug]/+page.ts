import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/utils/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.svx`);
		const allPosts = await getAllPosts();
		const others = allPosts.filter((p) => p.slug !== params.slug).slice(0, 2);
		return {
			content: post.default,
			meta: post.metadata,
			slug: params.slug,
			others
		};
	} catch {
		throw error(404, `Post not found`);
	}
};

export const prerender = true;

export async function entries() {
	const posts = await getAllPosts();
	return posts.map((p) => ({ slug: p.slug }));
}
