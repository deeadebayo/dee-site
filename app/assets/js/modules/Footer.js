export function footerAnimation() {
	const body = document.body,
		wrapper = document.querySelector('.wrapper'),
		// tightBody = document.querySelector('body.tight'),
		html = document.documentElement; //the html tag;

	window.addEventListener('scroll', () => {
		//ADD .TIGHT
		if (window.scrollY + window.innerHeight > wrapper.offsetHeight) {
			body.classList.add('tight');
		} else {
			body.classList.remove('tight');
		}
	});

	html.addEventListener('click', () => {
		if (body.classList.contains('tight')) {
			window.scroll({
				top: wrapper.offsetHeight - window.innerHeight
			});
		}
	});
}
