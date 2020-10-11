import Highway from '@dogstudio/highway';
import anime from 'animejs/lib/anime.es';
import uncoverPage from '../anime/AnimateLoaderPage';

export default class Glob extends Highway.Transition {
	out({ from, done }) {
		const pageCover = document.querySelector('#page-cover path'),
			gone = 'M 0,0 L 10,0 L 10,0 C 5,0 5,0 0,0 L 0,0 Z',
			morphing = 'M 0,0 L 10,0 L 10,5 C 5,8.5 5,8.5 0,5 L 0,0 Z',
			there = 'M 0,0 L 10,0 L 10,10 C 5,10 5,10 0,10 L 0,0 Z';
		anime({
			targets: pageCover,
			opacity: 1,
			d: [
				{
					value: gone,
					duration: 0,
					easing: 'easeInQuad',
				},
				{
					value: morphing,
					duration: 1000,
					easing: 'easeInQuad',
				},
				{
					value: there,
					duration: 1000,
					easing: 'easeOutQuad',
				},
			],
		});
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
		window.scrollTo(0, 0);
		uncoverPage;
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
