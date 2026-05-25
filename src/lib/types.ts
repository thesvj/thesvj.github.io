export interface Post {
	slug: string;
	title: string;
	description: string;
	date: string;
	tag: string;
	interactive: boolean;
	readTime: string;
	published: boolean;
	featured?: boolean;
}
