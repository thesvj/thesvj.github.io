<script lang="ts">
	import { timelines } from '$lib/data/timelines';
</script>

<svelte:head>
	<title>Timelines | Sai Varun Jamalpoor</title>
	<meta
		name="description"
		content="Research timelines with original papers, method summaries, results, and exercises."
	/>
	<link rel="canonical" href="https://thesvj.github.io/timelines/" />
</svelte:head>

<div class="container collection">
	<p class="eyebrow">Reading notes</p>
	<h1>Timelines<span>.</span></h1>
	<p class="intro">Papers and reading notes.</p>
	<p class="description">A collection of foundational works that shaped the field.</p>
	<div class="collections">
		{#each timelines as timeline, i (timeline.slug)}
			<a class="collection-card" href="/timelines/{timeline.slug}/">
				<div class="card-top">
					<span>Collection {String(i + 1).padStart(2, '0')}</span><span
						>{timeline.entries.length} sources</span
					>
				</div>
				<div class="mini-timeline" aria-hidden="true">
					<span></span><span></span><span></span><span></span><span></span>
				</div>
				<p class="range">{timeline.entries[0].year} — {timeline.entries.at(-1)?.year}</p>
				<h2>{timeline.title}</h2>
				<p>{timeline.description}</p>
				<div class="card-bottom">Open timeline <span aria-hidden="true">↗</span></div>
			</a>
		{/each}
	</div>
</div>

<style>
	.collection {
		padding-top: 4rem;
		padding-bottom: 5rem;
	}
	.eyebrow,
	.card-top,
	.range {
		font-family: var(--mono);
		font-size: 11px;
		color: var(--text-muted);
	}
	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.13em;
	}
	h1 {
		font: 500 clamp(3rem, 7vw, 5rem)/1.2 var(--serif);
		color: var(--text-primary);
		letter-spacing: -0.045em;
		margin-top: 0.75rem;
	}
	h1 span {
		color: var(--accent-teal);
	}
	.intro {
		font: 400 1.5rem/1.5 var(--serif);
		margin-top: 1rem;
		color: var(--text-primary);
	}
	.description {
		max-width: 55ch;
		margin-top: 0.7rem;
	}
	.collections {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
		gap: 1.5rem;
		margin: 3rem 0 1.5rem;
	}
	.collection-card {
		max-width: 560px;
		padding: 2rem;
		background: var(--bg-card);
		border: 1px solid var(--border-hover);
		border-radius: 12px;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
	}
	.collection-card:hover {
		border-color: var(--accent-teal);
		box-shadow: var(--shadow-md);
	}
	.card-top,
	.card-bottom {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
	.card-top {
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.mini-timeline {
		display: flex;
		justify-content: space-between;
		position: relative;
		margin: 2.5rem 0 1.5rem;
	}
	.mini-timeline::before {
		content: '';
		position: absolute;
		height: 1px;
		background: var(--accent-teal);
		top: 5px;
		width: 100%;
	}
	.mini-timeline span {
		width: 11px;
		height: 11px;
		border: 2px solid var(--accent-teal);
		background: var(--bg-card);
		border-radius: 50%;
		z-index: 1;
	}
	.mini-timeline span:last-child {
		background: var(--accent-teal);
	}
	h2 {
		font: 500 2rem/1.3 var(--serif);
		color: var(--text-primary);
		margin: 0.4rem 0 1rem;
	}
	.card-bottom {
		border-top: 1px solid var(--border-hover);
		padding-top: 1rem;
		margin-top: 1.5rem;
		color: var(--accent-teal);
		font-size: 14px;
	}
	@media (max-width: 640px) {
		.collection {
			padding-top: 2.5rem;
		}
		.collection-card {
			padding: 1.5rem;
		}
	}
</style>
