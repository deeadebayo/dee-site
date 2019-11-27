export function getRandomColor(classArray) {
	const classes = classArray;
	let currentClass = Math.floor(Math.random() * classes.length);
	return classes[currentClass];
}

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
	});
}
