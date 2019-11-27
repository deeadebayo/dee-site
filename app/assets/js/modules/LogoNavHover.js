import { getRandomColor } from './LogoRandomColor';

export function logoNavHover() {
	let logo = document.querySelector('#logo'),
		navbarLinks = document.querySelectorAll('.navbar-links'),
		items = Array.from(navbarLinks),
		classes = [
			'logo--primaryColorHover',
			'logo--secondaryColorHover',
			'logo--accentColorHover'
		],
		removedClasses = [
			'logo--primaryColor',
			'logo--secondaryColor',
			'logo--accentColor',
			'logo--primaryColorHover',
			'logo--secondaryColorHover',
			'logo--accentColorHover',
			'logo--noColor'
		],
		noColorClass = () => {
			removedClasses.pop();
			console.warn(removedClasses);
			return removedClasses;
		};

	items.map(item => {
		item.addEventListener('mouseenter', () => {
			const randomColor = getRandomColor(classes);
			logo.classList.remove(...removedClasses);
			logo.classList.toggle(randomColor);
		});
		item.addEventListener('mouseout', () => {
			logo.classList.remove(noColorClass);
			logo.classList.add('logo--noColor');
		});
	});
}
