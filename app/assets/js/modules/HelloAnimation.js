import $ from 'jquery';

export function helloAnimation() {
	let hello = document.getElementsByClassName('hello-animation')[0];
	let helloAction = document.querySelector('ul.hello-animation__hellos');

	hello.addEventListener('mouseover', () => {
		$(helloAction).toggleClass('hello-animation__hellos--action');
	});
}
