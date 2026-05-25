<script lang="ts">
	const year = new Date().getFullYear();

	// Get your hash at https://clustrmaps.com — paste it here after registering thesvj.github.io
	const CLUSTRMAPS_HASH = '';
</script>

<footer class="footer">
	<div class="inner container">
		<a href="/" class="logo">SVJ<span class="dot">.</span></a>

		<nav class="links">
			<a href="/blog">Blog</a>
			<a href="/#research">Research</a>
			<a href="https://github.com/thesvj" target="_blank" rel="noreferrer noopener" class="gh">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
					<path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.83 1.27.83 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					/>
				</svg>
				GitHub
			</a>
			<a href="mailto:saij@iiitd.ac.in">Contact</a>
		</nav>

		<div class="copy">© {year} Sai Varun Jamalpoor</div>
	</div>

	{#if CLUSTRMAPS_HASH}
		<div class="visitor-map">
			<script
				type="text/javascript"
				id="clustrmaps"
				src="//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=200&t=n&d={CLUSTRMAPS_HASH}&co=1a1a2e&ct=808080&cmo=3acc3a&cmn=ff5353"
			></script>
		</div>
	{/if}
</footer>

<style>
	.footer {
		border-top: 1px solid var(--border);
		padding: 2rem 0;
		margin-top: 4rem;
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.logo {
		font-family: var(--serif);
		font-size: 1.1rem;
		color: var(--text-primary);
		text-decoration: none;
	}

	.logo .dot {
		color: var(--accent-teal);
	}

	.links {
		display: flex;
		gap: 1.5rem;
		flex: 1;
		justify-content: center;
		flex-wrap: wrap;
	}

	.links a {
		font-family: var(--mono);
		font-size: 11px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-muted);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		transition: color 0.15s;
	}

	.links a:hover {
		color: var(--accent-teal);
	}

	.copy {
		font-family: var(--mono);
		font-size: 11px;
		color: var(--text-faint);
	}

	.visitor-map {
		display: flex;
		justify-content: center;
		padding: 1rem 0 0.5rem;
		opacity: 0.7;
	}

	@media (max-width: 640px) {
		.inner {
			justify-content: center;
			text-align: center;
		}
	}
</style>
