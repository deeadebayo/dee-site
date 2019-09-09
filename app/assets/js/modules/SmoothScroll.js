import $ from 'jquery';

export function smoothScroll() {
	$('a[href^="#"]')
		.not('a[href="#"]')
		.click(function(e) {
			e.preventDefault();
			window.scroll({
				top: $(this.getAttribute('href')).offset().top
			});
		});
}
