import anime from 'animejs';

export function preloaderAnimation() {
	window.onload = () => {
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

		let tlDrawerIn = anime
			.timeline({
				targets: loaderPage,
				easing: 'easeOutQuint',
				duration: 1250,
			})
			.add({
				targets: loaderPage,
				top: '0vh',
			})
			.add({
				targets: svgText,
				stroke: ['transparent', colorNeutralStroke, 'transparent'],
			})
			.add({
				targets: svgColor1,
				fill: ['none', colorSecondary, colorRare, colorPrimary],
			})
			.add({
				targets: svgColor2,
				fill: ['none', colorRare, colorPrimary],
			})
			.add({ targets: svgColor3, fill: ['none', colorPrimary] })
			.add({ targets: svgBarLayer, fill: ['none', colorPrimary] })
			.add({
				targets: loaderPage,
				top: '-100vh',
			});
		tlDrawerIn;
	};
}
