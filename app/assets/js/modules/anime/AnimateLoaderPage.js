import anime from 'animejs';

const pageCover = document.querySelector('#page-cover path'),
	gone = 'M 0,0 L 10,0 L 10,0 C 5,0 5,0 0,0 L 0,0 Z',
	morphing = 'M 0,0 L 10,0 L 10,5 C 5,8.5 5,8.5 0,5 L 0,0 Z',
	there = 'M 0,0 L 10,0 L 10,10 C 5,10 5,10 0,10 L 0,0 Z',
	coverPage = anime({
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
	}),
	uncoverPage = anime({
		targets: pageCover,
		opacity: 1,
		d: [
			{
				value: there,
				duration: 0,
				easing: 'easeInQuad',
			},
			{
				value: morphing,
				duration: 1000,
				easing: 'easeInQuad',
			},
			{
				value: gone,
				duration: 1000,
				easing: 'easeOutQuad',
			},
		],
		complete: function () {
			console.warn('this ran');
		},
	});

export { coverPage, uncoverPage };
