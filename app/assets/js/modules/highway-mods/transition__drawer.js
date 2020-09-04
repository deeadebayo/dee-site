import Highway from '@dogstudio/highway';
import anime from 'animejs/lib/anime.es';
/* to: The data-router-view to display.
from: The data-router-view to hide.
done: The required callback method that has to be called once the animation is done.

in: This method should contain the animation to display a view.
out: This method should contain the animation to hide a view. */

export default class Drawer extends Highway.Transition {
	in({ from, to, done }) {
		window.scrollTo(0, 0);
		from.remove();

		let loaderPage = document.querySelector('#loader'),
			timelineIn = anime.timeline({
				targets: loaderPage,
				top: ['-100vh', '0vh'],
				duration: 500,
				easing: 'easeInOutQuart',
			});
		timelineIn
			.add({
				targets: to,
				opacity: [0, 1],
				easing: 'linear',
			})
			.add({
				targets: loaderPage,
				opacity: [1, 0],
				easing: 'linear',
			});

		done();
	}
	out({ from, done }) {
		let loaderPage = document.querySelector('#loader'),
			timelineOut = anime.timeline({
				targets: loaderPage,
				top: ['-100vh', '0vh'],
				easing: 'easeOutQuint',
				duration: 700,
			});

		timelineOut.add({
			targets: from,
			opacity: [1, 0.8],
			duration: 500,
			easing: 'linear',
			complete: done,
		});
	}
}
