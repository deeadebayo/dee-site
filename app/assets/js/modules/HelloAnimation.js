export function helloAnimation() {
	if (document.getElementsByClassName('hello-animation')[0]) {
		let hello = document.getElementsByClassName('hello-animation')[0];
		let helloAction = document.querySelector('ul.hello-animation__hellos');

		hello.addEventListener('mouseover', () => {
			helloAction.classList.toggle('hello-animation__hellos--action');
		});
	}
}
