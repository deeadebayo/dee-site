const pageCover = document.querySelector('#page-cover path'),
	// shade type pattern
	gone = 'M 0,0 10,0 10,0 0,0 Z',
	morphing = 'M 0,0 10,0 10,6 0,8 Z',
	there = 'M 0,0 10,0 10,10 0,10 Z',
	coverPage = {
		// onBegin: d,
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
				duration: 800,
				easing: 'easeInQuad',
			},
			{
				value: there,
				duration: 800,
				easing: 'easeOutQuad',
			},
		],
	},
	uncoverPage = {
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
				duration: 800,
				easing: 'easeInQuad',
			},
			{
				value: gone,
				duration: 800,
				easing: 'easeOutQuad',
			},
		],
	};

export { coverPage, uncoverPage };
