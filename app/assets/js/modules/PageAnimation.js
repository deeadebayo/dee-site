import Highway from '@dogstudio/highway';
import Glob from './highway-mods/transition__glob';

const pageAnimation = new Highway.Core({
	transitions: {
		default: Glob,
	},
});

export default pageAnimation;
