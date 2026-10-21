import { generativeAITimeline } from './generative-ai';
import { deepLearningTimeline } from './deep-learning';

export type TimelineEntry = {
	sourceType?: string;
	id: string;
	year: number;
	label: string;
	theme: string;
	authors: string;
	title: string;
	url: string;
	contribution: string;
	impact: string;
	exercise: string;
	caveat: string;
};
export type Timeline = {
	reviewedAt: string;
	scope: string;
	slug: string;
	title: string;
	description: string;
	entries: TimelineEntry[];
};

// Add another Timeline object here to publish a new collection and its route.
export const timelines: Timeline[] = [
	{
		slug: 'machine-learning',
		title: 'Machine learning',
		description:
			'Original papers on machine learning, with method summaries, results, and exercises.',
		entries: [
			{
				id: 'bayes',
				year: 1763,
				label: 'Bayesian inference',
				theme: 'Statistical foundations',
				authors: 'Thomas Bayes; communicated and edited by Richard Price',
				title: 'An Essay towards Solving a Problem in the Doctrine of Chances',
				url: 'https://www.gtfp.cs.rhul.ac.uk/pulskamp/Bayes/bayesessay-rjp.pdf',
				contribution:
					'Solved an inverse-probability problem: infer an unknown chance of success from observed successes and failures.',
				impact:
					'Provided an early formulation of updating uncertainty from observations, later developed into Bayesian estimation and prediction.',
				exercise:
					'Update a uniform prior after observing seven successes and three failures. Compare the posterior with the maximum-likelihood estimate.',
				caveat:
					'This historical result predates ML and treats a particular probability model. Modern Bayesian methods include substantial later developments.'
			},
			{
				id: 'least-squares',
				year: 1805,
				label: 'Least squares',
				theme: 'Statistical foundations',
				authors: 'Adrien-Marie Legendre',
				title: 'Nouvelles méthodes pour la détermination des orbites des comètes',
				url: 'https://www.e-rara.ch/zut/content/titleinfo/10838079',
				contribution:
					'Published the method of least squares in an appendix on estimating quantities from inconsistent observations.',
				impact:
					'Made minimizing squared residuals an explicit estimation rule. Linear regression and many later learning objectives use this criterion.',
				exercise:
					'Fit a line to noisy observations by minimizing the sum of squared residuals. Compare sensitivity to one extreme observation.',
				caveat:
					'An original monograph in French, rather than an ML paper. Least squares has a wider history, including Gauss’s later treatment.',
				sourceType: 'Historical monograph'
			},
			{
				id: 'gaussian-mixtures',
				year: 1894,
				label: 'Gaussian mixture estimation',
				theme: 'Probabilistic models',
				authors: 'Karl Pearson',
				title:
					'Contributions to the Mathematical Theory of Evolution. I. On the Dissection of Asymmetrical Frequency-Curves',
				url: 'https://quantresearch.org/1894_Pearson_Transactions_Royal_Society.pdf',
				contribution:
					'Fitted a mixture of two normal distributions using moment equations to describe an asymmetric observed distribution.',
				impact:
					'Showed how an observed distribution could be explained using unobserved component populations, a precursor to latent-variable modeling.',
				exercise:
					'Generate a two-Gaussian mixture. Compare a single Gaussian fit with a mixture fit and inspect the estimated component weights.',
				caveat:
					'The method uses moments, not the later EM algorithm. A good mixture fit does not establish that its components are real biological groups.'
			},
			{
				id: 'pca',
				year: 1901,
				label: 'PCA',
				theme: 'Unsupervised learning',
				authors: 'Karl Pearson',
				title: 'On Lines and Planes of Closest Fit to Systems of Points in Space',
				url: 'https://doi.org/10.1080/14786440109462720',
				contribution:
					'Approximated a cloud of points with a line or plane by minimizing squared perpendicular distances.',
				impact:
					'Reduced the number of coordinates needed to describe a dataset. PCA later became a standard tool for compression, visualization, and preprocessing.',
				exercise:
					'Project an elongated 2D cloud onto its best-fitting line and measure reconstruction error.',
				caveat:
					'The direction of greatest variation is not necessarily the most useful direction for prediction.'
			},
			{
				id: 'lda',
				year: 1936,
				label: 'Linear discriminant analysis',
				theme: 'Supervised learning',
				authors: 'Ronald A. Fisher',
				title: 'The Use of Multiple Measurements in Taxonomic Problems',
				url: 'https://onlinelibrary.wiley.com/doi/10.1111/j.1469-1809.1936.tb02137.x',
				contribution:
					'Combined measurements into a linear score that separates groups relative to their within-group variation.',
				impact:
					'Used class labels to choose a projection that separates groups. This gives a supervised alternative to choosing directions by variance alone.',
				exercise:
					'Separate two Iris species using two measurements. Compare the discriminant direction with PCA.',
				caveat: 'PCA preserves variation; discriminant analysis uses labels to seek separation.'
			},
			{
				id: 'stochastic-approximation',
				year: 1951,
				label: 'Stochastic approximation',
				theme: 'Supervised learning',
				authors: 'Herbert Robbins & Sutton Monro',
				title: 'A Stochastic Approximation Method',
				url: 'https://www.columbia.edu/~ww2040/8100F16/RM51.pdf',
				contribution:
					'Found the root of an unknown expected response through successive updates using noisy observations.',
				impact:
					'Showed that repeated noisy observations can be enough for convergence. The same principle underlies stochastic gradient methods.',
				exercise: 'Estimate a target from noisy observations using a decreasing step size.',
				caveat:
					'This is stochastic root finding, rather than the complete modern neural-network training procedure.'
			},
			{
				id: 'metropolis',
				year: 1953,
				label: 'Monte Carlo sampling',
				theme: 'Probabilistic models',
				authors:
					'Nicholas Metropolis, Arianna W. Rosenbluth, Marshall N. Rosenbluth, Augusta H. Teller & Edward Teller',
				title: 'Equation of State Calculations by Fast Computing Machines',
				url: 'https://bayes.wustl.edu/Manual/Metropolis.pdf',
				contribution:
					'Used accept–reject transitions to sample configurations according to their relative statistical weights.',
				impact:
					'Provided a basis for Markov chain Monte Carlo, later used to approximate posterior expectations when exact integration is impractical.',
				exercise:
					'Sample a bimodal distribution with a random-walk Metropolis chain. Compare results from several starting points.',
				caveat:
					'The original application is statistical physics. Later Hastings generalizations allow asymmetric proposals; a chain can mix slowly even when its stationary distribution is correct.'
			},
			{
				id: 'bellman',
				year: 1957,
				label: 'Markov decision processes',
				theme: 'Reinforcement learning',
				authors: 'Richard Bellman',
				title: 'A Markovian Decision Process',
				url: 'https://iumj.org/article/1116/',
				contribution:
					'Analyzed recursive optimization for decisions in a Markovian system using relations between finite-horizon value functions.',
				impact:
					'Connected the value of a decision to expected future value. These recursions underpin dynamic programming and later value-based reinforcement learning.',
				exercise:
					'Write value-iteration updates for a three-state decision problem with known transition probabilities.',
				caveat:
					'This is a planning formulation with a known model; learning from unknown dynamics requires additional methods.'
			},
			{
				id: 'perceptron',
				year: 1958,
				label: 'The perceptron',
				theme: 'Supervised learning',
				authors: 'Frank Rosenblatt',
				title:
					'The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain',
				url: 'https://doi.org/10.1037/h0042519',
				contribution:
					'Proposed a trainable recognition system inspired by nervous systems, with adjustable connections.',
				impact:
					'Learned recognition weights from examples. Later neural-network methods extended weight learning to more complex models.',
				exercise: 'Implement the basic perceptron update. Train on AND and OR, then try XOR.',
				caveat:
					'A single linear threshold classifier cannot represent XOR using the original two inputs.'
			},
			{
				id: 'logistic-regression',
				year: 1958,
				label: 'Logistic regression',
				theme: 'Statistical foundations',
				authors: 'D. R. Cox',
				title: 'The Regression Analysis of Binary Sequences',
				url: 'https://doi.org/10.1111/j.2517-6161.1958.tb00292.x',
				contribution:
					'Studied regression for binary observations whose success probabilities depend on explanatory variables.',
				impact:
					'Connected binary outcomes with regression-based probability estimation, part of the development of logistic models used in classification.',
				exercise:
					'Fit a logistic model and plot predicted probabilities as one input changes. Compare log loss with classification accuracy.',
				caveat:
					'Logistic regression has earlier roots. This paper studies binary sequences and is not the sole origin of the logistic function or binary regression.'
			},
			{
				id: 'checkers',
				year: 1959,
				label: 'Learning from experience',
				theme: 'Reinforcement learning',
				authors: 'Arthur Samuel',
				title: 'Some Studies in Machine Learning Using the Game of Checkers',
				url: 'https://doi.org/10.1147/rd.33.0210',
				contribution:
					'Described checkers programs that improved using stored experience and learned board-evaluation parameters.',
				impact:
					'Combined game search with an evaluation function that improved through experience. This connected prediction of outcomes with choosing actions.',
				exercise:
					'Design a game-position score and identify which weights could be learned from game outcomes.',
				caveat:
					'Search, stored experience, and learning an evaluation function play different roles.'
			},
			{
				id: 'ward',
				year: 1963,
				label: 'Hierarchical clustering',
				theme: 'Unsupervised learning',
				authors: 'Joe H. Ward Jr.',
				title: 'Hierarchical Grouping to Optimize an Objective Function',
				url: 'https://iv.cns.iu.edu/sw/data/ward.pdf',
				contribution:
					'Built a hierarchy by repeatedly joining groups according to an objective measuring the loss caused by each merge.',
				impact:
					'Made hierarchical clustering an explicit sequence of objective-based decisions; the familiar Ward criterion minimizes the increase in within-cluster squared error.',
				exercise:
					'Construct a dendrogram for a small dataset. Compare Ward and single-linkage merges.',
				caveat:
					'Agglomerative merges are irreversible. The squared-error interpretation assumes the appropriate Euclidean geometry.'
			},
			{
				id: 'baum-petrie',
				year: 1966,
				label: 'Hidden Markov models: estimation',
				theme: 'Probabilistic models',
				authors: 'Leonard E. Baum & Ted Petrie',
				title: 'Statistical Inference for Probabilistic Functions of Finite State Markov Chains',
				url: 'https://doi.org/10.1214/aoms/1177699147',
				contribution:
					'Studied estimation for observations generated by an unobserved finite-state Markov chain.',
				impact:
					'Provided statistical foundations for hidden-state sequence models, later used in speech recognition, biological sequences, and time-series analysis.',
				exercise:
					'Generate observations from a two-state hidden chain. Compare a model with independent observations against one with persistent hidden states.',
				caveat:
					'This paper is part of a sequence of HMM developments. Later work supplied the commonly taught Baum–Welch training procedure.'
			},
			{
				id: 'nearest-neighbor',
				year: 1967,
				label: 'Nearest neighbors',
				theme: 'Supervised learning',
				authors: 'Thomas Cover & Peter Hart',
				title: 'Nearest Neighbor Pattern Classification',
				url: 'https://doi.org/10.1109/TIT.1967.1053964',
				contribution:
					'Analyzed nearest-neighbor classification and bounded its asymptotic error relative to the optimal Bayes classifier under suitable conditions.',
				impact:
					'Bounded the error of a classifier that stores examples instead of fitting a fixed parametric model.',
				exercise:
					'Implement 1-nearest neighbor. Rescale one feature and observe how predictions change.',
				caveat:
					'Similarity depends on representation and distance. This paper analyzed an existing idea.'
			},
			{
				id: 'k-means',
				year: 1967,
				label: 'K-means clustering',
				theme: 'Unsupervised learning',
				authors: 'James MacQueen',
				title: 'Some Methods for Classification and Analysis of Multivariate Observations',
				url: 'https://digicoll.lib.berkeley.edu/record/113015?v=pdf',
				contribution:
					'Presented clustering procedures associated with the term k-means, including updating cluster means as observations arrive.',
				impact:
					'Made cluster centers into a simple representation of unlabeled data, with assignments based on distance.',
				exercise:
					'Cluster 2D points with several initializations and compare squared-distance objectives.',
				caveat:
					'A low objective does not prove that clusters have meaningful real-world interpretations. The proceedings were published in 1967.'
			},
			{
				id: 'ridge',
				year: 1970,
				label: 'Ridge regression',
				theme: 'Statistical foundations',
				authors: 'Arthur E. Hoerl & Robert W. Kennard',
				title: 'Ridge Regression: Biased Estimation for Nonorthogonal Problems',
				url: 'https://homepages.math.uic.edu/~lreyzin/papers/ridge.pdf',
				contribution:
					'Stabilized regression estimates by modifying the least-squares normal equations with a positive diagonal term.',
				impact:
					'Showed how accepting bias can reduce estimation error when predictors are correlated. This is a central example of regularization.',
				exercise:
					'Fit least squares and ridge to nearly collinear predictors. Compare coefficients and held-out prediction error.',
				caveat:
					'The regularization strength needs selection. This paper does not originate all forms of regularization; related inverse-problem methods preceded it.'
			},
			{
				id: 'vc-theory',
				year: 1971,
				label: 'Why learning generalizes',
				theme: 'Theory & evaluation',
				authors: 'Vladimir Vapnik & Alexey Chervonenkis',
				title:
					'On the Uniform Convergence of Relative Frequencies of Events to Their Probabilities',
				url: 'https://doi.org/10.1137/1116025',
				contribution:
					'Connected the complexity of a class of sets to uniform convergence of observed frequencies to probabilities.',
				impact:
					'Related hypothesis-class complexity to sample requirements. A small training error alone is not sufficient evidence of a small test error.',
				exercise:
					'Find which labelings a linear boundary can realize for three points in 2D, then four.',
				caveat:
					'Model flexibility affects how much evidence you need before trusting a good training fit.'
			},
			{
				id: 'cross-validation',
				year: 1974,
				label: 'Cross-validation',
				theme: 'Theory & evaluation',
				authors: 'Mervyn Stone',
				title: 'Cross-Validatory Choice and Assessment of Statistical Predictions',
				url: 'https://sites.stat.washington.edu/courses/stat527/s14/readings/Stone1974.pdf',
				contribution:
					'Examined selecting and assessing predictive procedures using observations withheld from their fitting.',
				impact:
					'Separated training fit from prediction assessment and discussed cross-validation for model and variable choice.',
				exercise:
					'Compare selecting a model and reporting its score on the same folds with a nested cross-validation estimate.',
				caveat:
					'There are earlier uses of sample splitting. Repeatedly tuning against the same validation data can still produce optimistic estimates.'
			},
			{
				id: 'aic',
				year: 1974,
				label: 'Akaike information criterion',
				theme: 'Theory & evaluation',
				authors: 'Hirotugu Akaike',
				title: 'A New Look at the Statistical Model Identification',
				url: 'https://doi.org/10.1109/TAC.1974.1100705',
				contribution:
					'Derived an information-based criterion balancing maximized likelihood against a parameter-count penalty.',
				impact:
					'Made model selection account for estimation-induced optimism rather than relying on training likelihood alone.',
				exercise: 'Compare polynomial models using training likelihood, AIC, and held-out error.',
				caveat:
					'The usual AIC derivation is asymptotic and depends on model assumptions. Parameter counting is insufficient for every modern learner.'
			},
			{
				id: 'em',
				year: 1977,
				label: 'Expectation–maximization',
				theme: 'Unsupervised learning',
				authors: 'Arthur Dempster, Nan Laird & Donald Rubin',
				title: 'Maximum Likelihood from Incomplete Data via the EM Algorithm',
				url: 'https://academic.oup.com/jrsssb/article/39/1/1/7027539',
				contribution:
					'Unified a framework alternating between estimating hidden information with current parameters and updating those parameters.',
				impact:
					'Put several latent-variable estimation methods under the same alternating procedure. Gaussian mixtures are a common example.',
				exercise:
					'Fit two overlapping Gaussians to unlabeled points; track membership probabilities and likelihood.',
				caveat:
					'Improving likelihood can still lead to a poor local solution. Initialization matters.'
			},
			{
				id: 'mdl',
				year: 1978,
				label: 'Minimum description length',
				theme: 'Theory & evaluation',
				authors: 'Jorma Rissanen',
				title: 'Modeling by Shortest Data Description',
				url: 'https://www.sciencedirect.com/science/article/pii/0005109878900055',
				contribution:
					'Selected models by the combined length of a model description and the data encoded with that model.',
				impact:
					'Connected compression and model complexity, giving another way to reason about the tradeoff between fit and overfitting.',
				exercise:
					'Compare a constant predictor and a piecewise predictor using explicit costs for parameters and residuals.',
				caveat:
					'Description length depends on the coding scheme. MDL is related to, but not identical to, Bayesian model selection.'
			},
			{
				id: 'bootstrap',
				year: 1979,
				label: 'The bootstrap',
				theme: 'Theory & evaluation',
				authors: 'Bradley Efron',
				title: 'Bootstrap Methods: Another Look at the Jackknife',
				url: 'https://doi.org/10.1214/aos/1176344552',
				contribution:
					'Approximated a statistic’s sampling distribution by resampling from the observed empirical distribution.',
				impact:
					'Made uncertainty estimation possible for many estimators without deriving a separate analytic standard-error formula. Later bagging used bootstrap samples to fit predictors.',
				exercise:
					'Bootstrap a sample median and compare the interval with variation across independently generated datasets.',
				caveat:
					'Ordinary resampling assumes an appropriate sampling structure. Dependence, extreme statistics, and very small samples can require other procedures.'
			},
			{
				id: 'propensity-score',
				year: 1983,
				label: 'Propensity scores',
				theme: 'Causal inference',
				authors: 'Paul R. Rosenbaum & Donald B. Rubin',
				title:
					'The Central Role of the Propensity Score in Observational Studies for Causal Effects',
				url: 'https://doi.org/10.1093/biomet/70.1.41',
				contribution:
					'Showed how the probability of treatment given observed covariates can serve as a balancing score.',
				impact:
					'Reduced a high-dimensional covariate-adjustment problem to adjustment using a scalar score under the stated identification assumptions.',
				exercise:
					'Simulate confounding, then compare an unadjusted treatment difference with propensity-weighted estimation.',
				caveat:
					'Balancing observed covariates does not remove unmeasured confounding. Positivity and treatment-assignment assumptions remain necessary.'
			},
			{
				id: 'learnability',
				year: 1984,
				label: 'What can be learned?',
				theme: 'Theory & evaluation',
				authors: 'Leslie Valiant',
				title: 'A Theory of the Learnable',
				url: 'https://courses.grainger.illinois.edu/ece544na/fa2014/valiant84.pdf',
				contribution:
					'Formulated learning protocols and studied concept classes learnable with feasible computational resources.',
				impact:
					'Treated sample requirements and computation as parts of the learning problem. This work led to PAC learning theory.',
				exercise:
					'Explain the difference between needing too many examples and needing too much computation.',
				caveat:
					'The original protocols include positive examples and queries; modern textbook PAC formulations evolved from this starting point.'
			},
			{
				id: 'decision-trees',
				year: 1986,
				label: 'Decision trees',
				theme: 'Supervised learning',
				authors: 'J. Ross Quinlan',
				title: 'Induction of Decision Trees',
				url: 'https://doi.org/10.1007/BF00116251',
				contribution:
					'Explained ID3, which builds decision trees using informative attributes, and discussed noisy or incomplete information.',
				impact:
					'Produced classification rules directly from examples. Tree learning later became a component of bagging and boosting.',
				exercise:
					'Compute information gain for a small dataset and construct its first two tree levels.',
				caveat: 'A greedy choice of split does not guarantee the best complete tree.'
			},
			{
				id: 'belief-networks',
				year: 1986,
				label: 'Belief propagation',
				theme: 'Probabilistic models',
				authors: 'Judea Pearl',
				title: 'Fusion, Propagation, and Structuring in Belief Networks',
				url: 'https://www.sciencedirect.com/science/article/pii/000437028690072X',
				contribution:
					'Described local probability updates in belief networks, including exact propagation in singly connected structures.',
				impact:
					'Turned conditional-independence structure into an inference procedure, allowing evidence to update related beliefs without enumerating the entire joint table.',
				exercise:
					'Compute a posterior in a three-node network by both enumeration and message passing.',
				caveat:
					'The exact singly connected algorithm does not imply exact or convergent inference on arbitrary loopy graphs.'
			},
			{
				id: 'td-learning',
				year: 1988,
				label: 'Temporal-difference learning',
				theme: 'Reinforcement learning',
				authors: 'Richard S. Sutton',
				title: 'Learning to Predict by the Methods of Temporal Differences',
				url: 'https://jmvidal.cse.sc.edu/library/sutton88a.pdf',
				contribution:
					'Updated predictions from differences between successive predictions, combining observed rewards with a current estimate of future outcomes.',
				impact:
					'Allowed prediction updates before the final outcome arrives. Bootstrapping became a central component of value learning.',
				exercise:
					'Compare TD(0) and Monte Carlo prediction on a random walk, using the same episodes.',
				caveat:
					'Convergence conditions depend on the setting. Function approximation and off-policy sampling can make apparently similar updates unstable.'
			},
			{
				id: 'hmm-tutorial',
				year: 1989,
				label: 'Hidden Markov models: algorithms',
				theme: 'Probabilistic models',
				authors: 'Lawrence R. Rabiner',
				title: 'A Tutorial on Hidden Markov Models and Selected Applications in Speech Recognition',
				url: 'https://web.mit.edu/6.435/www/Rabiner89.pdf',
				contribution:
					'Explained HMM likelihood evaluation, hidden-state decoding, and parameter estimation, with speech-recognition applications.',
				impact:
					'Made the main HMM algorithms accessible in one engineering treatment, helping their use in sequence modeling.',
				exercise:
					'Implement the forward algorithm and Viterbi decoding. Explain why the most likely path differs from marginal state probabilities.',
				caveat:
					'A tutorial consolidating earlier work, not the invention of HMMs. The hidden-state and observation assumptions can be restrictive.',
				sourceType: 'Tutorial'
			},
			{
				id: 'weak-learnability',
				year: 1990,
				label: 'The theory behind boosting',
				theme: 'Ensembles',
				authors: 'Robert E. Schapire',
				title: 'The Strength of Weak Learnability',
				url: 'https://doi.org/10.1007/BF00116037',
				contribution:
					'Proved that weak learnability can be converted into strong learnability in the distribution-free learning setting.',
				impact:
					'Established a theoretical reason to combine weak learners, preceding practical adaptive methods such as AdaBoost.',
				exercise:
					'Describe how changing the example distribution can expose errors that a second learner must address.',
				caveat:
					'A learning-theory result under specified assumptions. It is not the AdaBoost algorithm published later.'
			},
			{
				id: 'q-learning',
				year: 1992,
				label: 'Q-learning',
				theme: 'Reinforcement learning',
				authors: 'Christopher Watkins & Peter Dayan',
				title: 'Q-learning',
				url: 'https://www.gatsby.ucl.ac.uk/~dayan/papers/cjch.pdf',
				contribution:
					'Presented a convergence analysis for Q-learning, which learns state–action values from experience and was introduced in Watkins’s 1989 thesis.',
				impact:
					'Learned action values from observed transitions and rewards without requiring a transition model.',
				exercise:
					'Implement tabular Q-learning in a grid world. Compare frequent exploration with mostly greedy actions.',
				caveat:
					'Convergence requires assumptions including sufficient visitation and suitable learning rates; it does not automatically extend to neural approximations.'
			},
			{
				id: 'reinforce',
				year: 1992,
				label: 'Policy gradients: REINFORCE',
				theme: 'Reinforcement learning',
				authors: 'Ronald J. Williams',
				title:
					'Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning',
				url: 'https://doi.org/10.1007/BF00992696',
				contribution:
					'Derived stochastic updates using reward-weighted gradients of log action probabilities.',
				impact:
					'Provided a way to optimize a stochastic policy directly, including actions for which differentiating through the environment is unavailable.',
				exercise:
					'Implement a two-action bandit policy. Compare gradient variance with and without a reward baseline.',
				caveat:
					'Unbiased gradient estimation does not imply low variance or fast convergence. Later policy-gradient methods address additional issues.'
			},
			{
				id: 'svm',
				year: 1995,
				label: 'Support-vector machines',
				theme: 'Supervised learning',
				authors: 'Corinna Cortes & Vladimir Vapnik',
				title: 'Support-Vector Networks',
				url: 'https://doi.org/10.1007/BF00994018',
				contribution:
					'Extended support-vector classification to nonseparable data, trading margin size against violations.',
				impact:
					'Allowed margin-based classification when training examples overlap or contain errors. Kernels allow nonlinear boundaries.',
				exercise:
					'Compare a linear SVM and kernel SVM on concentric circles. Vary the penalty parameter.',
				caveat: 'This paper built on earlier maximum-margin and kernel work.'
			},
			{
				id: 'causal-diagrams',
				year: 1995,
				label: 'Causal diagrams and interventions',
				theme: 'Causal inference',
				authors: 'Judea Pearl',
				title: 'Causal Diagrams for Empirical Research',
				url: 'https://doi.org/10.1093/biomet/82.4.669',
				contribution:
					'Used causal graphs and intervention rules to determine when causal effects can be obtained from observational quantities.',
				impact:
					'Made the distinction between observing and intervening explicit and gave rules for checking identification under graph assumptions.',
				exercise:
					'Draw a confounder, a mediator, and a collider. Determine which variables should be adjusted for in each case.',
				caveat:
					'The graph contains causal assumptions that data alone may not justify. Conditioning on more variables can introduce bias.'
			},
			{
				id: 'lasso',
				year: 1996,
				label: 'Lasso & sparse models',
				theme: 'Theory & evaluation',
				authors: 'Robert Tibshirani',
				title: 'Regression Shrinkage and Selection via the Lasso',
				url: 'https://homepages.math.uic.edu/~lreyzin/papers/lasso.pdf',
				contribution:
					'Constrained the sum of absolute regression coefficients, shrinking estimates and making some coefficients exactly zero.',
				impact: 'Used one objective for both coefficient shrinkage and variable selection.',
				exercise:
					'Compare least squares, ridge, and lasso when many input features are irrelevant.',
				caveat:
					'Selected features are not automatically causal explanations; correlated features can make selection unstable.'
			},
			{
				id: 'bagging',
				year: 1996,
				label: 'Bagging',
				theme: 'Ensembles',
				authors: 'Leo Breiman',
				title: 'Bagging Predictors',
				url: 'https://doi.org/10.1007/BF00058655',
				contribution:
					'Trained predictors on bootstrap samples and combined their predictions through averaging or voting.',
				impact:
					'Reduced the sensitivity of unstable models to individual training samples by averaging bootstrap-trained predictors.',
				exercise: 'Compare one deep tree and a bagged ensemble as you perturb the training data.',
				caveat: 'The benefit depends on the behavior and diversity of the component predictors.'
			},
			{
				id: 'gaussian-processes',
				year: 1996,
				label: 'Gaussian process regression',
				theme: 'Probabilistic models',
				authors: 'Christopher K. I. Williams & Carl Edward Rasmussen',
				title: 'Gaussian Processes for Regression',
				url: 'https://proceedings.neurips.cc/paper_files/paper/1995/file/7cce53cf90577442771720a370c3c723-Paper.pdf',
				contribution:
					'Used covariance functions to define distributions over regression functions and fit their hyperparameters from data.',
				impact: 'Connected kernel design with Bayesian prediction and uncertainty over functions.',
				exercise:
					'Fit a one-dimensional GP with two length scales. Plot posterior means and intervals between and beyond observations.',
				caveat:
					'NIPS 1995 meeting; proceedings published in 1996. Exact inference has cubic training cost in the number of observations, and uncertainty depends on kernel and noise assumptions.'
			},
			{
				id: 'dbscan',
				year: 1996,
				label: 'DBSCAN',
				theme: 'Unsupervised learning',
				authors: 'Martin Ester, Hans-Peter Kriegel, Jörg Sander & Xiaowei Xu',
				title:
					'A Density-Based Algorithm for Discovering Clusters in Large Spatial Databases with Noise',
				url: 'https://aaai.org/papers/kdd96-037-a-density-based-algorithm-for-discovering-clusters-in-large-spatial-databases-with-noise/',
				contribution:
					'Grouped density-connected points and marked points outside dense regions as noise.',
				impact:
					'Handled nonconvex clusters and explicit noise points, unlike clustering around a fixed number of spherical centers.',
				exercise:
					'Compare DBSCAN and k-means on two moons with outliers. Vary the neighborhood radius.',
				caveat:
					'One global density scale can fail when cluster densities differ. Distance becomes less informative in high dimensions.'
			},
			{
				id: 'active-learning',
				year: 1996,
				label: 'Active learning',
				theme: 'Label-efficient learning',
				authors: 'David A. Cohn, Zoubin Ghahramani & Michael I. Jordan',
				title: 'Active Learning with Statistical Models',
				url: 'https://arxiv.org/abs/cs/9603104',
				contribution:
					'Selected new training inputs by estimating their effect on predictive variance in statistical models.',
				impact:
					'Treated data acquisition as part of learning, rather than assuming the labeled sample is fixed.',
				exercise:
					'Compare random labeling with a variance-based query rule on a small regression problem.',
				caveat:
					'The method depends on the model’s uncertainty estimates and access to a suitable query pool or input space.'
			},
			{
				id: 'adaboost',
				year: 1997,
				label: 'AdaBoost',
				theme: 'Ensembles',
				authors: 'Yoav Freund & Robert Schapire',
				title:
					'A Decision-Theoretic Generalization of On-Line Learning and an Application to Boosting',
				url: 'https://www.sciencedirect.com/science/article/pii/S002200009791504X',
				contribution:
					'Developed AdaBoost using adaptive example weights and a weighted combination of weak learners.',
				impact:
					'Combined weak learners by changing which examples received the most weight on each round.',
				exercise:
					'Combine decision stumps. Watch weights increase for repeatedly misclassified points.',
				caveat:
					'Persistently difficult examples may be informative or mislabeled. A conference precursor appeared in 1995; this is the 1997 journal version.'
			},
			{
				id: 'variational-inference',
				year: 1999,
				label: 'Variational inference',
				theme: 'Probabilistic models',
				authors: 'Michael I. Jordan, Zoubin Ghahramani, Tommi S. Jaakkola & Lawrence K. Saul',
				title: 'An Introduction to Variational Methods for Graphical Models',
				url: 'https://people.eecs.berkeley.edu/~jordan/papers/variational-intro.pdf',
				contribution:
					'Explained how tractable approximating distributions and optimization bounds can replace difficult graphical-model inference.',
				impact:
					'Organized approximate inference as an optimization problem, used later in topic models, Bayesian learning, and latent-variable models.',
				exercise:
					'Approximate a correlated two-variable distribution with a factorized distribution. Inspect which dependence is lost.',
				caveat:
					'A tutorial consolidating earlier methods. Approximation families and divergence direction affect the answer and can understate uncertainty.',
				sourceType: 'Tutorial'
			},
			{
				id: 'random-forests',
				year: 2001,
				label: 'Random forests',
				theme: 'Ensembles',
				authors: 'Leo Breiman',
				title: 'Random Forests',
				url: 'https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf',
				contribution:
					'Developed randomized tree ensembles, including random feature selection at splits, and analyzed tree strength and correlation.',
				impact:
					'Added feature randomness to bagged trees to reduce correlation between their errors.',
				exercise:
					'Compare bagged trees and random forests while changing the candidate features per split.',
				caveat:
					'Strong trees help, but trees making the same errors limit the benefit of averaging.'
			},
			{
				id: 'gradient-boosting',
				year: 2001,
				label: 'Gradient boosting',
				theme: 'Ensembles',
				authors: 'Jerome Friedman',
				title: 'Greedy Function Approximation: A Gradient Boosting Machine',
				url: 'https://doi.org/10.1214/aos/1013203451',
				contribution:
					'Developed boosting as optimization in function space, adding learners that approximate a descent direction for a chosen loss.',
				impact:
					'Expressed boosting as loss minimization, making it possible to derive updates for different prediction tasks.',
				exercise:
					'For squared-error regression, repeatedly fit a small tree to the current residuals.',
				caveat:
					'Fitting residuals is the squared-error case; other losses produce different update targets.'
			},
			{
				id: 'crf',
				year: 2001,
				label: 'Conditional random fields',
				theme: 'Probabilistic models',
				authors: 'John Lafferty, Andrew McCallum & Fernando Pereira',
				title:
					'Conditional Random Fields: Probabilistic Models for Segmenting and Labeling Sequence Data',
				url: 'https://home.cs.colorado.edu/~mozer/Teaching/syllabi/6622/papers/LaffertyMcCallumPereira2001.pdf',
				contribution:
					'Defined globally normalized conditional models for structured outputs such as label sequences.',
				impact:
					'Allowed overlapping input features without specifying a generative model of the observations, while addressing the label-bias problem of locally normalized sequence models.',
				exercise:
					'Build a linear-chain sequence tagger and compare sequence-level decoding with independent token classification.',
				caveat:
					'Inference cost depends on graph structure and label vocabulary. A conditional model does not remove the need for representative labeled sequences.'
			},
			{
				id: 'spectral-clustering',
				year: 2002,
				label: 'Spectral clustering',
				theme: 'Unsupervised learning',
				authors: 'Andrew Y. Ng, Michael I. Jordan & Yair Weiss',
				title: 'On Spectral Clustering: Analysis and an Algorithm',
				url: 'https://proceedings.neurips.cc/paper_files/paper/2001/file/801272ee79cfde7fa5960571fee36b9b-Paper.pdf',
				contribution:
					'Clustered points after embedding them with eigenvectors of a normalized similarity matrix and analyzed conditions for success.',
				impact:
					'Connected clustering with graph structure, making some nonconvex groups separable in the spectral embedding.',
				exercise: 'Cluster concentric circles with k-means before and after a spectral embedding.',
				caveat:
					'NIPS 2001 meeting; proceedings published in 2002. Results depend on the affinity graph, its scale, and the chosen number of clusters.'
			},
			{
				id: 'ucb',
				year: 2002,
				label: 'Bandits: upper confidence bounds',
				theme: 'Reinforcement learning',
				authors: 'Peter Auer, Nicolò Cesa-Bianchi & Paul Fischer',
				title: 'Finite-time Analysis of the Multiarmed Bandit Problem',
				url: 'https://people.eecs.berkeley.edu/~russell/classes/cs294/s11/readings/Auer%2Bal%3A2002.pdf',
				contribution:
					'Analyzed bandit policies that balance estimated reward with an exploration bonus, including logarithmic regret bounds.',
				impact:
					'Made exploration measurable through regret: the reward lost relative to the best fixed action.',
				exercise:
					'Compare UCB1 and epsilon-greedy on stationary Bernoulli bandits and plot cumulative regret.',
				caveat:
					'Standard guarantees assume stationary reward distributions and bounded rewards. Contextual or changing environments require different analyses.'
			},
			{
				id: 'topic-models',
				year: 2003,
				label: 'Latent Dirichlet allocation',
				theme: 'Probabilistic models',
				authors: 'David M. Blei, Andrew Y. Ng & Michael I. Jordan',
				title: 'Latent Dirichlet Allocation',
				url: 'https://www.jmlr.org/papers/v3/blei03a.html',
				contribution:
					'Modeled documents as mixtures of topics and topics as distributions over words, with Dirichlet priors.',
				impact:
					'Provided a probabilistic account of mixed document membership and a practical latent-variable model with approximate inference.',
				exercise:
					'Fit a small topic model and inspect topic-word probabilities and document mixtures. Change the topic count.',
				caveat:
					'Bag-of-words assumptions discard order. Topics need interpretation and do not necessarily correspond to a unique semantic grouping.'
			},
			{
				id: 'online-convex-learning',
				year: 2003,
				label: 'Online convex learning',
				theme: 'Optimization & online learning',
				authors: 'Martin Zinkevich',
				title: 'Online Convex Programming and Generalized Infinitesimal Gradient Ascent',
				url: 'https://www.martin.zinkevich.org/publications/ICML03.pdf',
				contribution:
					'Studied sequential convex decisions made before observing each round’s loss and bounded regret for projected gradient updates.',
				impact:
					'Allowed learning guarantees without assuming losses are independent samples from a fixed distribution.',
				exercise:
					'Run online gradient descent on a sequence of convex losses. Compare cumulative loss with the best fixed decision chosen afterward.',
				caveat:
					'Regret against a fixed comparator is different from tracking a changing optimum. Convexity, boundedness, and gradient conditions matter.'
			},
			{
				id: 'manifold-regularization',
				year: 2006,
				label: 'Learning from labeled and unlabeled data',
				theme: 'Label-efficient learning',
				authors: 'Mikhail Belkin, Partha Niyogi & Vikas Sindhwani',
				title:
					'Manifold Regularization: A Geometric Framework for Learning from Labeled and Unlabeled Examples',
				url: 'https://www.jmlr.org/papers/v7/belkin06a.html',
				contribution:
					'Added a penalty favoring smooth predictions along a data-derived graph, using both labeled and unlabeled inputs.',
				impact:
					'Put supervised loss and unlabeled-data geometry into one regularized objective, with an extension to unseen inputs.',
				exercise:
					'On two moons with few labels, compare supervised fitting with a graph smoothness penalty.',
				caveat:
					'Unlabeled data helps only when its geometry is relevant to the labels. A misleading graph can worsen predictions.'
			},
			{
				id: 'random-features',
				year: 2007,
				label: 'Random features for kernels',
				theme: 'Optimization & online learning',
				authors: 'Ali Rahimi & Benjamin Recht',
				title: 'Random Features for Large-Scale Kernel Machines',
				url: 'https://proceedings.neurips.cc/paper_files/paper/2007/hash/013a006f03dbc5392effeb8f18fda755-Abstract.html',
				contribution:
					'Approximated kernels with explicit randomized features so linear learning algorithms could operate in that feature space.',
				impact:
					'Reduced the need to store and manipulate a full pairwise kernel matrix for large datasets.',
				exercise:
					'Approximate an RBF kernel using random Fourier features. Plot approximation error and prediction time against feature count.',
				caveat:
					'More features improve approximation at additional memory and compute cost. Exact kernel equivalence is not guaranteed for a finite feature sample.'
			},
			{
				id: 'tsne',
				year: 2008,
				label: 't-SNE',
				theme: 'Unsupervised learning',
				authors: 'Laurens van der Maaten & Geoffrey Hinton',
				title: 'Visualizing Data using t-SNE',
				url: 'https://www.jmlr.org/papers/v9/vandermaaten08a.html',
				contribution:
					'Matched neighborhood probabilities between high-dimensional data and a low-dimensional embedding using a heavy-tailed distribution.',
				impact:
					'Made local neighborhood patterns easier to inspect visually in many high-dimensional datasets.',
				exercise:
					'Embed the same data with several perplexities and seeds. Check which neighborhoods remain consistent.',
				caveat:
					'Distances between separated groups, cluster sizes, and apparent empty space can be misleading. A plot is not a clustering validation.'
			},
			{
				id: 'conformal',
				year: 2008,
				label: 'Conformal prediction',
				theme: 'Uncertainty estimation',
				authors: 'Glenn Shafer & Vladimir Vovk',
				title: 'A Tutorial on Conformal Prediction',
				url: 'https://www.jmlr.org/papers/v9/shafer08a.html',
				contribution:
					'Explained how nonconformity scores can turn point predictions into prediction sets with coverage guarantees under stated assumptions.',
				impact:
					'Separated the accuracy of a point predictor from the coverage of a prediction set, with methods applicable to different predictors.',
				exercise:
					'Calibrate split-conformal regression intervals on held-out residuals and measure coverage and interval width on fresh data.',
				caveat:
					'A tutorial of an existing framework. Standard coverage is marginal under exchangeability, not a guarantee for every subgroup or under arbitrary distribution shift.',
				sourceType: 'Tutorial'
			},
			{
				id: 'matrix-factorization',
				year: 2009,
				label: 'Matrix factorization for recommendation',
				theme: 'Recommendation',
				authors: 'Yehuda Koren, Robert Bell & Chris Volinsky',
				title: 'Matrix Factorization Techniques for Recommender Systems',
				url: 'https://doi.org/10.1109/MC.2009.263',
				contribution:
					'Explained recommendation models based on low-dimensional user and item factors, including biases and extensions used in Netflix Prize systems.',
				impact:
					'Made sparse user–item interactions usable through shared latent factors, rather than relying only on direct neighbor overlap.',
				exercise:
					'Fit a regularized factor model to observed ratings. Compare held-out error with user and item bias baselines.',
				caveat:
					'An overview by researchers involved in the methods, not the first matrix factorization paper. Missing ratings are not necessarily missing at random.',
				sourceType: 'Methods overview'
			},
			{
				id: 'adagrad',
				year: 2011,
				label: 'AdaGrad',
				theme: 'Optimization & online learning',
				authors: 'John Duchi, Elad Hazan & Yoram Singer',
				title: 'Adaptive Subgradient Methods for Online Learning and Stochastic Optimization',
				url: 'https://www.jmlr.org/papers/v12/duchi11a.html',
				contribution:
					'Adapted update geometry using accumulated gradients, including per-coordinate learning rates.',
				impact:
					'Allowed sparse and infrequent features to receive different effective step sizes, with regret analyses for adaptive methods.',
				exercise:
					'Compare a fixed-step method with diagonal AdaGrad on sparse logistic regression. Track progress for rare features.',
				caveat:
					'Accumulated squared gradients can make learning rates very small over long runs. Nonconvex optimization needs separate analysis.'
			},
			{
				id: 'random-search',
				year: 2012,
				label: 'Random search for hyperparameters',
				theme: 'Theory & evaluation',
				authors: 'James Bergstra & Yoshua Bengio',
				title: 'Random Search for Hyper-Parameter Optimization',
				url: 'https://www.jmlr.org/papers/v13/bergstra12a.html',
				contribution:
					'Compared random sampling of hyperparameter configurations with grid search, particularly when only a few dimensions strongly affect performance.',
				impact:
					'Provided a simple tuning baseline that spends trials exploring more distinct values of influential parameters.',
				exercise:
					'Give grid and random search the same trial budget on a problem with one influential and several irrelevant hyperparameters.',
				caveat:
					'Performance depends on the sampling distributions and budget. Neither method removes validation leakage.'
			},
			{
				id: 'bayesian-optimization',
				year: 2012,
				label: 'Bayesian optimization',
				theme: 'Optimization & online learning',
				authors: 'Jasper Snoek, Hugo Larochelle & Ryan P. Adams',
				title: 'Practical Bayesian Optimization of Machine Learning Algorithms',
				url: 'https://proceedings.neurips.cc/paper_files/paper/2012/hash/05311655a15b75fab86956663e1819cd-Abstract.html',
				contribution:
					'Modeled validation performance with a Gaussian process and used an acquisition rule to choose expensive hyperparameter evaluations.',
				impact:
					'Used previous trials to guide the next experiment, including treatment of runtime and parallel evaluation.',
				exercise:
					'Compare expected-improvement optimization with random search on a two-parameter learning problem at the same evaluation budget.',
				caveat:
					'An influential practical treatment, not the origin of Bayesian optimization. Surrogate assumptions and noisy validation scores can affect search.'
			},
			{
				id: 'xgboost',
				year: 2016,
				label: 'XGBoost',
				theme: 'Ensembles',
				authors: 'Tianqi Chen & Carlos Guestrin',
				title: 'XGBoost: A Scalable Tree Boosting System',
				url: 'https://arxiv.org/abs/1603.02754',
				contribution:
					'Combined regularized tree boosting with sparse-input handling, approximate split finding, and efficient memory and distributed computation.',
				impact:
					'Reduced training time and memory costs for tree boosting through sparse-data handling and efficient split search.',
				exercise:
					'Compare a small gradient-boosting implementation with XGBoost on runtime and predictive performance.',
				caveat:
					'XGBoost did not invent gradient boosting; its contribution includes making it substantially more scalable.'
			},
			{
				id: 'causal-trees',
				year: 2016,
				label: 'Causal trees',
				theme: 'Causal inference',
				authors: 'Susan Athey & Guido Imbens',
				title: 'Recursive Partitioning for Heterogeneous Causal Effects',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4941430/',
				contribution:
					'Adapted recursive partitioning to differences in treatment effects and separated partition selection from effect estimation using honest estimation.',
				impact:
					'Allowed data-driven subgroup discovery while addressing the bias introduced by using the same observations to discover and estimate subgroup effects.',
				exercise:
					'Simulate a treatment effect that varies with one covariate. Compare an outcome-prediction tree with a causal partition.',
				caveat:
					'Identification assumptions are still required for observational data. Honesty addresses adaptive estimation bias, not unmeasured confounding.'
			},
			{
				id: 'recommendation-bias',
				year: 2016,
				label: 'Selection bias in recommendation',
				theme: 'Recommendation',
				authors:
					'Tobias Schnabel, Adith Swaminathan, Ashudeep Singh, Navin Chandak & Thorsten Joachims',
				title: 'Recommendations as Treatments: Debiasing Learning and Evaluation',
				url: 'https://proceedings.mlr.press/v48/schnabel16.html',
				contribution:
					'Used a causal treatment perspective and propensity weighting to account for which user–item outcomes are observed.',
				impact:
					'Showed why evaluating only logged interactions can favor the system that produced those interactions.',
				exercise:
					'Create a biased exposure policy and compare naive error estimates with inverse-propensity-weighted estimates.',
				caveat:
					'Propensities must be known or estimated, and unsupported actions cannot be evaluated reliably. Small propensities increase variance.'
			},
			{
				id: 'lightgbm',
				year: 2017,
				label: 'LightGBM',
				theme: 'Ensembles',
				authors: 'Guolin Ke et al.',
				title: 'LightGBM: A Highly Efficient Gradient Boosting Decision Tree',
				url: 'https://proceedings.neurips.cc/paper_files/paper/2017/hash/6449f44a102fde848669bdd9eb6b76fa-Abstract.html',
				contribution:
					'Used gradient-based sampling and exclusive feature bundling to reduce the work needed to find tree splits.',
				impact:
					'Reduced tree-boosting training costs on large and sparse datasets. The paper compares runtime and accuracy with other boosting implementations.',
				exercise:
					'Compare training time, peak memory, and test loss with XGBoost under the same tuning budget.',
				caveat:
					'The speedups are experimental results on the paper’s datasets. They are not fixed guarantees for every workload.',
				sourceType: 'Conference paper'
			},
			{
				id: 'catboost',
				year: 2018,
				label: 'CatBoost',
				theme: 'Ensembles',
				authors: 'Liudmila Prokhorenkova et al.',
				title: 'CatBoost: unbiased boosting with categorical features',
				url: 'https://arxiv.org/abs/1706.09516',
				contribution:
					'Introduced ordered boosting and permutation-based categorical-feature statistics to address prediction shift from target leakage.',
				impact:
					'Handled categorical inputs within the boosting algorithm, reducing the need for manually designed encodings.',
				exercise:
					'Compare ordered categorical statistics with a naive target encoder, using validation data that never enters the encoding fit.',
				caveat:
					'Listed under its NeurIPS 2018 publication. The first preprint appeared in 2017. Ordered boosting addresses a particular leakage mechanism; data splitting still matters.',
				sourceType: 'Conference paper'
			},
			{
				id: 'hyperband',
				year: 2018,
				label: 'Hyperband',
				theme: 'Optimization & online learning',
				authors: 'Lisha Li, Kevin Jamieson, Giulia DeSalvo, Afshin Rostamizadeh & Ameet Talwalkar',
				title: 'Hyperband: A Novel Bandit-Based Approach to Hyperparameter Optimization',
				url: 'https://www.jmlr.org/papers/volume18/16-558/16-558.pdf',
				contribution:
					'Allocated small budgets to many configurations and repeatedly stopped poor performers, varying the initial tradeoff between trials and resources.',
				impact:
					'Made early stopping and resource allocation part of hyperparameter optimization rather than fully training every candidate.',
				exercise:
					'Compare equal-budget random search and successive halving. Include a candidate that improves slowly at first.',
				caveat:
					'The linked JMLR version appeared in 2018 after earlier preprints and conference work. Early performance may not predict final performance.'
			},
			{
				id: 'autogluon',
				year: 2020,
				label: 'AutoGluon-Tabular',
				theme: 'Ensembles',
				authors: 'Nick Erickson et al.',
				title: 'AutoGluon-Tabular: Robust and Accurate AutoML for Structured Data',
				url: 'https://arxiv.org/abs/2003.06505',
				contribution:
					'Combined models through repeated bagging and multilayer stacking in an automated tabular prediction pipeline.',
				impact:
					'Compared an ensemble-based use of training time with searching for a single best model. Its evaluation included 50 classification and regression tasks.',
				exercise:
					'Compare one tuned model with a stacked ensemble under the same wall-clock budget. Measure inference latency too.',
				caveat:
					'Results describe the 2020 system. A current AutoGluon release contains different models and defaults.',
				sourceType: 'Research paper'
			},
			{
				id: 'trees-vs-neural',
				year: 2022,
				label: 'Trees and neural networks: a benchmark',
				theme: 'Theory & evaluation',
				authors: 'Léo Grinsztajn, Edouard Oyallon & Gaël Varoquaux',
				title: 'Why do tree-based models still outperform deep learning on typical tabular data?',
				url: 'https://arxiv.org/abs/2207.08815',
				contribution:
					'Compared tree methods and neural networks under extensive tuning, then tested how transformations of the data affected their performance.',
				impact:
					'Identified sensitivity to irrelevant features, feature orientation, and irregular target functions as useful explanations for differences between model families.',
				exercise:
					'Add irrelevant features or rotate numerical inputs. Compare the effect on a tree model and an MLP.',
				caveat:
					'These are results for the evaluated models and datasets in 2022. They do not establish that trees beat every later neural model.',
				sourceType: 'Benchmark paper'
			},
			{
				id: 'tabpfn',
				year: 2023,
				label: 'TabPFN',
				theme: 'Tabular foundation models',
				authors: 'Noah Hollmann, Samuel Müller, Katharina Eggensperger & Frank Hutter',
				title:
					'TabPFN: A Transformer That Solves Small Tabular Classification Problems in a Second',
				url: 'https://arxiv.org/abs/2207.01848',
				contribution:
					'Pretrained a transformer on synthetic classification tasks. At prediction time, labeled examples act as context without further weight updates.',
				impact:
					'Moved part of the work from fitting each new dataset to pretraining across many synthetic tasks.',
				exercise:
					'On a small numerical dataset, compare prediction quality and runtime with tuned boosting. Account separately for pretraining cost.',
				caveat:
					'ICLR 2023; first preprint in 2022. The original evaluation was restricted to small numerical classification datasets.',
				sourceType: 'Conference paper'
			},
			{
				id: 'tabpfn-v2',
				year: 2025,
				label: 'TabPFN v2',
				theme: 'Tabular foundation models',
				authors: 'Noah Hollmann et al.',
				title: 'Accurate predictions on small data with a tabular foundation model',
				url: 'https://www.nature.com/articles/s41586-024-08328-6',
				contribution:
					'Extended pretrained tabular prediction to regression and classification with categorical inputs and missing values, evaluating datasets up to 10,000 samples.',
				impact:
					'Reported improvements over tuned tree methods on the small-data benchmarks in the paper.',
				exercise:
					'Compare TabPFN v2 and CatBoost with identical splits. Record missing-value handling, test loss, and prediction latency.',
				caveat:
					'Published in Nature in January 2025. Accuracy and runtime depend on dataset size and inference settings.',
				sourceType: 'Journal paper'
			},
			{
				id: 'tabicl',
				year: 2025,
				label: 'TabICL',
				theme: 'Tabular foundation models',
				authors: 'Jingang Qu, David Holzmüller, Gaël Varoquaux & Marine Le Morvan',
				title: 'TabICL: A Tabular Foundation Model for In-Context Learning on Large Data',
				url: 'https://arxiv.org/abs/2502.05564',
				contribution:
					'Encoded table rows into fixed-dimensional embeddings before applying an in-context classifier.',
				impact:
					'Reduced the cost of conditioning on larger training tables. The paper evaluates classification on TALENT, including datasets above 10,000 samples.',
				exercise:
					'Compare TabICL and TabPFN v2 as the number of training rows increases. Track runtime and memory.',
				caveat:
					'The original TabICL paper concerns classification. Its results should not be read as regression results for that model.',
				sourceType: 'Conference paper'
			},
			{
				id: 'tabarena',
				year: 2025,
				label: 'TabArena',
				theme: 'Theory & evaluation',
				authors: 'Nick Erickson et al.',
				title: 'TabArena: A Living Benchmark for Machine Learning on Tabular Data',
				url: 'https://arxiv.org/abs/2506.16791',
				contribution:
					'Introduced a maintained benchmark with shared evaluation, tuning, and ensembling protocols for tabular models.',
				impact:
					'Made validation and compute budgets explicit parts of model comparisons. The initial study finds different strengths for trees, neural models, and foundation models.',
				exercise:
					'Compare a default-model ranking with a tuned-model ranking under a fixed budget. Explain any changes.',
				caveat:
					'First preprint in June 2025. The benchmark is updated, so the paper and current leaderboard can show different rankings.',
				sourceType: 'Benchmark paper'
			},
			{
				id: 'tabpfn-2-5',
				year: 2025,
				label: 'TabPFN-2.5',
				theme: 'Tabular foundation models',
				authors: 'Léo Grinsztajn et al.',
				title: 'TabPFN-2.5: Advancing the State of the Art in Tabular Foundation Models',
				url: 'https://arxiv.org/abs/2511.08667',
				contribution:
					'Extended the model’s intended input size to 50,000 rows and 2,000 features and introduced distillation for lower-latency deployment.',
				impact:
					'Reported better benchmark results than earlier TabPFN versions and tuned tree baselines, with distillation providing a separate accuracy–latency tradeoff.',
				exercise:
					'Compare the full model and a distilled predictor on accuracy, memory, and per-sample latency.',
				caveat:
					'November 2025 technical report. The reported wins depend on the benchmark, baseline settings, and evaluation budget.',
				sourceType: 'Technical report'
			},
			{
				id: 'tabicl-v2',
				year: 2026,
				label: 'TabICLv2',
				theme: 'Tabular foundation models',
				authors: 'Jingang Qu, David Holzmüller, Gaël Varoquaux & Marine Le Morvan',
				title: 'TabICLv2: A better, faster, scalable, and open tabular foundation model',
				url: 'https://arxiv.org/abs/2602.11139',
				contribution:
					'Changed synthetic task generation, attention scaling, and pretraining optimization; supports classification and regression.',
				impact:
					'Reports improvements on TabArena and TALENT and tests generalization to million-row datasets. Code includes pretraining and synthetic-data generation.',
				exercise:
					'Read the ablations and separate gains from data generation, architecture, and optimizer changes.',
				caveat:
					'ICML 2026; first preprint in February and revised in September. Comparisons concern the baselines and budgets in that paper.',
				sourceType: 'Conference paper'
			},
			{
				id: 'tabpfn-3',
				year: 2026,
				label: 'TabPFN-3',
				theme: 'Tabular foundation models',
				authors: 'Prior Labs research team',
				title: 'TabPFN-3: Technical Report',
				url: 'https://arxiv.org/abs/2605.13986',
				contribution:
					'Extended tabular in-context prediction to million-row inputs and added changes to memory use, inference latency, and many-class classification.',
				impact:
					'Addressed input-size and serving limits of earlier releases, alongside evaluations of tabular and related prediction tasks.',
				exercise:
					'Plot prediction latency and peak memory against row count, holding the feature count fixed.',
				caveat:
					'May 2026 technical report. Separate the base model from optional inference modes when comparing results.',
				sourceType: 'Technical report'
			},
			{
				id: 'beyondarena',
				year: 2026,
				label: 'BeyondArena',
				theme: 'Theory & evaluation',
				authors: 'Lennart Purucker et al.',
				title: 'Beyond IID: How General Are Tabular Foundation Models, Really?',
				url: 'https://arxiv.org/abs/2606.30410',
				contribution:
					'Evaluated 11 models across 142 datasets with independent, temporal, and grouped splits and varied sample and feature counts.',
				impact:
					'Tested whether gains on standard random-split benchmarks held for other settings. Results differed for large, high-dimensional, and non-independent data.',
				exercise:
					'Evaluate the same models with random and time-based splits. Check whether their ranking changes.',
				caveat:
					'June 2026 preprint. Its results apply to the evaluated model versions; later releases require another comparison.',
				sourceType: 'Benchmark preprint'
			},
			{
				id: 'tabpfn-3-5',
				year: 2026,
				label: 'TabPFN-3.5',
				theme: 'Tabular foundation models',
				authors: 'Benjamin Jäger et al.',
				title: 'TabPFN-3.5: Technical Report',
				url: 'https://arxiv.org/abs/2609.17895',
				contribution:
					'Updated the tabular foundation model and its inference modes, evaluating standard prediction and datasets with temporal or grouped splits, text, and many features.',
				impact:
					'The authors report leading results on TabArena and BeyondArena and evaluate the additional computation used by Thinking mode.',
				exercise:
					'Compare the base, Fast, and Thinking variants at a fixed accuracy target and at a fixed inference-time budget.',
				caveat:
					'Released September 15, 2026; report revised September 22. These are author-reported benchmark results, not evidence of one best model for every ML task.',
				sourceType: 'Technical report'
			}
		],
		reviewedAt: '2026-10-21',
		scope:
			'Statistical foundations and machine learning, with tabular prediction research through September 2026.'
	},
	deepLearningTimeline,
	generativeAITimeline
];
