<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import TimelineItem from '$lib/components/TimelineItem.svelte';
	import { news, publications, education, service, advisors } from '$lib/data/profile';

	let { data } = $props();

	const email = 'saij@iiitd.ac.in';
	let activeBibtexIndex = $state<number | null>(null);
	let showCopyToast = $state(false);

	function toggleBibtex(index: number) {
		if (activeBibtexIndex === index) {
			activeBibtexIndex = null;
		} else {
			activeBibtexIndex = index;
		}
	}

	function formatAuthors(authorsStr: string) {
		return authorsStr
			.split(',')
			.map((author) => {
				const trimmed = author.trim();
				if (trimmed === 'Sai Varun Jamalpoor') {
					return `<strong>${trimmed}</strong>`;
				}
				return trimmed;
			})
			.join(', ');
	}

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text).then(() => {
			showCopyToast = true;
			setTimeout(() => {
				showCopyToast = false;
			}, 2500);
		});
	}

	const nameVariants = [
		'Sai Jamalpoor',
		'Saivarun Jamalpur',
		'Saivarun',
		'SVJ',
		'Sai Varun IIITD',
		'Jamalpoor Sai Varun',
		'Jamalpur Saivarun',
		'Sai Varun'
	];

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Sai Varun Jamalpoor',
		alternateName: nameVariants,
		url: 'https://thesvj.github.io',
		image: 'https://thesvj.github.io/profile_avatar.jpg',
		jobTitle: 'PhD Scholar',
		affiliation: {
			'@type': 'CollegeOrUniversity',
			name: 'IIIT-Delhi',
			url: 'https://www.iiitd.ac.in'
		},
		email: 'saij@iiitd.ac.in',
		sameAs: [
			'https://github.com/thesvj',
			'https://x.com/saij_029',
			'https://www.linkedin.com/in/sai-varun-jamalpoor-1020b1285/'
		]
	});
	const jsonLdScript = `<script type="application/ld+json">${jsonLd}</` + `script>`;
</script>

<svelte:head>
	<title>Sai Varun Jamalpoor — PhD Scholar, IIIT-Delhi</title>
	<link rel="canonical" href="https://thesvj.github.io/" />
	<meta
		name="description"
		content="PhD Scholar in CS at IIIT-Delhi. Research on video generation, multimodal AI, and temporal modeling in video-language models."
	/>
	<meta name="keywords" content={`Sai Varun Jamalpoor, ${nameVariants.join(', ')}`} />

	<!-- Open Graph -->
	<meta property="og:title" content="Sai Varun Jamalpoor — PhD Scholar, IIIT-Delhi" />
	<meta
		property="og:description"
		content="PhD Scholar in CS at IIIT-Delhi. Research on video generation, multimodal AI, and temporal modeling in video-language models."
	/>
	<meta property="og:url" content="https://thesvj.github.io/" />
	<meta property="og:type" content="profile" />

	<!-- Twitter -->
	<meta name="twitter:title" content="Sai Varun Jamalpoor — PhD Scholar, IIIT-Delhi" />
	<meta
		name="twitter:description"
		content="PhD Scholar in CS at IIIT-Delhi. Research on video generation, multimodal AI, and temporal modeling."
	/>

	<!-- JSON-LD: Person -->
	{@html jsonLdScript}
</svelte:head>

<div class="container main-layout-wrap">
	<div class="academic-grid animate-fade-in">
		<!-- ==========================================
		     LEFT SIDEBAR: Profile Card, Socials, News
		     ========================================== -->
		<aside class="academic-sidebar">
			<!-- Profile Card -->
			<div class="sidebar-profile-card">
				<div class="sidebar-avatar">
					<img src="/profile_avatar.jpg" alt="Sai Varun Jamalpoor" />
				</div>
				<div class="sidebar-info">
					<h1 class="sidebar-name">Sai Varun Jamalpoor</h1>
					<p class="sidebar-title">PhD Scholar in Computer Science</p>
					<p class="sidebar-affiliation">
						Applied Data Science Lab<br />
						IIIT-Delhi, India
					</p>
					<p class="sidebar-advisors">
						Advised by
						{#each advisors as adv, index}<a
								href={adv.url}
								target="_blank"
								rel="noreferrer noopener">{adv.name}</a
							>{#if index < advisors.length - 1}
								&amp;
							{/if}{/each}
					</p>
				</div>
			</div>

			<!-- Contact & Socials -->
			<div class="sidebar-socials">
				<!-- Google Scholar (Commented out temporarily)
				<a
					href="https://scholar.google.com"
					target="_blank"
					rel="noreferrer noopener"
					class="sidebar-social-link"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
						<path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
					</svg>
					Google Scholar
				</a>
				-->

				<!-- GitHub -->
				<a
					href="https://github.com/thesvj"
					target="_blank"
					rel="noreferrer noopener"
					class="sidebar-social-link"
				>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
						<path
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.83 1.27.83 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"
						/>
					</svg>
					GitHub
				</a>

				<!-- Twitter / X -->
				<a
					href="https://x.com/saij_029"
					target="_blank"
					rel="noreferrer noopener"
					class="sidebar-social-link"
				>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
						/>
					</svg>
					Twitter / X
				</a>

				<!-- LinkedIn -->
				<a
					href="https://www.linkedin.com/in/sai-varun-jamalpoor-1020b1285/"
					target="_blank"
					rel="noreferrer noopener"
					class="sidebar-social-link"
				>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/>
					</svg>
					LinkedIn
				</a>

				<!-- CV PDF Link (Commented out temporarily)
				<a href={cvUrl} class="sidebar-social-link">
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
						<polyline points="14 2 14 8 20 8" />
						<line x1="16" y1="13" x2="8" y2="13" />
						<line x1="16" y1="17" x2="8" y2="17" />
						<polyline points="10 9 9 9 8 9" />
					</svg>
					Curriculum Vitae
				</a>
				-->

				<!-- Email directly -->
				<a href="mailto:{email}" class="sidebar-social-link">
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
						<polyline points="22,6 12,13 2,6" />
					</svg>
					{email}
				</a>
			</div>

			<!-- News / Updates feed -->
			<div class="sidebar-news-section">
				<h3 class="sidebar-news-title">Latest Updates</h3>
				<ul class="sidebar-news-list">
					{#each news as item}
						<li class="sidebar-news-item">
							<span class="sidebar-news-date">{item.date}</span>
							<span class="sidebar-news-text">{item.text}</span>
						</li>
					{/each}
				</ul>
			</div>
		</aside>

		<!-- ==========================================
		     RIGHT COLUMN: Bio, Publications, Journey, etc.
		     ========================================== -->
		<main class="academic-content">
			<!-- Narrative Bio -->
			<section id="about" style="scroll-margin-top: 80px;">
				<h2 class="academic-heading">About</h2>
				<p class="bio">
					I am a PhD student in Computer Science at IIIT-Delhi. My research focuses on video
					generation and understanding, with a particular interest in model efficiency and temporal
					modeling. Currently, I am studying how video-language models represent and reason about
					temporal dynamics.
				</p>
			</section>

			<!-- Publications Section -->
			<section id="research" style="scroll-margin-top: 80px;">
				<h2 class="academic-heading" style="margin-bottom: 2rem;">Papers</h2>

				<div class="academic-publications-list">
					{#each publications as pub, i}
						<article class="academic-pub-item">
							<!-- Details -->
							<div class="pub-details">
								<h3 class="pub-title">{pub.title}</h3>
								<div class="pub-authors">
									{@html formatAuthors(pub.authors)}
								</div>
								<div class="pub-venue">
									{pub.venue}
								</div>
								{#if pub.tldr}
									<p class="pub-tldr"><strong>TL;DR:</strong> {pub.tldr}</p>
								{/if}

								<div class="pub-links">
									{#if pub.links.paper}
										<a
											class="pub-link"
											href={pub.links.paper}
											target="_blank"
											rel="noreferrer noopener">[Paper]</a
										>
									{/if}
									{#if pub.links.code}
										<a
											class="pub-link"
											href={pub.links.code}
											target="_blank"
											rel="noreferrer noopener">[Code]</a
										>
									{/if}
									{#if pub.links.project}
										<a class="pub-link" href={pub.links.project}>[Project Page]</a>
									{/if}
									{#if pub.bibtex}
										<button class="pub-link-btn" onclick={() => toggleBibtex(i)}>
											{activeBibtexIndex === i ? '[Hide Citation]' : '[BibTeX]'}
										</button>
									{/if}
								</div>

								{#if activeBibtexIndex === i}
									<div class="bibtex-container">
										<div class="bibtex-header-row">
											<span
												style="font-family: var(--mono); font-size: 10px; text-transform: uppercase; color: var(--text-muted);"
												>BibTeX Citation</span
											>
											<button
												class="copy-citation-btn"
												onclick={() => copyToClipboard(pub.bibtex ?? '')}
											>
												<svg
													width="10"
													height="10"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="3"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
													<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
												</svg>
												Copy
											</button>
										</div>
										<pre><code>{pub.bibtex}</code></pre>
									</div>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</section>

			<!-- Education Timeline -->
			<section id="education" style="scroll-margin-top: 80px;">
				<h2 class="academic-heading" style="margin-bottom: 2rem;">Education</h2>
				<ul class="timeline">
					{#each education as edu}
						<TimelineItem
							institution={edu.institution}
							degree={edu.degree}
							period={edu.period}
							description={edu.description}
							current={edu.current}
						/>
					{/each}
				</ul>
			</section>

			<!-- Service / Teaching -->
			<section id="service" style="scroll-margin-top: 80px;">
				<h2 class="academic-heading" style="margin-bottom: 2rem;">Teaching &amp; Mentorship</h2>
				<div class="service-list">
					{#each service as item}
						<div class="service-item">
							<div class="service-role">{item.role}</div>
							<div class="service-details">{item.details}</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Blog writing preview -->
			<section id="blog-preview" style="scroll-margin-top: 80px;">
				<h2 class="academic-heading">Writing</h2>
				<p class="section-sub">Writing on AI, generative models, and the machinery underneath.</p>

				{#if data.recentPosts.length > 0}
					<div class="post-grid">
						{#each data.recentPosts as post (post.slug)}
							<PostCard {post} />
						{/each}
					</div>
				{/if}

				<div class="all-posts-cta">
					<a class="btn-ghost" href="/blog/">Read all posts on Eigenframe →</a>
				</div>
			</section>
		</main>
	</div>
</div>

<!-- Copy Citation Toast Alert -->
{#if showCopyToast}
	<div class="copy-alert-toast">Citation copied to clipboard</div>
{/if}

<style>
	/* ---------- Layout wrapper ---------- */
	.main-layout-wrap {
		position: relative;
		z-index: 1;
		padding-bottom: 5rem;
		padding-top: 1rem;
	}

	/* ---------- Academic Heading ---------- */
	.academic-heading {
		font-family: var(--serif);
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--accent-teal);
		margin-bottom: 1.5rem;
		border-bottom: 1px solid var(--border);
		padding-bottom: 0.5rem;
		letter-spacing: -0.01em;
	}

	.section-sub {
		font-family: var(--sans);
		font-size: 0.95rem;
		font-weight: 400;
		color: var(--text-muted);
		margin: 0 0 2rem;
		max-width: 600px;
	}

	.bio {
		font-family: var(--sans);
		font-size: 1rem;
		font-weight: 400;
		color: var(--text-secondary);
		line-height: 1.75;
		margin: 0;
	}

	/* ---------- Education ---------- */
	.timeline {
		position: relative;
		margin: 0;
		padding: 0 0 0 0.5rem;
		border-left: 1px solid var(--border);
		max-width: 720px;
	}

	/* ---------- Service ---------- */
	.service-list {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 720px;
	}

	.service-item {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.service-role {
		font-family: var(--sans);
		font-weight: 600;
		font-size: 1rem;
		color: var(--text-primary);
	}

	.service-details {
		font-family: var(--sans);
		font-size: 0.92rem;
		color: var(--text-secondary);
	}

	/* ---------- Blog preview ---------- */
	.post-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.25rem;
	}

	.all-posts-cta {
		text-align: center;
		margin-top: 2rem;
	}

	/* ---------- BibTeX Drawer ---------- */
	.bibtex-container {
		margin-top: 0.6rem;
		animation: slideDown 0.25s cubic-bezier(0.19, 1, 0.22, 1) forwards;
		overflow: hidden;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-2px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.bibtex-container pre {
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		padding: 0.75rem 1rem;
		overflow-x: auto;
		margin: 0;
	}

	.bibtex-container code {
		font-family: var(--mono);
		font-size: 12px;
		color: var(--text-secondary);
	}

	.pub-link-btn {
		font-family: var(--sans);
		font-size: 11px;
		font-weight: 600;
		color: var(--accent-teal);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		text-decoration: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.pub-link-btn:hover {
		color: var(--accent-coral);
	}

	.pub-link {
		font-family: var(--sans);
		font-size: 11px;
		font-weight: 600;
		color: var(--accent-teal);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		text-decoration: none;
	}

	.pub-link:hover {
		color: var(--accent-coral);
	}

	@media (max-width: 1023px) {
		.main-layout-wrap {
			padding-top: 1rem;
		}
	}
</style>
