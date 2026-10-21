import type { Timeline, TimelineEntry } from './timelines';
import { deepLearningTimeline } from './deep-learning';
import { generativeAITimeline } from './generative-ai';
const sharedIds = [
	'neocognitron',
	'lenet',
	'alexnet',
	'vgg',
	'resnet',
	'vit',
	'faster-rcnn',
	'unet',
	'sam',
	'simclr',
	'moco',
	'dino',
	'mae',
	'dinov2',
	'dinov3',
	'vjepa2',
	'vjepa21',
	'nerf',
	'gan',
	'pix2pix',
	'cyclegan',
	'clip',
	'ddpm',
	'latent-diffusion',
	'dit',
	'controlnet'
];
const sourceEntries = [...deepLearningTimeline.entries, ...generativeAITimeline.entries];
const sharedEntries = sharedIds.map((id) => {
	const paper = sourceEntries.find((entry) => entry.id === id);
	if (!paper) throw new Error(`Missing source paper: ${id}`);
	return { ...paper };
});
const domainEntries: TimelineEntry[] = [
	{
		id: 'ransac',
		year: 1981,
		label: 'RANSAC',
		theme: 'Geometry',
		authors: 'Martin A. Fischler & Robert C. Bolles',
		title:
			'Random Sample Consensus: A Paradigm for Model Fitting with Applications to Image Analysis and Automated Cartography',
		url: 'https://doi.org/10.1145/358669.358692',
		contribution:
			'Fit models by sampling small subsets and selecting hypotheses with many agreeing observations.',
		impact:
			'Made geometric estimation practical in the presence of substantial outlier contamination.',
		caveat: 'Iteration counts grow when inlier rates fall; thresholds and degeneracies matter.',
		exercise: 'Estimate a homography with deliberately corrupted point matches.'
	},
	{
		id: 'horn-schunck',
		year: 1981,
		label: 'Variational optical flow',
		theme: 'Motion',
		authors: 'Berthold K. P. Horn & Brian G. Schunck',
		title: 'Determining Optical Flow',
		url: 'https://doi.org/10.1016/0004-3702(81)90024-2',
		contribution:
			'Estimated dense motion using brightness constancy and a global smoothness penalty.',
		impact: 'Established variational optical flow as a major approach to motion estimation.',
		caveat: 'Brightness changes, occlusions, and discontinuous motion violate its assumptions.',
		exercise: 'Compare flow near object boundaries as the smoothness weight changes.'
	},
	{
		id: 'lucas-kanade',
		year: 1981,
		label: 'Lucas–Kanade alignment',
		theme: 'Motion',
		authors: 'Bruce D. Lucas & Takeo Kanade',
		title: 'An Iterative Image Registration Technique with an Application to Stereo Vision',
		url: 'https://www.ri.cmu.edu/publications/an-iterative-image-registration-technique-with-an-application-to-stereo-vision/',
		contribution: 'Solved local image alignment through iterative gradient-based least squares.',
		impact: 'Became a foundation of tracking and image registration.',
		caveat: 'Local linearization needs small motion or a suitable coarse-to-fine initialization.',
		exercise: 'Recover a known image translation with and without a pyramid.'
	},
	{
		id: 'canny',
		year: 1986,
		label: 'Canny edges',
		theme: 'Features',
		authors: 'John Canny',
		title: 'A Computational Approach to Edge Detection',
		url: 'https://doi.org/10.1109/TPAMI.1986.4767851',
		contribution:
			'Derived edge detection criteria and combined smoothing, nonmaximum suppression, and hysteresis thresholding.',
		impact: 'Established a widely used baseline for extracting image boundaries.',
		caveat:
			'Intensity edges do not necessarily correspond to object boundaries; scale and thresholds affect results.',
		exercise: 'Compare edge maps at multiple smoothing scales.'
	},
	{
		id: 'harris',
		year: 1988,
		label: 'Harris corners',
		theme: 'Features',
		authors: 'Chris Harris & Mike Stephens',
		title: 'A Combined Corner and Edge Detector',
		url: 'https://www.bmva-archive.org.uk/bmvc/1988/avc-88-023.html',
		contribution: 'Used local intensity-gradient structure to identify corners and edges.',
		impact: 'Provided repeatable interest points for matching and tracking.',
		caveat: 'The original detector is not inherently scale invariant.',
		exercise: 'Measure corner repeatability under rotation and resizing.'
	},
	{
		id: 'viola-jones',
		year: 2001,
		label: 'Viola–Jones detection',
		theme: 'Detection',
		authors: 'Paul Viola & Michael Jones',
		title: 'Rapid Object Detection using a Boosted Cascade of Simple Features',
		url: 'https://doi.org/10.1109/CVPR.2001.990517',
		contribution: 'Combined integral images, boosted rectangular features, and cascaded rejection.',
		impact:
			'Demonstrated fast frontal-face detection and influenced practical detection pipelines.',
		caveat:
			'Pose and appearance variation require additional coverage beyond the original face setting.',
		exercise: 'Measure how early cascade rejection changes average inference cost.'
	},
	{
		id: 'sift',
		year: 2004,
		label: 'SIFT',
		theme: 'Features',
		authors: 'David G. Lowe',
		title: 'Distinctive Image Features from Scale-Invariant Keypoints',
		url: 'https://www.cs.ubc.ca/~lowe/papers/ijcv04.pdf',
		contribution:
			'Detected scale-space extrema and described local gradient orientations for robust image matching.',
		impact: 'Made local-feature matching reliable across substantial scale and rotation changes.',
		caveat: 'Textureless regions, repeated patterns, and large viewpoint changes remain difficult.',
		exercise: 'Match a pair of views using the ratio test and RANSAC.'
	},
	{
		id: 'hog',
		year: 2005,
		label: 'HOG',
		theme: 'Features',
		authors: 'Navneet Dalal & Bill Triggs',
		title: 'Histograms of Oriented Gradients for Human Detection',
		url: 'https://doi.org/10.1109/CVPR.2005.177',
		contribution:
			'Combined local gradient histograms and block normalization for pedestrian detection.',
		impact:
			'Showed the strength of carefully normalized local shape descriptors with linear classifiers.',
		caveat: 'Sliding-window costs and large pose changes limit the original detector.',
		exercise: 'Compare normalized and unnormalized gradient histograms on pedestrian crops.'
	},
	{
		id: 'imagenet',
		year: 2009,
		label: 'ImageNet',
		theme: 'Datasets and evaluation',
		authors: 'Jia Deng et al.',
		title: 'ImageNet: A Large-Scale Hierarchical Image Database',
		url: 'https://doi.org/10.1109/CVPR.2009.5206848',
		contribution: 'Built a large image database organized using the WordNet hierarchy.',
		impact:
			'Enabled large-scale supervised recognition and the later ILSVRC comparisons behind CNN adoption.',
		caveat:
			'Label categories and web collection choices do not represent every visual task or population.',
		exercise: 'Inspect class imbalance and ambiguous labels in a small subset.'
	},
	{
		id: 'pascal',
		year: 2010,
		label: 'PASCAL VOC',
		theme: 'Datasets and evaluation',
		authors: 'Mark Everingham et al.',
		title: 'The PASCAL Visual Object Classes (VOC) Challenge',
		url: 'https://doi.org/10.1007/s11263-009-0275-4',
		contribution:
			'Documented shared data and evaluation for recognition, detection, and segmentation challenges.',
		impact: 'Established common protocols for comparing methods beyond classification.',
		caveat:
			'Limited classes and dataset-specific conventions constrain conclusions about broader recognition.',
		exercise: 'Calculate detection precision–recall under the VOC overlap rule.'
	},
	{
		id: 'rcnn',
		year: 2014,
		label: 'R-CNN',
		theme: 'Detection',
		authors: 'Ross Girshick et al.',
		title: 'Rich Feature Hierarchies for Accurate Object Detection and Semantic Segmentation',
		url: 'https://arxiv.org/abs/1311.2524',
		contribution:
			'Applied pretrained CNN features to candidate object regions and fine-tuned for detection.',
		impact: 'Demonstrated large detection gains from transferred deep features.',
		caveat:
			'Separate proposals, per-region processing, and multi-stage training are expensive; preprint appeared in 2013.',
		exercise: 'Compare proposal recall with final detector recall.'
	},
	{
		id: 'coco',
		year: 2014,
		label: 'COCO',
		theme: 'Datasets and evaluation',
		authors: 'Tsung-Yi Lin et al.',
		title: 'Microsoft COCO: Common Objects in Context',
		url: 'https://arxiv.org/abs/1405.0312',
		contribution:
			'Released images of everyday scenes with object instance annotations and contextual complexity.',
		impact:
			'Expanded detection and segmentation evaluation toward crowded scenes and object localization.',
		caveat: 'Dataset categories and collection choices still leave substantial domain gaps.',
		exercise: 'Compare AP at stricter overlap thresholds and across object sizes.'
	},
	{
		id: 'fcn',
		year: 2015,
		label: 'Fully convolutional segmentation',
		theme: 'Segmentation',
		authors: 'Jonathan Long, Evan Shelhamer & Trevor Darrell',
		title: 'Fully Convolutional Networks for Semantic Segmentation',
		url: 'https://arxiv.org/abs/1411.4038',
		contribution:
			'Converted classification networks into dense predictors and fused coarse and fine feature maps.',
		impact:
			'Established end-to-end learned pixel labeling with transferred convolutional representations.',
		caveat: 'Coarse feature maps can lose boundary detail; preprint appeared in 2014.',
		exercise: 'Compare segmentation boundaries with and without skip fusion.'
	},
	{
		id: 'yolo',
		year: 2016,
		label: 'YOLO',
		theme: 'Detection',
		authors: 'Joseph Redmon et al.',
		title: 'You Only Look Once: Unified, Real-Time Object Detection',
		url: 'https://arxiv.org/abs/1506.02640',
		contribution: 'Predicted boxes and classes in a single full-image network.',
		impact:
			'Made the speed–accuracy tradeoff of single-stage detection central to practical vision.',
		caveat:
			'The original grid formulation struggles with small or closely packed objects; preprint appeared in 2015.',
		exercise: 'Measure small-object recall separately from aggregate detection accuracy.'
	},
	{
		id: 'ssd',
		year: 2016,
		label: 'SSD',
		theme: 'Detection',
		authors: 'Wei Liu et al.',
		title: 'SSD: Single Shot MultiBox Detector',
		url: 'https://arxiv.org/abs/1512.02325',
		contribution: 'Detected objects using default boxes on feature maps at multiple resolutions.',
		impact: 'Combined single-stage inference with multi-scale detection.',
		caveat:
			'Default-box choices and limited high-resolution features affect small objects; preprint appeared in 2015.',
		exercise: 'Compare matched training boxes across object sizes.'
	},
	{
		id: 'pointnet',
		year: 2017,
		label: 'PointNet',
		theme: 'Geometry',
		authors: 'Charles R. Qi et al.',
		title: 'PointNet: Deep Learning on Point Sets for 3D Classification and Segmentation',
		url: 'https://arxiv.org/abs/1612.00593',
		contribution:
			'Processed unordered point sets through shared point functions and symmetric aggregation.',
		impact:
			'Enabled direct neural prediction on point clouds without converting them to dense voxel grids.',
		caveat:
			'The original architecture captures local geometric neighborhoods only indirectly; preprint appeared in 2016.',
		exercise: 'Check prediction invariance after randomly permuting input points.'
	},
	{
		id: 'mask-rcnn',
		year: 2017,
		label: 'Mask R-CNN',
		theme: 'Segmentation',
		authors: 'Kaiming He et al.',
		title: 'Mask R-CNN',
		url: 'https://arxiv.org/abs/1703.06870',
		contribution: 'Added a mask branch and RoIAlign to a region-based detector.',
		impact: 'Established a strong, extensible baseline for instance segmentation.',
		caveat: 'Two-stage processing and instance supervision add computation and annotation cost.',
		exercise: 'Compare mask alignment using quantized pooling and RoIAlign.'
	},
	{
		id: 'detr',
		year: 2020,
		label: 'DETR',
		theme: 'Detection',
		authors: 'Nicolas Carion et al.',
		title: 'End-to-End Object Detection with Transformers',
		url: 'https://arxiv.org/abs/2005.12872',
		contribution:
			'Formulated detection as set prediction with object queries and bipartite matching.',
		impact:
			'Removed hand-designed proposal and nonmaximum-suppression steps from the detection pipeline.',
		caveat: 'Original DETR requires long training and has weaker small-object performance.',
		exercise: 'Inspect matched queries and unmatched no-object predictions.'
	},
	{
		id: 'raft',
		year: 2020,
		label: 'RAFT',
		theme: 'Motion',
		authors: 'Zachary Teed & Jia Deng',
		title: 'RAFT: Recurrent All-Pairs Field Transforms for Optical Flow',
		url: 'https://arxiv.org/abs/2003.12039',
		contribution: 'Used all-pairs feature correlations and recurrent updates to refine dense flow.',
		impact:
			'Improved optical-flow accuracy and established iterative learned refinement as a strong approach.',
		caveat:
			'Correlation volumes can be expensive and motion estimates remain sensitive to domain changes.',
		exercise: 'Compare endpoint error in occluded and visible image regions.'
	},
	{
		id: 'swin',
		year: 2021,
		label: 'Swin Transformer',
		theme: 'Visual architectures',
		authors: 'Ze Liu et al.',
		title: 'Swin Transformer: Hierarchical Vision Transformer using Shifted Windows',
		url: 'https://arxiv.org/abs/2103.14030',
		contribution:
			'Combined local window attention, shifted partitions, and hierarchical feature resolutions.',
		impact:
			'Made transformer backbones practical across classification, detection, and dense prediction.',
		caveat:
			'Windowing introduces architectural choices and does not give global attention at every layer.',
		exercise: 'Trace how shifted windows connect neighboring regions across two blocks.'
	},
	{
		id: 'gaussian-splatting',
		year: 2023,
		label: '3D Gaussian splatting',
		theme: 'Geometry',
		authors: 'Bernhard Kerbl et al.',
		title: '3D Gaussian Splatting for Real-Time Radiance Field Rendering',
		url: 'https://arxiv.org/abs/2308.04079',
		contribution:
			'Optimized anisotropic Gaussian scene primitives and rendered them with visibility-aware splatting.',
		impact:
			'Demonstrated high-quality novel views at real-time rates on the evaluated scenes and hardware.',
		caveat:
			'Per-scene optimization, memory consumption, and reconstruction coverage constrain use.',
		exercise: 'Compare rendering speed, memory, and novel-view error for one scene.'
	},
	{
		id: 'sam2',
		year: 2024,
		label: 'SAM 2',
		theme: 'Segmentation',
		authors: 'Nikhila Ravi et al.',
		title: 'SAM 2: Segment Anything in Images and Videos',
		url: 'https://arxiv.org/abs/2408.00714',
		contribution:
			'Extended promptable segmentation to video with streaming memory and a data collection system.',
		impact: 'Connected interactive image masks with persistent video object segmentation.',
		caveat: 'Occlusion, ambiguous prompts, and domain shifts still require correction.',
		exercise: 'Track a prompted object through occlusion and record correction clicks.'
	}
];
const additionalEntries: TimelineEntry[] = [
	{
		id: 'eight-point',
		year: 1997,
		label: 'Normalized eight-point estimation',
		theme: 'Geometry',
		authors: 'Richard I. Hartley',
		title: 'In Defense of the Eight-Point Algorithm',
		url: 'https://doi.org/10.1109/34.601246',
		contribution:
			'Showed how coordinate normalization stabilizes linear fundamental-matrix estimation.',
		impact: 'Restored a simple linear estimator as a practical component of multi-view geometry.',
		caveat:
			'Outliers and degenerate configurations still need robust estimation and additional constraints.',
		exercise: 'Compare epipolar residuals with and without coordinate normalization.'
	},
	{
		id: 'sgm',
		year: 2008,
		label: 'Semi-global stereo matching',
		theme: 'Geometry',
		authors: 'Heiko Hirschmüller',
		title: 'Stereo Processing by Semiglobal Matching and Mutual Information',
		url: 'https://doi.org/10.1109/TPAMI.2007.1166',
		contribution:
			'Approximated stereo energy optimization by aggregating matching costs along multiple paths.',
		impact: 'Made dense stereo practical with a useful accuracy–efficiency tradeoff.',
		caveat:
			'Occlusion, low texture, and reflective surfaces remain difficult; earlier SGM work appeared in 2005.',
		exercise:
			'Compare disparity estimates near depth discontinuities as smoothness penalties change.'
	},
	{
		id: 'photo-tourism',
		year: 2006,
		label: 'Photo Tourism',
		theme: 'Geometry',
		authors: 'Noah Snavely, Steven M. Seitz & Richard Szeliski',
		title: 'Photo Tourism: Exploring Photo Collections in 3D',
		url: 'https://doi.org/10.1145/1141911.1141964',
		contribution:
			'Recovered camera poses and sparse scene structure from unordered photo collections, with an interface for navigation.',
		impact: 'Demonstrated structure from motion at the scale of community photo collections.',
		caveat: 'Reconstruction needs sufficient overlap and distinctive static features.',
		exercise: 'Reconstruct a small scene and inspect reprojection error and disconnected cameras.'
	},
	{
		id: 'dpm',
		year: 2010,
		label: 'Deformable part models',
		theme: 'Detection',
		authors: 'Pedro F. Felzenszwalb et al.',
		title: 'Object Detection with Discriminatively Trained Part-Based Models',
		url: 'https://cs.brown.edu/people/pfelzens/papers/lsvm-pami.pdf',
		contribution:
			'Combined a root template, deformable parts, latent placements, and discriminative training.',
		impact:
			'Established a strong pre-CNN detection system that modeled appearance and spatial deformation.',
		caveat: 'Handcrafted features and specified part structure limit representation flexibility.',
		exercise: 'Inspect inferred part locations for occluded or articulated objects.'
	},
	{
		id: 'spatial-pyramid',
		year: 2006,
		label: 'Spatial pyramid matching',
		theme: 'Features',
		authors: 'Svetlana Lazebnik, Cordelia Schmid & Jean Ponce',
		title:
			'Beyond Bags of Features: Spatial Pyramid Matching for Recognizing Natural Scene Categories',
		url: 'https://doi.org/10.1109/CVPR.2006.68',
		contribution: 'Matched local-feature histograms over increasingly fine spatial partitions.',
		impact:
			'Added coarse layout information to visual bag-of-words representations and improved scene recognition.',
		caveat:
			'Fixed image grids provide limited invariance to object movement and viewpoint changes.',
		exercise: 'Compare orderless visual-word histograms with spatially partitioned histograms.'
	},
	{
		id: 'orb',
		year: 2011,
		label: 'ORB',
		theme: 'Features',
		authors: 'Ethan Rublee et al.',
		title: 'ORB: An Efficient Alternative to SIFT or SURF',
		url: 'https://doi.org/10.1109/ICCV.2011.6126544',
		contribution: 'Combined oriented FAST keypoints with a rotated, learned binary descriptor.',
		impact: 'Made feature matching efficient for constrained systems and real-time applications.',
		caveat: 'Strong viewpoint changes and large scale changes can reduce matching reliability.',
		exercise: 'Compare descriptor memory, matching time, and repeatability with SIFT.'
	},
	{
		id: 'fpn',
		year: 2017,
		label: 'Feature pyramid networks',
		theme: 'Detection',
		authors: 'Tsung-Yi Lin et al.',
		title: 'Feature Pyramid Networks for Object Detection',
		url: 'https://arxiv.org/abs/1612.03144',
		contribution: 'Built multi-scale features using top-down pathways and lateral connections.',
		impact:
			'Made semantically strong features available at multiple resolutions for detection and segmentation.',
		caveat:
			'Small-object performance still depends on resolution and data; preprint appeared in 2016.',
		exercise: 'Compare object-size recall with and without a feature pyramid.'
	},
	{
		id: 'focal-loss',
		year: 2017,
		label: 'RetinaNet and focal loss',
		theme: 'Detection',
		authors: 'Tsung-Yi Lin et al.',
		title: 'Focal Loss for Dense Object Detection',
		url: 'https://arxiv.org/abs/1708.02002',
		contribution:
			'Downweighted well-classified examples to reduce foreground–background imbalance in dense detection.',
		impact:
			'Showed a single-stage detector could approach or exceed strong two-stage systems in the reported comparisons.',
		caveat:
			'Loss parameters and class distribution affect results; difficult labels can receive extra weight.',
		exercise:
			'Plot the focal-loss weight against prediction confidence for several focusing parameters.'
	},
	{
		id: 'inception',
		year: 2015,
		label: 'Inception',
		theme: 'Visual architectures',
		authors: 'Christian Szegedy et al.',
		title: 'Going Deeper with Convolutions',
		url: 'https://arxiv.org/abs/1409.4842',
		contribution:
			'Combined parallel convolutional branches and dimensionality reduction in an efficient deep architecture.',
		impact:
			'Demonstrated that network structure can improve recognition without simply increasing dense computation.',
		caveat: 'Manually designed branches add complexity; preprint appeared in 2014.',
		exercise: 'Compare multiply–accumulate counts with and without bottleneck projections.'
	},
	{
		id: 'mobilenet',
		year: 2017,
		label: 'MobileNet',
		theme: 'Visual architectures',
		authors: 'Andrew G. Howard et al.',
		title: 'MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications',
		url: 'https://arxiv.org/abs/1704.04861',
		contribution: 'Used depthwise separable convolutions with width and resolution controls.',
		impact:
			'Established an influential family of efficient vision backbones for mobile deployment.',
		caveat: 'Operation counts alone do not predict device latency.',
		exercise: 'Measure accuracy and actual latency as width and image resolution vary.'
	},
	{
		id: 'densenet',
		year: 2017,
		label: 'DenseNet',
		theme: 'Visual architectures',
		authors: 'Gao Huang et al.',
		title: 'Densely Connected Convolutional Networks',
		url: 'https://arxiv.org/abs/1608.06993',
		contribution:
			'Connected each layer to later layers through feature concatenation within dense blocks.',
		impact:
			'Demonstrated feature reuse and improved gradient flow with parameter-efficient classification models.',
		caveat: 'Concatenated activations can increase memory traffic; preprint appeared in 2016.',
		exercise: 'Compare parameter count and activation memory with a residual block.'
	},
	{
		id: 'efficientnet',
		year: 2019,
		label: 'EfficientNet',
		theme: 'Visual architectures',
		authors: 'Mingxing Tan & Quoc V. Le',
		title: 'EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks',
		url: 'https://arxiv.org/abs/1905.11946',
		contribution: 'Scaled depth, width, and input resolution together using a compound rule.',
		impact: 'Made balanced scaling a central consideration in efficient image classification.',
		caveat: 'The preferred scaling rule depends on the base architecture and hardware budget.',
		exercise: 'Compare isolated width scaling with balanced depth, width, and resolution scaling.'
	},
	{
		id: 'deeplab',
		year: 2018,
		label: 'DeepLab',
		theme: 'Segmentation',
		authors: 'Liang-Chieh Chen et al.',
		title:
			'DeepLab: Semantic Image Segmentation with Deep Convolutional Nets, Atrous Convolution, and Fully Connected CRFs',
		url: 'https://arxiv.org/abs/1606.00915',
		contribution:
			'Combined atrous convolutions, multi-scale context aggregation, and CRF refinement for dense labeling.',
		impact:
			'Established effective ways to preserve spatial resolution and incorporate context in semantic segmentation.',
		caveat:
			'Dense refinement adds cost and dilated sampling can introduce artifacts; preprint appeared in 2016.',
		exercise: 'Compare segmentation at different atrous rates and inspect boundary changes.'
	}
];

const foundationEntries: TimelineEntry[] = [
	{
		id: 'eigenfaces',
		year: 1991,
		label: 'Eigenfaces',
		theme: 'Visual architectures',
		authors: 'Matthew Turk & Alex Pentland',
		title: 'Eigenfaces for Recognition',
		url: 'https://doi.org/10.1162/jocn.1991.3.1.71',
		contribution:
			'Represented aligned face images in a low-dimensional principal-component subspace.',
		impact:
			'Demonstrated the usefulness of learned appearance subspaces for visual recognition before deep networks.',
		caveat: 'Alignment, lighting, pose, and the training population strongly affect recognition.',
		exercise: 'Compare reconstruction and recognition error as the number of components changes.'
	},
	{
		id: 'icp',
		year: 1992,
		label: 'Iterative closest point',
		theme: 'Geometry',
		authors: 'Paul J. Besl & Neil D. McKay',
		title: 'A Method for Registration of 3-D Shapes',
		url: 'https://doi.org/10.1109/34.121791',
		contribution:
			'Alternated closest-point correspondence and rigid alignment to register 3D shapes.',
		impact: 'Established a widely used approach to point-cloud and shape registration.',
		caveat: 'Local convergence depends on initialization, overlap, and correspondence quality.',
		exercise: 'Compare registration after small and large initial pose errors.'
	}
];

const topicById: Record<string, string> = {
	canny: 'Features',
	harris: 'Features',
	sift: 'Features',
	hog: 'Features',
	'spatial-pyramid': 'Features',
	orb: 'Features',
	neocognitron: 'Visual architectures',
	eigenfaces: 'Visual architectures',
	lenet: 'Visual architectures',
	alexnet: 'Visual architectures',
	vgg: 'Visual architectures',
	inception: 'Visual architectures',
	resnet: 'Visual architectures',
	densenet: 'Visual architectures',
	mobilenet: 'Visual architectures',
	efficientnet: 'Visual architectures',
	vit: 'Visual architectures',
	swin: 'Visual architectures',
	imagenet: 'Datasets and evaluation',
	pascal: 'Datasets and evaluation',
	coco: 'Datasets and evaluation',
	'viola-jones': 'Detection',
	dpm: 'Detection',
	rcnn: 'Detection',
	'faster-rcnn': 'Detection',
	yolo: 'Detection',
	ssd: 'Detection',
	fpn: 'Detection',
	'focal-loss': 'Detection',
	detr: 'Detection',
	fcn: 'Segmentation',
	unet: 'Segmentation',
	deeplab: 'Segmentation',
	'mask-rcnn': 'Segmentation',
	sam: 'Segmentation',
	sam2: 'Segmentation',
	simclr: 'Representation learning',
	moco: 'Representation learning',
	dino: 'Representation learning',
	mae: 'Representation learning',
	dinov2: 'Representation learning',
	dinov3: 'Representation learning',
	'horn-schunck': 'Motion and video',
	'lucas-kanade': 'Motion and video',
	raft: 'Motion and video',
	vjepa2: 'Motion and video',
	vjepa21: 'Motion and video',
	ransac: 'Geometry',
	icp: 'Geometry',
	'eight-point': 'Geometry',
	sgm: 'Geometry',
	'photo-tourism': 'Geometry',
	pointnet: 'Geometry',
	nerf: 'Geometry',
	'gaussian-splatting': 'Geometry',
	gan: 'Visual generation',
	pix2pix: 'Visual generation',
	cyclegan: 'Visual generation',
	clip: 'Visual generation',
	ddpm: 'Visual generation',
	'latent-diffusion': 'Visual generation',
	dit: 'Visual generation',
	controlnet: 'Visual generation'
};

export const cvTimeline: Timeline = {
	slug: 'computer-vision',
	title: 'Computer vision',
	description:
		'Original papers on image features, geometry, recognition, detection, segmentation, motion, and visual representations.',
	reviewedAt: '2026-10-21',
	scope:
		'Image formation, local features, multi-view geometry, recognition, dense prediction, video, and visual representation learning.',
	entries: [...domainEntries, ...additionalEntries, ...foundationEntries, ...sharedEntries]
		.map((entry) => ({ ...entry, theme: topicById[entry.id] ?? entry.theme }))
		.sort((a, b) => a.year - b.year || a.label.localeCompare(b.label))
};
