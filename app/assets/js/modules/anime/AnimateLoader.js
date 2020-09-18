import anime from 'animejs';

//define the DOM elements and colors
const svgText = [
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
	colorRare = 'hsl(39, 98%, 58%)',
	colorNeutralStroke = 'hsl(0, 0%, 46%)',
	//Animate each different section (path) of the SVG
	svgTextAnim = {
		targets: svgText,
		fill: [
			{
				value: colorNeutralStroke,
				duration: 500,
			},
			{
				value: 'transparent',
				duration: 500,
			},
		],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 1500,
		delay: function (el, i) {
			return i * 250;
		},
		direction: 'alternate',
	},
	svgColor1Anim = {
		targets: svgColor1,
		fill: [
			{ value: colorSecondary, duration: 500 },
			{ value: colorRare, duration: 300 },
			{ value: colorPrimary, duration: 400 },
		],
		opacity: {
			value: [0, 1],
			duration: 1200,
		},
		easing: 'easeInSine',
	},
	svgColor2Anim = {
		targets: svgColor2,
		fill: [
			{ value: colorRare, duration: 300 },
			{ value: colorPrimary, duration: 400 },
		],
		opacity: {
			value: [0, 1],
			duration: 800,
		},
		// delay: anime.stagger(100),
	},
	svgColor3Anim = {
		targets: svgColor3,
		fill: [
			{
				value: colorPrimary,
				duration: 400,
			},
		],
		opacity: {
			value: [0, 1],
			duration: 400,
		},
		easing: 'linear',
	},
	svgBarAnim = {
		targets: svgBarLayer,
		fill: { value: colorPrimary },
		easing: 'linear',
		opacity: {
			value: [0, 1],
			duration: 400,
		},
	};

const AnimateLoader = anime
	.timeline({ easing: 'easeInSine' })
	.add(svgTextAnim)
	.add(svgColor1Anim, '-=500')
	.add(svgColor2Anim, '-=1050')
	.add(svgColor3Anim, '-=300')
	.add(svgBarAnim, '-=250');

export default AnimateLoader;
