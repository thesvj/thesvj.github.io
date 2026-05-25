import { getAllPosts } from '$lib/utils/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = await getAllPosts();
	return { recentPosts: posts.slice(0, 3) };
};
