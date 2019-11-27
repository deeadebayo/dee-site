function getRandomHoverColor() {
	const classes = [
		'logo--primaryColorHover',
		'logo--secondaryColorHover',
		'logo--accentColorHover'
	];

	let currentClass = Math.floor(Math.random() * classes.length);
	return classes[currentClass];
}

export function logoNavHover() {
	let logo = document.querySelector('#logo'),
		navbarLinks = document.querySelectorAll('.navbar-links'),
		items = Array.from(navbarLinks);

	items.map(item => {
		item.addEventListener('mouseenter', () => {
			const randomColor = getRandomHoverColor();
			logo.classList.remove(
				'logo--primaryColor',
				'logo--secondaryColor',
				'logo--accentColor',
				'logo--primaryColorHover',
				'logo--secondaryColorHover',
				'logo--accentColorHover',
				'logo--noColor'
			);
			logo.classList.add(randomColor);
		});
		item.addEventListener('mouseout', () => {
			logo.classList.remove(
				'logo--primaryColor',
				'logo--secondaryColor',
				'logo--accentColor',
				'logo--primaryColorHover',
				'logo--secondaryColorHover',
				'logo--accentColorHover'
			);
			logo.classList.add('logo--noColor');
		});
	});
}
