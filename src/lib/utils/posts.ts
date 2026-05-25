import type { Post } from '$lib/types';

export async function getAllPosts(): Promise<Post[]> {
	const modules = import.meta.glob('/src/posts/*.svx', { eager: true });

	const posts: Post[] = Object.entries(modules).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.svx', '') ?? '';
		const meta =
			(module as { metadata?: Record<string, string | boolean | undefined> }).metadata ?? {};
		return {
			slug,
			title: (meta.title as string) ?? 'Untitled',
			description: (meta.description as string) ?? '',
			date: (meta.date as string) ?? '',
			tag: (meta.tag as string) ?? 'Research',
			interactive: (meta.interactive as boolean) ?? false,
			readTime: (meta.readTime as string) ?? '10 min',
			published: (meta.published as boolean) ?? true,
			featured: (meta.featured as boolean) ?? false
		};
	});

	return posts
		.filter((p) => p.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
