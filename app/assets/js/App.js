// All JS code - till I get down modules
import $ from 'jquery';

console.warn(`yes, we're still good`);

/** For the footer animation */
$(document).ready($ => {
	$(window).on('scroll', () => {
		//ADD .TIGHT
		if (
			$(window).scrollTop() + $(window).height() >
			$('.wrapper').outerHeight()
		) {
			$('body').addClass('tight');
		} else {
			$('body').removeClass('tight');
		}
	});

	//BACK TO PRESENTATION MODE
	$('html').on('click', 'body.tight .wrapper', () => {
		$('html, body').animate(
			{
				scrollTop: $('.wrapper').outerHeight() - $(window).height()
			},
			500
		);
	});
});

/** Scroll window to an element  */
$('a[href^="#"]')
	.not('a[href="#"]')
	.click(function(e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: $($(this).attr('href')).offset().top
			},
			500
		);
	});

//Hello animation for homepage
/* $(document).ready(() => {
	let hello = document.getElementsByClassName('hello-animation');
	let helloAction = $('ul.hello-animation__hellos');
	$(hello).hover(() => {
		helloAction.toggleClass('hello-animation__hellos--action');
    });
    console.warn('testing');
}); */
const helloAnimation = () => {
	let hello = document.getElementsByClassName('hello-animation');
	let helloAction = document.querySelectorAll('ul.hello-animation__hellos');

	hello.hover(() => {
		helloAction.toggleClass('hello-animation__hellos--action');
	});
	console.warn('testing');
};

exports.helloAnimation = helloAnimation;
