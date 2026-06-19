<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Posts — Sai Varun Jamalpoor</title>
	<link rel="canonical" href="https://thesvj.github.io/blog/" />
	<meta
		name="description"
		content="Posts by Sai Varun Jamalpoor on AI, generative models, diffusion, and related research."
	/>
	<meta property="og:title" content="Posts — Sai Varun Jamalpoor" />
	<meta
		property="og:description"
		content="Posts on AI, generative models, diffusion, and related research."
	/>
	<meta property="og:url" content="https://thesvj.github.io/blog" />
</svelte:head>

<section class="posts-section">
	<div class="container">
		<h1 class="title">Posts</h1>
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
	.title {
		font-family: var(--serif);
		font-size: clamp(2rem, 4vw, 2.6rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.35rem;
		letter-spacing: -0.02em;
	}

	.posts-section {
		padding: 4rem 0 5rem;
		max-width: 720px;
		margin: 0 auto;
	}

	.count {
		font-family: var(--sans);
		font-size: 12px;
		color: var(--text-muted);
		opacity: 0.6;
		margin-bottom: 1rem;
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
