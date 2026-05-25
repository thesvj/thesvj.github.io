<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';

	let { data } = $props();

	function fmt(date: string): string {
		return date
			? new Date(date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				})
			: '';
	}
</script>

<svelte:head>
	<title>Eigenframe — Sai Varun Jamalpoor</title>
</svelte:head>

<section class="hero">
	<div class="container">
		<h1 class="title">Eigenframe</h1>
		<p class="tagline">Visual essays on how AI models actually work.</p>
		<div class="byline">by Sai Varun Jamalpoor · IIIT-Delhi</div>
	</div>
</section>

{#if data.featured}
	<section class="featured">
		<div class="container">
			<div class="featured-meta-header">
				<span class="featured-date">{fmt(data.featured.date)}</span>
				{#if data.featured.interactive}
					<span class="sep">·</span>
					<span class="featured-interactive">interactive</span>
				{/if}
				<span class="sep">·</span>
				<span class="featured-readtime">{data.featured.readTime}</span>
			</div>
			<a href="/blog/{data.featured.slug}" class="featured-title-link">
				<h2 class="featured-title">{data.featured.title}</h2>
			</a>
			<p class="featured-desc">{data.featured.description}</p>
			<a class="featured-cta" href="/blog/{data.featured.slug}">Read Article →</a>
		</div>
	</section>
{/if}

<section class="posts-section">
	<div class="container">
		<div class="count">
			{data.posts.length} post{data.posts.length === 1 ? '' : 's'}
		</div>

		{#if data.posts.length === 0}
			<div class="empty">No posts yet.</div>
		{:else}
			<div class="posts-list">
				{#each data.posts as post (post.slug)}
					<PostCard {post} />
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.hero {
		padding: 4rem 0 2rem;
		max-width: 720px;
		margin: 0 auto;
	}

	.title {
		font-family: var(--serif);
		font-size: clamp(2.4rem, 5vw, 3.2rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.5rem;
		letter-spacing: -0.02em;
	}

	.tagline {
		font-family: var(--sans);
		font-size: 1.15rem;
		font-weight: 300;
		color: var(--text-muted);
		line-height: 1.6;
		margin: 0 0 1rem;
	}

	.byline {
		font-family: var(--sans);
		font-size: 12px;
		color: var(--text-muted);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.featured {
		padding: 2.5rem 0;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
		max-width: 720px;
		margin: 0 auto;
	}

	.featured-meta-header {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.4rem;
		font-family: var(--sans);
		font-size: 11.5px;
		color: var(--text-muted);
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	.featured-meta-header .sep {
		opacity: 0.4;
	}

	.featured-interactive {
		color: var(--accent-teal);
		font-weight: 600;
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.featured-title-link {
		text-decoration: none;
	}

	.featured-title {
		font-family: var(--serif);
		font-size: clamp(1.5rem, 3vw, 1.85rem);
		font-weight: 700;
		color: var(--text-primary);
		line-height: 1.25;
		margin: 0 0 0.5rem 0;
	}

	.featured-title-link:hover .featured-title {
		color: var(--accent-teal);
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	.featured-desc {
		font-family: var(--sans);
		font-size: 15px;
		color: var(--text-secondary);
		line-height: 1.7;
		margin: 0 0 1.2rem 0;
		font-weight: 300;
	}

	.featured-cta {
		display: inline-block;
		font-family: var(--sans);
		font-size: 13px;
		font-weight: 500;
		color: var(--accent-teal);
		text-decoration: none;
	}

	.featured-cta:hover {
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.posts-section {
		padding: 3rem 0 5rem;
		max-width: 720px;
		margin: 0 auto;
	}

	.count {
		font-family: var(--sans);
		font-size: 12px;
		color: var(--text-muted);
		opacity: 0.6;
		margin-bottom: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 500;
	}

	.posts-list {
		display: flex;
		flex-direction: column;
	}

	.posts-list :global(.post-item:last-child) {
		border-bottom: none;
	}

	.empty {
		font-family: var(--sans);
		font-size: 15px;
		color: var(--text-muted);
		padding: 4rem 0;
		text-align: center;
		font-style: italic;
	}
</style>
