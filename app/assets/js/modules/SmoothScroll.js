export function footerScroll() {
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
	const footer = document.querySelector('#footer'),
		navlink = document.querySelector('#contact-link');

	navlink.addEventListener('click', () => {
		footer.scrollIntoView({ behavior: 'smooth' });
	});
}
