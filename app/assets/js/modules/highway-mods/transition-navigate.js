import Highway from '@dogstudio/highway/src/highway';
import { TimelineLite } from 'gsap';

const tl = new TimelineLite();

//Fade
class Navigate extends Highway.Transition {
	in({ from, to, done }) {
		//reset scroll
		window.scrollTo(0.0);

		//remove old view
		from.remove();

		//animation
		tl.fromTo(
			to,
			0.5,
			{
				opacity: 0
			},
			{
				opacity: 1,
				onComplete: done
			}
		);
	}

	out({ from, done }) {
		//animation
		tl.fromTo(
			from,
			0.5,
			{ opacity: 1 },
			{
				opacity: 0,
				onComplete: done
			}
		);
	}
}

export default Navigate;
