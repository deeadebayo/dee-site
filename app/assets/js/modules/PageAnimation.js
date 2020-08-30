import Highway from '@dogstudio/highway';
// import Fade from './highway-mods/transition__fade';
import Drawer from './highway-mods/transition__drawer';

const pageAnimation = new Highway.Core({
	transitions: {
		default: Drawer,
	},
});

export default pageAnimation;
