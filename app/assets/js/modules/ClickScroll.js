import $ from 'jquery';

const clickScroll = () => {
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
};

exports.clickScroll = clickScroll;
