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
	const logo = document.querySelector('#logo');

	logo.addEventListener('mouseover', () => {
		this.classList.toggle(getRandomColor);
	});

	// classList.toggle(getRandomColor);
}
