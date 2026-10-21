import type { StudyStage } from './ml-curriculum';
export const aiCurriculum: StudyStage[] = [
	{
		id: 'origins',
		title: 'Early ideas and programs',
		level: 'Foundations',
		before: 'Basic computation, algorithms, and mathematical logic.',
		goal: 'Behavioral tests, symbolic problem solving, and the early learning agenda.',
		checkpoint:
			'Compare the tasks, assumptions, and evidence in early proposals and implemented programs.',
		readings: ['turing', 'dartmouth', 'physical-symbols', 'checkers'],
		core: ['turing', 'dartmouth', 'physical-symbols', 'checkers']
	},
	{
		id: 'logic',
		title: 'Logic and knowledge representation',
		level: 'Foundations',
		before: 'Propositional and first-order logic, recursion, and sets.',
		goal: 'Symbolic expressions, proof search, unification, frames, and defeasible reasoning.',
		checkpoint: 'Derive a resolution proof and model a default rule with an exception.',
		readings: [
			'logic-theorist',
			'lisp',
			'resolution',
			'frames',
			'default-logic',
			'circumscription',
			'logic-programming'
		],
		core: [
			'logic-theorist',
			'lisp',
			'resolution',
			'frames',
			'default-logic',
			'circumscription',
			'logic-programming'
		]
	},
	{
		id: 'search',
		title: 'Search, constraints, and games',
		level: 'Foundations',
		before: 'Graphs, recursion, complexity, and propositional logic.',
		goal: 'Heuristic search, satisfiability, minimax pruning, and constraint propagation.',
		checkpoint:
			'Count expanded states under different heuristics and constraint propagation strategies.',
		readings: ['dpll', 'astar', 'alpha-beta', 'csp'],
		core: ['dpll', 'astar', 'alpha-beta', 'csp']
	},
	{
		id: 'knowledge',
		title: 'Expert systems',
		level: 'Foundations',
		before: 'Rules, logical inference, and search.',
		goal: 'Domain-specific hypotheses, consultation rules, explanations, and efficient matching.',
		checkpoint: 'Trace inference and explain how changing one rule affects conclusions.',
		readings: ['dendral', 'mycin', 'rete'],
		core: ['dendral', 'mycin', 'rete']
	},
	{
		id: 'uncertainty',
		title: 'Probability and causality',
		level: 'Foundations',
		before: 'Conditional probability, Bayes rule, graphs, and statistical estimation.',
		goal: 'Belief networks, local inference, conditional independence, and intervention.',
		checkpoint: 'Compare observational conditioning with an intervention in a small causal graph.',
		readings: ['belief-networks', 'junction-tree', 'causal-diagrams'],
		core: ['belief-networks', 'junction-tree', 'causal-diagrams']
	},
	{
		id: 'planning',
		title: 'Planning and partial observation',
		level: 'Foundations',
		before: 'State transitions, graph search, logic, and conditional probability.',
		goal: 'Action models, satisfiability encodings, planning graphs, and belief-state decisions.',
		checkpoint:
			'Solve a small deterministic plan, then introduce noisy observations and an information-gathering action.',
		readings: ['strips', 'satplan', 'graphplan', 'pomdp'],
		core: ['strips', 'satplan', 'graphplan', 'pomdp']
	},
	{
		id: 'learning',
		title: 'Learning representations and rules',
		level: 'Foundations',
		before: 'Linear algebra, derivatives, probability, and supervised evaluation.',
		goal: 'Threshold networks, backpropagation, learned decision rules, learnability, and neural representations.',
		checkpoint: 'Compare hand-coded rules with a learned model under distribution shift.',
		readings: [
			'mcculloch-pitts',
			'perceptron',
			'learnability',
			'decision-trees',
			'backprop',
			'alexnet',
			'transformer'
		],
		core: ['perceptron', 'learnability', 'decision-trees', 'backprop', 'transformer']
	},
	{
		id: 'decisions',
		title: 'Learning to act',
		level: 'Further study',
		before: 'Markov chains, expected return, dynamic programming, and gradients.',
		goal: 'Value recursion, temporal differences, off-policy learning, policy gradients, exploration, and inverse rewards.',
		checkpoint: 'Compare value-based and policy-gradient learning on the same small environment.',
		readings: [
			'bellman',
			'td-learning',
			'q-learning',
			'reinforce',
			'ucb',
			'irl',
			'dqn',
			'ppo',
			'sac'
		],
		core: ['bellman', 'td-learning', 'q-learning', 'reinforce', 'ucb', 'irl', 'dqn', 'ppo']
	},
	{
		id: 'embodiment',
		title: 'Robotics and motion planning',
		level: 'Further study',
		before: 'Geometry, configuration spaces, graph search, and feedback.',
		goal: 'Reactive control layers, roadmaps, random trees, and collision-aware planning.',
		checkpoint:
			'Compare a reactive controller and a sampling-based planner around obstacles and narrow passages.',
		readings: ['subsumption', 'prm', 'rrt'],
		core: ['subsumption', 'prm', 'rrt']
	},
	{
		id: 'learned-search',
		title: 'Learning with search',
		level: 'Further study',
		before: 'Neural value functions, policy optimization, and tree search.',
		goal: 'Monte Carlo planning, self-play, policy and value guidance, and learned dynamics.',
		checkpoint: 'Compare a policy acting directly with the same policy guiding a bounded search.',
		readings: ['uct', 'alphago', 'alphazero', 'muzero'],
		core: ['uct', 'alphago', 'alphazero', 'muzero']
	},
	{
		id: 'multiagent',
		title: 'Interacting agents',
		level: 'Further study',
		before: 'Expected utility, probability, sequential decisions, and basic game theory.',
		goal: 'Equilibria, stochastic games, and agent beliefs, goals, and commitments.',
		checkpoint:
			'Compare equilibrium behavior with independent learning, then trace how an agent revises an infeasible intention.',
		readings: ['nash', 'markov-games', 'bdi'],
		core: ['nash', 'markov-games', 'bdi']
	},
	{
		id: 'language-agents',
		title: 'Language models and preferences',
		level: 'Research',
		before: 'Transformers, reinforcement learning, preference estimation, and evaluation.',
		goal: 'In-context conditioning, human-feedback training, preference objectives, and reasoning-oriented reinforcement learning.',
		checkpoint:
			'Evaluate task success separately from human preference and reported reasoning steps.',
		readings: ['gpt3', 'instructgpt', 'dpo', 'deepseek-r1'],
		core: ['gpt3', 'instructgpt', 'dpo', 'deepseek-r1']
	}
];
export const aiPreparation = [
	{
		title: 'Artificial Intelligence: A Modern Approach',
		url: 'https://aima.cs.berkeley.edu/',
		note: 'Russell and Norvig: search, reasoning, planning, uncertainty, learning, and agents.'
	},
	{
		title: 'Artificial Intelligence: Foundations of Computational Agents',
		url: 'https://artint.info/',
		note: 'Poole and Mackworth: representations, reasoning, decisions, and learning.'
	},
	{
		title: 'Reinforcement Learning: An Introduction',
		url: 'http://incompleteideas.net/book/the-book-2nd.html',
		note: 'Sutton and Barto: value functions, policy learning, planning, and exploration.'
	},
	{
		title: 'Planning Algorithms',
		url: 'https://lavalle.pl/planning/',
		note: 'Steven LaValle: discrete planning, motion planning, and decision theory.'
	}
];
