import $ from 'jquery';

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
