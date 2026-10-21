import type { Timeline, TimelineEntry } from './timelines';
import { deepLearningTimeline } from './deep-learning';
const sharedIds = [
	'mcculloch-pitts',
	'perceptron',
	'backprop',
	'alexnet',
	'transformer',
	'dqn',
	'alphago',
	'ppo',
	'sac',
	'gpt3',
	'instructgpt',
	'dpo',
	'deepseek-r1'
];
const sharedEntries = sharedIds.map((id) => {
	const entry = deepLearningTimeline.entries.find((e) => e.id === id);
	if (!entry) throw new Error('Missing source paper: ' + id);
	return { ...entry };
});
const originalEntries: TimelineEntry[] = [
	{
		id: 'turing',
		year: 1950,
		label: 'Computing machinery and intelligence',
		theme: 'Origins',
		authors: 'Alan M. Turing',
		title: 'Computing Machinery and Intelligence',
		url: 'https://doi.org/10.1093/mind/LIX.236.433',
		contribution:
			'Recast questions about machine intelligence through an imitation game and discussed learning machines.',
		impact: 'Established an enduring behavioral perspective on evaluating machine intelligence.',
		caveat:
			'A conceptual argument, not an implemented system or a complete definition of intelligence.',
		exercise: 'Compare what an imitation-game evaluation reveals with a task-based evaluation.'
	},
	{
		id: 'dartmouth',
		year: 1955,
		label: 'The Dartmouth proposal',
		theme: 'Origins',
		authors: 'John McCarthy, Marvin L. Minsky, Nathaniel Rochester & Claude E. Shannon',
		title: 'A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence',
		url: 'https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html',
		contribution:
			'Outlined a research program spanning language, abstraction, learning, and neural computation.',
		impact: 'Named artificial intelligence as a shared research agenda for the 1956 workshop.',
		caveat: 'A proposal describing aspirations rather than demonstrated results.',
		exercise: 'Map its proposed research topics to later papers in this collection.',
		sourceType: 'Research proposal'
	},
	{
		id: 'logic-theorist',
		year: 1956,
		label: 'Logic Theory Machine',
		theme: 'Logic and representation',
		authors: 'Allen Newell & Herbert A. Simon',
		title: 'The Logic Theory Machine—A Complex Information Processing System',
		url: 'https://doi.org/10.1109/TIT.1956.1056797',
		contribution:
			'Described a program that searched for proofs in symbolic logic using heuristic rules.',
		impact: 'Demonstrated automated theorem proving as a concrete symbolic AI task.',
		caveat:
			'Search depends heavily on the representation, inference rules, and selected theorem domain.',
		exercise: 'Compare blind proof enumeration with a simple goal-directed heuristic.'
	},
	{
		id: 'lisp',
		year: 1960,
		label: 'LISP and symbolic computation',
		theme: 'Logic and representation',
		authors: 'John McCarthy',
		title: 'Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I',
		url: 'https://www-formal.stanford.edu/jmc/recursive.html',
		contribution:
			'Defined symbolic expressions, recursive functions, and an interpreter for symbolic computation.',
		impact:
			'Provided a language and computational substrate for generations of symbolic AI programs.',
		caveat: 'A programming-language foundation rather than an autonomous reasoning system.',
		exercise: 'Implement evaluation of a small symbolic-expression language.'
	},
	{
		id: 'dpll',
		year: 1962,
		label: 'DPLL satisfiability search',
		theme: 'Search and constraints',
		authors: 'Martin Davis, George Logemann & Donald Loveland',
		title: 'A Machine Program for Theorem-Proving',
		url: 'https://doi.org/10.1145/368273.368557',
		contribution: 'Combined branching and simplification for propositional satisfiability.',
		impact: 'Established the backtracking framework underlying later complete SAT solvers.',
		caveat: 'Worst-case search remains exponential; modern conflict learning was developed later.',
		exercise: 'Trace unit propagation and branching on a small unsatisfiable formula.'
	},
	{
		id: 'resolution',
		year: 1965,
		label: 'Resolution theorem proving',
		theme: 'Logic and representation',
		authors: 'J. Alan Robinson',
		title: 'A Machine-Oriented Logic Based on the Resolution Principle',
		url: 'https://doi.org/10.1145/321250.321253',
		contribution: 'Combined resolution with unification for automated first-order theorem proving.',
		impact: 'Made a uniform inference rule central to machine deduction and logic programming.',
		caveat: 'First-order validity is undecidable in general; search strategy remains critical.',
		exercise: 'Refute a set of clauses using unification and resolution.'
	},
	{
		id: 'alpha-beta',
		year: 1975,
		label: 'Alpha–beta pruning',
		theme: 'Search and constraints',
		authors: 'Donald E. Knuth & Ronald W. Moore',
		title: 'An Analysis of Alpha-Beta Pruning',
		url: 'https://doi.org/10.1016/0004-3702(75)90019-3',
		contribution:
			'Analyzed pruning in minimax game-tree search and its dependence on move ordering.',
		impact:
			'Explained why pruning can drastically reduce search while preserving the minimax result.',
		caveat:
			'An analysis of earlier algorithms; evaluation quality and branching factor still limit play.',
		exercise: 'Compare expanded nodes under favorable and unfavorable move ordering.'
	},
	{
		id: 'astar',
		year: 1968,
		label: 'A* heuristic search',
		theme: 'Search and constraints',
		authors: 'Peter E. Hart, Nils J. Nilsson & Bertram Raphael',
		title: 'A Formal Basis for the Heuristic Determination of Minimum Cost Paths',
		url: 'https://ai.stanford.edu/~nilsson/OnlinePubs-Nils/PublishedPapers/astar.pdf',
		contribution:
			'Ordered graph search using known path cost plus a heuristic estimate of remaining cost.',
		impact:
			'Connected heuristic guidance with least-cost solution guarantees under stated assumptions.',
		caveat:
			'Memory can grow rapidly; guarantees depend on heuristic properties and the search implementation.',
		exercise: 'Compare uniform-cost and A* search with admissible and inadmissible heuristics.'
	},
	{
		id: 'strips',
		year: 1971,
		label: 'STRIPS planning',
		theme: 'Planning',
		authors: 'Richard E. Fikes & Nils J. Nilsson',
		title: 'STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving',
		url: 'https://ai.stanford.edu/~nilsson/OnlinePubs-Nils/PublishedPapers/strips.pdf',
		contribution: 'Represented actions through conditions and changes to a symbolic world model.',
		impact: 'Established an influential representation for classical automated planning.',
		caveat: 'The original formulation assumes a simplified deterministic, fully observed world.',
		exercise: 'Encode blocks-world actions and find a plan that satisfies a specified goal.'
	},
	{
		id: 'frames',
		year: 1974,
		label: 'Frames',
		theme: 'Logic and representation',
		authors: 'Marvin Minsky',
		title: 'A Framework for Representing Knowledge',
		url: 'https://dspace.mit.edu/handle/1721.1/6089',
		contribution:
			'Organized stereotyped situations into structured frames with slots and defaults.',
		impact:
			'Influenced structured knowledge representation and accounts of expectation-driven interpretation.',
		caveat:
			'A conceptual framework with underspecified mechanisms; the technical report preceded the 1975 book chapter.',
		exercise: 'Represent a familiar situation with slots, defaults, and exceptions.',
		sourceType: 'Technical report'
	},
	{
		id: 'physical-symbols',
		year: 1976,
		label: 'Symbols and search',
		theme: 'Origins',
		authors: 'Allen Newell & Herbert A. Simon',
		title: 'Computer Science as Empirical Inquiry: Symbols and Search',
		url: 'https://doi.org/10.1145/360018.360022',
		contribution:
			'Articulated the physical symbol system hypothesis and heuristic search as a model of intelligent problem solving.',
		impact: 'Made the commitments of symbolic AI explicit and open to empirical examination.',
		caveat:
			'The hypothesis is a research position rather than a theorem establishing all requirements for intelligence.',
		exercise: 'Contrast symbolic problem representations with learned representations for one task.'
	},
	{
		id: 'csp',
		year: 1977,
		label: 'Constraint consistency',
		theme: 'Search and constraints',
		authors: 'Alan K. Mackworth',
		title: 'Consistency in Networks of Relations',
		url: 'https://www.cs.ubc.ca/~mack/Publications/AI77.pdf',
		contribution:
			'Formalized consistency operations that remove incompatible values from constraint networks.',
		impact: 'Made constraint propagation a standard tool alongside backtracking search.',
		caveat: 'Local consistency does not generally imply a globally satisfiable assignment.',
		exercise: 'Construct an arc-consistent network that still has no solution.'
	},
	{
		id: 'mycin',
		year: 1976,
		label: 'MYCIN',
		theme: 'Expert systems',
		authors: 'Edward H. Shortliffe',
		title: 'Computer-Based Medical Consultations: MYCIN',
		url: 'https://www.shortliffe.net/Shortliffe-1976/MYCIN%20thesis%20Book.htm',
		contribution:
			'Presented rule-based medical consultation with an inference engine, explanations, and certainty factors.',
		impact: 'Demonstrated the value of explicit domain knowledge in a specialized expert system.',
		caveat:
			'A research system, not evidence of routine clinical deployment; rules are costly to acquire and maintain.',
		exercise: 'Trace which rules support a conclusion in a small consultation example.',
		sourceType: 'Research monograph'
	},
	{
		id: 'dendral',
		year: 1969,
		label: 'DENDRAL',
		theme: 'Expert systems',
		authors: 'Bruce G. Buchanan, Georgia L. Sutherland & Edward A. Feigenbaum',
		title:
			'Heuristic DENDRAL: A Program for Generating Explanatory Hypotheses in Organic Chemistry',
		url: 'https://digirepo.nlm.nih.gov/ext/document/101584906X920/PDF/101584906X920.pdf',
		contribution:
			'Used chemical constraints and mass-spectrometry evidence to generate and test candidate molecular structures.',
		impact:
			'Showed that strong domain knowledge can make otherwise large hypothesis searches useful.',
		caveat:
			'Its success relies on specialized representation and knowledge, not unrestricted scientific reasoning.',
		exercise: 'Compare unconstrained candidate generation with chemistry-based pruning.'
	},
	{
		id: 'default-logic',
		year: 1980,
		label: 'Default logic',
		theme: 'Logic and representation',
		authors: 'Raymond Reiter',
		title: 'A Logic for Default Reasoning',
		url: 'https://doi.org/10.1016/0004-3702(80)90014-4',
		contribution: 'Formalized defeasible inference using default rules and consistent extensions.',
		impact: 'Provided a major foundation for reasoning with incomplete knowledge and exceptions.',
		caveat: 'Extensions can be multiple or absent, and inference can be computationally difficult.',
		exercise: 'Represent a default rule and show how an explicit exception changes conclusions.'
	},
	{
		id: 'circumscription',
		year: 1980,
		label: 'Circumscription',
		theme: 'Logic and representation',
		authors: 'John McCarthy',
		title: 'Circumscription—A Form of Non-Monotonic Reasoning',
		url: 'https://www-formal.stanford.edu/jmc/circumscription.html',
		contribution:
			'Formalized default conclusions by minimizing the extension of selected predicates.',
		impact:
			'Provided a logical approach to commonsense assumptions and aspects of the frame problem.',
		caveat:
			'Choosing what to minimize is a modeling decision; later formulations extend this original account.',
		exercise:
			'Model an abnormality predicate and compare conclusions before and after adding an exception.'
	},
	{
		id: 'rete',
		year: 1982,
		label: 'Rete matching',
		theme: 'Expert systems',
		authors: 'Charles L. Forgy',
		title: 'Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem',
		url: 'https://doi.org/10.1016/0004-3702(82)90033-6',
		contribution:
			'Shared intermediate pattern matches in a network and updated them incrementally as facts changed.',
		impact:
			'Improved efficiency of production-rule systems with many rules and working-memory facts.',
		caveat: 'Stored partial matches can consume substantial memory.',
		exercise: 'Compare full rule rescanning with incremental updates after changing one fact.'
	},
	{
		id: 'junction-tree',
		year: 1988,
		label: 'Local probabilistic computation',
		theme: 'Uncertainty and causality',
		authors: 'Steffen L. Lauritzen & David J. Spiegelhalter',
		title:
			'Local Computations with Probabilities on Graphical Structures and Their Application to Expert Systems',
		url: 'https://doi.org/10.1111/j.2517-6161.1988.tb01721.x',
		contribution:
			'Organized exact inference in graphical probability models through local computations on suitable transformed structures.',
		impact:
			'Made structured probabilistic inference practical for expert systems and Bayesian networks.',
		caveat: 'Exact inference costs can grow exponentially with graph treewidth.',
		exercise: 'Compare inference costs for a chain and a densely connected graph.'
	},
	{
		id: 'subsumption',
		year: 1986,
		label: 'Subsumption robotics',
		theme: 'Embodied intelligence',
		authors: 'Rodney A. Brooks',
		title: 'A Robust Layered Control System for a Mobile Robot',
		url: 'https://doi.org/10.1109/JRA.1986.1087032',
		contribution:
			'Built robot behavior from layered asynchronous controllers whose outputs could suppress lower-level behaviors.',
		impact:
			'Challenged centralized world-model planning as the sole route to effective embodied behavior.',
		caveat: 'Reactive layers alone do not solve arbitrary long-horizon planning or reasoning.',
		exercise: 'Combine obstacle avoidance and goal following with explicit behavior priorities.'
	},
	{
		id: 'satplan',
		year: 1992,
		label: 'Planning as satisfiability',
		theme: 'Planning',
		authors: 'Henry Kautz & Bart Selman',
		title: 'Planning as Satisfiability',
		url: 'https://www.cs.cornell.edu/selman/papers/pdf/92.ecai.satplan.pdf',
		contribution: 'Encoded bounded planning problems as propositional satisfiability constraints.',
		impact: 'Connected improvements in SAT solving to automated planning.',
		caveat: 'A plan-length bound is needed and encodings can become large.',
		exercise: 'Encode a two-step plan as Boolean action and state variables.'
	},
	{
		id: 'graphplan',
		year: 1997,
		label: 'Graphplan',
		theme: 'Planning',
		authors: 'Avrim L. Blum & Merrick L. Furst',
		title: 'Fast Planning Through Planning Graph Analysis',
		url: 'https://www.cs.cmu.edu/afs/cs/usr/avrim/www/Papers/graphplan.pdf',
		contribution:
			'Constructed planning graphs with mutual exclusions and extracted plans through backward search.',
		impact:
			'Introduced a powerful planning representation and heuristics that influenced later planners.',
		caveat:
			'The journal paper extends 1995 work; planning graphs do not remove worst-case combinatorial difficulty.',
		exercise: 'Mark mutually exclusive actions and propositions in a small planning graph.'
	},
	{
		id: 'pomdp',
		year: 1998,
		label: 'Planning under partial observation',
		theme: 'Planning',
		authors: 'Leslie Pack Kaelbling, Michael L. Littman & Anthony R. Cassandra',
		title: 'Planning and Acting in Partially Observable Stochastic Domains',
		url: 'https://www.cassandra.org/arc/papers/aij98.pdf',
		contribution:
			'Presented belief-state planning and algorithms for partially observable Markov decision processes.',
		impact:
			'Connected uncertainty about the world to sequential decisions and information gathering.',
		caveat: 'Exact solutions scale poorly with large state, action, and observation spaces.',
		exercise: 'Update beliefs after an observation and compare sensing with immediate action.'
	},
	{
		id: 'prm',
		year: 1996,
		label: 'Probabilistic roadmaps',
		theme: 'Embodied intelligence',
		authors: 'Lydia E. Kavraki et al.',
		title: 'Probabilistic Roadmaps for Path Planning in High-Dimensional Configuration Spaces',
		url: 'https://doi.org/10.1109/70.508439',
		contribution:
			'Built reusable graphs by sampling collision-free configurations and connecting nearby samples.',
		impact: 'Made motion planning feasible in many high-dimensional configuration spaces.',
		caveat:
			'Narrow passages can be difficult to sample; roadmap construction assumes a usable collision checker.',
		exercise: 'Compare roadmap connectivity as sample count changes around a narrow passage.'
	},
	{
		id: 'rrt',
		year: 1998,
		label: 'Rapidly exploring random trees',
		theme: 'Embodied intelligence',
		authors: 'Steven M. LaValle',
		title: 'Rapidly-Exploring Random Trees: A New Tool for Path Planning',
		url: 'https://msl.cs.illinois.edu/~lavalle/papers/Lav98c.pdf',
		contribution:
			'Grew a search tree toward randomly sampled states to explore configuration spaces.',
		impact: 'Established an influential family of sampling-based motion planners.',
		caveat:
			'The basic method seeks feasible paths and does not guarantee asymptotically optimal path cost.',
		exercise: 'Measure time to first feasible path and path length across random seeds.',
		sourceType: 'Technical report'
	},
	{
		id: 'irl',
		year: 2000,
		label: 'Inverse reinforcement learning',
		theme: 'Learning to act',
		authors: 'Andrew Y. Ng & Stuart Russell',
		title: 'Algorithms for Inverse Reinforcement Learning',
		url: 'https://ai.stanford.edu/~ang/papers/icml00-irl.pdf',
		contribution: 'Studied how to infer reward functions consistent with demonstrated behavior.',
		impact:
			'Made learning objectives from behavior a concrete alternative to manually specifying rewards.',
		caveat:
			'Many rewards explain the same policy; assumptions and regularization determine the inferred objective.',
		exercise: 'Construct two distinct rewards with the same optimal policy.'
	},
	{
		id: 'uct',
		year: 2006,
		label: 'UCT tree search',
		theme: 'Learning to act',
		authors: 'Levente Kocsis & Csaba Szepesvári',
		title: 'Bandit Based Monte-Carlo Planning',
		url: 'https://doi.org/10.1007/11871842_29',
		contribution:
			'Applied upper-confidence exploration to action selection inside Monte Carlo search trees.',
		impact:
			'Connected bandit exploration to scalable planning and influenced later game-playing systems.',
		caveat:
			'Finite-budget performance depends on rollout quality, rewards, and branching structure.',
		exercise: 'Compare uniform rollouts with UCT action allocation on the same game tree.'
	},
	{
		id: 'alphazero',
		year: 2018,
		label: 'AlphaZero',
		theme: 'Learning and search',
		authors: 'David Silver et al.',
		title:
			'A General Reinforcement Learning Algorithm that Masters Chess, Shogi, and Go through Self-Play',
		url: 'https://doi.org/10.1126/science.aar6404',
		contribution:
			'Combined self-play, policy and value learning, and search in several perfect-information games.',
		impact:
			'Showed a common training approach could reach strong play across games without human game records.',
		caveat:
			'The systems still receive game rules and substantial training compute; earlier preprint appeared in 2017.',
		exercise: 'Compare a learned policy acting directly with the same policy guiding search.'
	},
	{
		id: 'muzero',
		year: 2020,
		label: 'MuZero',
		theme: 'Learning and search',
		authors: 'Julian Schrittwieser et al.',
		title: 'Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model',
		url: 'https://arxiv.org/abs/1911.08265',
		contribution:
			'Learned latent dynamics, reward, policy, and value predictions used inside a search procedure.',
		impact:
			'Extended search-based learning to settings without supplying a simulator of the environment rules.',
		caveat:
			'The latent model is optimized for decision-relevant predictions, not full observation reconstruction; preprint appeared in 2019.',
		exercise: 'Compare imagined reward and value predictions with observed outcomes.'
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
		caveat: 'Search, stored experience, and learning an evaluation function play different roles.'
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
		exercise: 'Compare TD(0) and Monte Carlo prediction on a random walk, using the same episodes.',
		caveat:
			'Convergence conditions depend on the setting. Function approximation and off-policy sampling can make apparently similar updates unstable.'
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
	}
];
const foundationEntries: TimelineEntry[] = [
	{
		id: 'logic-programming',
		year: 1974,
		label: 'Logic programming',
		theme: 'Logic and representation',
		authors: 'Robert Kowalski',
		title: 'Predicate Logic as Programming Language',
		url: 'https://www.doc.ic.ac.uk/~rak/papers/IFIP74.pdf',
		contribution: 'Connected logical clauses with a procedural interpretation for computation.',
		impact:
			'Provided foundations for logic programming and the interpretation of Prolog-style programs.',
		caveat:
			'Declarative meaning and operational behavior differ when search order, termination, and extra-logical features matter.',
		exercise: 'Express a graph path relation as clauses and compare query orders.'
	},
	{
		id: 'nash',
		year: 1950,
		label: 'Nash equilibrium',
		theme: 'Multi-agent systems',
		authors: 'John F. Nash Jr.',
		title: 'Equilibrium Points in N-Person Games',
		url: 'https://doi.org/10.1073/pnas.36.1.48',
		contribution: 'Established existence of mixed-strategy equilibria in finite games.',
		impact:
			'Provided a game-theoretic foundation used to analyze interacting decision-makers and multi-agent learning.',
		caveat:
			'Existence does not guarantee efficient computation, uniqueness, cooperation, or convergence of learning.',
		exercise:
			'Find mixed strategies for a two-player game and distinguish equilibrium from joint welfare.'
	},
	{
		id: 'markov-games',
		year: 1994,
		label: 'Markov games',
		theme: 'Multi-agent systems',
		authors: 'Michael L. Littman',
		title: 'Markov Games as a Framework for Multi-Agent Reinforcement Learning',
		url: 'https://doi.org/10.1016/B978-1-55860-335-6.50027-1',
		contribution:
			'Extended reinforcement learning to stochastic games and studied minimax learning for competitive interactions.',
		impact:
			'Made other adaptive decision-makers explicit rather than treating them as a stationary environment.',
		caveat:
			'The minimax formulation addresses a restricted competitive setting, not every general-sum interaction.',
		exercise: 'Compare independent Q-learning and minimax updates in a small zero-sum game.'
	},
	{
		id: 'bdi',
		year: 1995,
		label: 'Belief–desire–intention agents',
		theme: 'Multi-agent systems',
		authors: 'Anand S. Rao & Michael P. Georgeff',
		title: 'BDI Agents: From Theory to Practice',
		url: 'https://cdn.aaai.org/ICMAS/1995/ICMAS95-042.pdf',
		contribution:
			'Connected formal BDI accounts of agency with practical interpreters and an air-traffic application.',
		impact:
			'Made beliefs, goals, and commitments an influential structure for agent-oriented systems.',
		caveat:
			'Practical implementations simplify the full formal theory and rely on specified plans and beliefs.',
		exercise: 'Trace belief revision and intention reconsideration after a plan becomes infeasible.'
	}
];

export const aiTimeline: Timeline = {
	slug: 'artificial-intelligence',
	title: 'Artificial intelligence',
	description:
		'Foundational work on search, logic, planning, knowledge, uncertainty, learning, robotics, and agents.',
	reviewedAt: '2026-10-21',
	scope:
		'Symbolic reasoning, expert systems, probabilistic inference, sequential decisions, embodied control, and the connection between learning and search.',
	entries: [...originalEntries, ...foundationEntries, ...sharedEntries].sort(
		(a, b) => a.year - b.year || a.label.localeCompare(b.label)
	)
};
