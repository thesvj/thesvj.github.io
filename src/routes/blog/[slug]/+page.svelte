<script lang="ts">
	import { onMount } from 'svelte';
	import PostCard from '$lib/components/PostCard.svelte';

	let { data } = $props();

	const Content = $derived(data.content);

	let progress = $state(0);
	let articleEl: HTMLElement | null = $state(null);
	let toc = $state<Array<{ id: string; text: string; active: boolean }>>([]);

	function fmt(date: string): string {
		return date
			? new Date(date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				})
			: '';
	}

	function onScroll() {
		const max = document.body.scrollHeight - window.innerHeight;
		progress = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
	}

	onMount(() => {
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		const headings = articleEl?.querySelectorAll<HTMLHeadingElement>('h2[id]') ?? [];
		toc = Array.from(headings).map((h) => ({
			id: h.id,
			text: h.textContent ?? '',
			active: false
		}));

		let observer: IntersectionObserver | null = null;
		if (toc.length > 0 && 'IntersectionObserver' in window) {
			observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							const id = entry.target.id;
							toc = toc.map((t) => ({ ...t, active: t.id === id }));
						}
					}
				},
				{ rootMargin: '-20% 0px -70% 0px', threshold: 0 }
			);
			headings.forEach((h) => observer!.observe(h));
		}

		return () => {
			window.removeEventListener('scroll', onScroll);
			observer?.disconnect();
		};
	});
</script>

<svelte:head>
	<title>{data.meta?.title ?? 'Post'} — Eigenframe</title>
	<meta name="description" content={data.meta?.description ?? ''} />
</svelte:head>

<div class="progress-bar" style:width={progress + '%'}></div>

<header class="post-header">
	<div class="container body-grid">
		<div class="content-col">
			<h1 class="title">{data.meta?.title}</h1>
			{#if data.meta?.description}
				<p class="desc">{data.meta.description}</p>
			{/if}

			<div class="post-metadata-grid">
				<div class="meta-col">
					<span class="meta-label">Author</span>
					<span class="meta-val">Sai Varun Jamalpoor</span>
				</div>
				<div class="meta-col">
					<span class="meta-label">Affiliation</span>
					<span class="meta-val">IIIT-Delhi</span>
				</div>
				<div class="meta-col">
					<span class="meta-label">Published</span>
					<span class="meta-val">{fmt(data.meta?.date ?? '')}</span>
				</div>
			</div>
		</div>
	</div>
</header>

<section class="post-body">
	<div class="container body-grid">
		<div class="content-col">
			<div class="prose-container">
				<article class="prose" bind:this={articleEl}>
					<Content />
				</article>
			</div>
		</div>

		{#if toc.length > 0}
			<aside class="toc">
				<div class="toc-label">On this page</div>
				<ul>
					{#each toc as item (item.id)}
						<li>
							<a href="#{item.id}" class:active={item.active}>{item.text}</a>
						</li>
					{/each}
				</ul>
			</aside>
		{/if}
	</div>
</section>

<section class="post-footer">
	<div class="container body-grid">
		<div class="content-col">
			<hr class="footer-divider" />
			{#if data.others.length > 0}
				<h3 class="more-heading">More articles</h3>
				<div class="more-list">
					{#each data.others as post (post.slug)}
						<PostCard {post} />
					{/each}
				</div>
			{/if}
			<div class="back-link-container">
				<a class="back-link" href="/blog">← Back to Blog</a>
			</div>
		</div>
	</div>
</section>

<style>
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		height: 1.5px;
		background: var(--accent-teal);
		z-index: 200;
		transition: width 0.05s linear;
		opacity: 0.8;
	}

	.post-header {
		padding: 5rem 0 3rem;
	}

	/* Removed post-header-inner rules to align with body-grid */

	.title {
		font-family: var(--serif);
		font-size: clamp(2.2rem, 5vw, 3.4rem);
		font-weight: 700;
		color: var(--text-primary);
		line-height: 1.15;
		letter-spacing: -0.02em;
		margin: 0 0 1rem;
	}

	.desc {
		font-family: var(--sans);
		font-size: 1.15rem;
		font-weight: 300;
		color: var(--text-muted);
		max-width: 100%;
		margin: 0 0 2rem;
		line-height: 1.6;
	}

	.post-metadata-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		width: 100%;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
		padding: 1.5rem 0;
		margin-top: 1rem;
	}

	@media (max-width: 640px) {
		.post-metadata-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.25rem;
			padding: 1.25rem 0;
		}
	}

	.meta-col {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.meta-label {
		font-family: var(--sans);
		font-size: 10px;
		font-weight: 500;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.meta-val {
		font-family: var(--sans);
		font-size: 13.5px;
		font-weight: 400;
		color: var(--text-primary);
	}

	.post-body {
		padding-bottom: 5rem;
	}

	.body-grid {
		display: grid;
		grid-template-columns: minmax(0, 720px);
		justify-content: center;
		gap: 4rem;
	}

	@media (min-width: 1200px) {
		.body-grid {
			grid-template-columns: minmax(0, 720px) 220px;
			max-width: 1040px;
		}
	}

	.content-col {
		width: 100%;
	}

	.prose-container {
		width: 100%;
	}

	.toc {
		display: none;
	}

	@media (min-width: 1200px) {
		.toc {
			display: block;
			position: sticky;
			top: 100px;
			align-self: start;
		}
	}

	.toc-label {
		font-family: var(--sans);
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-muted);
		margin-bottom: 1rem;
	}

	.toc ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		border-left: 1px solid var(--border);
	}

	.toc li {
		padding: 0;
	}

	.toc a {
		display: block;
		font-family: var(--sans);
		font-size: 12px;
		color: var(--text-muted);
		padding: 0.2rem 0 0.2rem 1rem;
		margin-left: -1px;
		border-left: 1px solid transparent;
		text-decoration: none;
		transition: all 0.15s ease;
		line-height: 1.4;
	}

	.toc a:hover {
		color: var(--text-primary);
	}

	.toc a.active {
		color: var(--accent-teal);
		border-left-color: var(--accent-teal);
		font-weight: 500;
	}

	.post-footer {
		padding-bottom: 6rem;
	}

	/* Removed post-footer-inner rules to align with body-grid */

	.footer-divider {
		border: none;
		border-top: 1px solid var(--border);
		margin: 0 0 3rem;
	}

	.more-heading {
		font-family: var(--serif);
		font-size: 1.4rem;
		color: var(--text-primary);
		margin: 0 0 1.5rem;
		font-weight: 700;
	}

	.more-list {
		display: flex;
		flex-direction: column;
		margin-bottom: 3rem;
	}

	.more-list :global(.post-item:last-child) {
		border-bottom: none;
	}

	.back-link-container {
		margin-top: 2rem;
	}

	.back-link {
		font-family: var(--sans);
		font-size: 13px;
		font-weight: 500;
		color: var(--text-muted);
		text-decoration: none;
		transition: color 0.15s;
	}

	.back-link:hover {
		color: var(--accent-teal);
		text-decoration: underline;
		text-underline-offset: 3px;
	}
</style>
