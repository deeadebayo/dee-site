import anime from 'animejs';
import AnimateLoader from './anime/AnimateLoader';

export function preloaderAnimation() {
	const loaderPage = document.querySelector('#loader');

	anime
		.timeline({
			targets: loaderPage,
			duration: 950,
			easing: 'easeOutQuint',
		})
		.add({
			targets: loaderPage,
			// top: ['-100vh', '0vh'],
		})
		// next line is to add the svg color animation (AnimateLoader)
		.add(AnimateLoader)
		.add({
			delay: 2400,
			targets: loaderPage,
			// top: ['0vh', '-100vh'],
			duration: 700,
		});
}
