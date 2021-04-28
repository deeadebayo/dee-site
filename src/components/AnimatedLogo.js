import React, { useState } from "react";

import Logo from "./../images/svg/logo.svg";
import "./../scss/logo.scss";

let colorClassOptions = [
	"logo--primaryColor",
	"logo--secondaryColor",
	"logo--accentColor",
];

export const AnimatedLogo = () => {
	const [color, setColor] = useState(""),
		[currentColor, setCurrentColor] = useState("");

	let colorClassChoice = () =>
			colorClassOptions[
				Math.floor(Math.random() * colorClassOptions.length)
			],
		randomColor = () => colorClassChoice(),
		addClass = () => {
			let newColor = randomColor();
			setCurrentColor(newColor);
			setColor(currentColor);
		};
	return <Logo className={`logo ${color}`} onMouseEnter={() => addClass()} />;
};
