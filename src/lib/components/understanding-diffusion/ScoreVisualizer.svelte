<script lang="ts">
	let t = $state(0.4);

	const resolution = 16;
	const extent = 120;

	const vectors = Array.from({ length: resolution * resolution }, (_, i) => {
		const col = i % resolution;
		const row = Math.floor(i / resolution);
		const x = -extent + (col / (resolution - 1)) * 2 * extent;
		const y = -extent + (row / (resolution - 1)) * 2 * extent;
		return { x, y };
	});

	function getClosestPointOnFigure8(px: number, py: number) {
		let minDist = Infinity;
		let closest = { x: 0, y: 0 };
		for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
			const x0 = (Math.cos(angle) * 100) / (1 + Math.sin(angle) ** 2);
			const y0 = (Math.sin(angle) * Math.cos(angle) * 100) / (1 + Math.sin(angle) ** 2);
			const dist = Math.sqrt((px - x0) ** 2 + (py - y0) ** 2);
			if (dist < minDist) {
				minDist = dist;
				closest = { x: x0, y: y0 };
			}
		}
		return closest;
	}

	const scoreField = $derived(
		vectors.map((v) => {
			const closest = getClosestPointOnFigure8(v.x, v.y);
			// Vector pointing towards the manifold, scaled inversely by noise level
			// High noise (t ~ 1) => small vectors (smoothed out score)
			// Low noise (t ~ 0) => sharp vectors pointing precisely to the manifold
			const scale = Math.max(0.1, 1 - t);
			const dx = (closest.x - v.x) * scale;
			const dy = (closest.y - v.y) * scale;

			const magnitude = Math.sqrt(dx ** 2 + dy ** 2);
			const length = Math.min(magnitude / 1.5, 12);
			const angle = Math.atan2(-dy, dx) * (180 / Math.PI);

			return { x: v.x, y: v.y, angle, length, opacity: Math.max(0.1, 1 - magnitude / 150) };
		})
	);
</script>

<div class="interactive-box">
	<div class="vis-container">
		<svg viewBox="-150 -150 300 300" width="100%" height="300">
			<!-- Grid -->
			<g class="grid">
				<line x1="-100" y1="-140" x2="-100" y2="140" />
				<line x1="-50" y1="-140" x2="-50" y2="140" />
				<line x1="50" y1="-140" x2="50" y2="140" />
				<line x1="100" y1="-140" x2="100" y2="140" />
				<line x1="-140" y1="-100" x2="140" y2="-100" />
				<line x1="-140" y1="-50" x2="140" y2="-50" />
				<line x1="-140" y1="50" x2="140" y2="50" />
				<line x1="-140" y1="100" x2="140" y2="100" />
			</g>

			<!-- Axes -->
			<g class="axes">
				<line x1="-140" y1="0" x2="140" y2="0" />
				<line x1="0" y1="-140" x2="0" y2="140" />
			</g>

			<!-- Ticks & Tick Labels -->
			<g class="ticks">
				<line x1="-100" y1="-3" x2="-100" y2="3" />
				<line x1="-50" y1="-3" x2="-50" y2="3" />
				<line x1="50" y1="-3" x2="50" y2="3" />
				<line x1="100" y1="-3" x2="100" y2="3" />

				<text x="-100" y="14" text-anchor="middle">-100</text>
				<text x="-50" y="14" text-anchor="middle">-50</text>
				<text x="50" y="14" text-anchor="middle">50</text>
				<text x="100" y="14" text-anchor="middle">100</text>

				<line x1="-3" y1="-100" x2="3" y2="-100" />
				<line x1="-3" y1="-50" x2="3" y2="-50" />
				<line x1="-3" y1="50" x2="3" y2="50" />
				<line x1="-3" y1="100" x2="3" y2="100" />

				<text x="-8" y="-97" text-anchor="end">100</text>
				<text x="-8" y="-47" text-anchor="end">50</text>
				<text x="-8" y="53" text-anchor="end">-50</text>
				<text x="-8" y="103" text-anchor="end">-100</text>
			</g>

			<!-- Axis Labels -->
			<g class="axis-labels">
				<text x="138" y="-6" text-anchor="middle" class="math-label"
					>x<tspan font-size="7.5" dy="2">1</tspan></text
				>
				<text x="12" y="-134" text-anchor="start" class="math-label"
					>x<tspan font-size="7.5" dy="2">2</tspan></text
				>
			</g>

			<!-- Ground Truth Manifold (Lemniscate of Bernoulli) -->
			<path
				d="M 100 0 C 100 -80, -100 80, -100 0 C -100 -80, 100 80, 100 0 Z"
				fill="none"
				class="manifold-ref"
			/>

			<!-- Score Vector Field Arrows -->
			<g>
				{#each scoreField as field}
					<g transform="translate({field.x}, {-field.y}) rotate({field.angle})">
						{#if field.length > 2}
							<line
								x1="0"
								y1="0"
								x2={field.length}
								y2="0"
								class="vector-line"
								opacity={field.opacity}
							/>
							<polygon
								points="{field.length},0 {field.length - 3.5},-2 {field.length - 3.5},2"
								class="vector-arrow"
								opacity={field.opacity}
							/>
						{/if}
					</g>
				{/each}
			</g>
		</svg>
	</div>

	<div class="controls">
		<div class="slider-wrap">
			<div class="slider-header">
				<span class="slider-title">Noise Level (Score Field Smoothing)</span>
				<span class="slider-value"><span class="math">t</span> = {t.toFixed(2)}</span>
			</div>
			<input id="score-slider" type="range" min="0" max="0.99" step="0.01" bind:value={t} />
			<div class="labels">
				<span><span class="math">x<sub>0</sub></span> (Sharp Gradients)</span>
				<span><span class="math">x<sub>T</sub></span> (Smoothed Gradients)</span>
			</div>
		</div>
	</div>

	<p class="caption">
		<strong>Figure 4:</strong> The score field
		<span class="math">∇<sub>x</sub> log p<sub>t</sub>(x)</span>. The vector field (teal arrows)
		points towards regions of higher density. At low noise levels (<span class="math">t → 0</span>),
		the score is sharp and concentrated near the manifold; at high noise levels (<span class="math"
			>t → 1</span
		>), the score becomes smooth and diffuse.
	</p>
</div>

<style>
	.interactive-box {
		padding: 2rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		background: var(--bg-card);
		box-shadow: var(--shadow-sm);
		margin: 2.5rem 0;
	}
	.vis-container {
		display: flex;
		justify-content: center;
		margin-bottom: 1.5rem;
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		overflow: hidden;
		padding: 1.5rem;
	}
	svg {
		max-width: 400px;
	}

	/* SVG Element Styling */
	.grid line {
		stroke: var(--border);
		stroke-width: 0.5;
		stroke-dasharray: 2 4;
	}
	.axes line {
		stroke: var(--text-faint);
		stroke-width: 0.75;
	}
	.ticks line {
		stroke: var(--text-faint);
		stroke-width: 0.75;
	}
	.ticks text {
		font-family: var(--sans);
		font-size: 7.5px;
		fill: var(--text-muted);
		user-select: none;
	}
	.math-label {
		font-family: var(--serif);
		font-style: italic;
		font-size: 9.5px;
		fill: var(--text-secondary);
		user-select: none;
	}
	.manifold-ref {
		stroke: var(--text-faint);
		stroke-width: 1.5;
		stroke-dasharray: 3 3;
		opacity: 0.5;
	}

	/* Vector Arrow Styling */
	.vector-line {
		stroke: var(--accent-teal);
		stroke-width: 1.5;
		transition: opacity 0.05s linear;
	}
	.vector-arrow {
		fill: var(--accent-teal);
		transition: opacity 0.05s linear;
	}
	g {
		transition: transform 0.05s linear;
	}

	/* Controls and Slider Styling */
	.controls {
		font-family: var(--sans);
	}
	.slider-wrap {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.slider-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.85rem;
		color: var(--text-secondary);
	}
	.slider-title {
		font-weight: 500;
	}
	.slider-value {
		font-family: var(--mono);
		font-size: 0.8rem;
		color: var(--text-muted);
		background: var(--bg-secondary);
		padding: 0.1rem 0.4rem;
		border-radius: var(--radius-sm);
		border: 1px solid var(--border);
	}

	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		background: transparent;
		height: 20px;
		margin: 0;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 4px;
		cursor: pointer;
		background: var(--bg-tertiary);
		border-radius: 2px;
		border: none;
	}
	input[type='range']::-webkit-slider-thumb {
		height: 12px;
		width: 12px;
		border-radius: 50%;
		background: var(--text-primary);
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -4px; /* (track_height/2) - (thumb_height/2) */
		transition:
			background-color 0.2s ease,
			transform 0.15s ease;
	}
	input[type='range']::-webkit-slider-thumb:hover {
		background: var(--accent-teal);
		transform: scale(1.2);
	}

	/* Firefox styles */
	input[type='range']::-moz-range-track {
		width: 100%;
		height: 4px;
		cursor: pointer;
		background: var(--bg-tertiary);
		border-radius: 2px;
		border: none;
	}
	input[type='range']::-moz-range-thumb {
		height: 12px;
		width: 12px;
		border-radius: 50%;
		background: var(--text-primary);
		cursor: pointer;
		border: none;
		transition:
			background-color 0.2s ease,
			transform 0.15s ease;
	}
	input[type='range']::-moz-range-thumb:hover {
		background: var(--accent-teal);
		transform: scale(1.2);
	}

	.labels {
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		color: var(--text-muted);
		margin-top: 0.1rem;
	}
	.math {
		font-family: var(--serif);
		font-style: italic;
	}
	.math sub {
		font-style: normal;
		font-size: 75%;
		vertical-align: sub;
	}
	.caption {
		margin-top: 1.5rem;
		font-size: 0.8rem;
		line-height: 1.5;
		color: var(--text-muted);
		border-top: 1px solid var(--border);
		padding-top: 1rem;
	}
	.caption strong {
		color: var(--text-primary);
	}
</style>
