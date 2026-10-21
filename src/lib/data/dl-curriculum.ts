import type { StudyStage } from './ml-curriculum';

export const dlCurriculum: StudyStage[] = [
	{
		id: 'networks',
		title: 'Neural computation and backpropagation',
		level: 'Foundations',
		before:
			'Linear algebra, multivariable calculus, logistic regression, loss functions, and train/validation/test splits.',
		goal: 'Threshold units, hidden representations, chain-rule gradients, recurrent energy models, and approximation results.',
		checkpoint:
			'Implement a two-layer network with manual gradients, check them numerically, and compare linear and nonlinear decision boundaries.',
		readings: ['perceptron', 'backprop', 'approximation', 'mcculloch-pitts', 'hopfield', 'dbn'],
		core: ['perceptron', 'backprop']
	},
	{
		id: 'training',
		title: 'Initialization, optimization, and regularization',
		level: 'Foundations',
		before: 'Stage 1; gradients, variance, minibatch optimization, and regularization.',
		goal: 'Signal propagation, activation functions, adaptive updates, normalization, dropout, and weight decay.',
		checkpoint:
			'Train the same small network with controlled initialization and optimizer variants. Record training loss, validation loss, and gradient norms.',
		readings: [
			'xavier',
			'relu',
			'he-initialization',
			'adam',
			'adamw',
			'dropout',
			'batchnorm',
			'layernorm'
		],
		core: [
			'xavier',
			'relu',
			'adam',
			'adamw',
			'dropout',
			'batchnorm',
			'layernorm',
			'he-initialization'
		]
	},
	{
		id: 'evaluation',
		title: 'Capacity, memorization, and evaluation',
		level: 'Further study',
		before:
			'Stages 1–2; bias and variance, statistical estimation, and validation protocols. Generative-model context from stage 9 for FID; kernel methods and infinite-width limits for NTK.',
		goal: 'Representational capacity, label memorization, sparse subnetworks, and generative-model metrics.',
		checkpoint:
			'Compare real and randomized labels with fixed splits. For generated images, report sample count and preprocessing alongside FID.',
		readings: ['generalization', 'ntk', 'lottery-ticket', 'fid'],
		core: ['generalization']
	},
	{
		id: 'vision',
		title: 'Convolutional and visual architectures',
		level: 'Foundations',
		before:
			'Stages 1–2; convolutions, spatial dimensions, pooling, and image classification. Stage 6 for ViT and SAM.',
		goal: 'Local receptive fields, shared weights, residual blocks, detection, segmentation, and patch-based visual transformers.',
		checkpoint:
			'Implement a small CNN and residual block, then compare a segmentation model with and without spatial skip connections.',
		readings: [
			'lenet',
			'alexnet',
			'vgg',
			'resnet',
			'unet',
			'faster-rcnn',
			'neocognitron',
			'vit',
			'sam'
		],
		core: ['lenet', 'alexnet', 'resnet', 'unet']
	},
	{
		id: 'sequences',
		title: 'Sequence models and attention',
		level: 'Foundations',
		before: 'Stages 1–2; sequence likelihoods, embeddings, and backpropagation through time.',
		goal: 'Static word vectors, gated recurrence, encoder–decoder models, and soft alignment.',
		checkpoint:
			'Implement a sequence-copy or reversal task with an LSTM encoder–decoder. Compare fixed context and attention as sequence length increases.',
		readings: ['neural-lm', 'word2vec', 'vanishing-gradients', 'lstm', 'seq2seq', 'bahdanau'],
		core: ['lstm', 'seq2seq', 'bahdanau', 'neural-lm']
	},
	{
		id: 'transformers',
		title: 'Transformers and pretrained language models',
		level: 'Foundations',
		before: 'Stages 1–2 and 5; softmax, positional information, causal masking, and cross-entropy.',
		goal: 'Multi-head attention, encoder and decoder objectives, masked prediction, causal generation, and in-context learning.',
		checkpoint:
			'Implement a small causal transformer with correct masking. Compare masked and causal objectives and inspect held-out token loss.',
		readings: ['transformer', 'bert', 't5', 'gpt3', 'chain-of-thought'],
		core: ['transformer', 'bert', 'gpt3']
	},
	{
		id: 'representations',
		title: 'Self-supervised and multimodal representations',
		level: 'Further study',
		before:
			'Stages 1–4; Stage 6 for transformer-based vision. Contrastive losses and moving-average models.',
		goal: 'Augmentation invariance, contrastive objectives, teacher–student training, masked modeling, and image–text alignment.',
		checkpoint:
			'Compare frozen linear probes with fine-tuning under identical splits. Record augmentation choices and separate image-level from patch-level evaluations.',
		readings: ['simclr', 'moco', 'clip', 'dino', 'mae', 'dinov2'],
		core: ['simclr', 'clip', 'mae']
	},
	{
		id: 'graphs',
		title: 'Graph neural networks',
		level: 'Further study',
		before:
			'Stages 1–2; adjacency matrices, graph neighborhoods, normalized aggregation, and attention.',
		goal: 'Graph convolution, neighborhood attention, and transductive versus inductive evaluation.',
		checkpoint:
			'Implement one GCN layer and one attention-based graph layer. Compare against a node-feature-only baseline without leaking labels.',
		readings: ['gcn', 'gat'],
		core: ['gcn']
	},
	{
		id: 'generative',
		title: 'Latent-variable, adversarial, and invertible models',
		level: 'Further study',
		before:
			'Stages 1–2; probability densities, likelihood, KL divergence, change of variables, and variational inference; numerical ODEs for continuous-depth models.',
		goal: 'Variational bounds, reparameterized gradients, adversarial objectives, invertibility, and Jacobian determinants.',
		checkpoint:
			'Fit a VAE, GAN, and coupling flow on toy data. Compare the available likelihood estimates, mode coverage, and sampling costs.',
		readings: ['vae', 'gan', 'wgan', 'realnvp', 'neural-ode'],
		core: ['vae', 'gan', 'realnvp', 'wgan']
	},
	{
		id: 'diffusion',
		title: 'Diffusion, score models, and flows',
		level: 'Further study',
		before:
			'Stages 1–2 and 9; Gaussian conditionals, denoising, ODEs, and score functions. Stage 6 for DiT; stochastic calculus for score-SDE proofs.',
		goal: 'Forward noising, reverse-time generation, guidance, latent compression, velocity regression, and sampling acceleration.',
		checkpoint:
			'Fit a toy denoiser and a flow-matching vector field. Compare sample quality at fixed network-evaluation budgets and inspect guidance-induced loss of diversity.',
		readings: [
			'diffusion-origin',
			'ddpm',
			'ddim',
			'score-sde',
			'cfg',
			'latent-diffusion',
			'dit',
			'flow-matching',
			'rectified-flow',
			'consistency'
		],
		core: ['ddpm', 'score-sde', 'latent-diffusion', 'flow-matching', 'ddim']
	},
	{
		id: 'reinforcement',
		title: 'Deep reinforcement learning',
		level: 'Further study',
		before:
			'Stages 1–2 and ML foundations in Markov decision processes, temporal differences, Q-learning, and policy gradients.',
		goal: 'Replay, target networks, learned values and policies, search, policy-ratio clipping, and entropy regularization.',
		checkpoint:
			'Compare replay and target-network ablations in a small environment. Evaluate policy-gradient runs across multiple seeds at the same interaction budget.',
		readings: ['dqn', 'alphago', 'ppo', 'sac'],
		core: ['dqn', 'ppo']
	},
	{
		id: 'efficiency',
		title: 'Scaling, adaptation, and efficient computation',
		level: 'Further study',
		before:
			'Stages 1–2 and 6; matrix rank, memory costs, autoregressive inference, and compute accounting.',
		goal: 'Empirical scaling, data–parameter allocation, low-rank adaptation, distillation, exact attention kernels, sparse routing, and state-space models.',
		checkpoint:
			'Compare adaptation methods at equal data budgets. Measure optimizer-state memory, inference latency, and active versus total parameters separately.',
		readings: [
			'scaling-laws',
			'chinchilla',
			'lora',
			'distillation',
			'flashattention',
			'switch',
			'mamba'
		],
		core: ['chinchilla', 'lora', 'flashattention']
	},
	{
		id: 'post-training',
		title: 'Preference-based post-training',
		level: 'Further study',
		before:
			'Stage 6; preference likelihoods, reference policies, and KL regularization. Stage 11 for PPO-based training.',
		goal: 'Supervised instruction data, reward modeling, policy optimization, and direct preference objectives.',
		checkpoint:
			'Compute a preference loss from chosen and rejected responses. Compare held-out preference scores with factual accuracy and response length.',
		readings: ['instructgpt', 'dpo'],
		core: ['instructgpt', 'dpo']
	},
	{
		id: 'research',
		title: 'Selected research, 2024–2026',
		level: 'Research',
		before:
			'Stages 6–7 and 11–13 for language-model reports; stages 4 and 7 for image and video representation papers.',
		goal: 'Sparse training systems, reasoning-oriented rewards, video prediction, dense visual features, residual-stream mixing, and conditional memory.',
		checkpoint:
			'Reproduce a small ablation or frozen-feature evaluation. Separate base-model, post-training, tool-use, and inference-budget effects in the reported comparisons.',
		readings: [
			'deepseek-v3',
			'deepseek-r1',
			'vjepa2',
			'kimi-k2',
			'dinov3',
			'mhc',
			'engram',
			'vjepa21'
		],
		core: []
	}
];

export const dlPreparation = [
	{
		title: 'Machine learning foundations',
		url: '/timelines/machine-learning/',
		note: 'Regression, classification, regularization, probability models, and evaluation.'
	},
	{
		title: 'Deep Learning — Goodfellow, Bengio & Courville',
		url: 'https://www.deeplearningbook.org/',
		note: 'Chapters 6–10: feedforward networks, regularization, optimization, convolution, and recurrent models. Chapters 14 and 20: autoencoders and generative models.'
	},
	{
		title: 'Dive into Deep Learning',
		url: 'https://d2l.ai/',
		note: 'Worked implementations of neural networks, convolution, sequence models, attention, and optimization.'
	}
];
