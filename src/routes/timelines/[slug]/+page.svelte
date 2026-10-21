<script lang="ts">
	import type { PageData } from './$types';
	import StudyGuide from '$lib/components/StudyGuide.svelte';
	import { curricula } from '$lib/data/curricula';
	let { data }: { data: PageData } = $props();
	let query = $state('');
	let view = $state<'study' | 'history'>('study');
	let selectedStage = $state('');
	let coreOnly = $state(false);
	let curriculum = $derived(curricula[data.timeline.slug]);
	let stages = $derived(curriculum?.stages ?? []);
	let recentFrom = $derived(curriculum?.recentFrom ?? 2017);
	let latestYear = $derived(data.timeline.entries.at(-1)?.year ?? 2026);
	$effect(() => {
		if (data.timeline.slug) {
			reset();
			view = 'study';
			expandAll = false;
		}
	});
	let paperStages = $derived(
		new Map(stages.flatMap((stage) => stage.readings.map((id) => [id, stage] as const)))
	);
	let entryById = $derived(new Map(data.timeline.entries.map((entry) => [entry.id, entry])));
	let studyEntries = $derived(
		stages.flatMap((stage) =>
			stage.readings.flatMap((id) => {
				const entry = entryById.get(id);
				return entry ? [entry] : [];
			})
		)
	);
	let ordered = $derived(view === 'study' && stages.length ? studyEntries : data.timeline.entries);
	let currentStage = $derived(stages.find((stage) => stage.id === selectedStage));
	function openStage(id: string) {
		reset();
		view = 'study';
		selectedStage = id;
	}

	let selectedTheme = $state('All topics');
	let expandAll = $state(false);
	let fromYear = $state(0);
	let toYear = $state(9999);
	let recentOnly = $derived(fromYear === recentFrom && toYear === 9999);
	let years = $derived([...new Set(data.timeline.entries.map((entry) => entry.year))]);
	const themeColors: Record<string, string> = {
		'Unsupervised learning': 'var(--accent-purple)',
		'Supervised learning': 'var(--accent-teal)',
		'Theory & evaluation': 'var(--accent-blue)',
		'Reinforcement learning': 'var(--accent-coral)',
		Ensembles: 'var(--accent-amber)',
		'Tabular foundation models': 'var(--accent-purple)',
		'Statistical foundations': 'var(--accent-blue)',
		'Probabilistic models': 'var(--accent-teal)',
		'Causal inference': 'var(--accent-coral)',
		'Label-efficient learning': 'var(--accent-purple)',
		'Optimization & online learning': 'var(--accent-amber)',
		'Uncertainty estimation': 'var(--accent-blue)',
		Recommendation: 'var(--accent-coral)',
		'Neural network foundations': 'var(--accent-blue)',
		'Optimization & regularization': 'var(--accent-teal)',
		'Vision architectures': 'var(--accent-coral)',
		'Sequence models': 'var(--accent-purple)',
		'Transformers & language': 'var(--accent-blue)',
		'Representation learning': 'var(--accent-teal)',
		'Graph learning': 'var(--accent-amber)',
		'Generative models': 'var(--accent-purple)',
		'Diffusion & flows': 'var(--accent-coral)',
		'Deep reinforcement learning': 'var(--accent-amber)',
		'Scaling & adaptation': 'var(--accent-blue)',
		'Post-training': 'var(--accent-teal)',
		'Efficient architectures': 'var(--accent-purple)',
		'Recent research': 'var(--accent-coral)'
	};
	let themes = $derived([...new Set(data.timeline.entries.map((entry) => entry.theme))]);
	let visible = $derived(
		ordered.filter((entry) => {
			const text = [
				entry.id,
				entry.year,
				entry.label,
				entry.title,
				entry.authors,
				entry.theme,
				entry.contribution,
				entry.impact
			]
				.join(' ')
				.toLowerCase();
			return (
				(!selectedStage || paperStages.get(entry.id)?.id === selectedStage) &&
				(!coreOnly || paperStages.get(entry.id)?.core.includes(entry.id)) &&
				entry.year >= fromYear &&
				entry.year <= toYear &&
				(selectedTheme === 'All topics' || entry.theme === selectedTheme) &&
				text.includes(query.trim().toLowerCase())
			);
		})
	);
	function reset() {
		query = '';
		selectedStage = '';
		coreOnly = false;
		fromYear = 0;
		toYear = 9999;
		selectedTheme = 'All topics';
	}
</script>

<svelte:head>
	<title>{data.timeline.title} Timeline | Sai Varun Jamalpoor</title>
	<meta name="description" content={data.timeline.description} />
	<meta property="og:title" content={`${data.timeline.title} — research timeline`} />
	<meta property="og:description" content={data.timeline.description} />
	<meta property="og:url" content={`https://thesvj.github.io/timelines/${data.timeline.slug}/`} />
	<link rel="canonical" href={`https://thesvj.github.io/timelines/${data.timeline.slug}/`} />
</svelte:head>

<div class="container timeline-page">
	<a class="back" href="/timelines/">← All timelines</a>
	<header class="hero">
		<div>
			<p class="eyebrow">Foundations & further study</p>
			<h1>{data.timeline.title}<span>.</span></h1>
			<p class="intro">{data.timeline.description}</p>
		</div>
		<div class="hero-stat">
			<strong>{data.timeline.entries.length}</strong><span>original sources</span><span
				>{data.timeline.entries[0].year} — {data.timeline.entries.at(-1)?.year}</span
			>
		</div>
	</header>

	{#if stages.length}<StudyGuide
			{stages}
			preparation={curriculum.preparation}
			prerequisites={curriculum.prerequisites}
			onStageSelect={openStage}
		/>{/if}

	<section class="coverage" aria-label="Coverage and review date">
		<div>
			<p class="eyebrow">
				Reviewed <time datetime={data.timeline.reviewedAt}
					>{new Date(data.timeline.reviewedAt + 'T00:00:00Z').toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
						timeZone: 'UTC'
					})}</time
				>
			</p>
			<p>{data.timeline.scope}</p>
		</div>
		<button
			class="recent-toggle"
			aria-pressed={recentOnly}
			onclick={() => {
				const next = !recentOnly;
				reset();
				fromYear = next ? recentFrom : 0;
				view = 'history';
			}}>Recent work: {recentFrom}–{latestYear}</button
		>
	</section>

	<details class="topic-index">
		<summary>Browse {themes.length} topics <span aria-hidden="true">+</span></summary>
		<div class="journey" aria-label="Research topics">
			{#each themes as theme, i (theme)}
				<button
					style:--topic={themeColors[theme]}
					onclick={() => {
						selectedTheme = selectedTheme === theme ? 'All topics' : theme;
					}}
					aria-pressed={selectedTheme === theme}
				>
					<span class="journey-number">{String(i + 1).padStart(2, '0')}</span><span>{theme}</span
					><span class="journey-dot" aria-hidden="true"></span>
				</button>
			{/each}
		</div>
	</details>

	<div class="reading-controls" aria-label="Reading order">
		<div class="view-options">
			<button aria-pressed={view === 'study'} onclick={() => (view = 'study')}>Study order</button
			><button aria-pressed={view === 'history'} onclick={() => (view = 'history')}
				>Historical order</button
			>
		</div>
		{#if stages.length}<label class="core-toggle"
				><input type="checkbox" bind:checked={coreOnly} /> Core readings only</label
			>{/if}
	</div>
	<div class="reading-layout" id="readings">
		<aside>
			<div class="sidebar">
				<p class="eyebrow">Filters</p>
				{#if stages.length}<label class="search-label" for="study-stage">Study stage</label><select
						class="stage-select"
						id="study-stage"
						bind:value={selectedStage}
						><option value="">All stages</option>{#each stages as stage, i (stage.id)}<option
								value={stage.id}>{i + 1}. {stage.title}</option
							>{/each}</select
					>{/if}
				<label class="search-label" for="paper-search">Find a paper</label>
				<input
					id="paper-search"
					type="search"
					placeholder="Title, author, year…"
					bind:value={query}
				/>
				<div class="year-range">
					<label for="from-year"
						>From<select
							id="from-year"
							bind:value={fromYear}
							onchange={() => {
								if (fromYear > toYear) toYear = fromYear;
							}}
							><option value={0}>Earliest</option>{#each years as year (year)}<option value={year}
									>{year}</option
								>{/each}</select
						></label
					>
					<label for="to-year"
						>To<select
							id="to-year"
							bind:value={toYear}
							onchange={() => {
								if (toYear < fromYear) fromYear = toYear;
							}}
							><option value={9999}>Latest</option>{#each years as year (year)}<option value={year}
									>{year}</option
								>{/each}</select
						></label
					>
				</div>
				{#if query || selectedStage || coreOnly || selectedTheme !== 'All topics' || fromYear !== 0 || toYear !== 9999}<button
						class="clear-filters"
						onclick={reset}>Reset filters</button
					>{/if}
				<div class="filters" aria-label="Filter by topic">
					{#each ['All topics', ...themes] as theme (theme)}
						<button
							class:chosen={selectedTheme === theme}
							aria-pressed={selectedTheme === theme}
							onclick={() => (selectedTheme = theme)}
						>
							<span class="filter-label"
								><span
									class="filter-dot"
									style:background={themeColors[theme] ?? 'var(--text-muted)'}
								></span>{theme}</span
							>
							<span class="filter-count"
								>{theme === 'All topics'
									? data.timeline.entries.length
									: data.timeline.entries.filter((entry) => entry.theme === theme).length}</span
							>
						</button>
					{/each}
				</div>
			</div>
		</aside>

		<section class="papers" aria-label="Paper timeline">
			{#if currentStage}<div class="stage-context">
					<p class="eyebrow">{currentStage.level}</p>
					<h2>{currentStage.title}</h2>
					<p>{currentStage.goal}</p>
					<p><strong>Prerequisites:</strong> {currentStage.before}</p>
					<p><strong>Exercises:</strong> {currentStage.checkpoint}</p>
				</div>{/if}
			<div class="results-bar">
				<p role="status">
					{visible.length} of {data.timeline.entries.length} sources{recentOnly
						? ` · ${recentFrom}–${latestYear}`
						: ''}
				</p>
				<button aria-pressed={expandAll} onclick={() => (expandAll = !expandAll)}
					>{expandAll ? 'Collapse notes' : 'Expand all notes'}
					<span aria-hidden="true">{expandAll ? '−' : '+'}</span></button
				>
			</div>
			{#if visible.length === 0}
				<div class="empty">
					<h2>No matching papers</h2>
					<p>Try another title, author, or year.</p>
					<button class="reset" onclick={reset}>Clear filters</button>
				</div>
			{:else}
				<ol class="timeline" class:study-view={view === 'study'} role="list">
					{#each visible as entry (entry.id)}
						<li id={entry.id} style:--topic={themeColors[entry.theme]}>
							<div class="year">
								<span>{entry.year}</span><span class="node" aria-hidden="true"></span>
							</div>
							<article>
								<div class="paper-meta">
									<span class="topic"
										>{entry.theme}{entry.sourceType ? ` · ${entry.sourceType}` : ''}</span
									><span class="paper-number"
										>{String(ordered.indexOf(entry) + 1).padStart(2, '0')}</span
									>
								</div>
								<h2><a class="permalink" href={`#${entry.id}`}>{entry.label}</a></h2>
								<p class="authors">{entry.authors}</p>
								{#if paperStages.get(entry.id)}{@const stage = paperStages.get(entry.id)!}
									<p class="study-tag">
										Stage {stages.indexOf(stage) + 1} · {stage.level} · {stage.core.includes(
											entry.id
										)
											? 'Core reading'
											: stage.level === 'Research'
												? 'Research reading'
												: 'Optional extension'}
									</p>{/if}
								<p class="contribution">{entry.contribution}</p>
								<div class="impact">
									<h3>Impact</h3>
									<p>{entry.impact}</p>
								</div>
								<a class="source" href={entry.url} target="_blank" rel="noreferrer noopener"
									><span
										>Read the original <span aria-hidden="true">↗</span><span class="paper-title"
											>{entry.title}</span
										></span
									><span class="external-note">New tab</span></a
								>
								{#key expandAll}
									<details open={expandAll}>
										<summary
											>Notes & exercise <span class="expand-symbol" aria-hidden="true">+</span
											></summary
										>
										<div class="study-notes">
											{#if paperStages.get(entry.id)}<h3>Prerequisites</h3>
												<p>{paperStages.get(entry.id)?.before}</p>{/if}
											<h3>Exercise</h3>
											<p>{entry.exercise}</p>
											<h3>Limitations</h3>
											<p>{entry.caveat}</p>
											<a class="anchor-link" href={`#${entry.id}`}
												>Link to this paper <span aria-hidden="true">#</span></a
											>
										</div>
									</details>
								{/key}
							</article>
						</li>
					{/each}
				</ol>
			{/if}
			<div class="end-note">
				<a href="/timelines/">← All timelines</a>
			</div>
		</section>
	</div>
</div>

<style>
	.timeline-page {
		padding-top: 2rem;
		padding-bottom: 4rem;
	}
	.reading-controls {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		border-top: 1px solid var(--border-hover);
		padding-top: 1.5rem;
	}
	.view-options {
		display: flex;
		border: 1px solid var(--border-hover);
		border-radius: 6px;
		overflow: hidden;
	}
	.view-options button {
		padding: 0.6rem 1rem;
		font-size: 12px;
	}
	.view-options button[aria-pressed='true'] {
		background: var(--accent-teal);
		color: var(--bg-primary);
	}
	.core-toggle {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-size: 12px;
	}
	.core-toggle input {
		width: auto;
		accent-color: var(--accent-teal);
	}
	.stage-select {
		width: 100%;
		padding: 0.65rem 0.5rem;
		background: var(--bg-card);
		border: 1px solid var(--border-hover);
		border-radius: 5px;
		color: var(--text-primary);
		font: 12px var(--sans);
	}
	.stage-context {
		padding: 1rem;
		margin-bottom: 1rem;
		border: 1px solid var(--border-hover);
		border-radius: 6px;
		background: var(--bg-secondary);
	}
	.stage-context h2 {
		font: 500 1.4rem/1.5 var(--serif);
		color: var(--text-primary);
	}
	.stage-context p:not(.eyebrow) {
		margin-top: 0.65rem;
		font-size: 13px;
	}
	.stage-context strong {
		font-weight: 500;
		color: var(--text-primary);
	}
	.study-tag {
		font: 10px/1.8 var(--mono);
		color: var(--accent-teal);
		margin-top: 0.6rem;
	}
	.study-view .year::after {
		background: transparent;
	}
	#readings {
		margin-top: 1.5rem;
		scroll-margin-top: 85px;
	}
	.back {
		font-size: 13px;
		color: var(--text-muted);
	}
	.back:hover,
	.anchor-link:hover {
		color: var(--accent-teal);
		text-decoration: underline;
	}
	.hero {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		align-items: center;
		padding: 2.5rem 0;
	}
	.eyebrow {
		font: 10px/1.8 var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--text-muted);
	}
	h1 {
		font: 500 clamp(2.7rem, 5.5vw, 4.5rem)/1.15 var(--serif);
		color: var(--text-primary);
		letter-spacing: -0.045em;
		margin: 0.65rem 0 1.2rem;
	}
	h1 span {
		color: var(--accent-teal);
	}
	.intro {
		max-width: 65ch;
		font-size: 16px;
	}
	.hero-stat {
		border-left: 1px solid var(--border-hover);
		padding-left: 2rem;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		font: 11px/2 var(--mono);
		color: var(--text-muted);
	}
	.hero-stat strong {
		color: var(--accent-teal);
		font: 400 4rem/1.2 var(--serif);
	}
	.coverage {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		padding: 1.25rem;
		margin-bottom: 1.5rem;
		border: 1px solid var(--border-hover);
		border-radius: 8px;
		background: var(--bg-secondary);
	}
	.coverage p:not(.eyebrow) {
		font-size: 12px;
		line-height: 1.8;
		margin-top: 0.5rem;
	}
	.recent-toggle {
		flex-shrink: 0;
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--border-hover);
		border-radius: 5px;
		color: var(--accent-teal);
		font: 11px/1.6 var(--mono);
		background: var(--bg-card);
	}
	.recent-toggle[aria-pressed='true'] {
		border-color: var(--accent-teal);
	}
	.topic-index {
		border: 0;
		margin: 0 0 1.5rem;
	}
	.topic-index > summary {
		padding: 0.7rem 0;
		color: var(--accent-teal);
	}
	.journey {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
		border: 1px solid var(--border-hover);
		border-radius: 8px;
		overflow: hidden;
		background: var(--bg-card);
		margin-bottom: 3rem;
	}
	.journey button {
		position: relative;
		text-align: left;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		font-size: 12px;
		line-height: 1.5;
		border-right: 1px solid var(--border-hover);
	}
	.journey button:last-child {
		border-right: 0;
	}
	.journey button:hover,
	.journey button[aria-pressed='true'] {
		background: var(--bg-secondary);
	}
	.journey-number {
		font: 10px var(--mono);
		color: var(--text-muted);
		margin-bottom: 0.6rem;
	}
	.journey-dot {
		background: var(--topic);
		height: 3px;
		width: 24px;
		margin-top: 0.8rem;
		border-radius: 2px;
	}
	.reading-layout {
		display: grid;
		grid-template-columns: 260px minmax(0, 1fr);
		gap: 3rem;
	}
	.sidebar {
		position: sticky;
		top: 85px;
		max-height: calc(100dvh - 105px);
		overflow-y: auto;
		padding: 2px 6px 4px 2px;
	}
	.year-range {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
		margin-top: 0.75rem;
	}
	.year-range label {
		font-size: 11px;
	}
	.year-range select {
		display: block;
		width: 100%;
		margin-top: 0.25rem;
		padding: 0.5rem;
		background: var(--bg-card);
		color: var(--text-primary);
		border: 1px solid var(--border-hover);
		border-radius: 5px;
		font: 12px var(--mono);
	}
	.clear-filters {
		margin-top: 0.75rem;
		color: var(--accent-teal);
		font-size: 11px;
		text-decoration: underline;
	}
	.search-label {
		display: block;
		font-size: 12px;
		margin: 1rem 0 0.4rem;
	}
	input {
		width: 100%;
		min-width: 0;
		border: 1px solid var(--border-hover);
		border-radius: 6px;
		background: var(--bg-card);
		padding: 0.65rem 0.75rem;
		font-size: 13px;
	}
	input::placeholder {
		color: var(--text-muted);
	}
	.filters {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin: 1rem 0 2rem;
	}
	.filters button {
		text-align: left;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		padding: 0.6rem;
		border-radius: 5px;
		font-size: 12px;
	}
	.filters button:hover,
	.filters button.chosen {
		background: var(--bg-secondary);
		color: var(--text-primary);
	}
	.filters button.chosen {
		box-shadow: inset 2px 0 var(--accent-teal);
	}
	.filter-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.filter-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		flex-shrink: 0;
	}
	.filter-count {
		font: 10px var(--mono);
		color: var(--text-muted);
	}
	.results-bar {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		padding-bottom: 1rem;
		font: 11px/1.5 var(--mono);
		color: var(--text-muted);
	}
	.results-bar button {
		font-size: 11px;
		color: var(--accent-teal);
	}
	.timeline {
		list-style: none;
	}
	.timeline li {
		position: relative;
		display: grid;
		grid-template-columns: 72px minmax(0, 1fr);
		padding-bottom: 1.5rem;
		scroll-margin-top: 85px;
	}
	.year {
		position: relative;
		font: 13px/1.5 var(--mono);
		color: var(--text-primary);
		padding-top: 1.6rem;
	}
	.year::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: -1.5rem;
		right: 11px;
		width: 1px;
		background: var(--border-hover);
	}
	.timeline li:last-child .year::after {
		bottom: 0;
	}
	.node {
		position: absolute;
		top: 1.9rem;
		right: 7px;
		height: 9px;
		width: 9px;
		border: 2px solid var(--topic);
		border-radius: 50%;
		background: var(--bg-primary);
		z-index: 1;
	}
	article {
		margin-left: 1rem;
		padding: 1.5rem;
		border: 1px solid var(--border-hover);
		border-radius: 8px;
		background: var(--bg-card);
		min-width: 0;
	}
	.timeline li:target article {
		border-color: var(--topic);
	}
	.paper-meta {
		display: flex;
		justify-content: space-between;
		font: 10px/1.5 var(--mono);
		gap: 1rem;
	}
	.topic {
		color: var(--topic);
	}
	.paper-number {
		color: var(--text-muted);
	}
	article h2 {
		font: 500 1.65rem/1.3 var(--serif);
		letter-spacing: -0.02em;
		color: var(--text-primary);
		margin: 0.65rem 0 0.3rem;
	}
	.permalink:hover {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 4px;
	}
	.authors {
		font-size: 12px;
		color: var(--text-muted);
	}
	.contribution {
		font-size: 14px;
		margin-top: 1rem;
		line-height: 1.8;
	}
	.impact {
		border-left: 2px solid var(--topic);
		padding-left: 1rem;
		margin: 1rem 0 1.25rem;
	}
	h3 {
		font: 500 10px/1.6 var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.07em;
		color: var(--text-primary);
		margin-bottom: 0.35rem;
	}
	.impact p,
	.study-notes p {
		font-size: 13px;
		line-height: 1.8;
	}
	.source {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding: 0.8rem 1rem;
		border: 1px solid var(--border-hover);
		background: var(--bg-secondary);
		border-radius: 5px;
		color: var(--accent-teal);
		font-size: 12px;
	}
	.source:hover {
		border-color: var(--accent-teal);
	}
	.paper-title {
		display: block;
		font: italic 13px/1.6 var(--serif);
		color: var(--text-secondary);
		margin-top: 0.25rem;
		overflow-wrap: anywhere;
	}
	.external-note {
		font: 9px var(--mono);
		color: var(--text-muted);
		flex-shrink: 0;
	}
	details {
		border-top: 1px solid var(--border-hover);
		margin-top: 1.25rem;
	}
	summary {
		padding-top: 0.8rem;
		cursor: pointer;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		list-style: none;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	.expand-symbol {
		font-size: 16px;
		line-height: 1.4;
		color: var(--text-muted);
	}
	details[open] .expand-symbol {
		transform: rotate(45deg);
	}
	.study-notes {
		padding-top: 1rem;
	}
	.study-notes h3:not(:first-child) {
		margin-top: 1rem;
	}
	.anchor-link {
		display: inline-block;
		font: 10px var(--mono);
		color: var(--text-muted);
		margin-top: 1rem;
	}
	.empty {
		text-align: center;
		border: 1px dashed var(--border-hover);
		padding: 3rem 1rem;
		border-radius: 8px;
	}
	.empty h2 {
		font: 400 1.5rem var(--serif);
		color: var(--text-primary);
	}
	.empty p {
		margin: 0.5rem 0 1rem;
	}
	.reset {
		color: var(--accent-teal);
		text-decoration: underline;
	}
	.end-note {
		border-top: 1px solid var(--border-hover);
		margin: 1rem 0 0 88px;
		padding-top: 1.5rem;
		font-size: 13px;
	}
	.end-note a {
		color: var(--accent-teal);
	}
	@media (max-width: 1000px) {
		.reading-layout {
			grid-template-columns: 210px minmax(0, 1fr);
			gap: 1.5rem;
		}
	}
	@media (max-width: 768px) {
		.coverage {
			flex-direction: column;
			gap: 1rem;
		}
		.hero {
			padding: 2rem 0;
		}
		.hero-stat {
			display: none;
		}
		.journey {
			grid-template-columns: 1fr;
			margin-bottom: 2rem;
		}
		.journey button {
			flex-direction: row;
			align-items: center;
			gap: 0.75rem;
			padding: 0.65rem 1rem;
			border-right: 0;
			border-bottom: 1px solid var(--border-hover);
		}
		.journey button:last-child {
			border-bottom: 0;
		}
		.journey-number,
		.journey-dot {
			margin: 0;
		}
		.journey-dot {
			margin-left: auto;
		}
		.reading-layout {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		.sidebar {
			position: static;
			max-height: none;
			overflow: visible;
		}
		.filters {
			flex-direction: row;
			flex-wrap: wrap;
			margin-bottom: 0;
		}
		.filters button {
			border: 1px solid var(--border-hover);
		}
		.timeline li {
			grid-template-columns: 51px minmax(0, 1fr);
		}
		.year {
			font-size: 11px;
		}
		.year::after {
			right: 3px;
		}
		.node {
			right: -1px;
			width: 9px;
		}
		article {
			margin-left: 0.8rem;
			padding: 1rem;
		}
		article h2 {
			font-size: 1.4rem;
		}
		.external-note {
			display: none;
		}
		.end-note {
			margin-left: 64px;
		}
	}
</style>
