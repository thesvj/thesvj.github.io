<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="color-scheme" content="light" />

	<!-- Default SEO — pages override these in their own <svelte:head> -->
	<meta name="description" content="Sai Varun Jamalpoor — PhD Scholar at IIIT-Delhi working on video generation, multimodal AI, and temporal modeling." />
	<meta name="author" content="Sai Varun Jamalpoor" />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph defaults -->
	<meta property="og:site_name" content="Sai Varun Jamalpoor" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://thesvj.github.io/profile_avatar.jpg" />
	<meta property="og:image:alt" content="Sai Varun Jamalpoor" />

	<!-- Twitter / X Card defaults -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@saij_029" />
	<meta name="twitter:creator" content="@saij_029" />
	<meta name="twitter:image" content="https://thesvj.github.io/profile_avatar.jpg" />

	<script>
		if (localStorage.getItem('theme') === 'dark') {
			document.documentElement.classList.add('dark');
		}
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
