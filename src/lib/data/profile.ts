export const advisors = [
	{ name: 'Prof. Mukesh Mohania', url: 'https://iiitd.ac.in/mukesh' },
	{ name: 'Prof. Vikram Goyal', url: 'https://iiitd.ac.in/vikram' }
];

export const news = [
	{
		date: 'Oct 2026',
		text: "Submitted 'Chance Is Not Blindness: Diagnosing Temporal Evidence in Video LLMs', a reworked version of my first paper, for review."
	},
	{
		date: 'Sep 2026',
		text: 'Received the Best TA Award at IIIT-Delhi for Monsoon 2025 and Winter 2026, presented at the Institute Foundation Day on 8 September.'
	},
	{
		date: 'Sep 2026',
		text: 'PANINI, our English–Manipuri translation system, accepted at WMT 2026 (Conference on Machine Translation).'
	},
	{
		date: 'Aug 2026',
		text: "My first paper, 'Temporal Fidelity', was rejected at EMNLP 2026. Reviewers asked for sharper positioning; the revision is now under review."
	},
	{
		date: 'May 2026',
		text: "Submitted 'Temporal Fidelity: Probing the Temporal Resolution of Video-Language Models' to ARR."
	},
	{
		date: 'Jul 2025',
		text: 'Started my PhD in Computer Science at IIIT-Delhi, working in the Applied Data Science Lab.'
	}
];

export type Publication = {
	title: string;
	authors: string;
	venue: string;
	year: string;
	status: 'published' | 'under-review';
	tldr: string;
	contribution?: string;
	links: { paper?: string; code?: string; project?: string };
};

export const publications: Publication[] = [
	{
		title:
			'PANINI: Improving Low-Resource English↔Manipuri Translation in Two Scripts via rsLoRA and Three-Stream Self-Augmentation',
		authors: 'Rudali Huidrom, Vikas Kumar, …, Sai Varun Jamalpoor, …, Vikram Goyal',
		venue: 'WMT 2026 (Eleventh Conference on Machine Translation)',
		year: '2026',
		status: 'published',
		tldr: 'Per-direction rsLoRA adapters over IndicTrans2-1B with self-generated synthetic data. Best system on English→Manipuri (Meitei Mayek), COMET 92.31.',
		contribution:
			'Built the meta-learning pipeline (Reptile, Meta-Weight Net) for the per-direction LoRA adapters.',
		links: { paper: 'https://www2.statmt.org/wmt26/pdf/2026.wmt-1.154.pdf' }
	},
	{
		title: 'Chance Is Not Blindness: Diagnosing Temporal Evidence in Video LLMs',
		authors: 'Sai Varun Jamalpoor, Mukesh Mohania, Vikram Goyal',
		venue: 'Under review',
		year: '2026',
		status: 'under-review',
		tldr: 'A trial-level diagnostic (delivered-frame logs, signal detection theory, first-token YES−NO margin) showing where temporal-order evidence is lost in Video LLMs that score near chance.',
		links: {}
	}
];

export const education = [
	{
		institution: 'IIIT-Delhi',
		degree: 'PhD Candidate in Computer Science',
		period: '2025 – Present',
		description:
			'I research generative video models, specifically focusing on temporal consistency, frame interpolation, and distributed training setups.',
		current: true
	},
	{
		institution: 'IIST Trivandrum',
		degree: 'M.Tech in Machine Learning and Computing',
		period: '2023 – 2025',
		description:
			"Studied optimization, neural representation models, and statistical learning. My master's thesis was supervised by Prof. Deepak Mishra.",
		current: false
	},
	{
		institution: 'KNR College of Engineering',
		degree: 'B.Tech in Computer Science and Engineering',
		period: '2018 – 2022',
		description: 'Learned basic computer science theory, systems programming, and algorithms.',
		current: false
	}
];

export const service = [
	{
		role: 'Student Volunteer',
		details: 'ACM SIGMOD 2026, Bangalore'
	},
	{
		role: 'Teaching Assistant',
		details: 'Database Management Systems (CSE202), IIIT-Delhi, Winter 2026'
	},
	{
		role: 'Head Teaching Assistant',
		details: 'Information Integration and Applications (CSE656), IIIT-Delhi, Monsoon 2025'
	},
	{
		role: 'Mentor',
		details: 'Helping undergraduate students on deep learning and vision projects at IIIT-Delhi'
	}
];
