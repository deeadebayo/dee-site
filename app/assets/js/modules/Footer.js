import $ from 'jquery';

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
