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
		let logoClass = getRandomColor();

		logo.classList.remove('logo--primaryColor', 'logo--secondaryColor', 'logo--accentColor');
		this.classList.toggle(logoClass);
	});
}
