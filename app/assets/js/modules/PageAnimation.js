import Highway from '@dogstudio/highway';
<<<<<<< HEAD
import Shade from './highway-mods/transition__shade';

const pageAnimation = new Highway.Core({
	transitions: {
		default: Shade,
	},
});

=======
import Fade from './highway-mods/transition-fade';

const pageAnimation = new Highway.Core({
	transitions: {
		default: Fade
	}
});

if (Highway) {
	console.warn(`it's working`);
} else {
	console.warn(`Highway is not enabled`);
}

>>>>>>> add-content
export default pageAnimation;
