export function footerAnimation() {
	const body = document.body,
		wrapper = document.querySelector('.wrapper');
	// tightBody = document.querySelector('body.tight'),
	// html = document.documentElement; //the html tag;

	window.addEventListener('scroll', () => {
		//add .tight to body
		if (window.scrollY + window.innerHeight > wrapper.offsetHeight) {
			body.classList.add('tight');
		} else {
			body.classList.remove('tight');
		}
	});

	//back to presentation mode
	wrapper.addEventListener('click', () => {
		if (body.classList.contains('tight')) {
			window.scroll({
				top: wrapper.offsetHeight - window.innerHeight
			});
		}
	});
}
