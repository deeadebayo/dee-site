import Highway from '@dogstudio/highway';
// import Fade from './highway-mods/transition__fade';
// import Drawer from './highway-mods/transition__drawer';
import Glob from './highway-mods/transition__glob';

const pageAnimation = new Highway.Core({
	transitions: {
		default: Glob,
	},
});

export default pageAnimation;
