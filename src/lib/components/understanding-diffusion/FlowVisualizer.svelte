<script lang="ts">
	import { onMount } from 'svelte';

	let isSDE = $state(false); // Mode: false = ODE, true = SDE
	let progress = $state(0); // Animation progress from 0 to 1
	let animating = $state(false);
	let animationId: number;
	let mounted = $state(false);

	// Pre-generate starting x positions (sampled from a Gaussian distribution)
	// Centered at 0, standard deviation ~40
	const startPositions = [-55, -40, -25, -15, -5, 0, 5, 15, 25, 40, 55, -2];

	// Generate paths for all particles
	function generatePaths(sdeMode: boolean) {
		return startPositions.map((startX) => {
			const path = [];
			const steps = 100;
			let x = startX;

			// We seed a specific random noise sequence for each path in SDE mode
			// so they remain static paths as we slide or animate, avoiding flickering.
			const noiseSeed = Array.from({ length: steps }, () => Math.random() - 0.5);

			for (let i = 0; i <= steps; i++) {
				const ratio = i / steps; // 0 to 1
				const y = -100 + ratio * 200; // -100 to 100 (top to bottom)
				const t = 1 - ratio; // Time 1 down to 0

				path.push({ x, y });

				// Flow drift force:
				// If t > 0.5 (top half), pull particles toward the center (compressing)
				// If t <= 0.5 (bottom half), split them toward left (-60) or right (+60)
				const targetX = t > 0.5 ? 0 : startX >= 0 ? 55 : -55;

				// Score/velocity field drift term
				const drift = (targetX - x) * 0.07;

				// Brownian motion term (SDE only)
				const noiseStrength = sdeMode ? 3.5 : 0;
				const noiseVal = noiseSeed[i] * noiseStrength;

				x = x + drift + noiseVal;
			}
			return path;
		});
	}

	let paths = $derived(mounted ? generatePaths(isSDE) : []);

	// Animation logic
	function startAnimation() {
		if (animating) {
			cancelAnimationFrame(animationId);
		}
		progress = 0;
		animating = true;
		runAnimation();
	}

	function runAnimation() {
		if (progress >= 1) {
			progress = 1;
			animating = false;
			return;
		}
		progress += 0.01;
		animationId = requestAnimationFrame(runAnimation);
	}

	// Generate static path strings for SVG rendering
	function getPathString(points: { x: number; y: number }[]) {
		return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
	}

	// Generate mathematical density curves
	// Top Gaussian curve: exp(-x^2 / (2 * 40^2))
	const topCurve = Array.from({ length: 81 }, (_, i) => {
		const x = -140 + (i / 80) * 280;
		const y = -110 - Math.exp(-(x ** 2) / (2 * 35 ** 2)) * 25;
		return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
	}).join(' ');

	// Bottom Bimodal curve: two peaks at -55 and 55
	const bottomCurve = Array.from({ length: 81 }, (_, i) => {
		const x = -140 + (i / 80) * 280;
		const peak1 = Math.exp(-((x + 55) ** 2) / (2 * 18 ** 2));
		const peak2 = Math.exp(-((x - 55) ** 2) / (2 * 18 ** 2));
		const y = 110 + (peak1 + peak2) * 25; // Inverse Y axis in SVG
		return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
	}).join(' ');

	onMount(() => {
		mounted = true;
		return () => {
			if (animationId) cancelAnimationFrame(animationId);
		};
	});
</script>

<div class="interactive-box">
	<div class="vis-container">
		<div class="mode-toggles">
			<button
				class="mode-btn"
				class:active={!isSDE}
				onclick={() => {
					isSDE = false;
					progress = 0;
				}}
			>
				Probability Flow (ODE)
			</button>
			<button
				class="mode-btn"
				class:active={isSDE}
				onclick={() => {
					isSDE = true;
					progress = 0;
				}}
			>
				Stochastic Flow (SDE)
			</button>
		</div>

		<div class="svg-layout">
			<svg viewBox="-150 -150 300 300" width="100%" height="300" class="flow-svg">
				<!-- Ticks & Grid -->
				<g class="grid">
					<line x1="-100" y1="-140" x2="-100" y2="140" />
					<line x1="-50" y1="-140" x2="-50" y2="140" />
					<line x1="50" y1="-140" x2="50" y2="140" />
					<line x1="100" y1="-140" x2="100" y2="140" />
					<line x1="-140" y1="-100" x2="140" y2="-100" stroke-dasharray="1 1" />
					<line x1="-140" y1="100" x2="140" y2="100" stroke-dasharray="1 1" />
				</g>

				<g class="axes">
					<line x1="0" y1="-140" x2="0" y2="140" />
				</g>

				<!-- Top noise density distribution -->
				<path d={topCurve} fill="none" class="distribution-curve" />
				<text x="0" y="-140" class="dist-label" text-anchor="middle"> Noise Prior p(x_T) </text>

				<!-- Bottom data density distribution -->
				<path d={bottomCurve} fill="none" class="distribution-curve" />
				<text x="0" y="145" class="dist-label" text-anchor="middle"> Data Manifold p(x_0) </text>

				<!-- Trajectory lines -->
				<g>
					{#each paths as path}
						<path
							d={getPathString(path)}
							fill="none"
							class="flow-line"
							style="stroke: {isSDE ? 'var(--accent-coral)' : 'var(--accent-teal)'}"
						/>
					{/each}
				</g>

				<!-- Animated particles -->
				{#if progress > 0}
					<g>
						{#each paths as path}
							{@const idx = Math.min(Math.floor(progress * 100), 100)}
							{@const p = path[idx]}
							<circle
								cx={p.x}
								cy={p.y}
								r="3.5"
								fill={isSDE ? 'var(--accent-coral)' : 'var(--accent-teal)'}
								class="particle"
							/>
						{/each}
					</g>
				{/if}
			</svg>
		</div>

		<div class="action-row">
			<button class="action-btn" onclick={startAnimation}>
				{animating ? 'Running...' : 'Simulate Trajectories'}
			</button>
		</div>
	</div>

	<p class="caption">
		<strong>Figure 5:</strong> SDE vs. Probability Flow ODE. In Stochastic Flow (SDE), noise is added
		at each step, causing particles to take chaotic, overlapping Brownian paths. In Probability Flow (ODE),
		the process is completely deterministic and noise-free, tracing smooth, non-crossing streamlines that
		preserve the exact same marginal probability densities at all times.
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
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.2rem;
	}
	.mode-toggles {
		display: flex;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-pill);
		padding: 0.2rem;
		gap: 0.2rem;
	}
	.mode-btn {
		font-family: var(--sans);
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--text-muted);
		padding: 0.4rem 1rem;
		border-radius: var(--radius-pill);
		transition: all 0.2s ease;
	}
	.mode-btn:hover {
		color: var(--text-primary);
	}
	.mode-btn.active {
		background: var(--bg-secondary);
		color: var(--text-primary);
		box-shadow: var(--shadow-sm);
		border: 1px solid var(--border);
	}
	.svg-layout {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.flow-svg {
		max-width: 320px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
	}
	.action-row {
		display: flex;
		justify-content: center;
	}
	.action-btn {
		font-family: var(--sans);
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--bg-card);
		background: var(--text-primary);
		padding: 0.5rem 1.2rem;
		border-radius: var(--radius-pill);
		transition: all 0.15s ease;
	}
	.action-btn:hover {
		transform: scale(1.02);
		background: var(--accent-teal-dim);
	}
	.action-btn:active {
		transform: scale(0.98);
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
	.distribution-curve {
		stroke: var(--text-muted);
		stroke-width: 1.5;
		opacity: 0.8;
	}
	.dist-label {
		font-family: var(--sans);
		font-size: 7.5px;
		fill: var(--text-muted);
		font-weight: 500;
		user-select: none;
	}
	.flow-line {
		stroke-width: 1;
		opacity: 0.45;
	}
	.particle {
		filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
		transition:
			cx 0.05s linear,
			cy 0.05s linear;
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
