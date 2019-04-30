const helloAnimation = () => {
	let hello = document.getElementsByClassName('hello-animation');
	let helloAction = document.querySelectorAll('ul.hello-animation__hellos');

	hello.hover(() => {
		helloAction.toggleClass('hello-animation__hellos--action');
	});
	console.warn('testing');
};

exports.helloAnimation = helloAnimation;
