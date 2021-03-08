export function getRandomColor(classArray) {
	const classes = classArray;
	let currentClass = Math.floor(Math.random() * classes.length);
	return classes[currentClass];
}

<<<<<<< HEAD
export function logoRandomColor() {
	let logo = document.querySelector('#logo'),
		classes = [
			'logo--primaryColor',
			'logo--secondaryColor',
			'logo--accentColor'
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

	logo.addEventListener('mouseenter', () => {
		let logoColorChange = getRandomColor(classes);
		logo.classList.remove(...removedClasses);
		logo.classList.toggle(logoColorChange);
	});
	logo.addEventListener('mouseleave', () => {
		logo.classList.remove(noColorClass);
		logo.classList.add('logo--noColor');
=======
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
>>>>>>> add-content
	});
}
