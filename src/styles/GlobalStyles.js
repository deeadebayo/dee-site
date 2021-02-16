import React from "react";
import { Global, css } from "@emotion/react";
import "normalize.css";

const globalstyles = css`
	:root {
		--color--primary: red;
		--color--secondary: blue;
		--color-text: black;
		--color-background: lightgray;
	}
	background-color: "lightgray";

	.emoji {
		height: 19px;
		padding: 0 2px;
		line-height: 1.5;
	}

	.hidden {
		display: none;
	}

	main {
		max-width: 65ch;
	}
`;

const GlobalStyles = () => (
	<>
		<Global styles={globalstyles} />
	</>
);

export default GlobalStyles;
