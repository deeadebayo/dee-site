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
		navlink = document.querySelector('#contact-link'),
		anchor = document.querySelectorAll('a[href^="#"]'),
		
	
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

		})
	navlink.addEventListener('click', () => {
		footer.scrollIntoView({ behavior: 'smooth' });
	});
}
