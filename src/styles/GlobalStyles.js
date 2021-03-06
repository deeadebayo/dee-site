import React from "react";
import { Global, css } from "@emotion/react";

import "normalize.css";

const globalstyles = css`
	:root {
		--color-primary: hsl(358, 100%, 68%);
		--color-secondary: hsl(175, 100%, 33%);
		--color-accent: hsl(16, 97%, 58%);
		--color-rare: hsl(39, 98%, 58%);
		--color-alert: hsl(356, 69%, 54%);

		--color--text-black: hsl(0, 0%, 17%);
		--color--text-header: hsl(0, 0%, 20%);
		--color--text-default: hsl(0, 0%, 28%);
		--color--dark: hsl(0, 0%, 28%);
		--color--gray: hsl(0, 0%, 46%);
		--color--gray__lighter: hsl(0, 0%, 85%);

		--color-text: black;
		--color-background: lightgray;
		border-top: 4px solid var(--color-secondary);
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
		display: flex;
		min-height: 100vh;
		background: white;
		position: relative;
		z-index: 1;
		padding: 2rem;
		& > .page {
			${"" /* width: clamp(16rem, 90vw, 70rem); */}
			margin: 0 auto;
		}
	}
`;

const GlobalStyles = () => <Global styles={globalstyles} />;

export default GlobalStyles;
