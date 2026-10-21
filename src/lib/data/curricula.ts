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
