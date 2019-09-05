import Highway from '@dogstudio/highway';
import Navigate from './highway-mods/transition-navigate';

const pageAnimation = new Highway.Core({
	transitions: {
		default: Navigate
	}
});

if (Highway) {
	console.warn(`it's working`);
	// console.warn(real);
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
	// })
} else {
	console.warn(`Highway is not enabled`);
}

export default pageAnimation;
