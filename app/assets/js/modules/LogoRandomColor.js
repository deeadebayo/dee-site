function getRandomColor() {
	const classes = [
		'logo--primaryColor',
		'logo--secondaryColor',
		'logo--accentColor'
	];

	let currentClass = Math.floor(Math.random() * classes.length);
	return classes[currentClass];
}

export function logoRandomColor() {
	let logo = document.querySelector('#logo');

	logo.addEventListener('mouseenter', () => {
		let logoColorChange = getRandomColor();
		logo.classList.remove(
			'logo--primaryColor',
			'logo--secondaryColor',
			'logo--accentColor',
			'logo--primaryColorHover',
			'logo--secondaryColorHover',
			'logo--accentColorHover',
			'logo--noColor'
		);
		logo.classList.toggle(logoColorChange);
	});
	logo.addEventListener('mouseleave', () => {
		logo.classList.remove(
			'logo--primaryColor',
			'logo--secondaryColor',
			'logo--accentColor',
			'logo--primaryColorHover',
			'logo--secondaryColorHover',
			'logo--accentColorHover'
			// 'logo--noColor'
		);
		logo.classList.add('logo--noColor');
	});
}
