import anime from 'animejs';

export function preloaderAnimation() {
	let loaderPage = document.querySelector('#loader'),
		svgText = document.querySelector('.page-animation__logo__letters'),
		svgColor1 = document.querySelector(
			'.page-animation__logo__first-color'
		),
		svgColor2 = document.querySelector(
			'.page-animation__logo__second-color'
		),
		svgColor3 = document.querySelector(
			'.page-animation__logo__third-color'
		),
		svgBarLayer = document.querySelector(
			'.page-animation__logo__bar-final-layer'
		),
		colorPrimary = 'hsl(175, 100%, 33%)',
		colorSecondary = 'hsl(358, 100%, 68%)',
		colorRare = 'hsl(39, 98%, 58%)',
		colorNeutralStroke = 'hsl(0, 0%, 46%)';
	let svgTextAnim = {
			targets: svgText,
			stroke: [
				{ value: 'transparent', duration: 1000 },
				{
					value: [colorNeutralStroke, 'transparent'],
					duration: 1000,
				},
			],
			easing: 'linear',
			duration: 800,
		},
		svgColor1Anim = {
			targets: svgColor1,
			fill: [
				{ value: 'none', duration: 1000 },
				{
					value: colorSecondary,
					duration: 1000,
				},
				{ value: [colorRare, colorPrimary], duration: 1000 },
			],
			easing: 'linear',
			duration: 800,
		},
		svgColor2Anim = {
			targets: svgColor2,
			fill: [
				{ value: ['none', colorRare], duration: 1000 },
				{ value: [colorRare, colorPrimary], duration: 1000 },
			],
			easing: 'linear',
			duration: 800,
		},
		svgColor3Anim = {
			targets: svgColor3,
			fill: ['none', colorPrimary],
			easing: 'linear',
			duration: 800,
		},
		svgBarAnim = {
			targets: svgBarLayer,
			fill: ['none', colorPrimary],
			easing: 'linear',
			duration: 800,
		};

	window.onload = () => {
		const tlDrawerIn = anime
			.timeline({
				targets: loaderPage,
				duration: 1000,
				easing: 'easeOutQuint',
			})
			.add({
				targets: loaderPage,
				top: ['-100vh', '0vh'],
			})
			.add(svgTextAnim)
			.add(svgColor1Anim, 400)
			.add(svgColor2Anim)
			.add(svgColor3Anim)
			.add(svgBarAnim)
			.add({
				delay: 5000,
				targets: loaderPage,
				top: ['0vh', '-100vh'],
				duration: 700,
			});

		tlDrawerIn.play();
	};
}
