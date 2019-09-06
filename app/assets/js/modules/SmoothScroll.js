export function smoothScroll() {
	// $('a[href^="#"]')
	// 	.not('a[href="#"]')
	// 	.click(function(e) {
	// 		e.preventDefault();
	// 		$('html, body').animate(
	// 			{
	// 				scrollTop: $($(this).attr('href')).offset().top
	// 			},
	// 			500
	// 		);
	// 	});
	// const footer = document.querySelector('#footer'),
	// navlink = document.querySelector('#contact-link'),
	const anchor = document.querySelectorAll('a[href^="#"]', '!a[href^="#"]');
	// body = document.body,
	// wrapper = document.querySelectorAll('.wrapper'),
	// html = document.documentElement;

	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		this.scrollIntoView({ behavior: 'smooth' });
	});

	// navlink.addEventListener('click', () => {
	// 	footer.scrollIntoView({ behavior: 'smooth' });
	// });
}
