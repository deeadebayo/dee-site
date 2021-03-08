import anime from 'animejs';

//define the DOM elements and colors
let svgText = [
		document.querySelector('.page-animation__logo__letters'),
		document.querySelector('.page-animation__logo__letters path'),
	],
	svgColor1 = [
		document.querySelector('.page-animation__logo__first-color path'),
		document.querySelector('.page-animation__logo__first-color'),
	],
	svgColor2 = document.querySelector('.page-animation__logo__second-color'),
	svgColor3 = document.querySelector('.page-animation__logo__third-color'),
	svgBarLayer = document.querySelector(
		'.page-animation__logo__bar-final-layer'
	),
	colorPrimary = 'hsl(175, 100%, 33%)',
	colorSecondary = 'hsl(358, 100%, 68%)',
	// colorNeutralStroke = 'hsl(0, 0%, 46%)',
	colorPageBackground = '#D3D9DE',
	staggeredDelay = anime.stagger(50, { easing: 'easeInOutSine' }),
	//Animate each different section (path) of the SVG
	svgTextAnim = {
		targets: svgText,
		fill: [colorPageBackground, 'transparent'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		// direction: 'alternate',
		stroke: colorPageBackground,
	},
	svgColor1Anim = {
		targets: svgColor1,
		fill: [
			{
				value: colorSecondary,
				opacity: [0, 1],
				duration: 200,
				delay: staggeredDelay,
			},
			{ value: colorPrimary, duration: 200, delay: staggeredDelay },
		],
		opacity: {
			value: [0, 1],
			duration: 500,
		},
		easing: 'easeInSine',
	},
	svgColor2Anim = {
		targets: svgColor2,
		fill: [
			{ value: colorSecondary, duration: 150, delay: staggeredDelay },
			{ value: colorPrimary, duration: 100, delay: staggeredDelay },
		],
		opacity: {
			value: [0, 1],
			duration: 500,
		},
	},
	svgColor3Anim = {
		targets: svgColor3,
		fill: [
			{
				value: colorPrimary,
				duration: 200,
				delay: staggeredDelay,
			},
		],
		opacity: {
			value: [0, 1],
			duration: 500,
		},
		easing: 'linear',
	},
	svgBarAnim = {
		targets: svgBarLayer,
		fill: [
			{
				value: colorPrimary,
				duration: 400,
				delay: staggeredDelay,
			},
		],
		delay: staggeredDelay,
		easing: 'linear',
		opacity: {
			value: [0, 1],
			duration: 400,
		},
	};

let AnimateLoaderLogo = anime
	.timeline({ easing: 'easeInSine', duration: '300' })
	.add(svgTextAnim)
	.add(svgColor1Anim, '-=200')
	.add(svgColor2Anim, '-=200')
	.add(svgColor3Anim, '-=250')
	.add(svgBarAnim, '-=400');

export default AnimateLoaderLogo;
