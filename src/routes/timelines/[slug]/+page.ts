import { error } from '@sveltejs/kit';
import { timelines } from '$lib/data/timelines';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => timelines.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const timeline = timelines.find(({ slug }) => slug === params.slug);
	if (!timeline) error(404, 'Timeline not found');
	return { timeline };
};
