import { aiCurriculum, aiPreparation } from './ai-curriculum';
import { nlpCurriculum, nlpPreparation } from './nlp-curriculum';
import { cvCurriculum, cvPreparation } from './cv-curriculum';
import { genaiCurriculum, genaiPreparation } from './genai-curriculum';
import { mlCurriculum, mlPreparation, type StudyStage } from './ml-curriculum';
import { dlCurriculum, dlPreparation } from './dl-curriculum';

export type Preparation = { title: string; url: string; note: string };
export type Curriculum = {
	stages: StudyStage[];
	preparation: Preparation[];
	prerequisites: string;
	recentFrom: number;
};

export const curricula: Record<string, Curriculum> = {
	'artificial-intelligence': {
		stages: aiCurriculum,
		preparation: aiPreparation,
		prerequisites:
			'Discrete mathematics, logic, probability, algorithms, linear algebra, and basic programming.',
		recentFrom: 2020
	},
	'natural-language-processing': {
		stages: nlpCurriculum,
		preparation: nlpPreparation,
		prerequisites:
			'Probability, linear algebra, calculus, dynamic programming, neural networks, and text processing.',
		recentFrom: 2023
	},
	'computer-vision': {
		stages: cvCurriculum,
		preparation: cvPreparation,
		prerequisites:
			'Linear algebra, calculus, probability, image gradients, camera geometry, and neural networks.',
		recentFrom: 2023
	},
	'machine-learning': {
		stages: mlCurriculum,
		preparation: mlPreparation,
		prerequisites: 'Linear algebra, calculus, probability, and numerical programming.',
		recentFrom: 2017
	},
	'generative-ai': {
		stages: genaiCurriculum,
		preparation: genaiPreparation,
		prerequisites:
			'Probability, multivariable calculus, linear algebra, neural networks, optimization, and numerical programming.',
		recentFrom: 2024
	},
	'deep-learning': {
		stages: dlCurriculum,
		preparation: dlPreparation,
		prerequisites:
			'Linear algebra, multivariable calculus, probability, gradient descent, ML evaluation, and numerical programming.',
		recentFrom: 2024
	}
};
