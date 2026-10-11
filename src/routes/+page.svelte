<script lang="ts">
	import { advisors, education, news, publications, service } from '$lib/data/profile';

	const email = 'saij@iiitd.ac.in';

	const advisorLinks = advisors
		.map(
			(advisor) =>
				`<a href="${advisor.url}" target="_blank" rel="noreferrer noopener">${advisor.name}</a>`
		)
		.join(', ');

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

	const canonicalName = 'Sai Varun Jamalpoor';
	const surnames = ['Jamalpoor', 'Jamalpur'];
	const nameVariants = Array.from(
		new Set([
			'Sai Varun',
			'Saivarun',
			'Sai Varun J',
			'SVJ',
			'Sai Varun IIITD',
			'Sai Varun IIIT Delhi',
			...surnames.flatMap((surname) => [
				`Sai Varun ${surname}`,
				`Saivarun ${surname}`,
				`Sai ${surname}`,
				`S V ${surname}`,
				`${surname} Sai Varun`,
				`Sai Varun ${surname} IIITD`
			])
		])
	).filter((name) => name !== canonicalName);

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: canonicalName,
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
	<title>Sai Varun Jamalpoor | PhD Scholar at IIIT-Delhi</title>
	<link rel="canonical" href="https://thesvj.github.io/" />
	<meta
		name="description"
		content="Sai Varun Jamalpoor is a PhD Scholar at IIIT-Delhi working on video generation, multimodal AI, and temporal modeling in video-language systems."
	/>
	<meta property="og:title" content="Sai Varun Jamalpoor | PhD Scholar at IIIT-Delhi" />
	<meta
		property="og:description"
		content="PhD Scholar at IIIT-Delhi working on video generation, multimodal AI, and temporal modeling."
	/>
	<meta property="og:url" content="https://thesvj.github.io/" />
	<meta property="og:type" content="profile" />
	<meta name="twitter:title" content="Sai Varun Jamalpoor | PhD Scholar at IIIT-Delhi" />
	<meta
		name="twitter:description"
		content="PhD Scholar at IIIT-Delhi working on video generation, multimodal AI, and temporal modeling."
	/>
	{@html jsonLdScript}
</svelte:head>

<div class="home-shell">
	<section class="intro container">
		<div class="profile-rail">
			<img class="portrait" src="/profile_avatar.jpg" alt="Sai Varun Jamalpoor portrait" />
			<div class="contact-block">
				<p class="section-kicker">Contact</p>
				<p class="contact-line"><a href="mailto:{email}">{email}</a></p>
				<p class="contact-line">
					<a href="https://github.com/thesvj" target="_blank" rel="noreferrer noopener">GitHub</a>
				</p>
				<p class="contact-line">
					<a href="https://x.com/saij_029" target="_blank" rel="noreferrer noopener">X</a>
				</p>
				<p class="contact-line">
					<a
						href="https://www.linkedin.com/in/sai-varun-jamalpoor-1020b1285/"
						target="_blank"
						rel="noreferrer noopener"
					>
						LinkedIn
					</a>
				</p>
			</div>
		</div>

		<div class="identity">
			<p class="eyebrow">PhD Scholar, Computer Science, IIIT-Delhi</p>
			<h1>Sai Varun Jamalpoor</h1>
			<p class="summary">
				I work on generative models of video: building efficient audio–video diffusion transformers
				and studying how video models represent and reason about time.
			</p>

			<dl class="fact-list">
				<div>
					<dt>Affiliation</dt>
					<dd>Applied Data Science Lab, IIIT-Delhi</dd>
				</div>
				<div>
					<dt>Advisors</dt>
					<dd>{@html advisorLinks}</dd>
				</div>
				<div>
					<dt>Research</dt>
					<dd>Generative video models, audio–video diffusion, temporal reasoning in Video LLMs</dd>
				</div>
			</dl>
		</div>
	</section>

	<section class="container section-block" id="about" style="scroll-margin-top: 88px;">
		<div class="section-head">
			<h2>About</h2>
		</div>
		<p>
			I am a PhD student in Computer Science at IIIT-Delhi working on generative models. My main
			project builds native audio–video diffusion transformers that keep audio and video on
			independent timebases, trained efficiently from a single GPU up to an 8×H200 node.
		</p>
		<p>
			Alongside it, I study where temporal evidence is lost inside Video LLMs: the frames carry the
			order, the hidden states often encode it, and the answer still comes out near chance. What I
			learn there feeds back into how I design generators that stay temporally faithful.
		</p>
	</section>

	<section class="container section-block" id="research" style="scroll-margin-top: 88px;">
		<div class="section-head">
			<h2>Publications</h2>
		</div>

		<div class="publication-list">
			{#each publications as pub (pub.title)}
				<article class="publication">
					<div class="publication-meta">
						<span>{pub.venue}</span>
						<span class="status" class:review={pub.status === 'under-review'}>
							{pub.status === 'published' ? 'Published' : 'Under review'} · {pub.year}
						</span>
					</div>
					<h3>{pub.title}</h3>
					<p class="authors">{@html formatAuthors(pub.authors)}</p>
					<p class="summary-text">{pub.tldr}</p>
					{#if pub.contribution}
						<p class="summary-text"><em>My part:</em> {pub.contribution}</p>
					{/if}
					{#if pub.links.paper || pub.links.code || pub.links.project}
						<div class="inline-links">
							{#if pub.links.paper}
								<a href={pub.links.paper} target="_blank" rel="noreferrer noopener">Paper</a>
							{/if}
							{#if pub.links.code}
								<a href={pub.links.code} target="_blank" rel="noreferrer noopener">Code</a>
							{/if}
							{#if pub.links.project}
								<a href={pub.links.project}>Project</a>
							{/if}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</section>

	<section class="container section-block">
		<div class="section-head">
			<h2>Current Focus</h2>
		</div>
		<ul class="simple-list">
			<li>Locating where temporal evidence is lost in Video LLMs.</li>
			<li>Native audio–video diffusion transformers with independent timebases.</li>
			<li>Efficient multi-GPU training with custom Triton/CUDA kernels.</li>
		</ul>
	</section>

	<section class="container section-block" id="updates" style="scroll-margin-top: 88px;">
		<div class="section-head">
			<h2>Recent Updates</h2>
		</div>
		<ul class="update-list">
			{#each news as item}
				<li>
					<span class="update-date">{item.date}</span>
					<span class="update-text">{item.text}</span>
				</li>
			{/each}
		</ul>
	</section>

	<section class="container section-block">
		<div class="section-head">
			<h2>Teaching and Service</h2>
		</div>
		<ul class="simple-list">
			{#each service as item}
				<li>
					<strong>{item.role}:</strong>
					{item.details}
				</li>
			{/each}
		</ul>
	</section>

	<section class="container section-block" id="education" style="scroll-margin-top: 88px;">
		<div class="section-head">
			<h2>Education</h2>
		</div>
		<div class="education-list">
			{#each education as item}
				<article class="education-item">
					<div class="education-head">
						<div>
							<h3>{item.institution}</h3>
							<p>{item.degree}</p>
						</div>
						<span>{item.period}</span>
					</div>
					<p>{item.description}</p>
				</article>
			{/each}
		</div>
	</section>
</div>

<style>
	.home-shell {
		padding: 1.5rem 0 4.5rem;
	}

	.intro {
		display: grid;
		grid-template-columns: 220px minmax(0, 1fr);
		gap: 2rem;
		align-items: start;
		padding-top: 1rem;
	}

	.profile-rail {
		display: grid;
		gap: 1rem;
	}

	.portrait {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		border: 1px solid var(--border);
		border-radius: 4px;
		filter: grayscale(0.08) contrast(1.02);
	}

	.contact-block {
		padding-top: 0.25rem;
		border-top: 1px solid var(--border);
	}

	.section-kicker,
	.eyebrow,
	.publication-meta,
	.update-date,
	.education-item span,
	dt {
		font-family: var(--mono);
		font-size: 10px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.eyebrow {
		margin: 0 0 0.75rem;
	}

	h1 {
		font-family: var(--serif);
		font-size: clamp(2.6rem, 4.2vw, 4.2rem);
		line-height: 0.96;
		letter-spacing: -0.04em;
		margin: 0;
		max-width: 9ch;
	}

	.summary {
		margin: 1rem 0 0;
		max-width: 68ch;
		font-size: 1.08rem;
		line-height: 1.8;
		color: var(--text-secondary);
	}

	.fact-list {
		display: grid;
		gap: 0.8rem;
		margin: 1.5rem 0 0;
	}

	.fact-list div {
		display: grid;
		grid-template-columns: 100px minmax(0, 1fr);
		gap: 1rem;
		align-items: start;
		padding-top: 0.8rem;
		border-top: 1px solid var(--border);
	}

	dt,
	.section-head h2,
	.education-item h3,
	.publication h3 {
		margin: 0;
	}

	dd {
		margin: 0;
		line-height: 1.7;
		color: var(--text-primary);
	}

	.section-block p,
	.simple-list,
	.update-text,
	.education-item p,
	.authors,
	.summary-text {
		color: var(--text-secondary);
		line-height: 1.75;
	}

	.section-block {
		padding-top: 2.25rem;
		margin-top: 2rem;
		border-top: 1px solid var(--border);
	}

	.section-head {
		margin-bottom: 0.85rem;
	}

	.section-head h2 {
		font-family: var(--serif);
		font-size: 1.55rem;
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: var(--text-primary);
	}

	.publication-list {
		display: grid;
		gap: 2.25rem;
	}

	.publication {
		max-width: 74ch;
	}

	.status {
		color: var(--accent-teal);
		white-space: nowrap;
	}

	.status.review {
		color: var(--accent-amber);
	}

	.publication-meta {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding-bottom: 0.4rem;
		border-bottom: 1px solid var(--border);
		margin-bottom: 0.9rem;
	}

	.publication h3 {
		font-family: var(--serif);
		font-size: 1.5rem;
		line-height: 1.25;
		letter-spacing: -0.02em;
		color: var(--text-primary);
	}

	.authors {
		margin: 0.5rem 0 0;
		font-size: 0.98rem;
	}

	.summary-text {
		margin: 0.75rem 0 0;
		max-width: 70ch;
	}

	.inline-links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 1rem;
	}

	.inline-links a,
	.contact-line a {
		color: var(--text-primary);
		text-decoration: none;
		border-bottom: 1px solid transparent;
	}

	.inline-links a:hover,
	.contact-line a:hover {
		border-bottom-color: var(--accent-teal);
		color: var(--accent-teal);
	}

	.simple-list,
	.update-list {
		margin: 0;
		padding-left: 1.1rem;
	}

	.simple-list li + li,
	.update-list li + li {
		margin-top: 0.5rem;
	}

	.update-list {
		list-style: none;
		padding-left: 0;
		display: grid;
		gap: 0.9rem;
		max-width: 76ch;
	}

	.update-list li {
		display: grid;
		grid-template-columns: 90px minmax(0, 1fr);
		gap: 1rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--border);
	}

	.education-list {
		display: grid;
		gap: 1rem;
	}

	.education-item {
		padding-top: 0.85rem;
		border-top: 1px solid var(--border);
	}

	.education-head {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		align-items: baseline;
		flex-wrap: wrap;
	}

	.education-head h3 {
		font-family: var(--serif);
		font-size: 1.08rem;
		line-height: 1.35;
		color: var(--text-primary);
	}

	.education-head p {
		margin: 0.25rem 0 0;
	}

	.contact-line {
		margin: 0.35rem 0 0;
		color: var(--text-secondary);
	}

	@media (max-width: 900px) {
		.intro {
			grid-template-columns: 1fr;
		}

		.profile-rail {
			max-width: 280px;
		}
	}

	@media (max-width: 640px) {
		.home-shell {
			padding-top: 1rem;
		}

		.fact-list div,
		.update-list li {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}
	}
</style>
