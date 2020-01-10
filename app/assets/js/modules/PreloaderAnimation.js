import anime from 'animejs/lib/anime.es';

export function preloaderAnimation() {
	window.addEventListener('DOMContentLoaded', () => {
		let loadAnimationPage = document.querySelector('.page-animation');
		anime({
			target: loadAnimationPage,
			translateY: '100vh',
			delay: '1.4s',
			easing: 'linear',
			duration: '1.5s'
		});
		console.warn(`we're here`);
		// if (location.pathname === '/') {
		// 	console.warn(`page is fully loaded`);
		// 	anime({
		// 		target: loadAnimationPage,
		// 		keyframes: [{ height: '100vh' }, { height: 0 }],
		// 		duration: '1.5s',
		// 		easing: 'ease-out',
		// 		delay: '1.4s',
		// 		// loop: 1,
		// 		complete: loadAnimationPage.remove()
		// 	});
		// }
	});
}
