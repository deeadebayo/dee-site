function getRandomColor() {
	const classes = [
		'logo--primaryColor',
		'logo--secondaryColor',
		'logo--accentColor'
	];

	let currentClass = Math.floor(Math.random() * classes.length);
	return classes[currentClass];
}

export function showRandomColor() {
	let logo = document.querySelector('#logo');

	logo.addEventListener('mouseenter', function() {
		let logoColorChange = getRandomColor();

		if (logo.classList.contains('logo--noColor')) {
			logo.classList.remove('logo--noColor');
		}

		logo.classList.remove(
			'logo--primaryColor',
			'logo--secondaryColor',
			'logo--accentColor',
			'logo--primaryColorHover',
			'logo--secondaryColorHover',
			'logo--accentColorHover'
		);

		console.warn(logo);
		this.classList.toggle(logoColorChange);
	});
}
