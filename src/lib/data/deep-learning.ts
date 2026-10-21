import type { Timeline } from './timelines';

export const deepLearningTimeline: Timeline = {
	slug: 'deep-learning',
	title: 'Deep learning',
	description:
		'Original papers on neural networks, training methods, vision, language, representation learning, and generative models.',
	reviewedAt: '2026-10-21',
	scope:
		'Selected foundations and research papers from 1943–2026, including deep reinforcement learning, efficient architectures, and model post-training.',
	entries: [
		{
			id: 'mcculloch-pitts',
			year: 1943,
			label: 'Threshold neurons',
			theme: 'Neural network foundations',
			authors: 'Warren S. McCulloch & Walter Pitts',
			title: 'A Logical Calculus of the Ideas Immanent in Nervous Activity',
			url: 'https://doi.org/10.1007/BF02478259',
			contribution: 'Represented networks of all-or-none neurons using propositional logic.',
			impact:
				'Established a mathematical model of neural computation, before modern gradient-based learning.',
			exercise: 'Construct threshold circuits for AND, OR, and NOT.',
			caveat:
				'A computational model, not a trainable deep network or a complete account of biological neurons.'
		},
		{
			id: 'perceptron',
			year: 1958,
			label: 'The perceptron',
			theme: 'Neural network foundations',
			authors: 'Frank Rosenblatt',
			title:
				'The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain',
			url: 'https://doi.org/10.1037/h0042519',
			contribution:
				'Proposed a recognition system with adjustable connections learned from examples.',
			impact: 'Connected recognition with learned weights, rather than manually fixed rules.',
			exercise: 'Implement a perceptron and compare linearly separable points with XOR.',
			caveat: 'A single linear threshold cannot represent XOR in the original input coordinates.'
		},
		{
			id: 'neocognitron',
			year: 1980,
			label: 'Neocognitron',
			theme: 'Vision architectures',
			authors: 'Kunihiko Fukushima',
			title:
				'Neocognitron: A Self-Organizing Neural Network Model for a Mechanism of Pattern Recognition Unaffected by Shift in Position',
			url: 'https://doi.org/10.1007/BF00344251',
			contribution:
				'Combined layers of local feature detectors and spatial aggregation for shift-tolerant recognition.',
			impact:
				'Anticipated the local receptive fields and hierarchical processing used in convolutional networks.',
			exercise: 'Compare feature responses before and after translating a simple image.',
			caveat:
				'The original learning procedure differs from end-to-end backpropagation in later CNNs.'
		},
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
			id: 'backprop',
			year: 1986,
			label: 'Backpropagation',
			theme: 'Neural network foundations',
			authors: 'David E. Rumelhart, Geoffrey E. Hinton & Ronald J. Williams',
			title: 'Learning Representations by Back-Propagating Errors',
			url: 'https://doi.org/10.1038/323533a0',
			contribution:
				'Computed gradients through hidden layers so an output error could update internal representations.',
			impact:
				'Demonstrated learning hidden features with gradient descent and helped establish multilayer network training.',
			exercise:
				'Derive and implement gradients for a two-layer network; check them with finite differences.',
			caveat:
				'This paper popularized the procedure; reverse-mode differentiation and earlier neural-network applications predate it.'
		},
		{
			id: 'approximation',
			year: 1989,
			label: 'Universal approximation',
			theme: 'Theory & evaluation',
			authors: 'George Cybenko',
			title: 'Approximation by Superpositions of a Sigmoidal Function',
			url: 'https://doi.org/10.1007/BF02551274',
			contribution:
				'Proved density of a class of single-hidden-layer sigmoidal networks in continuous functions on a compact domain.',
			impact:
				'Separated representational capacity from the specific hand-designed features used by earlier models.',
			exercise:
				'Approximate a smooth one-dimensional function with wider hidden layers and compare training and test errors.',
			caveat:
				'An existence theorem does not specify efficient width, an effective training algorithm, or generalization from finite data.'
		},
		{
			id: 'vanishing-gradients',
			year: 1994,
			label: 'Learning long-term dependencies',
			theme: 'Sequence models',
			authors: 'Yoshua Bengio, Patrice Simard & Paolo Frasconi',
			title: 'Learning Long-Term Dependencies with Gradient Descent Is Difficult',
			url: 'https://doi.org/10.1109/72.279181',
			contribution:
				'Analyzed why gradients through repeated state transitions can decay or grow, making long temporal dependencies difficult to learn.',
			impact:
				'Explained a failure of standard gradient-trained recurrent networks and motivated gated memory and alternative optimization methods.',
			exercise:
				'Plot the norm of a gradient propagated through repeated matrix products as the sequence length increases.',
			caveat:
				'The analysis concerns particular dynamical and training conditions; it is not an impossibility result for all recurrent learning.'
		},
		{
			id: 'lstm',
			year: 1997,
			label: 'Long short-term memory',
			theme: 'Sequence models',
			authors: 'Sepp Hochreiter & Jürgen Schmidhuber',
			title: 'Long Short-Term Memory',
			url: 'https://doi.org/10.1162/neco.1997.9.8.1735',
			contribution: 'Used gated memory cells to preserve error signals across long intervals.',
			impact: 'Addressed a central difficulty in training recurrent networks on long dependencies.',
			exercise: 'Compare a basic RNN and an LSTM on a delayed-copy task.',
			caveat:
				'Later LSTM variants added components such as forget gates. Long-range learning is not guaranteed on every task.'
		},
		{
			id: 'lenet',
			year: 1998,
			label: 'LeNet and document recognition',
			theme: 'Vision architectures',
			authors: 'Yann LeCun, Léon Bottou, Yoshua Bengio & Patrick Haffner',
			title: 'Gradient-Based Learning Applied to Document Recognition',
			url: 'https://bottou.org/papers/lecun-98h',
			contribution:
				'Described convolutional recognition systems and gradient-based training for document-processing pipelines.',
			impact:
				'Showed learned visual features and end-to-end objectives in deployed recognition tasks.',
			exercise:
				'Implement a LeNet-sized digit classifier; compare shared convolutions with a dense network.',
			caveat:
				'This paper consolidates a line of earlier CNN work rather than introducing every component in 1998.'
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
			id: 'xavier',
			year: 2010,
			label: 'Initialization and signal propagation',
			theme: 'Optimization & regularization',
			authors: 'Xavier Glorot & Yoshua Bengio',
			title: 'Understanding the Difficulty of Training Deep Feedforward Neural Networks',
			url: 'https://proceedings.mlr.press/v9/glorot10a.html',
			contribution:
				'Analyzed activation saturation and gradient propagation and proposed variance-scaled initialization.',
			impact:
				'Made initialization a property of signal flow through depth, rather than an arbitrary small-weight choice.',
			exercise:
				'Plot activation and gradient variance across layers under several initialization scales.',
			caveat:
				'The variance assumptions are approximate; rectifiers and other architectures can require different scaling.'
		},
		{
			id: 'relu',
			year: 2011,
			label: 'Rectified activations',
			theme: 'Optimization & regularization',
			authors: 'Xavier Glorot, Antoine Bordes & Yoshua Bengio',
			title: 'Deep Sparse Rectifier Neural Networks',
			url: 'https://proceedings.mlr.press/v15/glorot11a.html',
			contribution:
				'Studied sparse rectified activations in deep networks and their training behavior.',
			impact:
				'Provided evidence that nonsaturating positive activations could support supervised training without layer-wise pretraining.',
			exercise:
				'Compare sigmoid, tanh, and ReLU networks at the same depth and initialization budget.',
			caveat:
				'An influential empirical treatment, not the first use of rectification. Units can become inactive for all training examples.'
		},
		{
			id: 'alexnet',
			year: 2012,
			label: 'AlexNet',
			theme: 'Vision architectures',
			authors: 'Alex Krizhevsky, Ilya Sutskever & Geoffrey E. Hinton',
			title: 'ImageNet Classification with Deep Convolutional Neural Networks',
			url: 'https://proceedings.neurips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html',
			contribution:
				'Combined a deep CNN, GPU training, rectifiers, augmentation, and dropout for large-scale image classification.',
			impact:
				'Demonstrated a large improvement on ImageNet and accelerated adoption of learned visual representations.',
			exercise: 'Reproduce a small-data comparison between a CNN and a fixed-feature baseline.',
			caveat:
				'Results reflect the whole training system, dataset, and compute budget; they do not isolate one architectural ingredient.'
		},
		{
			id: 'word2vec',
			year: 2013,
			label: 'Word embeddings',
			theme: 'Sequence models',
			authors: 'Tomas Mikolov, Kai Chen, Greg Corrado & Jeffrey Dean',
			title: 'Efficient Estimation of Word Representations in Vector Space',
			url: 'https://arxiv.org/abs/1301.3781',
			contribution:
				'Proposed efficient objectives for learning continuous word representations from large text corpora.',
			impact:
				'Made pretrained word vectors practical inputs for many language models and downstream tasks.',
			exercise:
				'Train a small skip-gram model and inspect nearest neighbors for frequent and rare words.',
			caveat:
				'The paper is an early word2vec source; negative sampling and other details appear in subsequent work. Static vectors conflate word senses.'
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
			id: 'dropout',
			year: 2014,
			label: 'Dropout',
			theme: 'Optimization & regularization',
			authors: 'Nitish Srivastava et al.',
			title: 'Dropout: A Simple Way to Prevent Neural Networks from Overfitting',
			url: 'https://www.jmlr.org/papers/v15/srivastava14a.html',
			contribution:
				'Randomly omitted units during training and used a scaled network at test time.',
			impact:
				'Provided a regularizer that discourages dependence on particular hidden-unit combinations.',
			exercise: 'Compare training and validation curves with several dropout rates on a small MLP.',
			caveat:
				'The deterministic test network is not an exact ensemble average for arbitrary nonlinear networks.'
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
			id: 'vgg',
			year: 2015,
			label: 'VGG',
			theme: 'Vision architectures',
			authors: 'Karen Simonyan & Andrew Zisserman',
			title: 'Very Deep Convolutional Networks for Large-Scale Image Recognition',
			url: 'https://arxiv.org/abs/1409.1556',
			contribution: 'Systematically evaluated depth using stacks of small convolution filters.',
			impact:
				'Made repeated small convolutions a standard architecture pattern and supplied transferable visual features.',
			exercise:
				'Compare stacked 3×3 convolutions with a larger kernel at comparable receptive field.',
			caveat:
				'ICLR 2015; first preprint in 2014. The original networks have substantial parameter and memory costs.'
		},
		{
			id: 'bahdanau',
			year: 2015,
			label: 'Attention for sequence models',
			theme: 'Sequence models',
			authors: 'Dzmitry Bahdanau, Kyunghyun Cho & Yoshua Bengio',
			title: 'Neural Machine Translation by Jointly Learning to Align and Translate',
			url: 'https://arxiv.org/abs/1409.0473',
			contribution:
				'Learned soft alignment weights over input states for each generated output token.',
			impact:
				'Removed the need to compress every source detail into one fixed vector and provided a basis for later attention architectures.',
			exercise:
				'Add attention to a small encoder–decoder and compare performance on longer sequences.',
			caveat:
				'ICLR 2015; first preprint in 2014. Attention weights alone do not establish causal explanations of predictions.'
		},
		{
			id: 'adam',
			year: 2015,
			label: 'Adam',
			theme: 'Optimization & regularization',
			authors: 'Diederik P. Kingma & Jimmy Ba',
			title: 'Adam: A Method for Stochastic Optimization',
			url: 'https://arxiv.org/abs/1412.6980',
			contribution:
				'Adapted parameter updates using bias-corrected first and second gradient-moment estimates.',
			impact: 'Provided a widely used optimizer for noisy and differently scaled gradients.',
			exercise:
				'Implement one Adam update by hand and compare optimizer trajectories on a badly scaled quadratic.',
			caveat:
				'ICLR 2015; first preprint in 2014. Later work found limitations in the original convergence analysis.'
		},
		{
			id: 'batchnorm',
			year: 2015,
			label: 'Batch normalization',
			theme: 'Optimization & regularization',
			authors: 'Sergey Ioffe & Christian Szegedy',
			title:
				'Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift',
			url: 'https://arxiv.org/abs/1502.03167',
			contribution:
				'Normalized intermediate activations using minibatch statistics with learned scale and offset.',
			impact:
				'Allowed larger learning rates and changed how deep networks were initialized and trained.',
			exercise:
				'Compare training and inference outputs with small and large batches; inspect running statistics.',
			caveat:
				'The title states the original explanation, which later research questioned. Batch composition and train/eval behavior matter.'
		},
		{
			id: 'unet',
			year: 2015,
			label: 'U-Net',
			theme: 'Vision architectures',
			authors: 'Olaf Ronneberger, Philipp Fischer & Thomas Brox',
			title: 'U-Net: Convolutional Networks for Biomedical Image Segmentation',
			url: 'https://arxiv.org/abs/1505.04597',
			contribution:
				'Combined a contracting encoder with an expanding decoder and corresponding spatial skip connections.',
			impact:
				'Preserved fine localization while incorporating broader context for dense prediction.',
			exercise: 'Train a small segmentation model and ablate encoder–decoder skip connections.',
			caveat:
				'The original setting is biomedical segmentation with strong augmentation. Its results do not imply the same sample efficiency on every image domain.'
		},
		{
			id: 'distillation',
			year: 2015,
			label: 'Knowledge distillation',
			theme: 'Efficient architectures',
			authors: 'Geoffrey Hinton, Oriol Vinyals & Jeff Dean',
			title: 'Distilling the Knowledge in a Neural Network',
			url: 'https://arxiv.org/abs/1503.02531',
			contribution:
				'Trained a smaller student using softened teacher predictions as well as available labels.',
			impact: 'Transferred information from larger models or ensembles into cheaper predictors.',
			exercise:
				'Compare label-only and teacher-guided training for the same student, varying temperature.',
			caveat:
				'Distillation has earlier precursors. A student may inherit teacher errors and needs separate evaluation.'
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
			id: 'dqn',
			year: 2015,
			label: 'Deep Q-networks',
			theme: 'Deep reinforcement learning',
			authors: 'Volodymyr Mnih et al.',
			title: 'Human-Level Control through Deep Reinforcement Learning',
			url: 'https://doi.org/10.1038/nature14236',
			contribution:
				'Combined convolutional action-value estimation, experience replay, and target networks for Atari control.',
			impact:
				'Connected reinforcement learning directly to high-dimensional visual observations with a shared training procedure.',
			exercise:
				'Compare replay and target-network ablations in a small discrete-action environment.',
			caveat:
				'Results vary substantially across games. Off-policy bootstrapping with function approximation can still be unstable.'
		},
		{
			id: 'faster-rcnn',
			year: 2015,
			label: 'Learned region proposals',
			theme: 'Vision architectures',
			authors: 'Shaoqing Ren, Kaiming He, Ross Girshick & Jian Sun',
			title: 'Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks',
			url: 'https://arxiv.org/abs/1506.01497',
			contribution:
				'Shared convolutional features between a region-proposal network and an object detector.',
			impact:
				'Moved candidate-region generation into the learned detection system, reducing a major pipeline bottleneck.',
			exercise:
				'Inspect proposal recall before and after nonmaximum suppression on a small detection dataset.',
			caveat:
				'Detection quality depends on proposal coverage, anchors, localization, and evaluation thresholds; classification accuracy alone is insufficient.'
		},
		{
			id: 'he-initialization',
			year: 2015,
			label: 'Initialization for rectifiers',
			theme: 'Optimization & regularization',
			authors: 'Kaiming He, Xiangyu Zhang, Shaoqing Ren & Jian Sun',
			title:
				'Delving Deep into Rectifiers: Surpassing Human-Level Performance on ImageNet Classification',
			url: 'https://arxiv.org/abs/1502.01852',
			contribution:
				'Derived initialization accounting for rectifier nonlinearities and evaluated a learned parametric rectifier.',
			impact:
				'Extended variance-preserving initialization to rectified networks, supporting stable training at greater depth.',
			exercise:
				'Compare activation variance across a deep ReLU stack using equal-scale, Glorot, and He initialization.',
			caveat:
				'The paper includes both PReLU and initialization contributions. Independence and distribution assumptions in the variance calculation are approximations.'
		},
		{
			id: 'resnet',
			year: 2016,
			label: 'Residual networks',
			theme: 'Vision architectures',
			authors: 'Kaiming He, Xiangyu Zhang, Shaoqing Ren & Jian Sun',
			title: 'Deep Residual Learning for Image Recognition',
			url: 'https://arxiv.org/abs/1512.03385',
			contribution: 'Trained layers as residual changes around identity shortcuts.',
			impact:
				'Made substantially deeper networks easier to optimize and supplied a connectivity pattern adopted beyond CNNs.',
			exercise:
				'Compare equal-depth plain and residual networks; plot training loss and gradient norms.',
			caveat:
				'CVPR 2016; first preprint in 2015. Shortcuts help optimization but do not remove all effects of depth or initialization.'
		},
		{
			id: 'layernorm',
			year: 2016,
			label: 'Layer normalization',
			theme: 'Optimization & regularization',
			authors: 'Jimmy Lei Ba, Jamie Ryan Kiros & Geoffrey E. Hinton',
			title: 'Layer Normalization',
			url: 'https://arxiv.org/abs/1607.06450',
			contribution:
				'Normalized hidden activations within an example rather than across a minibatch.',
			impact:
				'Provided normalization independent of batch statistics, later used throughout transformer architectures.',
			exercise:
				'Compare batch and layer normalization on variable-length sequences with small batches.',
			caveat: 'The normalized axes and placement within a residual block change model behavior.'
		},
		{
			id: 'alphago',
			year: 2016,
			label: 'Neural policies, values, and search',
			theme: 'Deep reinforcement learning',
			authors: 'David Silver et al.',
			title: 'Mastering the Game of Go with Deep Neural Networks and Tree Search',
			url: 'https://doi.org/10.1038/nature16961',
			contribution:
				'Combined learned policy and value networks with Monte Carlo tree search for Go.',
			impact:
				'Demonstrated that learned evaluations and explicit planning can complement each other on a large decision space.',
			exercise:
				'Compare a learned policy alone with a small search procedure using its action probabilities.',
			caveat:
				'This AlphaGo system used human-game data and multiple training stages. Later self-play-only systems are separate work.'
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
			id: 'generalization',
			year: 2017,
			label: 'Memorization and generalization',
			theme: 'Theory & evaluation',
			authors: 'Chiyuan Zhang et al.',
			title: 'Understanding Deep Learning Requires Rethinking Generalization',
			url: 'https://arxiv.org/abs/1611.03530',
			contribution:
				'Showed that networks can fit random labels as well as meaningful labels under similar training procedures.',
			impact:
				'Challenged explanations that attributed generalization solely to architecture size or explicit regularization.',
			exercise: 'Compare train and test performance after partially or fully randomizing labels.',
			caveat:
				'ICLR 2017; first preprint in 2016. Memorizing random labels does not mean the same trained model cannot learn useful structure.'
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
			id: 'ppo',
			year: 2017,
			label: 'Proximal policy optimization',
			theme: 'Deep reinforcement learning',
			authors: 'John Schulman et al.',
			title: 'Proximal Policy Optimization Algorithms',
			url: 'https://arxiv.org/abs/1707.06347',
			contribution:
				'Used surrogate policy objectives, including clipped probability ratios, for repeated minibatch updates on collected trajectories.',
			impact:
				'Provided a relatively simple policy-gradient training procedure used in control and later language-model post-training.',
			exercise:
				'Implement the clipped objective and inspect how it changes for positive and negative advantages.',
			caveat:
				'Clipping is not a general guarantee of monotonically improving return or bounded policy divergence.'
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
			id: 'gcn',
			year: 2017,
			label: 'Graph convolutional networks',
			theme: 'Graph learning',
			authors: 'Thomas N. Kipf & Max Welling',
			title: 'Semi-Supervised Classification with Graph Convolutional Networks',
			url: 'https://arxiv.org/abs/1609.02907',
			contribution:
				'Used normalized neighborhood aggregation motivated by an approximation to spectral graph convolutions.',
			impact:
				'Made graph structure and node features jointly usable for semi-supervised node classification.',
			exercise:
				'Implement one graph-convolution layer and compare with feature-only classification.',
			caveat:
				'ICLR 2017; first preprint in 2016. Transductive use of the graph must be distinguished from label leakage and inductive evaluation.'
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
			id: 'gat',
			year: 2018,
			label: 'Graph attention networks',
			theme: 'Graph learning',
			authors: 'Petar Veličković et al.',
			title: 'Graph Attention Networks',
			url: 'https://arxiv.org/abs/1710.10903',
			contribution: 'Learned attention weights over graph neighborhoods to combine node features.',
			impact:
				'Made neighborhood aggregation data-dependent rather than using only fixed graph normalization.',
			exercise: 'Compare uniform aggregation and learned attention on the same graph split.',
			caveat:
				'ICLR 2018; first preprint in 2017. Neighborhood attention weights do not prove edge importance or causal influence.'
		},
		{
			id: 'ntk',
			year: 2018,
			label: 'Neural tangent kernels',
			theme: 'Theory & evaluation',
			authors: 'Arthur Jacot, Franck Gabriel & Clément Hongler',
			title: 'Neural Tangent Kernel: Convergence and Generalization in Neural Networks',
			url: 'https://arxiv.org/abs/1806.07572',
			contribution:
				'Related parameter-gradient training to kernel evolution and derived a fixed-kernel limit for infinitely wide networks under stated scaling assumptions.',
			impact:
				'Made aspects of neural-network optimization analyzable in function space and connected them with kernel regression.',
			exercise:
				'Compute an empirical tangent kernel for a small network and measure how it changes during training.',
			caveat:
				'The infinite-width regime does not explain every finite-width feature-learning behavior. Kernel-limit conclusions require their scaling and training assumptions.'
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
			id: 'bert',
			year: 2019,
			label: 'BERT',
			theme: 'Transformers & language',
			authors: 'Jacob Devlin, Ming-Wei Chang, Kenton Lee & Kristina Toutanova',
			title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
			url: 'https://arxiv.org/abs/1810.04805',
			contribution:
				'Pretrained bidirectional transformer encoders with masked-token prediction and a sentence-pair objective.',
			impact:
				'Made one pretrained text encoder adaptable to many supervised language-understanding tasks.',
			exercise:
				'Fine-tune a small masked-language encoder on classification and compare with frozen features.',
			caveat:
				'NAACL 2019; first preprint in 2018. Masked prediction differs from causal generation.'
		},
		{
			id: 'adamw',
			year: 2019,
			label: 'AdamW',
			theme: 'Optimization & regularization',
			authors: 'Ilya Loshchilov & Frank Hutter',
			title: 'Decoupled Weight Decay Regularization',
			url: 'https://arxiv.org/abs/1711.05101',
			contribution:
				'Separated parameter decay from the gradient transformation used by adaptive optimizers.',
			impact: 'Corrected the common conflation of L2 penalties and weight decay under Adam.',
			exercise: 'Compare one Adam-with-L2 step and one AdamW step with identical gradients.',
			caveat:
				'ICLR 2019; first preprint in 2017. Learning-rate schedules and parameter groups still affect the effective regularization.'
		},
		{
			id: 'lottery-ticket',
			year: 2019,
			label: 'Sparse subnetworks and initialization',
			theme: 'Theory & evaluation',
			authors: 'Jonathan Frankle & Michael Carbin',
			title: 'The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks',
			url: 'https://arxiv.org/abs/1803.03635',
			contribution:
				'Found pruned subnetworks whose original initial weights allowed effective retraining.',
			impact:
				'Connected pruning with initialization and training dynamics, rather than treating compression only as a post-training operation.',
			exercise:
				'Prune a small MLP and compare retraining from original versus newly randomized weights.',
			caveat:
				'ICLR 2019; first preprint in 2018. Finding the subnetwork can cost more than training the dense network once.'
		},
		{
			id: 'sac',
			year: 2019,
			label: 'Soft actor-critic',
			theme: 'Deep reinforcement learning',
			authors: 'Tuomas Haarnoja et al.',
			title: 'Soft Actor-Critic Algorithms and Applications',
			url: 'https://arxiv.org/abs/1812.05905',
			contribution:
				'Developed an off-policy actor–critic maximizing expected reward plus an entropy term, including automatic temperature adjustment.',
			impact: 'Combined replay-based learning with a stochastic policy for continuous control.',
			exercise:
				'Compare entropy coefficients and replay budgets on one small continuous-control task.',
			caveat:
				'This 2019 revision of a 2018 preprint extends the earlier SAC algorithm. Results remain sensitive to environment and implementation.'
		},
		{
			id: 'simclr',
			year: 2020,
			label: 'Contrastive visual representations',
			theme: 'Representation learning',
			authors: 'Ting Chen, Simon Kornblith, Mohammad Norouzi & Geoffrey Hinton',
			title: 'A Simple Framework for Contrastive Learning of Visual Representations',
			url: 'https://arxiv.org/abs/2002.05709',
			contribution:
				'Learned representations by matching augmented views using a contrastive objective and projection head.',
			impact:
				'Showed how augmentations, projection heads, and training budgets affect label-free visual feature learning.',
			exercise:
				'Compare linear-probe accuracy with and without a projection head under the same augmentations.',
			caveat:
				'Augmentations encode assumptions about invariance. Some can remove information needed by a downstream task.'
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
			id: 'moco',
			year: 2020,
			label: 'Momentum contrast',
			theme: 'Representation learning',
			authors: 'Kaiming He, Haoqi Fan, Yuxin Wu, Saining Xie & Ross Girshick',
			title: 'Momentum Contrast for Unsupervised Visual Representation Learning',
			url: 'https://arxiv.org/abs/1911.05722',
			contribution:
				'Built a queue of contrastive keys using a moving-average encoder to maintain a large training dictionary.',
			impact:
				'Reduced the dependence of contrastive representation learning on a single large batch of negative examples.',
			exercise:
				'Compare queue sizes and momentum coefficients with the same image backbone and augmentation pipeline.',
			caveat:
				'CVPR 2020; first preprint in 2019. Stale keys and augmentation assumptions affect the training signal.'
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
			id: 'vit',
			year: 2021,
			label: 'Vision transformers',
			theme: 'Vision architectures',
			authors: 'Alexey Dosovitskiy et al.',
			title: 'An Image Is Worth 16x16 Words: Transformers for Image Recognition at Scale',
			url: 'https://arxiv.org/abs/2010.11929',
			contribution: 'Applied a transformer to image-patch tokens with large-scale pretraining.',
			impact:
				'Showed that image representations could be learned without a convolutional backbone when data and training were sufficient.',
			exercise: 'Compare a patch transformer and a CNN under small-data and pretrained settings.',
			caveat:
				'ICLR 2021; first preprint in 2020. Data scale and regularization are essential parts of the comparison.'
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
			id: 'dino',
			year: 2021,
			label: 'DINO',
			theme: 'Representation learning',
			authors: 'Mathilde Caron et al.',
			title: 'Emerging Properties in Self-Supervised Vision Transformers',
			url: 'https://arxiv.org/abs/2104.14294',
			contribution:
				'Trained student and moving-average teacher networks to agree across image crops without labels.',
			impact:
				'Demonstrated useful visual features and spatial structure from self-distillation without labeled targets.',
			exercise: 'Inspect frozen features and linear-probe accuracy after changing crop scales.',
			caveat:
				'Preventing collapse depends on the training recipe. Attention maps are not automatically accurate segmentation masks.'
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
			id: 'mae',
			year: 2022,
			label: 'Masked image modeling',
			theme: 'Representation learning',
			authors: 'Kaiming He et al.',
			title: 'Masked Autoencoders Are Scalable Vision Learners',
			url: 'https://arxiv.org/abs/2111.06377',
			contribution:
				'Reconstructed masked image patches using an encoder processing only visible patches and a lightweight decoder.',
			impact: 'Made high-mask-rate reconstruction an effective visual pretraining objective.',
			exercise:
				'Compare mask ratios with the same encoder and measure frozen-feature and fine-tuned accuracy.',
			caveat:
				'CVPR 2022; first preprint in 2021. Good reconstruction is not sufficient evidence of useful features for every task.'
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
			id: 'flashattention',
			year: 2022,
			label: 'FlashAttention',
			theme: 'Efficient architectures',
			authors: 'Tri Dao et al.',
			title: 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness',
			url: 'https://arxiv.org/abs/2205.14135',
			contribution:
				'Tiled exact attention computations to reduce transfers between GPU memory levels.',
			impact:
				'Improved attention memory use and runtime without replacing the mathematical attention operation with an approximation.',
			exercise:
				'Compare output agreement, peak memory, and runtime with a standard attention implementation.',
			caveat:
				'The attention arithmetic remains quadratic in sequence length. Benefits depend on hardware, shapes, and implementation.'
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
			id: 'switch',
			year: 2022,
			label: 'Sparse mixture-of-experts transformers',
			theme: 'Efficient architectures',
			authors: 'William Fedus, Barret Zoph & Noam Shazeer',
			title:
				'Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity',
			url: 'https://arxiv.org/abs/2101.03961',
			contribution:
				'Routed tokens to a selected feedforward expert while addressing load balance and training stability.',
			impact: 'Increased parameter capacity without activating all parameters for every token.',
			exercise:
				'Implement a toy router and measure expert utilization under a skewed input distribution.',
			caveat:
				'JMLR 2022; first preprint in 2021. Sparse activation does not remove communication, routing, or model-storage costs.'
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
			id: 'sam',
			year: 2023,
			label: 'Promptable segmentation',
			theme: 'Vision architectures',
			authors: 'Alexander Kirillov et al.',
			title: 'Segment Anything',
			url: 'https://arxiv.org/abs/2304.02643',
			contribution:
				'Combined promptable segmentation with a large mask dataset built using a model-assisted collection pipeline.',
			impact:
				'Made one segmentation model reusable across prompts and datasets, with data collection part of the method.',
			exercise: 'Compare point and box prompts on held-out images with small or ambiguous objects.',
			caveat:
				'Mask quality and transfer vary with the domain and prompt. The training dataset is not representative of every segmentation setting.'
		},
		{
			id: 'dinov2',
			year: 2023,
			label: 'DINOv2',
			theme: 'Representation learning',
			authors: 'Maxime Oquab et al.',
			title: 'DINOv2: Learning Robust Visual Features without Supervision',
			url: 'https://arxiv.org/abs/2304.07193',
			contribution:
				'Scaled self-supervised visual pretraining with curated data and global and patch-level training objectives.',
			impact:
				'Produced frozen visual features useful across several tasks without task-specific fine-tuning.',
			exercise:
				'Compare a frozen linear probe with full fine-tuning on a small domain-shifted dataset.',
			caveat:
				'Feature quality depends on data curation and evaluation protocol. Frozen-feature transfer is not the same as end-to-end task performance.',
			sourceType: 'Research paper'
		},
		{
			id: 'mamba',
			year: 2023,
			label: 'Selective state-space models',
			theme: 'Efficient architectures',
			authors: 'Albert Gu & Tri Dao',
			title: 'Mamba: Linear-Time Sequence Modeling with Selective State Spaces',
			url: 'https://arxiv.org/abs/2312.00752',
			contribution:
				'Made state-space updates input-dependent and used hardware-aware execution for efficient sequence modeling.',
			impact:
				'Provided an alternative sequence-mixing mechanism with linear sequence-length scaling in its stated formulation.',
			exercise:
				'Compare recurrent inference state size and throughput with a small attention model.',
			caveat:
				'Dated by its December 2023 preprint; a later revision appeared in 2024. Retrieval and content-based reasoning behavior differ from attention.'
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
			id: 'vjepa2',
			year: 2025,
			label: 'Predictive video representations',
			theme: 'Recent research',
			authors: 'Mido Assran et al.',
			title: 'V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning',
			url: 'https://arxiv.org/abs/2506.09985',
			contribution:
				'Learned predictive video features from unlabeled video and adapted a model with robot interaction data for action-conditioned prediction.',
			impact:
				'Connected video representation learning with model-based planning in evaluated robotic tasks.',
			exercise:
				'Compare prediction in embedding space with pixel reconstruction and inspect sensitivity to camera or action changes.',
			caveat:
				'The video model and action-conditioned robot model use different training stages. The demonstrated tasks do not establish a universal physical simulator.',
			sourceType: 'Research paper'
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
			id: 'dinov3',
			year: 2025,
			label: 'DINOv3',
			theme: 'Recent research',
			authors: 'Oriane Siméoni et al.',
			title: 'DINOv3',
			url: 'https://arxiv.org/abs/2508.10104',
			contribution:
				'Scaled self-supervised visual training and introduced methods to preserve dense feature quality during extended training.',
			impact: 'Evaluated a shared visual backbone for both global and dense downstream tasks.',
			exercise:
				'Compare global image features and patch features using separate classification and dense-prediction evaluations.',
			caveat:
				'Results depend on the pretrained checkpoint, data, and downstream protocol. This report is a selected research entry, not a universal ranking.',
			sourceType: 'Research paper'
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
		},
		{
			id: 'vjepa21',
			year: 2026,
			label: 'Dense video features',
			theme: 'Recent research',
			authors: 'Lorenzo Mur-Labadia et al.',
			title: 'V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning',
			url: 'https://arxiv.org/abs/2603.14482',
			contribution:
				'Used a dense predictive objective involving visible and masked tokens for image and video feature learning.',
			impact: 'Studied spatial and temporal feature quality alongside global scene understanding.',
			exercise:
				'Evaluate frozen patch features on a localization task and compare with pooled video classification features.',
			caveat:
				'March 2026 preprint, revised June. Dense-feature improvements are tied to the evaluated tasks and protocols.',
			sourceType: 'Research preprint'
		}
	]
};
