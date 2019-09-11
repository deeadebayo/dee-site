import Highway from '@dogstudio/highway';
import Navigate from './highway-mods/transition-navigate';

const pageAnimation = new Highway.Core({
	transitions: {
		default: Navigate
	}
});

if (Highway) {
	console.warn(`it's working`);
} else {
	console.warn(`Highway is not enabled`);
}

export default pageAnimation;
