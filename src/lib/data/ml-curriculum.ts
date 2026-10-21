export type StudyStage = {
	id: string;
	title: string;
	level: 'Foundations' | 'Further study' | 'Research';
	before: string;
	goal: string;
	checkpoint: string;
	readings: string[];
	core: string[];
};

// A teaching sequence, independent of publication dates. "Core" is relative to its stage.
export const mlCurriculum: StudyStage[] = [
	{
		id: 'prediction',
		title: 'Regression and classification',
		level: 'Foundations',
		before: 'Vectors, derivatives, conditional probability, and basic Python or NumPy.',
		goal: 'Inputs, targets, loss functions, fitted scores, class probabilities, and held-out prediction error.',
		checkpoint:
			'Implement least squares and logistic regression. Derive their gradients, compare with a nearest-neighbor baseline, and explain errors on held-out data.',
		readings: ['least-squares', 'logistic-regression', 'perceptron', 'nearest-neighbor', 'lda'],
		core: ['least-squares', 'logistic-regression', 'nearest-neighbor']
	},
	{
		id: 'evaluation',
		title: 'Estimation, regularization, and evaluation',
		level: 'Foundations',
		before: 'Stage 1; expectations, variance, likelihood, and train/validation/test splitting.',
		goal: 'Overfitting, bias and variance, regularization, model selection, and uncertainty estimation.',
		checkpoint:
			'Build a preprocessing and tuning pipeline with nested validation. Compare ridge and lasso, quantify variability, and explain why test data must stay outside tuning.',
		readings: [
			'bayes',
			'ridge',
			'cross-validation',
			'lasso',
			'bootstrap',
			'aic',
			'mdl',
			'learnability',
			'vc-theory',
			'conformal'
		],
		core: ['ridge', 'cross-validation', 'lasso', 'bootstrap']
	},
	{
		id: 'nonlinear',
		title: 'Trees, kernels, and ensembles',
		level: 'Foundations',
		before: 'Stages 1–2; entropy, convex objectives, and the meaning of a margin.',
		goal: 'Decision rules, margins, kernels, bootstrap aggregation, and sequential loss minimization.',
		checkpoint:
			'Fit a tree, a kernel SVM, a random forest, and gradient boosting with equal tuning budgets. Explain the bias, variance, runtime, and error differences.',
		readings: [
			'decision-trees',
			'svm',
			'bagging',
			'random-forests',
			'gradient-boosting',
			'adaboost',
			'weak-learnability',
			'xgboost',
			'lightgbm',
			'catboost',
			'random-features'
		],
		core: ['decision-trees', 'svm', 'bagging', 'random-forests', 'gradient-boosting']
	},
	{
		id: 'structure',
		title: 'Unsupervised learning',
		level: 'Foundations',
		before: 'Stages 1–2; eigenvectors, distances, Gaussian distributions, and likelihood.',
		goal: 'Projection, clustering, density estimation, and their different objectives.',
		checkpoint:
			'Implement PCA and k-means, fit a Gaussian mixture with EM, and compare with DBSCAN. Explain why a visually convincing embedding is not proof of valid clusters.',
		readings: [
			'pca',
			'k-means',
			'em',
			'gaussian-mixtures',
			'ward',
			'dbscan',
			'spectral-clustering',
			'tsne'
		],
		core: ['pca', 'k-means', 'em', 'dbscan']
	},
	{
		id: 'probability',
		title: 'Probabilistic models and inference',
		level: 'Further study',
		before:
			'Stages 1–2 and EM from stage 4; conditional independence, Bayes’ rule, and multivariate Gaussians.',
		goal: 'Conditional independence, latent variables, exact inference, sampling, and variational approximation.',
		checkpoint:
			'Implement forward inference for an HMM. Compare exact and approximate inference on a small model; identify where assumptions and approximation error enter.',
		readings: [
			'belief-networks',
			'hmm-tutorial',
			'baum-petrie',
			'gaussian-processes',
			'metropolis',
			'variational-inference',
			'topic-models',
			'crf'
		],
		core: ['belief-networks', 'hmm-tutorial', 'gaussian-processes']
	},
	{
		id: 'optimization',
		title: 'Optimization and experiment budgets',
		level: 'Further study',
		before:
			'Stages 1–3; gradients, convexity, expectations, and validation protocols. Gaussian process regression for Bayesian optimization.',
		goal: 'Parameter optimization, hyperparameter search, and resource allocation.',
		checkpoint:
			'Compare gradient methods on one fixed loss, then random search and Bayesian optimization under a fixed trial budget. Report validation and final test results separately.',
		readings: [
			'stochastic-approximation',
			'online-convex-learning',
			'adagrad',
			'random-search',
			'bayesian-optimization',
			'hyperband',
			'autogluon'
		],
		core: ['stochastic-approximation', 'random-search']
	},
	{
		id: 'decisions',
		title: 'Sequential decisions and reinforcement learning',
		level: 'Further study',
		before:
			'Stages 1–2 and stochastic approximation; Markov chains, conditional expectations, and discounted sums.',
		goal: 'Markov decision processes, value estimation, control, policy gradients, and exploration.',
		checkpoint:
			'Solve a small known MDP, then learn it with tabular Q-learning. Compare TD and Monte Carlo estimates and explain the effect of exploration.',
		readings: ['bellman', 'td-learning', 'q-learning', 'reinforce', 'ucb', 'checkers'],
		core: ['bellman', 'td-learning', 'q-learning']
	},
	{
		id: 'causality',
		title: 'Causal inference',
		level: 'Further study',
		before:
			'Stages 1–2; conditional independence, confounding, and the difference between prediction and intervention.',
		goal: 'Causal graphs, interventions, identification, covariate adjustment, and treatment effects.',
		checkpoint:
			'Simulate confounding and estimate a treatment effect. Explain the adjustment set, overlap requirements, and what happens with an unobserved confounder.',
		readings: ['causal-diagrams', 'propensity-score', 'causal-trees'],
		core: ['causal-diagrams', 'propensity-score']
	},
	{
		id: 'data-collection',
		title: 'Labels, recommendations, and observed data',
		level: 'Further study',
		before: 'Stages 1–4; propensity scores for selection bias in recommendation.',
		goal: 'Label acquisition, data geometry, latent user–item factors, and exposure bias.',
		checkpoint:
			'Compare random and active label acquisition, then evaluate a recommender with biased exposure. Identify which outcomes are missing and why.',
		readings: [
			'active-learning',
			'manifold-regularization',
			'matrix-factorization',
			'recommendation-bias'
		],
		core: ['active-learning', 'matrix-factorization']
	},
	{
		id: 'research',
		title: 'Recent tabular prediction research',
		level: 'Research',
		before: 'Stages 1–6; transformers, attention, and in-context learning.',
		goal: 'Tabular models and benchmarks: datasets, baselines, tuning budgets, inference costs, and validation splits.',
		checkpoint:
			'Reproduce a small comparison using fixed splits and equal budgets. Report uncertainty, latency, and failures; explain why its ranking need not hold on another task.',
		readings: [
			'trees-vs-neural',
			'tabpfn',
			'tabpfn-v2',
			'tabicl',
			'tabarena',
			'tabpfn-2-5',
			'tabicl-v2',
			'tabpfn-3',
			'beyondarena',
			'tabpfn-3-5'
		],
		core: []
	}
];

export const mlPreparation = [
	{
		title: 'Mathematics for Machine Learning',
		url: 'https://mml-book.github.io/',
		note: 'Chapters 2–7: linear algebra, geometry, matrix decompositions, calculus, probability, and optimization.'
	},
	{
		title: 'An Introduction to Statistical Learning',
		url: 'https://www.statlearning.com/',
		note: 'Regression, classification, resampling, regularization, and unsupervised learning; chapters and labs for stages 1–4.'
	},
	{
		title: 'Stanford CS229 notes',
		url: 'https://cs229.stanford.edu/main_notes.pdf',
		note: 'Supervised learning, kernel methods, learning theory, and EM; derivations and worked notation.'
	}
];
