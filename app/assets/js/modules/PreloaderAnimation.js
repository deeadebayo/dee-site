import anime from 'animejs';
import { uncoverPage } from './anime/AnimateLoaderPage';
import AnimateLoaderLogo from './anime/AnimateLoaderLogo';

export function preloaderAnimation() {
	uncoverPage.begin = window.scrollTo(0, 0);
	anime(uncoverPage);
	AnimateLoaderLogo;
}
