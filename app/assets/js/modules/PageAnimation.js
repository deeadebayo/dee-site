import Highway from '@dogstudio/highway/src/highway';
import Navigate from './highway-mods/transition-navigate';

const H = new Highway.Core({
	transitions: {
		default: Navigate
	}
});

// pageAnimation = new Highway.Core();
// links = document.querySelectorAll('.navbar__links a');

// // eslint-disable-next-line no-unused-vars
// pageAnimation.on('NAVIGATE_IN', ({ to, location }) => {
// 	for (let i = 0; i < links.length; i++) {
// 		const link = links[i];

// 		link.classList.remove('active');

// 		if (link.href === location.href) {
// 			link.classList.add('active');
// 		}
// 	}
// });

export default H;
