import type { Timeline, TimelineEntry } from './timelines';
import { deepLearningTimeline } from './deep-learning';
import { generativeAITimeline } from './generative-ai';
const sharedIds = [
	'neural-lm',
	'lstm',
	'seq2seq',
	'bahdanau',
	'word2vec',
	'transformer',
	'bert',
	't5',
	'rag',
	'training-data-extraction',
	'gpt3',
	'scaling-laws',
	'chinchilla',
	'lora',
	'switch',
	'flashattention',
	'instructgpt',
	'chain-of-thought',
	'dpo',
	'react',
	'toolformer',
	'llm-judge',
	'mamba',
	'deepseek-v3',
	'deepseek-r1',
	'kimi-k2',
	'llada',
	'mhc',
	'engram'
];
const sourceEntries = [...deepLearningTimeline.entries, ...generativeAITimeline.entries];
const sharedEntries = sharedIds.map((id) => {
	const paper = sourceEntries.find((entry) => entry.id === id);
	if (!paper) throw new Error(`Missing source paper: ${id}`);
	return { ...paper };
});
const domainEntries: TimelineEntry[] = [
	{
		id: 'shannon',
		year: 1948,
		label: 'Information theory',
		theme: 'Statistical language',
		authors: 'Claude E. Shannon',
		title: 'A Mathematical Theory of Communication',
		url: 'https://doi.org/10.1002/j.1538-7305.1948.tb01338.x',
		contribution:
			'Defined entropy and information rates, with successive approximations to English as examples of statistical dependence.',
		impact:
			'Provided the language of uncertainty and coding behind cross-entropy and probabilistic language modeling.',
		caveat: 'A theory of communication; entropy does not measure semantic understanding.',
		exercise: 'Estimate unigram and bigram entropy on the same corpus.'
	},
	{
		id: 'hmm',
		year: 1989,
		label: 'Hidden Markov models',
		theme: 'Structured prediction',
		authors: 'Lawrence R. Rabiner',
		title: 'A Tutorial on Hidden Markov Models and Selected Applications in Speech Recognition',
		url: 'https://doi.org/10.1109/5.18626',
		contribution:
			'Systematized forward-backward inference, Viterbi decoding, and parameter estimation for hidden-state sequence models.',
		impact: 'Made HMM methods accessible for speech recognition and later tagging systems.',
		caveat:
			'A tutorial consolidating earlier work; first-order state and conditional emission assumptions restrict dependencies.',
		exercise: 'Implement Viterbi decoding for a small part-of-speech tagger.'
	},
	{
		id: 'ibm-models',
		year: 1993,
		label: 'IBM translation models',
		theme: 'Translation',
		authors: 'Peter F. Brown et al.',
		title: 'The Mathematics of Statistical Machine Translation: Parameter Estimation',
		url: 'https://aclanthology.org/J93-2003/',
		contribution:
			'Developed probabilistic word alignment and translation models with EM estimation from parallel text.',
		impact: 'Made latent alignments central to statistical machine translation.',
		caveat: 'Word-based assumptions struggle with phrases, syntax, and long-distance reordering.',
		exercise: 'Fit IBM Model 1 and inspect learned word alignments.'
	},
	{
		id: 'collins-parser',
		year: 1997,
		label: 'Lexicalized parsing',
		theme: 'Structured prediction',
		authors: 'Michael Collins',
		title: 'Three Generative, Lexicalised Models for Statistical Parsing',
		url: 'https://aclanthology.org/P97-1003/',
		contribution:
			'Conditioned probabilistic parsing decisions on lexical heads and structural context.',
		impact: 'Showed how lexical dependencies improve statistical constituency parsing.',
		caveat: 'Requires treebank annotation and carefully designed independence assumptions.',
		exercise: 'Compare a plain PCFG with lexical conditioning on frequent heads.'
	},
	{
		id: 'crf',
		year: 2001,
		label: 'Conditional random fields',
		sourceType: 'Conference paper · PostScript',
		theme: 'Structured prediction',
		authors: 'John Lafferty, Andrew McCallum & Fernando Pereira',
		title:
			'Conditional Random Fields: Probabilistic Models for Segmenting and Labeling Sequence Data',
		url: 'https://people.cs.umass.edu/~mccallum/papers/crf-icml01.ps',
		contribution: 'Introduced globally normalized conditional models for structured labels.',
		impact:
			'Allowed overlapping input features without modeling their joint distribution, influencing tagging and named entity recognition.',
		caveat:
			'Exact inference is tractable only for suitable graph structures; feature design still matters.',
		exercise: 'Compare independent token classification with a linear-chain CRF on BIO tags.'
	},
	{
		id: 'bleu',
		year: 2002,
		label: 'BLEU',
		theme: 'Evaluation',
		authors: 'Kishore Papineni et al.',
		title: 'BLEU: a Method for Automatic Evaluation of Machine Translation',
		url: 'https://aclanthology.org/P02-1040/',
		contribution:
			'Combined clipped n-gram precision with a brevity penalty to score translations against references.',
		impact: 'Enabled inexpensive corpus-level comparisons during translation development.',
		caveat:
			'Reference overlap misses valid paraphrases and does not directly measure factuality or sentence-level quality.',
		exercise: 'Calculate corpus BLEU for a literal translation and a valid paraphrase.'
	},
	{
		id: 'phrase-smt',
		year: 2003,
		label: 'Phrase-based translation',
		theme: 'Translation',
		authors: 'Philipp Koehn, Franz Josef Och & Daniel Marcu',
		title: 'Statistical Phrase-Based Translation',
		url: 'https://aclanthology.org/N03-1017/',
		contribution:
			'Learned phrase translation pairs from aligned parallel corpora and combined them in a statistical decoder.',
		impact:
			'Moved translation beyond individual words and established a strong pre-neural approach.',
		caveat: 'Phrase tables are large, and long-range syntax remains difficult.',
		exercise: 'Extract phrase pairs consistent with a small set of word alignments.'
	},
	{
		id: 'kneser-ney',
		year: 1995,
		label: 'Kneser–Ney smoothing',
		theme: 'Statistical language',
		authors: 'Reinhard Kneser & Hermann Ney',
		title: 'Improved Backing-Off for M-Gram Language Modeling',
		url: 'https://doi.org/10.1109/ICASSP.1995.479394',
		contribution: 'Used discounted counts and continuation statistics to estimate unseen n-grams.',
		impact:
			'Established a durable baseline for estimating language probabilities from sparse counts.',
		caveat: 'Fixed context windows cannot capture arbitrary long-distance dependencies.',
		exercise: 'Compare add-one smoothing and continuation-based backoff on held-out perplexity.'
	},
	{
		id: 'glove',
		year: 2014,
		label: 'GloVe',
		theme: 'Word representations',
		authors: 'Jeffrey Pennington, Richard Socher & Christopher Manning',
		title: 'GloVe: Global Vectors for Word Representation',
		url: 'https://aclanthology.org/D14-1162/',
		contribution: 'Fit word vectors to weighted log co-occurrence statistics.',
		impact:
			'Connected global count-based semantics with dense embeddings and reported strong analogy results.',
		caveat: 'One vector per word conflates senses and reflects biases in the training corpus.',
		exercise: 'Inspect nearest neighbors as the co-occurrence window changes.'
	},
	{
		id: 'bpe',
		year: 2016,
		label: 'Subword tokenization',
		theme: 'Word representations',
		authors: 'Rico Sennrich, Barry Haddow & Alexandra Birch',
		title: 'Neural Machine Translation of Rare Words with Subword Units',
		url: 'https://aclanthology.org/P16-1162/',
		contribution:
			'Adapted byte-pair encoding to represent rare words as sequences of subword units.',
		impact:
			'Reduced fixed-vocabulary limitations and made subword vocabularies standard in neural text models.',
		caveat:
			'Segmentation quality and token costs vary across languages; first preprint appeared in 2015.',
		exercise: 'Train BPE with two vocabulary sizes and compare fragmentation across languages.'
	},
	{
		id: 'squad',
		year: 2016,
		label: 'SQuAD',
		theme: 'Evaluation',
		authors: 'Pranav Rajpurkar et al.',
		title: 'SQuAD: 100,000+ Questions for Machine Comprehension of Text',
		url: 'https://arxiv.org/abs/1606.05250',
		contribution: 'Released crowd-written questions with answer spans in Wikipedia passages.',
		impact: 'Established extractive reading comprehension as a widely compared benchmark.',
		caveat:
			'The original task assumes an answer exists in the supplied passage and excludes many forms of open-ended QA.',
		exercise: 'Compare exact match and token F1 on boundary errors.'
	},
	{
		id: 'elmo',
		year: 2018,
		label: 'ELMo',
		theme: 'Pretraining',
		authors: 'Matthew E. Peters et al.',
		title: 'Deep Contextualized Word Representations',
		url: 'https://arxiv.org/abs/1802.05365',
		contribution:
			'Combined internal layers of a pretrained bidirectional language model into contextual token features.',
		impact:
			'Improved several NLP tasks and shifted word representations from fixed vectors to context-dependent features.',
		caveat: 'Uses recurrent computation and combines separately directional language models.',
		exercise: 'Compare representations of the same ambiguous word in two contexts.'
	},
	{
		id: 'glue',
		year: 2019,
		label: 'GLUE',
		theme: 'Evaluation',
		authors: 'Alex Wang et al.',
		title: 'GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding',
		url: 'https://arxiv.org/abs/1804.07461',
		contribution: 'Collected diverse sentence-level tasks under shared evaluation procedures.',
		impact: 'Made broad transfer performance a central comparison for pretrained models.',
		caveat: 'An aggregate score can hide task-specific weaknesses; the preprint appeared in 2018.',
		exercise: 'Inspect per-task performance before comparing the aggregate score.'
	},
	{
		id: 'sbert',
		year: 2019,
		label: 'Sentence-BERT',
		theme: 'Retrieval',
		authors: 'Nils Reimers & Iryna Gurevych',
		title: 'Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks',
		url: 'https://arxiv.org/abs/1908.10084',
		contribution:
			'Fine-tuned BERT with siamese and triplet structures to produce comparable sentence embeddings.',
		impact:
			'Made semantic similarity search practical without running a cross-encoder for every pair.',
		caveat:
			'A single vector can discard token-level distinctions; similarity is sensitive to training data.',
		exercise: 'Compare cosine retrieval and cross-encoder reranking on ambiguous queries.'
	},
	{
		id: 'bart',
		year: 2020,
		label: 'BART',
		theme: 'Pretraining',
		authors: 'Mike Lewis et al.',
		title:
			'BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension',
		url: 'https://aclanthology.org/2020.acl-main.703/',
		contribution:
			'Pretrained an encoder–decoder to reconstruct text corrupted by several noise processes.',
		impact:
			'Brought bidirectional encoding and autoregressive decoding together for tasks including summarization.',
		caveat: 'Fluent reconstruction does not ensure factual summaries; preprint appeared in 2019.',
		exercise: 'Compare text infilling with token masking on a short reconstruction task.'
	},
	{
		id: 'xlmr',
		year: 2020,
		label: 'XLM-R',
		theme: 'Multilingual language',
		authors: 'Alexis Conneau et al.',
		title: 'Unsupervised Cross-lingual Representation Learning at Scale',
		url: 'https://arxiv.org/abs/1911.02116',
		contribution:
			'Trained a multilingual masked language model on large-scale web text in 100 languages.',
		impact:
			'Improved cross-lingual transfer and documented the tradeoffs of shared multilingual capacity.',
		caveat: 'Performance remains uneven across languages; the preprint appeared in 2019.',
		exercise: 'Compare zero-shot transfer for languages with different amounts of pretraining text.'
	},
	{
		id: 'dpr',
		year: 2020,
		label: 'Dense passage retrieval',
		theme: 'Retrieval',
		authors: 'Vladimir Karpukhin et al.',
		title: 'Dense Passage Retrieval for Open-Domain Question Answering',
		url: 'https://arxiv.org/abs/2004.04906',
		contribution:
			'Trained separate question and passage encoders with contrastive objectives for passage retrieval.',
		impact:
			'Showed learned dense retrieval could outperform a strong sparse baseline on several QA datasets.',
		caveat: 'Domain shifts and negative sampling can substantially change retrieval performance.',
		exercise: 'Compare top-k recall for a sparse retriever and a dense retriever.'
	},
	{
		id: 'colbert',
		year: 2020,
		label: 'ColBERT',
		theme: 'Retrieval',
		authors: 'Omar Khattab & Matei Zaharia',
		title:
			'ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction over BERT',
		url: 'https://arxiv.org/abs/2004.12832',
		contribution:
			'Scored queries and passages through late interaction between contextual token embeddings.',
		impact:
			'Preserved finer matching signals while allowing passage representations to be precomputed.',
		caveat: 'Token-level indexes use more storage than single-vector retrieval.',
		exercise: 'Compare single-vector similarity with token-level maximum-similarity aggregation.'
	},
	{
		id: 'attention-explanation',
		year: 2019,
		label: 'Attention and explanation',
		theme: 'Evaluation',
		authors: 'Sarthak Jain & Byron C. Wallace',
		title: 'Attention is not Explanation',
		url: 'https://aclanthology.org/N19-1357/',
		contribution:
			'Tested whether attention weights track feature importance and whether different weights can preserve predictions.',
		impact:
			'Challenged the use of attention heatmaps as sufficient explanations of model decisions.',
		caveat:
			'The findings concern the tested architectures and explanation criteria, not every possible attention mechanism.',
		exercise: 'Compare attention weights with token deletion effects on predictions.'
	}
];
const additionalEntries: TimelineEntry[] = [
	{
		id: 'idf',
		year: 1972,
		label: 'Inverse document frequency',
		theme: 'Retrieval',
		authors: 'Karen Spärck Jones',
		title: 'A Statistical Interpretation of Term Specificity and Its Application in Retrieval',
		url: 'https://doi.org/10.1108/eb026526',
		contribution: 'Weighted matching terms using their frequency across the document collection.',
		impact: 'Established inverse document frequency as a foundation of lexical retrieval.',
		caveat:
			'Collection frequency measures statistical specificity, not meaning or relevance by itself.',
		exercise: 'Compare rankings with raw term counts and IDF-weighted counts.'
	},
	{
		id: 'earley',
		year: 1970,
		label: 'Earley parsing',
		theme: 'Structured prediction',
		authors: 'Jay Earley',
		title: 'An Efficient Context-Free Parsing Algorithm',
		url: 'https://doi.org/10.1145/362007.362035',
		contribution:
			'Parsed general context-free grammars using a chart of predicted, scanned, and completed states.',
		impact: 'Provided a general dynamic-programming approach to syntactic analysis.',
		caveat: 'Worst-case cubic complexity and grammar ambiguity can make parsing expensive.',
		exercise: 'Trace chart states for an ambiguous arithmetic grammar.'
	},
	{
		id: 'penn-treebank',
		year: 1993,
		label: 'Penn Treebank',
		theme: 'Datasets and evaluation',
		authors: 'Mitchell P. Marcus, Beatrice Santorini & Mary Ann Marcinkiewicz',
		title: 'Building a Large Annotated Corpus of English: The Penn Treebank',
		url: 'https://aclanthology.org/J93-2004/',
		contribution:
			'Developed a large corpus with part-of-speech and syntactic annotation supported by human correction.',
		impact: 'Supplied training and evaluation data central to statistical tagging and parsing.',
		caveat: 'Annotation conventions and English newswire coverage shape what models learn.',
		exercise: 'Compare two plausible parse trees against the annotation guidelines.'
	},
	{
		id: 'rouge',
		year: 2004,
		label: 'ROUGE',
		theme: 'Evaluation',
		authors: 'Chin-Yew Lin',
		title: 'ROUGE: A Package for Automatic Evaluation of Summaries',
		url: 'https://aclanthology.org/W04-1013/',
		contribution: 'Collected reference-based summary metrics using n-gram and sequence overlap.',
		impact: 'Made automatic summarization evaluation inexpensive and reproducible.',
		caveat:
			'Lexical overlap does not establish factual consistency or reward all valid paraphrases.',
		exercise: 'Compare ROUGE for a faithful paraphrase and a copied but misleading summary.'
	},
	{
		id: 'snli',
		year: 2015,
		label: 'SNLI',
		theme: 'Datasets and evaluation',
		authors: 'Samuel R. Bowman et al.',
		title: 'A Large Annotated Corpus for Learning Natural Language Inference',
		url: 'https://arxiv.org/abs/1508.05326',
		contribution: 'Released sentence pairs labeled for entailment, contradiction, and neutrality.',
		impact: 'Enabled large supervised comparisons of neural sentence representations.',
		caveat:
			'Crowd-written hypotheses can contain annotation artifacts and domain-specific shortcuts.',
		exercise: 'Compare a hypothesis-only baseline with a full sentence-pair model.'
	},
	{
		id: 'ulmfit',
		year: 2018,
		label: 'ULMFiT',
		theme: 'Pretraining',
		authors: 'Jeremy Howard & Sebastian Ruder',
		title: 'Universal Language Model Fine-tuning for Text Classification',
		url: 'https://aclanthology.org/P18-1031/',
		contribution:
			'Combined language-model pretraining, domain adaptation, and classifier fine-tuning with controlled learning rates and unfreezing.',
		impact:
			'Demonstrated strong text classification transfer with limited labeled data before transformer fine-tuning became standard.',
		caveat: 'The experiments focus on classification and use a recurrent language model.',
		exercise: 'Compare gradual unfreezing with updating every pretrained layer immediately.'
	},
	{
		id: 'gpt1',
		year: 2018,
		label: 'Generative pretraining',
		theme: 'Pretraining',
		authors: 'Alec Radford et al.',
		title: 'Improving Language Understanding by Generative Pre-Training',
		url: 'https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf',
		contribution:
			'Pretrained a transformer decoder on next-token prediction before supervised task adaptation.',
		impact:
			'Established generative transformer pretraining as a route to broad language-task transfer.',
		caveat: 'The original system still uses supervised fine-tuning for its downstream tasks.',
		exercise: 'Compare task adaptation from random and language-pretrained decoder weights.'
	},
	{
		id: 'gpt2',
		year: 2019,
		label: 'GPT-2',
		theme: 'Pretraining',
		authors: 'Alec Radford et al.',
		title: 'Language Models are Unsupervised Multitask Learners',
		url: 'https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf',
		contribution:
			'Evaluated a large web-trained causal language model on several tasks without task-specific supervised updates.',
		impact:
			'Strengthened the case for treating tasks as text continuation and studying zero-shot transfer.',
		caveat:
			'Task performance is uneven and sensitive to prompts, data coverage, and evaluation design.',
		exercise: 'Compare zero-shot completions under several equivalent task formulations.'
	},
	{
		id: 'roberta',
		year: 2019,
		label: 'RoBERTa',
		theme: 'Pretraining',
		authors: 'Yinhan Liu et al.',
		title: 'RoBERTa: A Robustly Optimized BERT Pretraining Approach',
		url: 'https://arxiv.org/abs/1907.11692',
		contribution:
			'Revisited BERT training using more data, longer training, dynamic masking, and removal of the next-sentence objective.',
		impact:
			'Showed that training choices can account for large gains attributed to new pretraining objectives.',
		caveat: 'Larger training budgets complicate comparisons of architecture alone.',
		exercise: 'Ablate masking and sentence objectives while holding training compute fixed.'
	},
	{
		id: 'electra',
		year: 2020,
		label: 'ELECTRA',
		theme: 'Pretraining',
		authors: 'Kevin Clark et al.',
		title: 'ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators',
		url: 'https://arxiv.org/abs/2003.10555',
		contribution: 'Trained a discriminator to identify tokens replaced by a small generator.',
		impact:
			'Made learning signals available at every input position and improved compute efficiency in the evaluated settings.',
		caveat:
			'Generator quality and discriminator setup affect the objective; this is not an autoregressive text generator.',
		exercise: 'Compare replaced-token detection with masked-token prediction at matched compute.'
	},
	{
		id: 'fasttext',
		year: 2017,
		label: 'fastText classification',
		theme: 'Word representations',
		authors: 'Armand Joulin et al.',
		title: 'Bag of Tricks for Efficient Text Classification',
		url: 'https://arxiv.org/abs/1607.01759',
		contribution:
			'Combined averaged word and n-gram representations with efficient linear classification.',
		impact:
			'Provided a fast, strong baseline that challenged the need for complex networks on many classification tasks.',
		caveat: 'Limited compositional modeling; the preprint appeared in 2016.',
		exercise: 'Compare word unigrams and word bigrams on examples involving negation.'
	},
	{
		id: 'fasttext-subwords',
		year: 2017,
		label: 'Subword word vectors',
		theme: 'Word representations',
		authors: 'Piotr Bojanowski et al.',
		title: 'Enriching Word Vectors with Subword Information',
		url: 'https://arxiv.org/abs/1607.04606',
		contribution: 'Represented words using character n-gram vectors within a skip-gram objective.',
		impact: 'Improved representations for rare words and enabled vectors for unseen word forms.',
		caveat:
			'Morphological sharing does not resolve contextual word senses; preprint appeared in 2016.',
		exercise: 'Compare embeddings of inflections and misspellings with a word-only model.'
	},
	{
		id: 'negative-sampling',
		year: 2013,
		label: 'Skip-gram and negative sampling',
		theme: 'Word representations',
		authors: 'Tomas Mikolov et al.',
		title: 'Distributed Representations of Words and Phrases and their Compositionality',
		url: 'https://arxiv.org/abs/1310.4546',
		contribution:
			'Introduced efficient negative sampling and subsampling, and studied phrase vectors and compositional relationships.',
		impact:
			'Made large-scale embedding training more efficient and shaped later contrastive objectives.',
		caveat: 'Embedding analogies are selective tests and static vectors conflate senses.',
		exercise: 'Compare nearest neighbors as the negative sampling distribution changes.'
	},
	{
		id: 'lda',
		year: 2003,
		label: 'Latent Dirichlet allocation',
		theme: 'Statistical language',
		authors: 'David M. Blei, Andrew Y. Ng & Michael I. Jordan',
		title: 'Latent Dirichlet Allocation',
		url: 'https://www.jmlr.org/papers/v3/blei03a.html',
		contribution:
			'Modeled documents as mixtures of latent topics with Dirichlet priors and topic-specific word distributions.',
		impact:
			'Established probabilistic topic modeling as a major approach to discovering corpus structure.',
		caveat:
			'The bag-of-words assumption omits word order; inferred topics need not match human categories.',
		exercise: 'Inspect topic stability across different numbers of topics and random seeds.'
	},
	{
		id: 'dependency-parsing',
		year: 2005,
		label: 'Graph-based dependency parsing',
		theme: 'Structured prediction',
		authors: 'Ryan McDonald et al.',
		title: 'Non-Projective Dependency Parsing using Spanning Tree Algorithms',
		url: 'https://aclanthology.org/H05-1066/',
		contribution:
			'Cast non-projective dependency parsing as finding a maximum-scoring directed spanning tree.',
		impact: 'Connected efficient graph algorithms to statistical parsing beyond projective syntax.',
		caveat: 'The edge-factored model omits higher-order dependencies unless extended.',
		exercise: 'Compare projective decoding with spanning-tree decoding on crossing dependencies.'
	},
	{
		id: 'bm25',
		year: 2009,
		label: 'BM25 and probabilistic retrieval',
		theme: 'Retrieval',
		authors: 'Stephen Robertson & Hugo Zaragoza',
		title: 'The Probabilistic Relevance Framework: BM25 and Beyond',
		url: 'https://doi.org/10.1561/1500000019',
		contribution:
			'Consolidated probabilistic relevance modeling, term-frequency saturation, and document-length normalization.',
		impact:
			'Explained BM25, a durable lexical retrieval baseline against which neural retrievers are compared.',
		caveat:
			'A synthesis of earlier BM25 work, not its first introduction; lexical mismatch remains a limitation.',
		exercise: 'Compare retrieval rankings as length normalization and term saturation change.'
	}
];

const foundationEntries: TimelineEntry[] = [
	{
		id: 'distributional',
		year: 1954,
		label: 'Distributional structure',
		theme: 'Word representations',
		authors: 'Zellig S. Harris',
		title: 'Distributional Structure',
		url: 'https://doi.org/10.1080/00437956.1954.11659520',
		contribution: 'Analyzed linguistic elements through the contexts in which they occur.',
		impact:
			'Provided an early theoretical basis for distributional approaches to linguistic representation.',
		caveat:
			'A linguistic framework rather than a trained embedding model or a claim that context captures all meaning.',
		exercise: 'Compare the contexts of near-synonyms and words with multiple senses.'
	},
	{
		id: 'chomsky',
		year: 1956,
		label: 'Formal language models',
		theme: 'Structured prediction',
		authors: 'Noam Chomsky',
		title: 'Three Models for the Description of Language',
		url: 'https://doi.org/10.1109/TIT.1956.1056813',
		contribution:
			'Compared finite-state, phrase-structure, and transformational accounts of linguistic structure.',
		impact:
			'Helped establish formal grammars and the study of representational limits in language processing.',
		caveat:
			'Formal expressiveness alone does not specify how to learn a grammar or model actual language use.',
		exercise: 'Compare a finite-state grammar and a context-free grammar on nested constructions.'
	}
];

const topicById: Record<string, string> = {
	shannon: 'Statistical language',
	'kneser-ney': 'Statistical language',
	lda: 'Statistical language',
	'neural-lm': 'Statistical language',
	chomsky: 'Structured prediction',
	earley: 'Structured prediction',
	'penn-treebank': 'Structured prediction',
	hmm: 'Structured prediction',
	'collins-parser': 'Structured prediction',
	'dependency-parsing': 'Structured prediction',
	crf: 'Structured prediction',
	lstm: 'Structured prediction',
	'ibm-models': 'Translation',
	'phrase-smt': 'Translation',
	seq2seq: 'Translation',
	bahdanau: 'Translation',
	distributional: 'Word representations',
	word2vec: 'Word representations',
	'negative-sampling': 'Word representations',
	glove: 'Word representations',
	fasttext: 'Word representations',
	'fasttext-subwords': 'Word representations',
	bpe: 'Word representations',
	elmo: 'Word representations',
	transformer: 'Pretraining',
	ulmfit: 'Pretraining',
	gpt1: 'Pretraining',
	bert: 'Pretraining',
	roberta: 'Pretraining',
	electra: 'Pretraining',
	bart: 'Pretraining',
	t5: 'Pretraining',
	idf: 'Retrieval',
	bm25: 'Retrieval',
	sbert: 'Retrieval',
	dpr: 'Retrieval',
	colbert: 'Retrieval',
	rag: 'Retrieval',
	xlmr: 'Multilingual language',
	bleu: 'Evaluation',
	rouge: 'Evaluation',
	snli: 'Evaluation',
	squad: 'Evaluation',
	glue: 'Evaluation',
	'attention-explanation': 'Evaluation',
	'training-data-extraction': 'Evaluation',
	gpt2: 'Scaling and adaptation',
	gpt3: 'Scaling and adaptation',
	'scaling-laws': 'Scaling and adaptation',
	chinchilla: 'Scaling and adaptation',
	lora: 'Scaling and adaptation',
	switch: 'Scaling and adaptation',
	flashattention: 'Scaling and adaptation',
	instructgpt: 'Post-training',
	'chain-of-thought': 'Post-training',
	dpo: 'Post-training',
	react: 'Post-training',
	toolformer: 'Post-training',
	'llm-judge': 'Post-training',
	mamba: 'Later language models',
	'deepseek-v3': 'Later language models',
	'deepseek-r1': 'Later language models',
	'kimi-k2': 'Later language models',
	llada: 'Later language models',
	mhc: 'Later language models',
	engram: 'Later language models'
};

export const nlpTimeline: Timeline = {
	slug: 'natural-language-processing',
	title: 'Natural language processing',
	description:
		'Original papers on statistical language, syntax, translation, representations, retrieval, and language models.',
	reviewedAt: '2026-10-21',
	scope:
		'Statistical language modeling, structured prediction, translation, contextual representations, multilingual transfer, retrieval, and language-model training.',
	entries: [...domainEntries, ...additionalEntries, ...foundationEntries, ...sharedEntries]
		.map((entry) => ({ ...entry, theme: topicById[entry.id] ?? entry.theme }))
		.sort((a, b) => a.year - b.year || a.label.localeCompare(b.label))
};
