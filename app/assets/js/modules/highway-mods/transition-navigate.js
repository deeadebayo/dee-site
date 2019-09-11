import Highway from '@dogstudio/highway';
import anime from 'animejs/lib/anime.es';

/* to: The data-router-view to display.
from: The data-router-view to hide.
done: The required callback method that has to be called once the animation is done.
trigger: The triggered link, popstate or script.

in: This method should contain the animation to display a data-router-view.
out: This method should contain the animation to hide a data-router-view. */

//Fade
class Navigate extends Highway.Transition {
	in({ from, to, done }) {
		//reset scroll
		window.scrollTo(0, 0);

		// animation. Call to and done in the function
		// let container = document.querySelector('main');
		anime({
			//add duration, starting point, ending point
			targets: from,
			translateX: 270,
			begin: function() {
				from.remove();
				to;
			},
			complete: done
		});
	}

	out({ from, done }) {
		//animation. Call from and done
		from.remove();
		anime({
			targets: from,
			translateY: 270,
			complete: done
		});
	}
}

export default Navigate;
