import { getAllPosts } from '$lib/utils/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = await getAllPosts();
	const featured = posts.find((p) => p.featured) ?? posts[0] ?? null;
	return { featured, posts };
};
