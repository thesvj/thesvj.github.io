<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let mobileOpen = $state(false);
	let theme = $state('light');

	const path = $derived($page.url.pathname);
	const isHome = $derived(path === '/');

	function close() {
		mobileOpen = false;
	}

	type Link = { label: string; href: string };

	const homeLinks: Link[] = [
		{ label: 'About', href: '/#about' },
		{ label: 'Research', href: '/#research' },
		{ label: 'Blog', href: '/blog/' }
	];

	const blogLinks: Link[] = [
		{ label: 'Home', href: '/' },
		{ label: 'Posts', href: '/blog/' },
		{ label: 'About', href: '/#about' }
	];

	const links = $derived(isHome ? homeLinks : blogLinks);

	function isActive(href: string): boolean {
		if (href === '/') return path === '/';
		if (href === '/blog') return path === '/blog' || path === '/blog/';
		if (href.startsWith('/#')) return false;
		return path.startsWith(href);
	}

	onMount(() => {
		theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
	});

	function toggleTheme() {
		if (theme === 'light') {
			theme = 'dark';
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			theme = 'light';
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<header class="nav">
	<div class="inner container">
		<a href="/" class="logo" onclick={close}>SVJ<span class="dot">.</span></a>

		<nav class="links desktop">
			{#each links as link (link.href)}
				<a href={link.href} class="link" class:active={isActive(link.href)}>{link.label}</a>
			{/each}
		</nav>

		<div class="right">
			{#if !isHome}
				<a
					class="btn subscribe desktop"
					href="mailto:saij@iiitd.ac.in?subject=Subscribe%20to%20Eigenframe">Subscribe</a
				>
			{/if}

			<button class="theme-toggle" aria-label="Toggle dark mode" onclick={toggleTheme}>
				{#if theme === 'light'}
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				{:else}
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="5"></circle>
						<line x1="12" y1="1" x2="12" y2="3"></line>
						<line x1="12" y1="21" x2="12" y2="23"></line>
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
						<line x1="1" y1="12" x2="3" y2="12"></line>
						<line x1="21" y1="12" x2="23" y2="12"></line>
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
					</svg>
				{/if}
			</button>

			<button
				class="hamburger"
				aria-label="Toggle menu"
				aria-expanded={mobileOpen}
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<span class:open={mobileOpen}></span>
				<span class:open={mobileOpen}></span>
				<span class:open={mobileOpen}></span>
			</button>
		</div>
	</div>

	{#if mobileOpen}
		<div class="mobile-menu">
			{#each links as link (link.href)}
				<a href={link.href} class="mobile-link" onclick={close}>{link.label}</a>
			{/each}
			{#if !isHome}
				<a
					class="mobile-link"
					href="mailto:saij@iiitd.ac.in?subject=Subscribe%20to%20Eigenframe"
					onclick={close}>Subscribe</a
				>
			{/if}
		</div>
	{/if}
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--glass-bg);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-bottom: 1px solid var(--glass-border);
		transition:
			background-color 0.3s ease,
			border-color 0.3s ease;
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		height: 60px;
	}

	.logo {
		font-family: var(--serif);
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--text-primary);
		text-decoration: none;
		letter-spacing: -0.02em;
		transition: color 0.3s ease;
	}

	.logo .dot {
		color: var(--accent-teal);
	}

	.links {
		display: flex;
		gap: 2rem;
		flex: 1;
		justify-content: center;
	}

	.link {
		position: relative;
		font-family: var(--mono);
		font-size: 11px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-muted);
		text-decoration: none;
		transition: color 0.25s ease;
		padding: 0.35rem 0;
	}

	.link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1.5px;
		background-color: var(--accent-teal);
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.link:hover::after,
	.link.active::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.link:hover,
	.link.active {
		color: var(--accent-teal);
	}

	.right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.subscribe {
		font-size: 11px;
		padding: 0.45rem 1.1rem;
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: var(--radius-pill);
		border: 1px solid var(--border);
		color: var(--text-primary);
		background: transparent;
		cursor: pointer;
		transition:
			border-color 0.2s ease,
			background-color 0.2s ease,
			color 0.2s ease;
	}

	.theme-toggle:hover {
		border-color: var(--accent-teal);
		background: var(--bg-secondary);
		color: var(--accent-teal);
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 4px;
		width: 28px;
		height: 28px;
		justify-content: center;
		align-items: center;
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.hamburger span {
		display: block;
		width: 18px;
		height: 1.5px;
		background: var(--text-primary);
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
	}

	.hamburger span.open:nth-child(1) {
		transform: translateY(5.5px) rotate(45deg);
	}
	.hamburger span.open:nth-child(2) {
		opacity: 0;
	}
	.hamburger span.open:nth-child(3) {
		transform: translateY(-5.5px) rotate(-45deg);
	}

	.mobile-menu {
		display: none;
		flex-direction: column;
		gap: 1rem;
		padding: 1.25rem 2rem 1.5rem;
		border-top: 1px solid var(--glass-border);
		background: var(--glass-bg);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
	}

	.mobile-link {
		font-family: var(--mono);
		font-size: 13px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-secondary);
		text-decoration: none;
		padding: 0.4rem 0;
		transition: color 0.2s ease;
	}

	.mobile-link:hover {
		color: var(--accent-teal);
	}

	@media (max-width: 768px) {
		.links.desktop,
		.subscribe.desktop {
			display: none;
		}

		.hamburger {
			display: flex;
		}

		.mobile-menu {
			display: flex;
		}
	}
</style>
