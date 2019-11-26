function getRandomColor() {
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
			let randomColor = getRandomColor(),
				colorRemoveTime = 2500;

			logo.classList.remove(
				'logo--noColor',
				'logo--primaryColor',
				'logo--secondaryColor',
				'logo--accentColor',
				'logo--primaryColorHover',
				'logo--secondaryColorHover',
				'logo--accentColorHover'
			);
			// logo.classList.add('logo--noColor');
			console.warn(logo);
			logo.classList.toggle(randomColor);
			if (
				logo.classList.contains(
					'logo--primaryColor',
					'logo--secondaryColor',
					'logo--accentColor',
					'logo--primaryColorHover',
					'logo--secondaryColorHover',
					'logo--accentColorHover'
				)
			) {
				setTimeout(() => {
					logo.classList.toggle('logo--noColor');
				}, colorRemoveTime);
			}
		});
	});
}
