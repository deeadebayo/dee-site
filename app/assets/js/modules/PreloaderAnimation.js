import anime from 'animejs';

export function preloaderAnimation() {
	window.onload = () => {
		let loaderPage = document.querySelector('#loader'),
			tlDrawerIn = anime.timeline({
				targets: loaderPage,
				easing: 'easeOutQuint',
				duration: 1250,
			});
		tlDrawerIn
			.add({
				targets: loaderPage,
				top: '0vh',
			})
			.add({
				targets: loaderPage,
				top: '-100vh',
			});
	};
}
