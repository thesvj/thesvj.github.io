<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} — Sai Varun Jamalpoor</title>
</svelte:head>

<section class="err">
	<div class="container err-inner">
		<div class="big">{$page.status}</div>
		<p class="msg">
			{#if $page.status === 404}
				This page doesn't exist.
			{:else}
				{$page.error?.message ?? 'Something went wrong.'}
			{/if}
		</p>
		<div class="links">
			<a class="btn-ghost" href="/">← Back to home</a>
		</div>
	</div>
</section>

<style>
	.err {
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6rem 0;
	}

	.err-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1.25rem;
	}

	.big {
		font-family: var(--serif);
		font-size: clamp(5rem, 14vw, 9rem);
		font-weight: 700;
		color: var(--accent-teal);
		line-height: 1;
		letter-spacing: -0.04em;
	}

	.msg {
		font-family: var(--sans);
		font-size: 1.1rem;
		font-weight: 300;
		color: var(--text-muted);
		margin: 0;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		justify-content: center;
		margin-top: 0.5rem;
	}
</style>
