<script lang="ts">
	let {
		institution,
		degree,
		period,
		description,
		current = false
	}: {
		institution: string;
		degree: string;
		period: string;
		description: string;
		current?: boolean;
	} = $props();
</script>

<li class="item" class:current>
	<span class="dot" class:current></span>
	<div class="content">
		<div class="head">
			<span class="institution">{institution}</span>
			<span class="period">{period}</span>
		</div>
		<div class="degree">{degree}</div>
		<p class="desc">{description}</p>
	</div>
</li>

<style>
	.item {
		position: relative;
		list-style: none;
		padding: 0 0 2rem 1.75rem;
	}

	.item:last-child {
		padding-bottom: 0;
	}

	.dot {
		position: absolute;
		left: -5px;
		top: 0.55rem;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--bg-primary);
		border: 1.5px solid var(--text-muted);
	}

	.dot.current {
		background: var(--accent-teal);
		border-color: var(--accent-teal);
	}

	.head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.5rem;
		margin-bottom: 0.15rem;
	}

	.institution {
		font-family: var(--sans);
		font-weight: 600;
		color: var(--text-primary);
		font-size: 1rem;
	}

	.period {
		font-family: var(--sans);
		font-size: 12px;
		color: var(--text-muted);
		font-weight: 500;
	}

	.degree {
		font-family: var(--serif);
		font-style: italic;
		color: var(--text-secondary);
		font-size: 0.92rem;
		margin-bottom: 0.4rem;
	}

	.desc {
		font-family: var(--sans);
		font-size: 14.5px;
		font-weight: 400;
		color: var(--text-secondary);
		line-height: 1.65;
		margin: 0;
	}
</style>
