<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="color-scheme" content="light dark" />
	<script>
		(function () {
			const savedTheme = localStorage.getItem('theme');
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
				document.documentElement.classList.add('dark');
				document.documentElement.classList.remove('light');
			} else {
				document.documentElement.classList.add('light');
				document.documentElement.classList.remove('dark');
			}
		})();
	</script>
</svelte:head>

<Nav />

<main class="page">
	{@render children()}
</main>

<Footer />

<style>
	.page {
		min-height: calc(100vh - 60px);
		animation: pageFadeIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
	}

	@keyframes pageFadeIn {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
