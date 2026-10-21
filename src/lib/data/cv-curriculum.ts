import type { StudyStage } from './ml-curriculum';
export const cvCurriculum: StudyStage[] = [
	{
		id: 'features',
		title: 'Edges and local features',
		level: 'Foundations',
		before: 'Image gradients, convolution, linear algebra, and scale space.',
		goal: 'Boundaries, corners, local descriptors, and normalized gradient histograms.',
		checkpoint:
			'Measure feature repeatability and matching accuracy under blur, rotation, and scale.',
		readings: ['canny', 'harris', 'sift', 'hog', 'spatial-pyramid', 'orb'],
		core: ['canny', 'harris', 'sift', 'hog', 'spatial-pyramid', 'orb']
	},
	{
		id: 'recognition',
		title: 'Visual recognition architectures',
		level: 'Foundations',
		before: 'Backpropagation, convolution, pooling, and supervised losses.',
		goal: 'Hierarchical features, convolutional transfer, residual networks, and visual attention.',
		checkpoint:
			'Compare classification accuracy and inference cost for convolutional and patch-based models.',
		readings: [
			'neocognitron',
			'eigenfaces',
			'lenet',
			'alexnet',
			'vgg',
			'inception',
			'resnet',
			'densenet',
			'mobilenet',
			'efficientnet',
			'vit',
			'swin'
		],
		core: [
			'lenet',
			'alexnet',
			'resnet',
			'vit',
			'swin',
			'inception',
			'mobilenet',
			'densenet',
			'efficientnet',
			'eigenfaces'
		]
	},
	{
		id: 'datasets',
		title: 'Datasets and evaluation',
		level: 'Foundations',
		before: 'Dataset splits, precision–recall curves, and intersection over union.',
		goal: 'Large-scale recognition, detection protocols, contextual scenes, and object-scale analysis.',
		checkpoint: 'Report per-class performance and AP by object size alongside aggregate scores.',
		readings: ['imagenet', 'pascal', 'coco'],
		core: ['imagenet', 'pascal', 'coco']
	},
	{
		id: 'detection',
		title: 'Object detection',
		level: 'Foundations',
		before: 'Convolutional backbones, bounding boxes, and matching.',
		goal: 'Cascades, region proposals, single-stage detection, and set prediction.',
		checkpoint:
			'Compare proposal-based and single-stage models at fixed image resolution and hardware.',
		readings: [
			'viola-jones',
			'dpm',
			'rcnn',
			'faster-rcnn',
			'yolo',
			'ssd',
			'fpn',
			'focal-loss',
			'detr'
		],
		core: ['viola-jones', 'rcnn', 'faster-rcnn', 'yolo', 'detr', 'dpm', 'fpn', 'focal-loss']
	},
	{
		id: 'segmentation',
		title: 'Pixels, instances, and prompts',
		level: 'Further study',
		before: 'Dense prediction, detection, encoder–decoder models, and mask metrics.',
		goal: 'Fully convolutional prediction, spatial skips, instance masks, and promptable video masks.',
		checkpoint: 'Compare boundary quality, instance separation, and correction effort.',
		readings: ['fcn', 'unet', 'deeplab', 'mask-rcnn', 'sam', 'sam2'],
		core: ['fcn', 'unet', 'mask-rcnn', 'sam', 'sam2', 'deeplab']
	},
	{
		id: 'representations',
		title: 'Learning visual representations',
		level: 'Further study',
		before: 'Feature embeddings, augmentation, contrastive losses, and transformers.',
		goal: 'Contrastive training, self-distillation, masked prediction, and large visual encoders.',
		checkpoint: 'Compare linear probes and dense task transfer with the backbone frozen.',
		readings: ['simclr', 'moco', 'dino', 'mae', 'dinov2', 'dinov3'],
		core: ['simclr', 'moco', 'dino', 'mae', 'dinov2']
	},
	{
		id: 'motion',
		title: 'Motion and video',
		level: 'Further study',
		before: 'Image gradients, least squares, and convolutional features.',
		goal: 'Brightness constancy, local alignment, dense flow, and predictive video representations.',
		checkpoint: 'Evaluate flow separately at motion boundaries and occluded pixels.',
		readings: ['horn-schunck', 'lucas-kanade', 'raft', 'vjepa2', 'vjepa21'],
		core: ['horn-schunck', 'lucas-kanade', 'raft']
	},
	{
		id: 'geometry',
		title: 'Robust geometry and 3D',
		level: 'Further study',
		before: 'Least squares, camera projection, and coordinate transformations.',
		goal: 'Robust fitting, point-set networks, radiance fields, and explicit scene representations.',
		checkpoint:
			'Estimate a homography with outliers; compare learned and explicit scene rendering.',
		readings: [
			'ransac',
			'icp',
			'eight-point',
			'sgm',
			'photo-tourism',
			'pointnet',
			'nerf',
			'gaussian-splatting'
		],
		core: [
			'ransac',
			'pointnet',
			'nerf',
			'gaussian-splatting',
			'eight-point',
			'sgm',
			'photo-tourism',
			'icp'
		]
	},
	{
		id: 'generation',
		title: 'Visual generation and language',
		level: 'Further study',
		before: 'Latent variables, neural generation, attention, and image encoders.',
		goal: 'Adversarial synthesis, image–text representations, diffusion, and spatial control.',
		checkpoint: 'Compare text alignment, spatial control, and failure cases across prompts.',
		readings: [
			'gan',
			'pix2pix',
			'cyclegan',
			'clip',
			'ddpm',
			'latent-diffusion',
			'dit',
			'controlnet'
		],
		core: ['gan', 'clip', 'ddpm', 'latent-diffusion', 'controlnet']
	}
];
export const cvPreparation = [
	{
		title: 'Computer Vision: Algorithms and Applications',
		url: 'https://szeliski.org/Book/',
		note: 'Richard Szeliski: image formation, features, geometry, motion, and recognition.'
	},
	{
		title: 'Multiple View Geometry in Computer Vision',
		url: 'https://www.robots.ox.ac.uk/~vgg/hzbook/',
		note: 'Hartley and Zisserman: projective geometry, cameras, and multi-view reconstruction.'
	}
];
