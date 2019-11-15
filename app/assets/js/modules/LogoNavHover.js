import { getRandomColor } from './LogoRandomColor.justify';

export function logoNavbarHover() {
	let logo = document.querySelector('#logo'),
		navbarLinks = document.querySelectorAll('.navbar-links'),
		logoColorChange = getRandomColor();

	navbarLinks.forEach(el => {
		el.addEventListener('mouseenter', function() {
			logo.classList.remove(
				'logo--primaryColor',
				'logo--secondaryColor',
				'logo--accentColor'
			);
			logo.classList.toggle(logoColorChange);
		});
	});
}
