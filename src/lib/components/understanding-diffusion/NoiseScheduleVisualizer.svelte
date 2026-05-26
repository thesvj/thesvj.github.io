<script lang="ts">
	import { browser } from '$app/environment';

	let t = $state(0.2); // Time from 0 to 1

	// Pre-generate 150 points in a Figure-8 shape + static noise offsets
	const N = 150;
	const points = browser
		? Array.from({ length: N }, (_, i) => {
				const angle = (i / N) * Math.PI * 2;
				const x0 = (Math.cos(angle) * 60) / (1 + Math.sin(angle) ** 2);
				const y0 = (Math.sin(angle) * Math.cos(angle) * 60) / (1 + Math.sin(angle) ** 2);

				const u1 = Math.random();
				const u2 = Math.random();
				const z0 = Math.sqrt(-2.0 * Math.log(u1 || 0.001)) * Math.cos(2.0 * Math.PI * u2);
				const z1 = Math.sqrt(-2.0 * Math.log(u1 || 0.001)) * Math.sin(2.0 * Math.PI * u2);

				return { x0, y0, noiseX: z0 * 30, noiseY: z1 * 30 };
			})
		: [];

	// Noise schedule calculations
	function getLinearAlphaBar(time: number) {
		const beta1 = 0.0001;
		const betaT = 0.02;
		const T = 1000;
		const val = beta1 * time + 0.5 * (betaT - beta1) * time * time;
		return Math.exp(-val * T);
	}

	function getCosineAlphaBar(time: number) {
		const s = 0.008;
		const f_t = Math.cos(((time + s) / (1 + s)) * (Math.PI / 2)) ** 2;
		const f_0 = Math.cos((s / (1 + s)) * (Math.PI / 2)) ** 2;
		return f_t / f_0;
	}

	// Dynamic calculation of alpha_bars
	const linearAlphaBar = $derived(getLinearAlphaBar(t));
	const cosineAlphaBar = $derived(getCosineAlphaBar(t));

	// Generate noisy positions
	const linearPoints = $derived(
		points.map((p) => {
			const x = Math.sqrt(linearAlphaBar) * p.x0 + Math.sqrt(1 - linearAlphaBar) * p.noiseX;
			const y = Math.sqrt(linearAlphaBar) * p.y0 + Math.sqrt(1 - linearAlphaBar) * p.noiseY;
			return { x, y };
		})
	);

	const cosinePoints = $derived(
		points.map((p) => {
			const x = Math.sqrt(cosineAlphaBar) * p.x0 + Math.sqrt(1 - cosineAlphaBar) * p.noiseX;
			const y = Math.sqrt(cosineAlphaBar) * p.y0 + Math.sqrt(1 - cosineAlphaBar) * p.noiseY;
			return { x, y };
		})
	);

	// Pre-generate curve paths for the graph visualization
	const steps = 100;
	const linearPath = Array.from({ length: steps + 1 }, (_, i) => {
		const currT = i / steps;
		const x = currT * 320 + 40;
		const y = 160 - getLinearAlphaBar(currT) * 120;
		return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
	}).join(' ');

	const cosinePath = Array.from({ length: steps + 1 }, (_, i) => {
		const currT = i / steps;
		const x = currT * 320 + 40;
		const y = 160 - getCosineAlphaBar(currT) * 120;
		return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
	}).join(' ');
</script>

<div class="interactive-box">
	<div class="vis-container">
		<div class="vis-layout">
			<!-- Graph panel -->
			<div class="graph-panel">
				<svg viewBox="0 0 380 180" width="100%">
					<!-- Axes -->
					<line x1="40" y1="160" x2="360" y2="160" stroke="var(--text-faint)" stroke-width="1" />
					<line x1="40" y1="30" x2="40" y2="160" stroke="var(--text-faint)" stroke-width="1" />

					<!-- Y Axis Labels -->
					<text x="32" y="40" class="axis-label" text-anchor="end">1.0</text>
					<text x="32" y="100" class="axis-label" text-anchor="end">0.5</text>
					<text x="32" y="160" class="axis-label" text-anchor="end">0.0</text>
					<text x="15" y="95" class="axis-title" transform="rotate(-90 15 95)" text-anchor="middle">
						Signal Variance (ᾱ_t)
					</text>

					<!-- X Axis Labels -->
					<text x="40" y="174" class="axis-label" text-anchor="middle">t=0</text>
					<text x="200" y="174" class="axis-label" text-anchor="middle">0.5</text>
					<text x="360" y="174" class="axis-label" text-anchor="middle">t=T</text>

					<!-- Curves -->
					<path d={linearPath} fill="none" stroke="var(--accent-blue)" stroke-width="1.5" />
					<path d={cosinePath} fill="none" stroke="var(--accent-coral)" stroke-width="1.5" />

					<!-- Current T marker line -->
					<line
						x1={t * 320 + 40}
						y1="30"
						x2={t * 320 + 40}
						y2="160"
						stroke="var(--text-muted)"
						stroke-width="1"
						stroke-dasharray="3 3"
					/>
					<circle
						cx={t * 320 + 40}
						cy={160 - linearAlphaBar * 120}
						r="4"
						fill="var(--accent-blue)"
					/>
					<circle
						cx={t * 320 + 40}
						cy={160 - cosineAlphaBar * 120}
						r="4"
						fill="var(--accent-coral)"
					/>
				</svg>

				<!-- Legend -->
				<div class="legend">
					<span class="legend-item">
						<span class="legend-dot" style="background: var(--accent-blue);"></span>
						Linear (Fast decay)
					</span>
					<span class="legend-item">
						<span class="legend-dot" style="background: var(--accent-coral);"></span>
						Cosine (Gradual decay)
					</span>
				</div>
			</div>

			<!-- Comparison views -->
			<div class="panels-panel">
				<div class="display-box">
					<span class="display-title">Linear Schedule</span>
					<svg viewBox="-80 -80 160 160" width="100%" class="sub-svg">
						<path
							d="M 50 0 C 50 -40, -50 40, -50 0 C -50 -40, 50 40, 50 0 Z"
							fill="none"
							stroke="var(--border)"
							stroke-width="1"
							stroke-dasharray="2 2"
						/>
						{#each linearPoints as p}
							<circle cx={p.x} cy={-p.y} r="1.5" fill="var(--accent-blue)" opacity="0.6" />
						{/each}
					</svg>
					<span class="alpha-val">ᾱ = {linearAlphaBar.toFixed(3)}</span>
				</div>

				<div class="display-box">
					<span class="display-title">Cosine Schedule</span>
					<svg viewBox="-80 -80 160 160" width="100%" class="sub-svg">
						<path
							d="M 50 0 C 50 -40, -50 40, -50 0 C -50 -40, 50 40, 50 0 Z"
							fill="none"
							stroke="var(--border)"
							stroke-width="1"
							stroke-dasharray="2 2"
						/>
						{#each cosinePoints as p}
							<circle cx={p.x} cy={-p.y} r="1.5" fill="var(--accent-coral)" opacity="0.6" />
						{/each}
					</svg>
					<span class="alpha-val">ᾱ = {cosineAlphaBar.toFixed(3)}</span>
				</div>
			</div>
		</div>
	</div>

	<div class="controls">
		<div class="slider-wrap">
			<div class="slider-header">
				<span class="slider-title">Diffusion Timestep</span>
				<span class="slider-value"><span class="math">t</span> = {t.toFixed(2)}</span>
			</div>
			<input id="schedule-slider" type="range" min="0" max="0.99" step="0.01" bind:value={t} />
		</div>
	</div>

	<p class="caption">
		<strong>Figure 6:</strong> Comparison of noise schedules. The linear schedule (blue) decays the signal
		variance too rapidly in the early steps, completely dissolving structural features. The cosine schedule
		(coral) decreases the signal variance gradually, preserving structural contours longer.
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
		margin-bottom: 1.5rem;
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		padding: 1.5rem;
	}
	.vis-layout {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	@media (min-width: 640px) {
		.vis-layout {
			flex-direction: row;
		}
	}
	.graph-panel {
		flex: 1.2;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.panels-panel {
		flex: 1;
		display: flex;
		gap: 1rem;
		justify-content: center;
	}
	.display-box {
		flex: 1;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 140px;
	}
	.display-title {
		font-family: var(--sans);
		font-size: 0.7rem;
		font-weight: 500;
		color: var(--text-secondary);
		margin-bottom: 0.25rem;
	}
	.alpha-val {
		font-family: var(--mono);
		font-size: 0.65rem;
		color: var(--text-muted);
		margin-top: 0.25rem;
	}
	.sub-svg {
		max-width: 110px;
	}
	.axis-label {
		font-family: var(--sans);
		font-size: 8px;
		fill: var(--text-muted);
	}
	.axis-title {
		font-family: var(--sans);
		font-size: 8px;
		fill: var(--text-secondary);
		font-weight: 500;
	}
	.legend {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 0.5rem;
		font-family: var(--sans);
		font-size: 0.7rem;
		color: var(--text-muted);
	}
	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	.legend-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
	}
	circle {
		transition:
			cx 0.05s linear,
			cy 0.05s linear;
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

	.math {
		font-family: var(--serif);
		font-style: italic;
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
