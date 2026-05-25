<script lang="ts">
	import type { Post } from '$lib/types';

	let { post }: { post: Post } = $props();

	const formattedDate = $derived(
		post.date
			? new Date(post.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				})
			: ''
	);
</script>

<a class="post-item" href="/blog/{post.slug}">
	<div class="post-item-meta">
		<span class="post-item-date">{formattedDate}</span>
		{#if post.interactive}
			<span class="post-item-sep">·</span>
			<span class="post-item-interactive">interactive</span>
		{/if}
		<span class="post-item-sep">·</span>
		<span class="post-item-readtime">{post.readTime}</span>
	</div>
	<h3 class="post-item-title">{post.title}</h3>
	<p class="post-item-desc">{post.description}</p>
</a>

<style>
	.post-item {
		display: block;
		text-decoration: none;
		color: inherit;
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--border);
	}

	.post-item-meta {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.4rem;
		font-family: var(--sans);
		font-size: 11.5px;
		color: var(--text-muted);
		font-weight: 500;
		margin-bottom: 0.3rem;
	}

	.post-item-sep {
		opacity: 0.4;
	}

	.post-item-interactive {
		color: var(--accent-teal);
		font-weight: 600;
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.post-item-title {
		font-family: var(--serif);
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
		line-height: 1.3;
		margin: 0 0 0.3rem;
	}

	.post-item:hover .post-item-title {
		color: var(--accent-teal);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.post-item-desc {
		font-family: var(--sans);
		font-size: 14.5px;
		color: var(--text-secondary);
		line-height: 1.65;
		margin: 0;
		font-weight: 300;
	}
</style>
