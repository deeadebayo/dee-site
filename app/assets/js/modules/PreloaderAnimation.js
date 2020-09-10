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
			keyframes: [
				{
					fill: [colorNeutralStroke, 'transparent'],
				},
			],
			easing: 'linear',
			duration: 800,
		},
		svgColor1Anim = {
			targets: svgColor1,
			keyframes: [
				{ fill: ['none', colorSecondary] },
				{ fill: [colorSecondary, colorRare] },
				{ fill: [colorRare, colorPrimary] },
			],
			// delay: anime.stagger(100, { easing: 'linear' }),
			easing: 'linear',
			duration: 1000,
		},
		svgColor2Anim = {
			targets: svgColor2,
			keyframes: [
				{ fill: ['none', colorRare] },
				{ fill: [colorRare, colorPrimary] },
			],
			// delay: anime.stagger(500, { easing: 'linear' }),
		},
		svgColor3Anim = {
			targets: svgColor3,
			fill: ['none', colorPrimary],
			easing: 'linear',
			duration: 500,
		},
		svgBarAnim = {
			targets: svgBarLayer,
			fill: ['none', colorPrimary],
			easing: 'linear',
			duration: 500,
		};

	anime
		.timeline({
			targets: loaderPage,
			duration: 1000,
			easing: 'easeOutQuint',
		})
		.add({
			targets: loaderPage,
			top: ['-100vh', '0vh'],
		})
		.add(svgTextAnim, '-=200')
		.add(svgColor1Anim, 400)
		.add(svgColor2Anim, 600)
		.add(svgColor3Anim, 800)
		.add(svgBarAnim, 200)
		.add({
			delay: 5000,
			targets: loaderPage,
			top: ['0vh', '-100vh'],
			duration: 700,
		});
}
