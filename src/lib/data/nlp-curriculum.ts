import type { StudyStage } from './ml-curriculum';
export const nlpCurriculum: StudyStage[] = [
	{
		id: 'statistical',
		title: 'Information and statistical language',
		level: 'Foundations',
		before: 'Probability, maximum likelihood, and logarithms.',
		goal: 'Entropy, count-based language models, smoothing, and neural language probabilities.',
		checkpoint: 'Compare held-out cross-entropy for unigram, smoothed bigram, and neural models.',
		readings: ['shannon', 'kneser-ney', 'lda', 'neural-lm'],
		core: ['shannon', 'kneser-ney', 'neural-lm', 'lda']
	},
	{
		id: 'structure',
		title: 'Sequences and syntax',
		level: 'Foundations',
		before: 'Conditional probability, dynamic programming, and gradients.',
		goal: 'Hidden states, globally normalized labels, lexical dependencies, and recurrent memory.',
		checkpoint: 'Compare tagging with an HMM and CRF; inspect malformed BIO sequences.',
		readings: [
			'chomsky',
			'earley',
			'penn-treebank',
			'hmm',
			'collins-parser',
			'dependency-parsing',
			'crf',
			'lstm'
		],
		core: ['hmm', 'crf', 'lstm', 'earley', 'penn-treebank', 'dependency-parsing', 'chomsky']
	},
	{
		id: 'translation',
		title: 'Alignment and translation',
		level: 'Foundations',
		before: 'Sequence models, latent variables, EM, and neural networks.',
		goal: 'Word alignment, phrase tables, encoder–decoders, and learned attention.',
		checkpoint:
			'Inspect alignments for reordered sentences in word-based and attention-based models.',
		readings: ['ibm-models', 'phrase-smt', 'seq2seq', 'bahdanau'],
		core: ['ibm-models', 'phrase-smt', 'seq2seq', 'bahdanau']
	},
	{
		id: 'representations',
		title: 'Words, subwords, and contextual features',
		level: 'Foundations',
		before: 'Vector similarity, co-occurrence counts, and recurrent models.',
		goal: 'Distributional vectors, tokenization, and contextual representations.',
		checkpoint:
			'Compare ambiguous-word representations and subword fragmentation across languages.',
		readings: [
			'distributional',
			'word2vec',
			'negative-sampling',
			'glove',
			'fasttext',
			'fasttext-subwords',
			'bpe',
			'elmo'
		],
		core: [
			'word2vec',
			'glove',
			'bpe',
			'elmo',
			'fasttext-subwords',
			'negative-sampling',
			'distributional'
		]
	},
	{
		id: 'pretraining',
		title: 'Transformers and transfer',
		level: 'Foundations',
		before: 'Attention, encoder–decoder models, and optimization.',
		goal: 'Self-attention, masked prediction, denoising, and text-to-text transfer.',
		checkpoint:
			'Compare encoder-only and encoder–decoder objectives for classification and summarization.',
		readings: ['transformer', 'ulmfit', 'gpt1', 'bert', 'roberta', 'electra', 'bart', 't5'],
		core: ['transformer', 'bert', 't5', 'ulmfit', 'gpt1', 'roberta', 'electra']
	},
	{
		id: 'retrieval',
		title: 'Sentence embeddings and retrieval',
		level: 'Further study',
		before: 'Transformer encoders, similarity functions, and ranking metrics.',
		goal: 'Bi-encoders, token-level late interaction, and retrieval-conditioned generation.',
		checkpoint: 'Compare recall, index storage, and query latency for sparse and dense retrieval.',
		readings: ['idf', 'bm25', 'sbert', 'dpr', 'colbert', 'rag'],
		core: ['sbert', 'dpr', 'colbert', 'rag', 'idf', 'bm25']
	},
	{
		id: 'multilingual',
		title: 'Multilingual transfer',
		level: 'Further study',
		before: 'Masked language modeling, tokenization, and task evaluation.',
		goal: 'Shared representations across languages and uneven transfer performance.',
		checkpoint: 'Report transfer scores separately for high- and low-resource languages.',
		readings: ['xlmr'],
		core: ['xlmr']
	},
	{
		id: 'evaluation',
		title: 'Benchmarks and interpretation',
		level: 'Further study',
		before: 'Train/test separation, precision, recall, and text generation.',
		goal: 'Translation metrics, extractive QA, multi-task evaluation, and attention explanations.',
		checkpoint:
			'Compare BLEU with human judgments on paraphrases; inspect GLUE task scores separately.',
		readings: [
			'bleu',
			'rouge',
			'snli',
			'squad',
			'glue',
			'attention-explanation',
			'training-data-extraction'
		],
		core: ['bleu', 'squad', 'glue', 'attention-explanation', 'rouge', 'snli']
	},
	{
		id: 'scaling',
		title: 'Scaling and adaptation',
		level: 'Further study',
		before: 'Transformer pretraining, compute budgets, and validation.',
		goal: 'In-context learning, scaling relationships, compute allocation, and low-rank adaptation.',
		checkpoint: 'Compare fine-tuning and prompting under a fixed compute and data budget.',
		readings: ['gpt2', 'gpt3', 'scaling-laws', 'chinchilla', 'lora', 'switch', 'flashattention'],
		core: ['gpt3', 'scaling-laws', 'chinchilla', 'lora', 'gpt2']
	},
	{
		id: 'posttraining',
		title: 'Instruction following and reasoning',
		level: 'Further study',
		before: 'Autoregressive models, preference data, and reinforcement learning basics.',
		goal: 'Instruction tuning, preference optimization, reasoning prompts, and tool use.',
		checkpoint: 'Evaluate factual accuracy separately from preference scores and response length.',
		readings: ['instructgpt', 'chain-of-thought', 'dpo', 'react', 'toolformer', 'llm-judge'],
		core: ['instructgpt', 'chain-of-thought', 'dpo']
	},
	{
		id: 'research',
		title: 'Later language-model research',
		level: 'Research',
		before: 'Pretraining, post-training, sparse experts, and controlled benchmarking.',
		goal: 'State-space alternatives, sparse models, reasoning training, and conditional memory.',
		checkpoint: 'Compare model families at matched inference cost on a documented task set.',
		readings: ['mamba', 'deepseek-v3', 'deepseek-r1', 'kimi-k2', 'llada', 'mhc', 'engram'],
		core: ['mamba', 'deepseek-r1']
	}
];
export const nlpPreparation = [
	{
		title: 'Speech and Language Processing',
		url: 'https://web.stanford.edu/~jurafsky/slp3/',
		note: 'Jurafsky and Martin: language models, linguistic structure, speech, and neural NLP.'
	},
	{
		title: 'Introduction to Information Retrieval',
		url: 'https://nlp.stanford.edu/IR-book/',
		note: 'Manning, Raghavan, and Schütze: indexing, ranking, and retrieval evaluation.'
	}
];
