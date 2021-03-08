import anime from 'animejs';
import { uncoverPage } from './anime/AnimateLoaderPage';
import AnimateLoaderLogo from './anime/AnimateLoaderLogo';

export function preloaderAnimation() {
	uncoverPage.begin = function () {
		window.scrollTo(0, 0);
		AnimateLoaderLogo;
	};
	anime(uncoverPage);
}
