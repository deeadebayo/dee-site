import Highway from '@dogstudio/highway';
import anime from 'animejs/lib/anime.es';
import { uncoverPage, coverPage } from '../anime/AnimateLoaderPage';
import { getRandomColor } from '../LogoRandomColor';

export default class Shade extends Highway.Transition {
	out({ from, done }) {
		let tl = anime.timeline({
				easing: 'easeInOutQuad',
			}),
			bgColor = getRandomColor([
				'hsl(175, 100%, 33%)',
				'hsl(358, 100%, 68%)',
				'hsl(0, 0%, 46%)',
			]);
		(coverPage.complete = done), (coverPage.fill = bgColor);

		tl.add({
			targets: from,
			opacity: [1, 0.1],
			duration: 800,
			easing: 'linear',
		}).add(coverPage, '-=600');
	}
	in({ from, to, done }) {
		let tl = anime.timeline({
			easing: 'easeInOutQuad',
		});
		(uncoverPage.complete = done),
			// bgColor = getRandomColor();

			tl
				.add({
					begin: function () {
						window.scrollTo(0, 0);
						from.remove();
					},
					targets: to,
					opacity: [0, 1],
					duration: 800,
					easing: 'linear',
				})
				.add(uncoverPage, '-=400');
	}
}
