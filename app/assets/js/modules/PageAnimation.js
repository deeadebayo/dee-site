import Highway from '@dogstudio/highway';
import Shade from './highway-mods/transition__shade';

const pageAnimation = new Highway.Core({
	transitions: {
		default: Shade,
	},
});

export default pageAnimation;
