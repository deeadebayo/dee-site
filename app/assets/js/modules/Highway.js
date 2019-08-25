import { Highway } from '@dogstudio/highway';

// class CustomRenderer extends Highway.Renderer {
// 	onEnter() {}
// 	onLeave() {}
// 	onEnterCompleted() {}
// 	onLeaveCompleted() {}
// }

// class CustomTransition extends Highway.Transition {
// 	in({ from, to, trigger, done }) {

// 	}
// 	out({ from, trigger, done }) {

// 	}
// }

export const myWay = new Highway.Core({
	renderers: {
		// name: CustomRenderer
	},

	transitions: {
		// name: CustomTransition,
		// default: OtherTransition
	}
});

const links = document.querySelectorAll('.navbar__links a');

// eslint-disable-next-line no-unused-vars
myWay.on('NAVIGATE_IN', ({ to, location }) => {
	for (let i = 0; i < links.length; i++) {
		const link = links[i];

		link.classList.remove('active');

		if (link.href === location.href) {
			link.classList.add('active');
		}
	}
});
