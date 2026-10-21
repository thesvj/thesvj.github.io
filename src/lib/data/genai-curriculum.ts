import type { StudyStage } from './ml-curriculum';
export const genaiCurriculum: StudyStage[] = [
	{
		id: 'probability',
		title: 'Energy, likelihood, and latent variables',
		level: 'Foundations',
		before:
			'Probability densities, maximum likelihood, KL divergence, gradients, and neural networks.',
		goal: 'Energy functions, latent inference, variational bounds, and discrete representations.',
		checkpoint:
			'Derive the VAE bound and compare reconstruction, sampling, and density estimation.',
		readings: ['hopfield', 'boltzmann', 'dbn', 'vae', 'vqvae'],
		core: ['vae', 'vqvae', 'boltzmann']
	},
	{
		id: 'autoregressive',
		title: 'Autoregressive generation',
		level: 'Foundations',
		before: 'Conditional probability, sequence models, attention, and cross-entropy.',
		goal: 'Factorized likelihoods for text, images, and raw audio; transformer sequence modeling.',
		checkpoint:
			'Implement a causal mask and compare teacher-forced likelihood with sampled continuations.',
		readings: ['neural-lm', 'seq2seq', 'transformer', 'pixelrnn', 'wavenet'],
		core: ['neural-lm', 'transformer', 'pixelrnn', 'wavenet']
	},
	{
		id: 'adversarial',
		title: 'Adversarial models and visual tokens',
		level: 'Foundations',
		before: 'Latent variables, backpropagation, and minimax optimization.',
		goal: 'Discriminator-based learning, Wasserstein objectives, and perceptual tokenization.',
		checkpoint: 'Compare mode coverage and sample quality for two toy GAN objectives.',
		readings: [
			'gan',
			'cgan',
			'dcgan',
			'wgan',
			'stylegan',
			'stylegan2',
			'pix2pix',
			'cyclegan',
			'vqgan'
		],
		core: ['gan', 'cgan', 'dcgan', 'wgan', 'stylegan', 'pix2pix', 'cyclegan', 'stylegan2']
	},
	{
		id: 'flows',
		title: 'Invertible density models',
		level: 'Foundations',
		before: 'Change of variables, Jacobian determinants, and differential equations.',
		goal: 'Coupling transforms, exact likelihood, and continuous-time dynamics.',
		checkpoint:
			'Implement a coupling layer and numerically verify its inverse and density transformation.',
		readings: ['nice', 'variational-flows', 'realnvp', 'glow', 'neural-ode'],
		core: ['realnvp', 'glow', 'variational-flows']
	},
	{
		id: 'diffusion',
		title: 'Scores and diffusion',
		level: 'Foundations',
		before:
			'Gaussian conditionals, probability gradients, stochastic processes, and variational inference.',
		goal: 'Score matching, noise-conditioned estimation, forward corruption, and reverse sampling.',
		checkpoint: 'Fit a 2D score model and compare a DDPM sampler with a reduced-step DDIM sampler.',
		readings: ['score-matching', 'diffusion-origin', 'ncsn', 'ddpm', 'score-sde', 'ddim'],
		core: ['score-matching', 'ddpm', 'score-sde', 'ddim']
	},
	{
		id: 'language',
		title: 'Language-model scale and adaptation',
		level: 'Further study',
		before: 'Autoregressive transformers, training loss, compute accounting, and fine-tuning.',
		goal: 'Text-to-text modeling, in-context learning, compute allocation, and low-rank adaptation.',
		checkpoint:
			'Compare token and parameter budgets under two scaling rules; count LoRA trainable parameters.',
		readings: ['t5', 'gpt3', 'scaling-laws', 'chinchilla', 'lora'],
		core: ['gpt3', 'scaling-laws', 'chinchilla', 'lora']
	},
	{
		id: 'conditioning',
		title: 'Text-conditioned images',
		level: 'Further study',
		before: 'Diffusion, discrete visual tokens, text embeddings, and attention.',
		goal: 'Contrastive conditioning, token-based synthesis, guidance, cascades, and latent diffusion.',
		checkpoint:
			'Compare classifier-free guidance strengths using fixed prompts, seeds, and sampling budgets.',
		readings: ['clip', 'dalle', 'dalle2', 'cfg', 'imagen', 'latent-diffusion'],
		core: ['clip', 'cfg', 'latent-diffusion', 'dalle2']
	},
	{
		id: 'control',
		title: 'Personalization and spatial control',
		level: 'Further study',
		before: 'Text-conditioned diffusion and model fine-tuning.',
		goal: 'Subject adaptation and spatial constraints from pose, edges, and depth.',
		checkpoint: 'Compare subject fidelity, prompt diversity, and spatial adherence separately.',
		readings: ['dreambooth', 'controlnet'],
		core: ['dreambooth', 'controlnet']
	},
	{
		id: 'flow-generation',
		title: 'Flow objectives and fast sampling',
		level: 'Further study',
		before: 'Diffusion, continuous-time dynamics, and transformer architectures.',
		goal: 'Diffusion transformers, conditional vector fields, rectified paths, and consistency models.',
		checkpoint:
			'Compare solver steps, wall-clock cost, and sample quality with the same evaluation setup.',
		readings: ['dit', 'flow-matching', 'rectified-flow', 'consistency', 'sd3'],
		core: ['dit', 'flow-matching', 'rectified-flow']
	},
	{
		id: 'posttraining',
		title: 'Preferences and reasoning',
		level: 'Further study',
		before: 'Language-model training, reinforcement learning, and pairwise preferences.',
		goal: 'Instruction tuning, preference optimization, generated reasoning, and outcome-based reinforcement learning.',
		checkpoint: 'Derive the DPO objective and compare answer accuracy at matched sampling budgets.',
		readings: ['instructgpt', 'dpo', 'chain-of-thought', 'deepseek-r1'],
		core: ['instructgpt', 'dpo', 'deepseek-r1']
	},
	{
		id: 'retrieval',
		title: 'Retrieval and tool use',
		level: 'Further study',
		before: 'Sequence-to-sequence generation, embeddings, search, and conditional likelihood.',
		goal: 'Document-conditioned generation, action-observation loops, and learned API use.',
		checkpoint:
			'Compare retrieval quality and answer support separately; trace a complete tool interaction.',
		readings: ['rag', 'react', 'toolformer'],
		core: ['rag', 'react']
	},
	{
		id: 'audio',
		title: 'Audio and music',
		level: 'Further study',
		before: 'Autoregression, vector quantization, signal sampling, and spectrograms.',
		goal: 'Acoustic compression, semantic audio tokens, and controllable music generation.',
		checkpoint:
			'Calculate codec bitrate and compare reconstruction fidelity with generated sequence coherence.',
		readings: ['encodec', 'audiolm', 'musicgen'],
		core: ['encodec', 'audiolm', 'musicgen']
	},
	{
		id: 'spatial',
		title: 'Video and 3D',
		level: 'Further study',
		before: 'Latent diffusion, attention, camera geometry, and differentiable rendering.',
		goal: 'Radiance fields, score-distilled scene optimization, and spatiotemporal video compression.',
		checkpoint: 'Implement volume compositing and compare frame quality with temporal consistency.',
		readings: ['nerf', 'video-diffusion', 'dreamfusion', 'cogvideox'],
		core: ['nerf', 'dreamfusion', 'cogvideox', 'video-diffusion']
	},
	{
		id: 'evaluation',
		title: 'Quality, coverage, and correctness',
		level: 'Foundations',
		before: 'Sampling, statistical estimation, feature embeddings, and functional tests.',
		goal: 'Distributional metrics, precision and recall, execution-based evaluation, and human preferences.',
		checkpoint:
			'Report sample counts and preprocessing; contrast preference ratings with functional correctness.',
		readings: ['fid', 'precision-recall', 'codex', 'llm-judge', 'training-data-extraction'],
		core: ['fid', 'precision-recall', 'codex', 'llm-judge', 'training-data-extraction']
	},
	{
		id: 'research',
		title: 'Recent model designs',
		level: 'Research',
		before: 'Transformer scaling, sparse experts, language diffusion, and post-training.',
		goal: 'Sparse generative language models, masked diffusion, residual connectivity, and conditional memory.',
		checkpoint:
			'Compare architecture claims against ablations and matched data, compute, and inference budgets.',
		readings: ['deepseek-v3', 'kimi-k2', 'llada', 'mhc', 'engram'],
		core: ['deepseek-v3', 'llada']
	}
];
export const genaiPreparation = [
	{
		title: 'Probabilistic Machine Learning: Advanced Topics',
		url: 'https://probml.github.io/pml-book/book2.html',
		note: 'Kevin P. Murphy. Probability, latent-variable inference, and generative modeling.'
	},
	{
		title: 'Deep Learning',
		url: 'https://www.deeplearningbook.org/',
		note: 'Ian Goodfellow, Yoshua Bengio, and Aaron Courville. Neural networks, optimization, and generative models.'
	},
	{
		title: 'Flow Matching Guide and Code',
		url: 'https://arxiv.org/abs/2412.06264',
		note: 'Continuous and discrete flow matching: objectives, sampling, and implementations.'
	}
];
