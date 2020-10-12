import Highway from '@dogstudio/highway';
import anime from 'animejs/lib/anime.es';
import { uncoverPage, coverPage } from '../anime/AnimateLoaderPage';

export default class Glob extends Highway.Transition {
	out({ from, done }) {
		anime(coverPage);
		anime({
			targets: from,
			opacity: [1, 0],
			delay: 1000,
			duration: 0.5,
			easing: 'linear',
			complete: done,
		});
	}
	in({ from, to, done }) {
		anime(uncoverPage);
		window.scrollTo(0, 0);
		from.remove();
		anime({
			targets: to,
			delay: 3000,
			opacity: [0, 1],
			easing: 'linear',
			complete: done,
		});
	}
}
