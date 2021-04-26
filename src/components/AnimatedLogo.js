import React from "react";

import Logo from "./../images/svg/logo.svg";
import "./../scss/logo.scss";

let colorClassOptions = [
	"logo--primaryColor",
	"logo--secondaryColor",
	"logo--accentColor",
];

export const AnimatedLogo = () => {
	let colorClassChoice =
			colorClassOptions[
				Math.floor(Math.random() * colorClassOptions.length)
			],
		sayColor = () => console.warn(colorClassChoice);
	return <Logo onMouseEnter={console.warn(`hovered`)} />;
};

// const getRandomColor = () => {
// 	const classes = [
// 		"logo--primaryColor",
// 		"logo--secondaryColor",
// 		"logo--accentColor",
// 	];

// 	let currentClass = Math.floor(Math.random() * classes.length);
// 	return classes[currentClass];
// };

// export default function showRandomColor(e) {
// 	let logo = e.target;

// 	let logoClass = getRandomColor();

// 	logo.classList.remove(
// 		"logo--primaryColor",
// 		"logo--secondaryColor",
// 		"logo--accentColor"
// 	);
// 	logo.classList.toggle(logoClass);
// }
