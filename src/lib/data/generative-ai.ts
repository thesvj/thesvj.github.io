import type { Timeline } from './timelines';
export const generativeAITimeline: Timeline = {
	slug: 'generative-ai',
	title: 'Generative AI',
	description: 'Foundational works on generative models, language, images, audio, video, and 3D.',
	reviewedAt: '2026-10-21',
	scope:
		'Selected foundations and research from 1982–2026: likelihood, latent variables, adversarial learning, diffusion, flows, language generation, multimodal synthesis, and evaluation.',
	entries: [
		{
			id: 'hopfield',
			year: 1982,
			label: 'Associative memory networks',
			theme: 'Neural network foundations',
			authors: 'John J. Hopfield',
			title:
				'Neural Networks and Physical Systems with Emergent Collective Computational Abilities',
			url: 'https://doi.org/10.1073/pnas.79.8.2554',
			contribution:
				'Used recurrent binary units and an energy formulation to retrieve stored patterns from incomplete inputs.',
			impact:
				'Connected neural computation with energy minimization and content-addressable memory.',
			exercise:
				'Store a few binary patterns and measure retrieval under increasing bit corruption.',
			caveat:
				'Capacity is limited and spurious attractors can occur. These networks are different from modern autoregressive language models.'
		},
		{
			id: 'boltzmann',
			year: 1985,
			label: 'Boltzmann machines',
			theme: 'Probabilistic models',
			authors: 'David H. Ackley, Geoffrey E. Hinton & Terrence J. Sejnowski',
			title: 'A Learning Algorithm for Boltzmann Machines',
			url: 'https://www.cs.toronto.edu/~hinton/absps/cogscibm.pdf',
			contribution:
				'Learns stochastic binary energy models by comparing correlations when visible units are clamped to data with correlations under the model’s equilibrium distribution.',
			impact:
				'Established a learning rule for probabilistic neural networks with hidden units, linking representation learning to statistical mechanics.',
			exercise:
				'Enumerate a tiny binary model’s states, compute its partition function, and compare exact likelihood gradients with sampled correlation estimates.',
			caveat:
				'Equilibrium sampling can mix slowly; the original learning procedure is computationally expensive.'
		},
		{
			id: 'neural-lm',
			year: 2003,
			label: 'Neural probabilistic language modeling',
			theme: 'Sequence models',
			authors: 'Yoshua Bengio, Réjean Ducharme, Pascal Vincent & Christian Jauvin',
			title: 'A Neural Probabilistic Language Model',
			url: 'https://www.jmlr.org/papers/v3/bengio03a.html',
			contribution:
				'Jointly learned distributed word representations and conditional next-word probabilities.',
			impact:
				'Shared statistical strength across related word contexts and established neural word representations within language modeling.',
			exercise:
				'Fit a small fixed-window language model and compare held-out perplexity with a smoothed n-gram baseline.',
			caveat:
				'The original model uses a limited context window and an expensive output vocabulary distribution. Later embedding methods use different objectives.'
		},
		{
			id: 'score-matching',
			year: 2005,
			label: 'Score matching',
			theme: 'Probabilistic models',
			authors: 'Aapo Hyvärinen',
			title: 'Estimation of Non-Normalized Statistical Models by Score Matching',
			url: 'https://www.jmlr.org/papers/v6/hyvarinen05a.html',
			contribution:
				'Estimates an unnormalized density by matching gradients of log densities; integration by parts removes the unknown data score from the training objective.',
			impact:
				'Provided an estimation principle later used in score-based generative modeling, without computing a partition function.',
			exercise: 'Derive the objective for a Gaussian and recover its precision matrix.',
			caveat:
				'The derivation requires regularity and boundary conditions; estimating a score does not itself provide an efficient sampler.'
		},
		{
			id: 'dbn',
			year: 2006,
			label: 'Deep belief networks',
			theme: 'Neural network foundations',
			authors: 'Geoffrey E. Hinton, Simon Osindero & Yee-Whye Teh',
			title: 'A Fast Learning Algorithm for Deep Belief Nets',
			url: 'https://www.cs.toronto.edu/~hinton/absps/fastnc.pdf',
			contribution: 'Trained a multilayer generative model using greedy layer-wise learning.',
			impact:
				'Made deeper representation learning practical in a period when training deep sigmoid networks was difficult.',
			exercise:
				'Compare a layer-wise pretraining objective with a supervised fine-tuning objective.',
			caveat:
				'Historically important; modern architectures often train successfully without this pretraining procedure.'
		},
		{
			id: 'seq2seq',
			year: 2014,
			label: 'Encoder–decoder sequence learning',
			theme: 'Sequence models',
			authors: 'Ilya Sutskever, Oriol Vinyals & Quoc V. Le',
			title: 'Sequence to Sequence Learning with Neural Networks',
			url: 'https://arxiv.org/abs/1409.3215',
			contribution:
				'Mapped an input sequence to a fixed-dimensional representation and decoded an output sequence with LSTMs.',
			impact:
				'Established a general trainable encoder–decoder approach for variable-length sequence mappings.',
			exercise: 'Implement a small sequence-reversal task and measure error against input length.',
			caveat:
				'A fixed-length context can become a bottleneck. Later attention models provide direct access to encoder states.'
		},
		{
			id: 'vae',
			year: 2014,
			label: 'Variational autoencoders',
			theme: 'Generative models',
			authors: 'Diederik P. Kingma & Max Welling',
			title: 'Auto-Encoding Variational Bayes',
			url: 'https://arxiv.org/abs/1312.6114',
			contribution:
				'Combined an amortized inference network with a reparameterized gradient estimator for a variational objective.',
			impact:
				'Enabled joint learning of neural latent-variable models and approximate posteriors using minibatch gradients.',
			exercise:
				'Derive the Gaussian VAE objective and compare reconstruction quality as the KL term changes.',
			caveat:
				'ICLR 2014; first preprint in 2013. Approximate posteriors and decoder assumptions affect likelihood and sample quality.'
		},
		{
			id: 'gan',
			year: 2014,
			label: 'Generative adversarial networks',
			theme: 'Generative models',
			authors: 'Ian J. Goodfellow et al.',
			title: 'Generative Adversarial Networks',
			url: 'https://arxiv.org/abs/1406.2661',
			contribution:
				'Trained a generator against a discriminator in an adversarial estimation game.',
			impact:
				'Made sample generation possible without explicitly evaluating the generator’s data density.',
			exercise: 'Train a GAN on a two-dimensional mixture and inspect mode coverage over training.',
			caveat:
				'The ideal equilibrium result does not guarantee stable optimization for finite neural networks.'
		},
		{
			id: 'cgan',
			year: 2014,
			label: 'Conditional GANs',
			authors: 'Mehdi Mirza & Simon Osindero',
			title: 'Conditional Generative Adversarial Nets',
			url: 'https://arxiv.org/abs/1411.1784',
			contribution:
				'Conditions both generator and discriminator on auxiliary information such as class labels.',
			impact:
				'Demonstrated label-controlled generation and established a general conditional adversarial formulation.',
			exercise:
				'Write the conditional minimax objective and compare class balance in generated samples.',
			caveat: 'Conditioning does not prevent mode collapse or guarantee adherence to labels.',
			theme: 'Generative models'
		},
		{
			id: 'diffusion-origin',
			year: 2015,
			label: 'Diffusion probabilistic models',
			theme: 'Diffusion & flows',
			authors: 'Jascha Sohl-Dickstein et al.',
			title: 'Deep Unsupervised Learning using Nonequilibrium Thermodynamics',
			url: 'https://arxiv.org/abs/1503.03585',
			contribution:
				'Defined gradual corruption and learned reverse transitions for probabilistic generation.',
			impact:
				'Established the forward-noising and reverse-denoising construction later developed by DDPMs.',
			exercise: 'Simulate a forward noising chain and estimate a reverse transition on toy data.',
			caveat:
				'This is an earlier diffusion formulation; the later DDPM objective and image-synthesis recipe are different.'
		},
		{
			id: 'nice',
			year: 2015,
			label: 'NICE',
			theme: 'Diffusion & flows',
			authors: 'Laurent Dinh, David Krueger & Yoshua Bengio',
			title: 'NICE: Non-linear Independent Components Estimation',
			url: 'https://arxiv.org/abs/1410.8516',
			contribution:
				'Uses invertible additive coupling layers to transform data into a simple latent distribution with a tractable Jacobian.',
			impact:
				'Established a practical coupling-layer approach to exact density estimation and invertible generation. First preprint: 2014.',
			exercise:
				'Implement an additive coupling transform and verify its inverse and log determinant.',
			caveat:
				'Volume-preserving coupling limits expressiveness unless combined with additional transformations.'
		},
		{
			id: 'variational-flows',
			year: 2015,
			label: 'Normalizing flows for inference',
			theme: 'Diffusion & flows',
			authors: 'Danilo Jimenez Rezende & Shakir Mohamed',
			title: 'Variational Inference with Normalizing Flows',
			url: 'https://arxiv.org/abs/1505.05770',
			contribution:
				'Transforms a simple approximate posterior through a sequence of invertible maps, tracking density changes with Jacobian determinants.',
			impact:
				'Expanded amortized variational inference beyond simple posterior families and demonstrated improved inference with flexible learned distributions.',
			exercise:
				'Derive the variational bound for a transformed posterior and compare a diagonal Gaussian with a flow on a correlated target.',
			caveat:
				'More expressive posteriors add computation; invertibility and tractable Jacobians constrain transformations.'
		},
		{
			id: 'pixelrnn',
			year: 2016,
			label: 'PixelRNN',
			theme: 'Generative models',
			authors: 'Aaron van den Oord, Nal Kalchbrenner & Koray Kavukcuoglu',
			title: 'Pixel Recurrent Neural Networks',
			url: 'https://arxiv.org/abs/1601.06759',
			contribution:
				'Factorizes image likelihood into ordered pixel conditionals modeled by recurrent networks.',
			impact:
				'Demonstrated strong tractable image likelihoods and made autoregressive image modeling a major alternative to latent-variable and adversarial models.',
			exercise: 'Fit a small masked autoregressive model and compare likelihood with samples.',
			caveat:
				'Sequential pixel generation is expensive; likelihood and perceptual quality measure different properties.'
		},
		{
			id: 'wavenet',
			year: 2016,
			label: 'WaveNet',
			theme: 'Sequence models',
			authors: 'Aaron van den Oord et al.',
			title: 'WaveNet: A Generative Model for Raw Audio',
			url: 'https://arxiv.org/abs/1609.03499',
			contribution: 'Models waveform samples autoregressively using causal, dilated convolutions.',
			impact:
				'Produced natural speech in listening tests and established direct neural waveform generation.',
			exercise: 'Calculate a dilated convolution stack’s receptive field and verify causality.',
			caveat: 'Original sampling requires a prediction for each waveform sample.'
		},
		{
			id: 'dcgan',
			year: 2016,
			label: 'DCGAN',
			authors: 'Alec Radford, Luke Metz & Soumith Chintala',
			title:
				'Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks',
			url: 'https://arxiv.org/abs/1511.06434',
			contribution:
				'Introduces convolutional architecture constraints for generators and discriminators and studies their learned representations.',
			impact:
				'Provided an influential practical recipe for image GANs and demonstrated reusable visual features. First preprint: 2015.',
			exercise:
				'Implement a small DCGAN and record discriminator and generator losses alongside sample grids.',
			caveat:
				'The architecture improves practical training but does not guarantee convergence or coverage.',
			theme: 'Generative models'
		},
		{
			id: 'transformer',
			year: 2017,
			label: 'Transformers',
			theme: 'Transformers & language',
			authors: 'Ashish Vaswani et al.',
			title: 'Attention Is All You Need',
			url: 'https://arxiv.org/abs/1706.03762',
			contribution:
				'Built an encoder–decoder using multi-head attention, feedforward blocks, positional information, and residual connections.',
			impact:
				'Allowed parallel processing of training sequences and made attention the main sequence-mixing operation.',
			exercise:
				'Implement scaled dot-product attention, causal masking, and a small transformer block.',
			caveat:
				'Dense attention has quadratic sequence-length cost. Parallel training does not make autoregressive generation fully parallel.'
		},
		{
			id: 'wgan',
			year: 2017,
			label: 'Wasserstein GANs',
			theme: 'Generative models',
			authors: 'Martin Arjovsky, Soumith Chintala & Léon Bottou',
			title: 'Wasserstein GAN',
			url: 'https://arxiv.org/abs/1701.07875',
			contribution:
				'Used a critic to approximate a Wasserstein-distance objective under a Lipschitz constraint.',
			impact:
				'Connected adversarial training stability with the geometry of probability distributions and the behavior of gradients between separated supports.',
			exercise:
				'Compare original GAN and WGAN losses on two separated one-dimensional distributions.',
			caveat:
				'The original implementation uses weight clipping, which has limitations. Gradient-penalty training is subsequent work, not part of this paper.'
		},
		{
			id: 'realnvp',
			year: 2017,
			label: 'Invertible density models',
			theme: 'Generative models',
			authors: 'Laurent Dinh, Jascha Sohl-Dickstein & Samy Bengio',
			title: 'Density Estimation using Real NVP',
			url: 'https://arxiv.org/abs/1605.08803',
			contribution:
				'Used invertible affine coupling transformations with tractable Jacobian determinants.',
			impact: 'Enabled exact density evaluation and direct sampling in a neural generative model.',
			exercise:
				'Implement an affine coupling layer and verify its inverse and log-determinant numerically.',
			caveat:
				'ICLR 2017; first preprint in 2016. Tractable likelihood does not ensure perceptually better samples, and invertibility constrains architecture.'
		},
		{
			id: 'fid',
			year: 2017,
			label: 'GAN training and FID',
			theme: 'Theory & evaluation',
			authors: 'Martin Heusel et al.',
			title: 'GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium',
			url: 'https://arxiv.org/abs/1706.08500',
			contribution:
				'Studied different update time scales for generator and discriminator and introduced Fréchet Inception Distance.',
			impact:
				'Added a commonly used distribution-level metric for comparing generated and real image features.',
			exercise: 'Measure how an FID estimate changes with sample count and image preprocessing.',
			caveat:
				'FID uses a particular feature model and Gaussian summary. Its estimate is sample-sensitive and does not measure every aspect of quality or diversity.'
		},
		{
			id: 'vqvae',
			year: 2017,
			label: 'VQ-VAE',
			theme: 'Generative models',
			authors: 'Aaron van den Oord, Oriol Vinyals & Koray Kavukcuoglu',
			title: 'Neural Discrete Representation Learning',
			url: 'https://arxiv.org/abs/1711.00937',
			contribution:
				'Learns discrete latent codes using vector quantization and a separate learned prior.',
			impact:
				'Made compressed discrete representations useful for image and audio generation with autoregressive priors.',
			exercise:
				'Implement nearest-code quantization and track codebook usage and reconstruction error.',
			caveat:
				'Codebook collapse and quantization error affect representation quality; the prior must also be trained.'
		},
		{
			id: 'pix2pix',
			year: 2017,
			label: 'pix2pix',
			authors: 'Phillip Isola, Jun-Yan Zhu, Tinghui Zhou & Alexei A. Efros',
			title: 'Image-to-Image Translation with Conditional Adversarial Networks',
			url: 'https://arxiv.org/abs/1611.07004',
			contribution:
				'Combines a conditional adversarial objective with a reconstruction loss for paired image translation.',
			impact:
				'Established a reusable approach for maps-to-photos, edges-to-images, and other paired synthesis tasks. First preprint: 2016.',
			exercise:
				'Compare reconstruction-only and adversarial-plus-reconstruction training on paired examples.',
			caveat:
				'Requires aligned training pairs and can produce plausible details unsupported by the input.',
			theme: 'Generative models'
		},
		{
			id: 'cyclegan',
			year: 2017,
			label: 'CycleGAN',
			authors: 'Jun-Yan Zhu, Taesung Park, Phillip Isola & Alexei A. Efros',
			title: 'Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks',
			url: 'https://arxiv.org/abs/1703.10593',
			contribution:
				'Combines two adversarial mappings with a cycle-consistency objective on unpaired domains.',
			impact: 'Made unpaired image translation practical without requiring aligned examples.',
			exercise: 'Construct two different mappings that satisfy cycle consistency on a toy dataset.',
			caveat:
				'Cycle consistency does not uniquely identify the intended mapping or guarantee semantic preservation.',
			theme: 'Generative models'
		},
		{
			id: 'neural-ode',
			year: 2018,
			label: 'Continuous-depth networks',
			theme: 'Generative models',
			authors: 'Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt & David Duvenaud',
			title: 'Neural Ordinary Differential Equations',
			url: 'https://arxiv.org/abs/1806.07366',
			contribution:
				'Parameterized continuous hidden-state dynamics with a neural network and trained models involving numerical ODE solvers.',
			impact:
				'Connected residual-network ideas with continuous dynamics and continuous normalizing flows.',
			exercise:
				'Fit a two-dimensional neural ODE and compare outputs, function evaluations, and gradients at several solver tolerances.',
			caveat:
				'Solver error and gradient approximations affect training. Continuous adjoint memory arguments do not guarantee accurate gradients or inexpensive evaluation in every system.'
		},
		{
			id: 'glow',
			year: 2018,
			label: 'Glow',
			theme: 'Diffusion & flows',
			authors: 'Diederik P. Kingma & Prafulla Dhariwal',
			title: 'Glow: Generative Flow with Invertible 1×1 Convolutions',
			url: 'https://arxiv.org/abs/1807.03039',
			contribution:
				'Combines invertible channel mixing, normalization, and affine coupling in a multiscale flow.',
			impact:
				'Scaled exact-likelihood flows to higher-resolution images and demonstrated latent-space manipulation.',
			exercise: 'Verify an invertible convolution’s inverse and log determinant.',
			caveat:
				'Invertible architectures constrain design and can use substantial memory; likelihood alone does not establish sample quality.'
		},
		{
			id: 'ncsn',
			year: 2019,
			label: 'Noise-conditional scores',
			theme: 'Diffusion & flows',
			authors: 'Yang Song & Stefano Ermon',
			title: 'Generative Modeling by Estimating Gradients of the Data Distribution',
			url: 'https://arxiv.org/abs/1907.05600',
			contribution:
				'Learns scores at multiple noise levels and samples with annealed Langevin dynamics.',
			impact:
				'Showed that noise-conditioned score estimation could generate competitive images without adversarial training.',
			exercise: 'Fit scores on a noisy 2D mixture and visualize Langevin trajectories.',
			caveat: 'Sampling requires many updates and depends on the noise schedule and score accuracy.'
		},
		{
			id: 'precision-recall',
			year: 2019,
			label: 'Generative precision and recall',
			theme: 'Theory & evaluation',
			authors: 'Tuomas Kynkäänniemi et al.',
			title: 'Improved Precision and Recall Metric for Assessing Generative Models',
			url: 'https://arxiv.org/abs/1904.06991',
			contribution:
				'Estimates generated-sample quality and real-distribution coverage separately using neighborhoods in feature space.',
			impact:
				'Exposed quality–coverage tradeoffs hidden by a single aggregate score and analyzed truncation in GANs.',
			exercise:
				'Compare a collapsed sampler and a noisy sampler using separate precision and recall.',
			caveat: 'Results depend on feature representation, sample size, and neighborhood choices.'
		},
		{
			id: 'stylegan',
			year: 2019,
			label: 'StyleGAN',
			authors: 'Tero Karras, Samuli Laine & Timo Aila',
			title: 'A Style-Based Generator Architecture for Generative Adversarial Networks',
			url: 'https://arxiv.org/abs/1812.04948',
			contribution:
				'Maps latent variables into styles that control synthesis at multiple spatial scales, with separate stochastic noise.',
			impact:
				'Improved image synthesis and latent control, and introduced perceptual path-length analysis and FFHQ. First preprint: 2018.',
			exercise:
				'Swap coarse and fine styles between latent codes and compare their visual effects.',
			caveat:
				'Learned controls can remain entangled; realism on one image domain does not imply broad coverage.',
			theme: 'Generative models'
		},
		{
			id: 'ddpm',
			year: 2020,
			label: 'Denoising diffusion models',
			theme: 'Diffusion & flows',
			authors: 'Jonathan Ho, Ajay Jain & Pieter Abbeel',
			title: 'Denoising Diffusion Probabilistic Models',
			url: 'https://arxiv.org/abs/2006.11239',
			contribution:
				'Trained a neural denoiser along a fixed noise schedule with a simplified weighted objective.',
			impact:
				'Produced competitive image synthesis and clarified connections between diffusion and score matching.',
			exercise:
				'Derive the noise-prediction objective and fit a denoiser to a two-dimensional distribution.',
			caveat:
				'The approach builds on earlier diffusion models. Sample quality and cost depend strongly on the sampling schedule.'
		},
		{
			id: 'gpt3',
			year: 2020,
			label: 'GPT-3 and in-context learning',
			theme: 'Transformers & language',
			authors: 'Tom B. Brown et al.',
			title: 'Language Models Are Few-Shot Learners',
			url: 'https://arxiv.org/abs/2005.14165',
			contribution:
				'Evaluated a large causal language model using tasks described with instructions and examples in its input.',
			impact:
				'Made inference-time conditioning on examples a major evaluation setting alongside fine-tuning.',
			exercise:
				'Compare zero-shot and few-shot prompts with held-out examples and several example orders.',
			caveat:
				'Prompt sensitivity and benchmark contamination complicate interpretation. In-context adaptation does not update model weights.'
		},
		{
			id: 't5',
			year: 2020,
			label: 'Text-to-text transfer learning',
			theme: 'Transformers & language',
			authors: 'Colin Raffel et al.',
			title: 'Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer',
			url: 'https://arxiv.org/abs/1910.10683',
			contribution:
				'Compared pretraining objectives and transfer settings within one text-to-text encoder–decoder framework.',
			impact:
				'Made tasks with different output structures comparable within a shared architecture, objective format, and training study.',
			exercise:
				'Express classification and summarization as text-to-text tasks and compare their evaluation requirements.',
			caveat:
				'JMLR 2020; first preprint in 2019. Task formatting does not remove differences in data, decoding, or evaluation metrics.'
		},
		{
			id: 'scaling-laws',
			year: 2020,
			label: 'Language-model scaling laws',
			theme: 'Scaling & adaptation',
			authors: 'Jared Kaplan et al.',
			title: 'Scaling Laws for Neural Language Models',
			url: 'https://arxiv.org/abs/2001.08361',
			contribution:
				'Fit empirical relationships between language-model loss, parameter count, dataset size, and training compute.',
			impact: 'Made compute allocation an explicit empirical modeling problem.',
			exercise:
				'Fit a simple loss-versus-size curve from small runs and test it on a held-out scale.',
			caveat:
				'The fitted regime, tokenization, training horizon, and data distribution constrain extrapolation.'
		},
		{
			id: 'rag',
			year: 2020,
			label: 'RAG',
			theme: 'Transformers & language',
			authors: 'Patrick Lewis et al.',
			title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
			url: 'https://arxiv.org/abs/2005.11401',
			contribution:
				'Combines a learned retriever over an external document index with a sequence-to-sequence generator.',
			impact:
				'Improved knowledge-intensive task results and separated some factual storage from model parameters.',
			exercise:
				'Compare a fixed generator with and without retrieval on questions with held-out evidence.',
			caveat:
				'Missing or irrelevant evidence can still lead to unsupported answers; retrieval does not guarantee factuality.'
		},
		{
			id: 'nerf',
			year: 2020,
			label: 'NeRF',
			theme: 'Representation learning',
			authors: 'Ben Mildenhall et al.',
			title: 'NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis',
			url: 'https://arxiv.org/abs/2003.08934',
			contribution:
				'Fits a continuous radiance and density field from posed images using differentiable volume rendering.',
			impact: 'Established a scene representation later used in text-to-3D optimization methods.',
			exercise: 'Implement ray compositing and render a simple density field from two views.',
			caveat:
				'The original method reconstructs individual scenes; it is not an unconditional generative model.'
		},
		{
			id: 'stylegan2',
			year: 2020,
			label: 'StyleGAN2',
			theme: 'Generative models',
			authors: 'Tero Karras et al.',
			title: 'Analyzing and Improving the Image Quality of StyleGAN',
			url: 'https://arxiv.org/abs/1912.04958',
			contribution:
				'Analyzes StyleGAN artifacts, redesigns generator normalization with weight demodulation, revisits progressive growing, and adds path-length regularization.',
			impact:
				'Improved image quality and latent inversion while making artifact diagnosis and generator conditioning central to GAN architecture design. First preprint: 2019.',
			exercise:
				'Compare normalization and weight-demodulation equations, then inspect how path-length regularization constrains the latent-to-image Jacobian.',
			caveat:
				'Improved realism does not guarantee complete mode coverage or disentangled controls; performance remains domain-dependent.'
		},
		{
			id: 'ddim',
			year: 2021,
			label: 'Implicit diffusion sampling',
			theme: 'Diffusion & flows',
			authors: 'Jiaming Song, Chenlin Meng & Stefano Ermon',
			title: 'Denoising Diffusion Implicit Models',
			url: 'https://arxiv.org/abs/2010.02502',
			contribution:
				'Constructed non-Markovian processes compatible with the DDPM objective, including deterministic reverse sampling trajectories.',
			impact:
				'Allowed different generation trajectories and fewer denoising steps using a trained diffusion model.',
			exercise:
				'Compare DDPM and DDIM sampling at matched network-evaluation counts with the same denoiser.',
			caveat:
				'ICLR 2021; first preprint in 2020. Faster sampling can change quality, and deterministic sampling still depends on its initial noise.'
		},
		{
			id: 'score-sde',
			year: 2021,
			label: 'Score-based SDE models',
			theme: 'Diffusion & flows',
			authors: 'Yang Song et al.',
			title: 'Score-Based Generative Modeling through Stochastic Differential Equations',
			url: 'https://arxiv.org/abs/2011.13456',
			contribution:
				'Unified noising and denoising using continuous-time stochastic differential equations and a learned score field.',
			impact:
				'Connected score models and diffusion models with numerical SDE and probability-flow ODE sampling.',
			exercise:
				'Compare ODE and SDE samples from the same toy score model at several solver step counts.',
			caveat:
				'ICLR 2021; first preprint in 2020. Continuous-time theory still needs score approximation and numerical discretization.'
		},
		{
			id: 'clip',
			year: 2021,
			label: 'Image–text contrastive learning',
			theme: 'Representation learning',
			authors: 'Alec Radford et al.',
			title: 'Learning Transferable Visual Models From Natural Language Supervision',
			url: 'https://arxiv.org/abs/2103.00020',
			contribution:
				'Matched image and text representations using a contrastive objective over paired data.',
			impact:
				'Enabled classification through text-defined labels and transferable multimodal embeddings.',
			exercise: 'Compare several class-description prompts on the same held-out image set.',
			caveat:
				'Zero-shot scores depend on prompt wording and training-data coverage; image–text similarity is not a universal semantic measure.'
		},
		{
			id: 'vqgan',
			year: 2021,
			label: 'VQGAN',
			theme: 'Generative models',
			authors: 'Patrick Esser, Robin Rombach & Björn Ommer',
			title: 'Taming Transformers for High-Resolution Image Synthesis',
			url: 'https://arxiv.org/abs/2012.09841',
			contribution:
				'Learns compressed visual tokens with perceptual and adversarial losses, then models their distribution with a transformer.',
			impact:
				'Reduced sequence length for high-resolution autoregressive image synthesis. First preprint: 2020.',
			exercise:
				'Compare pixel and latent token sequence lengths and inspect reconstruction artifacts.',
			caveat:
				'Compression can discard detail; perceptual reconstruction and likelihood need separate evaluation.'
		},
		{
			id: 'dalle',
			year: 2021,
			label: 'DALL·E',
			theme: 'Generative models',
			authors: 'Aditya Ramesh et al.',
			title: 'Zero-Shot Text-to-Image Generation',
			url: 'https://arxiv.org/abs/2102.12092',
			contribution: 'Autoregressively models text and discrete image tokens as a single sequence.',
			impact:
				'Demonstrated broad text-conditioned image generation from large-scale paired training.',
			exercise:
				'Write the joint text-image factorization and identify the generation-time conditioning mask.',
			caveat:
				'Compositional accuracy and fine detail remain limited; broad training does not guarantee reliable prompt following.'
		},
		{
			id: 'codex',
			year: 2021,
			label: 'Codex and HumanEval',
			theme: 'Theory & evaluation',
			authors: 'Mark Chen et al.',
			title: 'Evaluating Large Language Models Trained on Code',
			url: 'https://arxiv.org/abs/2107.03374',
			contribution:
				'Studies code-trained language models and introduces HumanEval with functional correctness measured through pass@k.',
			impact:
				'Made executable test outcomes central to evaluating code generation and quantified gains from sampling.',
			exercise: 'Derive the pass@k estimator and test it on synthetic success/failure samples.',
			caveat:
				'Passing a finite test suite does not establish full correctness; results depend on sampling budget and contamination controls.'
		},
		{
			id: 'training-data-extraction',
			year: 2021,
			label: 'Language-model memorization',
			theme: 'Theory & evaluation',
			authors: 'Nicholas Carlini et al.',
			title: 'Extracting Training Data from Large Language Models',
			url: 'https://arxiv.org/abs/2012.07805',
			contribution:
				'Demonstrates that querying a language model can recover verbatim training examples, and analyzes factors associated with extraction success.',
			impact:
				'Provided empirical evidence that language-model generation can reveal memorized training data, including examples appearing only once in the training corpus. First preprint: 2020.',
			exercise:
				'Use synthetic canary strings in a small controlled dataset to compare memorization under different repetition counts and model sizes.',
			caveat:
				'The study demonstrates extraction in particular models and settings; it does not establish a universal leakage rate or prove privacy for examples not recovered.'
		},
		{
			id: 'cfg',
			year: 2022,
			label: 'Classifier-free guidance',
			theme: 'Diffusion & flows',
			authors: 'Jonathan Ho & Tim Salimans',
			title: 'Classifier-Free Diffusion Guidance',
			url: 'https://arxiv.org/abs/2207.12598',
			contribution:
				'Combined conditional and unconditional score estimates to guide sampling without a separate classifier.',
			impact:
				'Provided a widely used control over the fidelity–diversity tradeoff in conditional generation.',
			exercise:
				'Vary guidance strength and compare condition agreement, diversity, and saturation artifacts.',
			caveat:
				'The linked arXiv version is from 2022, following a 2021 workshop version. Higher guidance is not universally better.'
		},
		{
			id: 'latent-diffusion',
			year: 2022,
			label: 'Latent diffusion',
			theme: 'Diffusion & flows',
			authors: 'Robin Rombach et al.',
			title: 'High-Resolution Image Synthesis with Latent Diffusion Models',
			url: 'https://arxiv.org/abs/2112.10752',
			contribution:
				'Trained diffusion models in an autoencoder latent space and used cross-attention for conditioning.',
			impact:
				'Reduced the spatial cost of high-resolution denoising and supported text-conditioned synthesis.',
			exercise:
				'Compare reconstruction error and denoising cost at several latent compression factors.',
			caveat:
				'CVPR 2022; first preprint in 2021. The autoencoder limits the information available to the generator.'
		},
		{
			id: 'chinchilla',
			year: 2022,
			label: 'Compute-optimal pretraining',
			theme: 'Scaling & adaptation',
			authors: 'Jordan Hoffmann et al.',
			title: 'Training Compute-Optimal Large Language Models',
			url: 'https://arxiv.org/abs/2203.15556',
			contribution:
				'Studied model size and training-token allocation at fixed compute and trained Chinchilla using the resulting estimates.',
			impact:
				'Showed that many large models in the evaluated regime were undertrained relative to their parameter count.',
			exercise:
				'Compare a smaller model trained longer with a larger model under equal estimated training FLOPs.',
			caveat:
				'The optimal allocation depends on data quality, compute accounting, and whether inference costs are included.'
		},
		{
			id: 'lora',
			year: 2022,
			label: 'Low-rank adaptation',
			theme: 'Scaling & adaptation',
			authors: 'Edward J. Hu et al.',
			title: 'LoRA: Low-Rank Adaptation of Large Language Models',
			url: 'https://arxiv.org/abs/2106.09685',
			contribution:
				'Froze base-model parameters and learned low-rank matrix updates for selected layers.',
			impact: 'Reduced trainable parameter and optimizer-state costs for task adaptation.',
			exercise:
				'Compare several adapter ranks with full fine-tuning, recording memory and held-out loss.',
			caveat:
				'ICLR 2022; first preprint in 2021. Low-rank updates still require base-model storage and can be restrictive for some tasks.'
		},
		{
			id: 'instructgpt',
			year: 2022,
			label: 'Instruction tuning with human feedback',
			theme: 'Post-training',
			authors: 'Long Ouyang et al.',
			title: 'Training Language Models to Follow Instructions with Human Feedback',
			url: 'https://arxiv.org/abs/2203.02155',
			contribution:
				'Combined supervised demonstrations, a preference-trained reward model, and policy optimization.',
			impact:
				'Separated next-token pretraining from training behavior against human preference judgments.',
			exercise:
				'Compare supervised-only and preference-trained outputs with a fixed, held-out evaluation rubric.',
			caveat:
				'The human feedback represents particular annotators and instructions; reward optimization can exploit reward-model errors.'
		},
		{
			id: 'chain-of-thought',
			year: 2022,
			label: 'Reasoning demonstrations in prompts',
			theme: 'Transformers & language',
			authors: 'Jason Wei et al.',
			title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
			url: 'https://arxiv.org/abs/2201.11903',
			contribution:
				'Provided worked intermediate-step demonstrations in few-shot prompts and evaluated reasoning-task accuracy.',
			impact:
				'Established an influential inference-time prompting approach, distinct from weight updates or reward-based training.',
			exercise:
				'Compare direct-answer and worked-example prompts with held-out problems, controlling model, example count, and output budget.',
			caveat:
				'Generated explanations can be incorrect or unfaithful to the computation that determines an answer. Improvements depend on task, examples, and model scale.'
		},
		{
			id: 'imagen',
			year: 2022,
			label: 'Imagen',
			theme: 'Generative models',
			authors: 'Chitwan Saharia et al.',
			title: 'Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding',
			url: 'https://arxiv.org/abs/2205.11487',
			contribution: 'Conditions cascaded diffusion models on frozen language-model embeddings.',
			impact:
				'Showed strong gains in image-text alignment from scaling the text encoder and introduced DrawBench comparisons.',
			exercise: 'Compare text-encoder and image-denoiser scaling ablations in the paper.',
			caveat:
				'Preference studies and selected prompts do not establish universal compositional reliability.'
		},
		{
			id: 'dalle2',
			year: 2022,
			label: 'DALL·E 2',
			theme: 'Generative models',
			authors: 'Aditya Ramesh, Prafulla Dhariwal, Alex Nichol, Casey Chu & Mark Chen',
			title: 'Hierarchical Text-Conditional Image Generation with CLIP Latents',
			url: 'https://arxiv.org/abs/2204.06125',
			contribution:
				'Learns a text-conditioned prior over CLIP image embeddings and a diffusion decoder conditioned on those embeddings.',
			impact:
				'Separated semantic image representation from image decoding, demonstrating diverse text-conditioned synthesis, image variations, and language-guided manipulation.',
			exercise:
				'Draw the training and sampling paths for the prior and decoder; compare conditioning on text alone with conditioning on an image embedding.',
			caveat:
				'CLIP representations can lose fine-grained spatial information; compositional relations and text rendering remain difficult.'
		},
		{
			id: 'video-diffusion',
			year: 2022,
			label: 'Video Diffusion Models',
			theme: 'Generative models',
			authors:
				'Jonathan Ho, Tim Salimans, Alexey Gritsenko, William Chan, Mohammad Norouzi & David J. Fleet',
			title: 'Video Diffusion Models',
			url: 'https://arxiv.org/abs/2204.03458',
			contribution:
				'Extends image diffusion to spatiotemporal generation, jointly trains on images and videos, and uses conditional sampling for spatial and temporal extension.',
			impact:
				'Established an early diffusion approach to video generation with benchmark improvements and text-conditioned video results.',
			exercise:
				'Compare spatial and temporal attention costs, then distinguish unconditional video generation, prediction, and temporal extension.',
			caveat:
				'Long sequences require substantial compute; plausible frames do not guarantee temporal or physical consistency.'
		},
		{
			id: 'dit',
			year: 2023,
			label: 'Diffusion transformers',
			theme: 'Diffusion & flows',
			authors: 'William Peebles & Saining Xie',
			title: 'Scalable Diffusion Models with Transformers',
			url: 'https://arxiv.org/abs/2212.09748',
			contribution:
				'Replaced a latent-diffusion U-Net with a transformer over latent patches and studied scaling.',
			impact:
				'Connected diffusion generation with transformer depth, width, token count, and compute allocation.',
			exercise: 'Compare patch sizes at a fixed model budget and inspect generation cost.',
			caveat:
				'ICCV 2023; first preprint in 2022. Results concern the reported class-conditional benchmarks and training budgets.'
		},
		{
			id: 'flow-matching',
			year: 2023,
			label: 'Flow matching',
			theme: 'Diffusion & flows',
			authors: 'Yaron Lipman et al.',
			title: 'Flow Matching for Generative Modeling',
			url: 'https://arxiv.org/abs/2210.02747',
			contribution:
				'Trained continuous-time vector fields by regression along conditional probability paths without simulating the learned flow during training.',
			impact:
				'Provided a general training objective for continuous normalizing flows, including diffusion-related paths.',
			exercise:
				'Fit a vector field between two toy distributions and integrate it with several step sizes.',
			caveat:
				'ICLR 2023; first preprint in 2022. Simulation-free training does not mean solver-free generation.'
		},
		{
			id: 'rectified-flow',
			year: 2023,
			label: 'Rectified flow',
			theme: 'Diffusion & flows',
			authors: 'Xingchao Liu, Chengyue Gong & Qiang Liu',
			title: 'Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow',
			url: 'https://arxiv.org/abs/2209.03003',
			contribution:
				'Fit velocity fields to interpolating paths and used reflow to improve transport trajectories.',
			impact: 'Connected path geometry with the number of numerical steps required for generation.',
			exercise:
				'Visualize learned trajectories before and after reflow on a two-dimensional mixture.',
			caveat:
				'ICLR 2023; first preprint in 2022. Straight training interpolants do not guarantee perfectly straight learned sampling trajectories.'
		},
		{
			id: 'consistency',
			year: 2023,
			label: 'Consistency models',
			theme: 'Diffusion & flows',
			authors: 'Yang Song, Prafulla Dhariwal, Mark Chen & Ilya Sutskever',
			title: 'Consistency Models',
			url: 'https://arxiv.org/abs/2303.01469',
			contribution:
				'Learned mappings consistent along probability-flow trajectories, supporting direct and multistep generation.',
			impact:
				'Reduced the number of network evaluations needed for some generative sampling settings.',
			exercise: 'Compare one-step and multistep samples while holding the model checkpoint fixed.',
			caveat:
				'Models can be trained by distillation or directly. Sampling speed, quality, and training cost must be compared separately.'
		},
		{
			id: 'dpo',
			year: 2023,
			label: 'Direct preference optimization',
			theme: 'Post-training',
			authors: 'Rafael Rafailov et al.',
			title: 'Direct Preference Optimization: Your Language Model Is Secretly a Reward Model',
			url: 'https://arxiv.org/abs/2305.18290',
			contribution:
				'Derived a preference-learning objective through a reparameterization of a KL-regularized reward problem.',
			impact:
				'Allowed preference tuning without an explicit learned reward model and on-policy rollout loop in the standard formulation.',
			exercise:
				'Compute DPO loss on chosen and rejected responses and vary the reference-policy coefficient.',
			caveat:
				'The method still depends on preference data and modeling assumptions; it does not establish truthfulness or reliable reasoning.'
		},
		{
			id: 'dreambooth',
			year: 2023,
			label: 'DreamBooth',
			theme: 'Scaling & adaptation',
			authors: 'Nataniel Ruiz et al.',
			title: 'DreamBooth: Fine Tuning Text-to-Image Diffusion Models for Subject-Driven Generation',
			url: 'https://arxiv.org/abs/2208.12242',
			contribution:
				'Binds a subject identifier from a few reference images through fine-tuning with a class-specific prior-preservation loss.',
			impact:
				'Established a practical route to subject-specific image generation. First preprint: 2022.',
			exercise:
				'Separate subject fidelity and prompt diversity when comparing adaptation settings.',
			caveat: 'Overfitting, identity drift, and loss of class diversity remain possible.'
		},
		{
			id: 'controlnet',
			year: 2023,
			label: 'ControlNet',
			theme: 'Scaling & adaptation',
			authors: 'Lvmin Zhang, Anyi Rao & Maneesh Agrawala',
			title: 'Adding Conditional Control to Text-to-Image Diffusion Models',
			url: 'https://arxiv.org/abs/2302.05543',
			contribution:
				'Adds trainable spatial-conditioning branches to a frozen diffusion backbone using zero-initialized connections.',
			impact: 'Enabled image generation conditioned on edges, depth, segmentation, and poses.',
			exercise:
				'Trace where a conditioning map enters the denoising network and compare two control strengths.',
			caveat:
				'Condition quality and conflicting constraints affect generation; spatial control is not exact constraint satisfaction.'
		},
		{
			id: 'react',
			year: 2023,
			label: 'ReAct',
			theme: 'Transformers & language',
			authors: 'Shunyu Yao et al.',
			title: 'ReAct: Synergizing Reasoning and Acting in Language Models',
			url: 'https://arxiv.org/abs/2210.03629',
			contribution:
				'Interleaves textual reasoning, actions, and observations within a language-model interaction.',
			impact:
				'Connected language generation to information gathering and environment interaction. First preprint: 2022.',
			exercise:
				'Trace an action-observation sequence and compare it with a retrieval-free response.',
			caveat:
				'Errors in tool choice and observations can compound; generated reasoning is not a correctness certificate.'
		},
		{
			id: 'toolformer',
			year: 2023,
			label: 'Toolformer',
			theme: 'Transformers & language',
			authors: 'Timo Schick et al.',
			title: 'Toolformer: Language Models Can Teach Themselves to Use Tools',
			url: 'https://arxiv.org/abs/2302.04761',
			contribution:
				'Generates candidate API calls and filters them by their improvement to subsequent token prediction.',
			impact:
				'Demonstrated a self-supervised training approach to tool use, complementing prompting-based interaction.',
			exercise: 'Work through the loss-based filtering rule on a toy calculator-call example.',
			caveat: 'Success depends on candidate calls, available tools, and the filtering objective.'
		},
		{
			id: 'audiolm',
			year: 2023,
			label: 'AudioLM',
			theme: 'Sequence models',
			authors: 'Zalán Borsos et al.',
			title: 'AudioLM: a Language Modeling Approach to Audio Generation',
			url: 'https://arxiv.org/abs/2209.03143',
			contribution:
				'Models semantic and acoustic token sequences to generate coherent audio continuations.',
			impact:
				'Extended language-model-style generation to speech and music without requiring transcripts. First preprint: 2022.',
			exercise: 'Compare semantic-token and codec-token rates and their roles in generation.',
			caveat: 'Coherence, intelligibility, and acoustic fidelity require separate assessment.'
		},
		{
			id: 'encodec',
			year: 2023,
			label: 'EnCodec',
			theme: 'Representation learning',
			authors: 'Alexandre Défossez et al.',
			title: 'High Fidelity Neural Audio Compression',
			url: 'https://arxiv.org/abs/2210.13438',
			contribution:
				'Learns a quantized neural audio codec with reconstruction and adversarial objectives.',
			impact:
				'Provided compact acoustic tokens used as a foundation for generative audio systems. First preprint: 2022.',
			exercise: 'Compute bitrate from codebook count, vocabulary size, and frame rate.',
			caveat: 'A codec reconstructs audio; generation requires an additional prior over its codes.'
		},
		{
			id: 'musicgen',
			year: 2023,
			label: 'MusicGen',
			theme: 'Sequence models',
			authors: 'Jade Copet et al.',
			title: 'Simple and Controllable Music Generation',
			url: 'https://arxiv.org/abs/2306.05284',
			contribution:
				'Uses a single transformer over interleaved compressed audio-token streams with text or melody conditioning.',
			impact:
				'Simplified token-based music generation and demonstrated controllable mono and stereo synthesis.',
			exercise: 'Compare parallel and delayed codebook interleaving patterns.',
			caveat: 'Long-range musical structure and evaluation across styles remain difficult.'
		},
		{
			id: 'dreamfusion',
			year: 2023,
			label: 'DreamFusion',
			theme: 'Generative models',
			authors: 'Ben Poole et al.',
			title: 'DreamFusion: Text-to-3D using 2D Diffusion',
			url: 'https://arxiv.org/abs/2209.14988',
			contribution:
				'Optimizes a 3D radiance field using score distillation from a frozen text-to-image diffusion model.',
			impact:
				'Showed how a pretrained 2D generative prior could supervise text-to-3D without labeled 3D training data. First preprint: 2022.',
			exercise:
				'Trace the gradient from a diffusion prior through a rendered view into scene parameters.',
			caveat:
				'View inconsistency, oversaturation, and duplicated faces can occur; optimization is costly.'
		},
		{
			id: 'llm-judge',
			year: 2023,
			label: 'MT-Bench and Chatbot Arena',
			theme: 'Theory & evaluation',
			authors: 'Lianmin Zheng et al.',
			title: 'Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena',
			url: 'https://arxiv.org/abs/2306.05685',
			contribution:
				'Compares model-based judgments with human preferences using multi-turn questions and pairwise arena comparisons.',
			impact: 'Made scalable preference evaluation widely accessible and documented judge biases.',
			exercise: 'Reverse candidate order and compare judgments on the same answer pair.',
			caveat:
				'Position, verbosity, and self-preference biases can affect judgments; preferences do not establish factual correctness.'
		},
		{
			id: 'deepseek-v3',
			year: 2024,
			label: 'Sparse language-model training',
			theme: 'Recent research',
			authors: 'DeepSeek-AI',
			title: 'DeepSeek-V3 Technical Report',
			url: 'https://arxiv.org/abs/2412.19437',
			contribution:
				'Combined mixture-of-experts routing, latent attention, load balancing, and low-precision training in a large language model.',
			impact:
				'Documented how model design and distributed training affect the cost of a sparse model.',
			exercise:
				'Trace which parameters are activated per token and separate model size from per-token computation.',
			caveat:
				'December 2024 report, revised in 2025. Reported training cost excludes some development and infrastructure costs.',
			sourceType: 'Technical report'
		},
		{
			id: 'sd3',
			year: 2024,
			label: 'Multimodal flow transformers',
			theme: 'Diffusion & flows',
			authors: 'Patrick Esser et al.',
			title: 'Scaling Rectified Flow Transformers for High-Resolution Image Synthesis',
			url: 'https://arxiv.org/abs/2403.03206',
			contribution:
				'Studies rectified-flow training and a transformer with separate text/image weights and bidirectional interaction.',
			impact:
				'Connected flow objectives and multimodal transformer scaling to improved image synthesis and typography.',
			exercise: 'Compare the information paths of cross-attention and joint text-image attention.',
			caveat: 'Reported gains depend on training data, compute, and evaluation settings.'
		},
		{
			id: 'cogvideox',
			year: 2024,
			label: 'CogVideoX',
			theme: 'Generative models',
			authors: 'Zhuoyi Yang et al.',
			title: 'CogVideoX: Text-to-Video Diffusion Models with An Expert Transformer',
			url: 'https://arxiv.org/abs/2408.06072',
			contribution:
				'Combines a spatiotemporal VAE with an expert transformer and progressive video training.',
			impact:
				'Documented an accessible large-scale text-to-video system and its compression, captioning, and training choices.',
			exercise: 'Calculate token counts with spatial-only versus spatiotemporal compression.',
			caveat:
				'Motion consistency and physical plausibility remain imperfect; later paper revisions report expanded capabilities.'
		},
		{
			id: 'deepseek-r1',
			year: 2025,
			label: 'Reasoning-oriented reinforcement learning',
			theme: 'Recent research',
			authors: 'DeepSeek-AI',
			title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning',
			url: 'https://arxiv.org/abs/2501.12948',
			contribution:
				'Studied reinforcement learning with reasoning-oriented rewards and a multistage training pipeline, with distilled models.',
			impact:
				'Reported that reward-based post-training could change reasoning-task behavior and transfer useful behavior through distillation.',
			exercise:
				'Compare pass-at-one and multi-sample accuracy at matched inference budgets on held-out verifiable problems.',
			caveat:
				'The R1 and R1-Zero pipelines differ. Benchmark gains do not establish general reasoning reliability, and reward design limits what is optimized.',
			sourceType: 'Technical report'
		},
		{
			id: 'kimi-k2',
			year: 2025,
			label: 'Large-scale MoE and tool-use training',
			theme: 'Recent research',
			authors: 'Kimi Team',
			title: 'Kimi K2: Open Agentic Intelligence',
			url: 'https://arxiv.org/abs/2507.20534',
			contribution:
				'Reported mixture-of-experts pretraining with optimizer changes and post-training using tool-use and interaction data.',
			impact:
				'Provided a large-scale case study connecting optimization, synthetic interactions, and tool-use evaluation.',
			exercise:
				'Separate base-model scores, tool-assisted results, and post-training improvements in the evaluation tables.',
			caveat:
				'Tool-use results depend on the execution environment, prompts, and evaluation harness; they are not properties of model weights alone.',
			sourceType: 'Technical report'
		},
		{
			id: 'mhc',
			year: 2025,
			label: 'Constrained residual-stream mixing',
			theme: 'Recent research',
			authors: 'Zhenda Xie et al.',
			title: 'mHC: Manifold-Constrained Hyper-Connections',
			url: 'https://arxiv.org/abs/2512.24880',
			contribution:
				'Constrained expanded residual-stream mixing to preserve stable propagation while improving connectivity.',
			impact:
				'Studied the tradeoff between richer residual pathways, numerical stability, and memory overhead.',
			exercise:
				'Compare norm growth through repeated unconstrained and constrained mixing matrices.',
			caveat:
				'First preprint December 31, 2025; revised January 2026. Small matrix demonstrations are not substitutes for the reported large-model ablations.',
			sourceType: 'Research preprint'
		},
		{
			id: 'llada',
			year: 2025,
			label: 'LLaDA',
			theme: 'Recent research',
			authors: 'Shen Nie et al.',
			title: 'Large Language Diffusion Models',
			url: 'https://arxiv.org/abs/2502.09992',
			contribution:
				'Trains a masked-token diffusion language model from scratch with pretraining and supervised fine-tuning.',
			impact:
				'Demonstrated competitive language-model behavior beyond left-to-right generation at the studied scale.',
			exercise:
				'Compare causal decoding with iterative mask prediction at equal inference budgets.',
			caveat:
				'Results at a particular scale do not establish general superiority over autoregressive models.'
		},
		{
			id: 'engram',
			year: 2026,
			label: 'Conditional memory',
			theme: 'Recent research',
			authors: 'Xin Cheng et al.',
			title:
				'Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models',
			url: 'https://arxiv.org/abs/2601.07372',
			contribution:
				'Added a conditional memory module using hashed n-gram lookup alongside neural computation.',
			impact: 'Investigated allocating model capacity between computation and lookup-based memory.',
			exercise:
				'Compare a small learned n-gram lookup with a parameter-matched feedforward component and measure collisions and latency.',
			caveat:
				'January 2026 preprint, revised July. Model-internal lookup is different from external document retrieval; gains depend on the tested training setup.',
			sourceType: 'Research preprint'
		}
	]
};
