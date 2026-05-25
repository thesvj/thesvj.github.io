<script lang="ts">
	let clickX = $state(45);
	let clickY = $state(45);
	let accuracy = $state(0.7);

	// The data manifold is modeled as a circle of radius 70
	const radius = 70;

	// Calculate closest point on the manifold (projection onto the circle)
	const angle = $derived(Math.atan2(clickY, clickX));
	const x0 = $derived({
		x: radius * Math.cos(angle),
		y: radius * Math.sin(angle)
	});

	// Noisy point is where the user clicked
	const xt = $derived({ x: clickX, y: clickY });

	// Noise vector (from x0 to xt)
	const trueDx = $derived(xt.x - x0.x);
	const trueDy = $derived(xt.y - x0.y);

	// Model prediction (scaled by accuracy)
	const predDx = $derived(trueDx * accuracy);
	const predDy = $derived(trueDy * accuracy);

	// Reconstructed point (xt - predD)
	const xRecon = $derived({
		x: xt.x - predDx,
		y: xt.y - predDy
	});

	function handleSvgClick(event: MouseEvent) {
		const svg = event.currentTarget as SVGSVGElement;
		const rect = svg.getBoundingClientRect();
		// Map click location to SVG coordinate space (-150 to 150)
		const x = ((event.clientX - rect.left) / rect.width) * 300 - 150;
		const y = ((event.clientY - rect.top) / rect.height) * 300 - 150;
		clickX = x;
		clickY = -y; // Invert to standard Cartesian coordinates (positive y is up)
	}
</script>

<div class="interactive-box">
	<div class="vis-container">
		<div class="vis-layout">
			<!-- SVG Explorer -->
			<div class="svg-panel">
				<svg
					viewBox="-150 -150 300 300"
					width="100%"
					height="300"
					onclick={handleSvgClick}
					onkeydown={() => {}}
					role="button"
					tabindex="0"
					aria-label="Interactive coordinate space. Click to relocate the noisy point x_t."
					class="canvas-svg"
				>
					<defs>
						<!-- Arrow markers -->
						<marker
							id="arrow-red"
							viewBox="0 0 10 10"
							refX="6"
							refY="5"
							markerWidth="6"
							markerHeight="6"
							orient="auto-start-reverse"
						>
							<path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent-coral)" />
						</marker>
						<marker
							id="arrow-green"
							viewBox="0 0 10 10"
							refX="6"
							refY="5"
							markerWidth="6"
							markerHeight="6"
							orient="auto-start-reverse"
						>
							<path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent-teal)" />
						</marker>
					</defs>

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

					<!-- Manifold reference (clean circle) -->
					<circle cx="0" cy="0" r={radius} fill="none" class="manifold-circle" />

					<!-- True Clean Point x0 -->
					<circle cx={x0.x} cy={-x0.y} r="5" fill="var(--text-primary)" />
					<text x={x0.x + 8} y={-x0.y + 4} class="point-label math">x₀</text>

					<!-- Click Prompt Hint -->
					<text x="0" y="-120" class="hint-text" text-anchor="middle">
						Click anywhere to relocate x_t
					</text>

					<!-- True Noise Vector ε (from x0 to xt) -->
					<line
						x1={x0.x}
						y1={-x0.y}
						x2={xt.x}
						y2={-xt.y}
						stroke="var(--accent-coral)"
						stroke-width="2"
						marker-end="url(#arrow-red)"
					/>

					<!-- Noisy Point xt -->
					<circle cx={xt.x} cy={xt.y === 0 ? 0 : -xt.y} r="5" fill="var(--accent-coral)" />
					<text x={xt.x + 8} y={-xt.y - 8} class="point-label math-coral">x_t</text>

					<!-- Predicted noise direction -ε_θ (from xt to xRecon) -->
					{#if Math.abs(predDx) > 1 || Math.abs(predDy) > 1}
						<line
							x1={xt.x}
							y1={-xt.y}
							x2={xRecon.x}
							y2={-xRecon.y}
							stroke="var(--accent-teal)"
							stroke-width="2"
							marker-end="url(#arrow-green)"
						/>
					{/if}

					<!-- Reconstructed Point x_recon -->
					<circle cx={xRecon.x} cy={-xRecon.y} r="5" fill="var(--accent-teal)" />
					<text x={xRecon.x - 18} y={-xRecon.y + 14} class="point-label math-teal">x_recon</text>
				</svg>
			</div>

			<!-- Dynamic Info -->
			<div class="info-panel">
				<div class="vector-math">
					<span class="math-title">Vector Addition Logic</span>
					<div class="formula-box">
						<span class="math">x<sub>recon</sub> = x<sub>t</sub> - ε<sub>θ</sub></span>
					</div>
					<div class="data-readout">
						<div class="readout-row">
							<span class="dot-label" style="background: var(--text-primary)"></span>
							<span>Target <span class="math">x<sub>0</sub></span>:</span>
							<span class="coord">({x0.x.toFixed(0)}, {x0.y.toFixed(0)})</span>
						</div>
						<div class="readout-row">
							<span class="dot-label" style="background: var(--accent-coral)"></span>
							<span>Noisy <span class="math">x<sub>t</sub></span>:</span>
							<span class="coord">({xt.x.toFixed(0)}, {xt.y.toFixed(0)})</span>
						</div>
						<div class="readout-row">
							<span class="dot-label" style="background: var(--accent-teal)"></span>
							<span>Reconstructed:</span>
							<span class="coord">({xRecon.x.toFixed(0)}, {xRecon.y.toFixed(0)})</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="controls">
		<div class="slider-wrap">
			<div class="slider-header">
				<span class="slider-title">Network Prediction Accuracy (Compass Alignment)</span>
				<span class="slider-value">{(accuracy * 100).toFixed(0)}%</span>
			</div>
			<input id="accuracy-slider" type="range" min="0" max="1" step="0.05" bind:value={accuracy} />
		</div>
	</div>

	<p class="caption">
		<strong>Figure 3:</strong> Denoising as vector subtraction. The true noise vector
		<span class="math">ε</span>
		(red arrow) pushes the data point <span class="math">x<sub>0</sub></span> off the manifold to
		<span class="math">x<sub>t</sub></span>. The neural network predicts the noise vector
		<span class="math">ε<sub>θ</sub></span>
		(green arrow). Subtracting the prediction from <span class="math">x<sub>t</sub></span> gives
		<span class="math">x<sub>recon</sub></span>, guiding the point back to the manifold as accuracy
		reaches 100%. (Manifold simplified to a circle here for clarity.)
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
		align-items: center;
	}
	@media (min-width: 640px) {
		.vis-layout {
			flex-direction: row;
			align-items: stretch;
		}
	}
	.svg-panel {
		flex: 1.2;
		display: flex;
		justify-content: center;
	}
	.canvas-svg {
		max-width: 280px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		cursor: crosshair;
	}
	.info-panel {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
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
	.manifold-circle {
		stroke: var(--text-faint);
		stroke-width: 1.5;
		stroke-dasharray: 4 4;
		opacity: 0.6;
	}
	.point-label {
		font-size: 10px;
		fill: var(--text-primary);
		font-weight: 500;
		user-select: none;
	}
	.math-coral {
		fill: var(--accent-coral);
	}
	.math-teal {
		fill: var(--accent-teal);
	}
	.hint-text {
		font-family: var(--sans);
		font-size: 8px;
		fill: var(--text-muted);
		opacity: 0.8;
		pointer-events: none;
	}

	/* Info styling */
	.vector-math {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		padding: 1rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.math-title {
		font-family: var(--sans);
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
		text-align: center;
	}
	.formula-box {
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		padding: 0.4rem;
		text-align: center;
		margin-bottom: 1rem;
		font-size: 0.9rem;
	}
	.data-readout {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-family: var(--sans);
		font-size: 0.75rem;
		color: var(--text-secondary);
	}
	.readout-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.dot-label {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}
	.coord {
		font-family: var(--mono);
		color: var(--text-muted);
		margin-left: auto;
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
