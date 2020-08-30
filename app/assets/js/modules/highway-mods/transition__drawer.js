import Highway from '@dogstudio/highway';
import anime from 'animejs/lib/anime.es';
/* to: The data-router-view to display.
from: The data-router-view to hide.
done: The required callback method that has to be called once the animation is done.

in: This method should contain the animation to display a data-router-view.
out: This method should contain the animation to hide a data-router-view. */

//Drawer
export default class Drawer extends Highway.Transition {
	in({ from, to, done }) {
		from.remove();

		let loader = document.querySelector('#loader');

		window.scrollTo(0, 0);

		let timelineIn = anime.timeline({
			targets: to,
			opacity: [0, 1],
			duration: 400,
			easing: 'linear',
		});
		console.warn(`yes, i'm here`);
		timelineIn.add({
			targets: loader,
			top: ['0', '-100vh'],
			duration: 400,
			easing: 'easeOutExpo',
		});

		done();
	}
	out({ from, done }) {
		let loader = document.querySelector('#loader'),
			timelineOut = anime.timeline({
				targets: loader,
				top: ['-100vh', '0vh'],
				duration: 400,
				easing: 'easeOutExpo',
			});
		timelineOut.add({
			targets: from,
			opacity: [1, 0],
			duration: 400,
			easing: 'linear',
			complete: done,
		});
	}
}
