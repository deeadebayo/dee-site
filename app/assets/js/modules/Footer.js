import $ from 'jquery';

export function footerAnimation() {
	const body = document.body,
		wrapper = document.querySelectorAll('.wrapper'),
		html = document.documentElement; //the html tag;

	window.addEventListener('scroll', () => {
		//ADD .TIGHT
		if (
			$(window).scrollTop() + $(window).height() >
			$(wrapper).outerHeight()
		) {
			body.classList.add('tight');
		} else {
			body.classList.remove('tight');
		}
	});

	//BACK TO PRESENTATION MODE
	$(html).on('click', 'body.tight .wrapper', () => {
		$(html, body).animate(
			{
				scrollTop: $(wrapper).outerHeight() - $(window).height()
			},
			500
		);
	});
}
