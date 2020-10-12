import anime from 'animejs';
import { uncoverPage } from './anime/AnimateLoaderPage';
import AnimateLoaderLogo from './anime/AnimateLoaderLogo';

export function preloaderAnimation() {
	anime(uncoverPage);
	AnimateLoaderLogo;
}
