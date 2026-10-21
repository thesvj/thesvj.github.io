<script lang="ts">
	import type { StudyStage } from '$lib/data/ml-curriculum';
	import type { Preparation } from '$lib/data/curricula';
	let {
		stages,
		preparation,
		prerequisites,
		onStageSelect
	}: {
		stages: StudyStage[];
		preparation: Preparation[];
		prerequisites: string;
		onStageSelect: (id: string) => void;
	} = $props();
</script>

<section class="study-guide" aria-label="Reading list">
	<h2>Reading list</h2>
	<details>
		<summary>Prerequisites and companion texts</summary>
		<div class="guide-content">
			<p>{prerequisites}</p>
			<ul>
				{#each preparation as book (book.url)}<li>
						<a href={book.url} target="_blank" rel="noreferrer noopener">{book.title} ↗</a>
						<p>{book.note}</p>
					</li>{/each}
			</ul>
		</div>
	</details>
	<details>
		<summary>Topics and exercises</summary>
		<div class="guide-content stage-list">
			{#each stages as stage, i (stage.id)}
				<article>
					<p class="stage-label">Stage {i + 1} · {stage.level}</p>
					<h3>{stage.title}</h3>
					<p>{stage.goal}</p>
					<p><strong>Prerequisites:</strong> {stage.before}</p>
					<p><strong>Exercises:</strong> {stage.checkpoint}</p>
					<a href="#readings" onclick={() => onStageSelect(stage.id)}>Read stage {i + 1} →</a>
				</article>
			{/each}
		</div>
	</details>
</section>

<style>
	.study-guide {
		border-top: 1px solid var(--border-hover);
		padding-top: 1.5rem;
		margin-bottom: 2rem;
	}
	h2 {
		font: 500 1.6rem/1.4 var(--serif);
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}
	details {
		border-bottom: 1px solid var(--border-hover);
	}
	summary {
		cursor: pointer;
		padding: 0.8rem 0;
		font-size: 13px;
		color: var(--accent-teal);
	}
	.guide-content {
		padding: 0.5rem 0 1rem;
		font-size: 13px;
		max-width: 90ch;
	}
	ul {
		padding-left: 1.25rem;
	}
	ul {
		margin-top: 0.75rem;
	}
	li {
		margin-bottom: 0.8rem;
	}
	a {
		color: var(--accent-teal);
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	.stage-list {
		max-width: none;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}
	article {
		border: 1px solid var(--border-hover);
		border-radius: 6px;
		padding: 1.2rem;
		background: var(--bg-card);
	}
	.stage-label {
		font: 10px/1.6 var(--mono);
		color: var(--text-muted);
	}
	h3 {
		font: 500 1.2rem/1.5 var(--serif);
		color: var(--text-primary);
		margin: 0.4rem 0;
	}
	article p + p {
		margin-top: 0.75rem;
	}
	article a {
		display: inline-block;
		margin-top: 0.75rem;
	}
	strong {
		color: var(--text-primary);
		font-weight: 500;
	}
	@media (max-width: 640px) {
		.stage-list {
			grid-template-columns: 1fr;
		}
	}
</style>
