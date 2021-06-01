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

		--color-text-black: hsl(0, 0%, 17%);
		--color-text-header: hsla(0, 0%, 0%, 0.8);
		--color-text_default: hsl(0, 0%, 28%);
		--color-dark: hsl(0, 0%, 28%);
		--color-gray: hsl(0, 0%, 46%);
		--color-gray_lighter: hsl(0, 0%, 85%);
		--color-soft-white: hsl(210, 36%, 96%);

		--color-text: black;
		--color-background: lightgray;
		border-top: 4px solid var(--color-secondary);
		scroll-behavior: smooth;
	}
	background-color: "lightgray";

	.hidden {
		display: none;
	}

	.btn {
		position: relative;
		outline: none;
		transition: all 0.2s ease-in-out;
		border: 1px solid var(--color-primary);
		box-shadow: 0 3px 6px 1px hsla(224, 62%, 24%, 0.24);
		background: transparent;
		color: var(--color-primary);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 1.2rem;
		border-radius: 4px;
		padding: 1em 2em;
		cursor: pointer;
		backface-visibility: hidden;
		transform: translateZ(0) scale(1, 1);
		transform: translate3d(0, 0, 0);

		&:hover {
			background: var(--color-secondary);
			border: 1px solid var(--color-secondary);
			color: white;
		}

		&:active {
			transform: scale3d(0.95, 0.95, 0.95);
			box-shadow: 0 0px 0px hsla(224, 62%, 24%, 0.24);
			background: darken(var(--color-secondary), 10);
		}
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
	p.lead {
		font-size: 1.3em;
	}
`;

const GlobalStyles = () => <Global styles={globalstyles} />;

export default GlobalStyles;
