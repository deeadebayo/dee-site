import React from "react";
import { Global, css } from "@emotion/react";

import "normalize.css";

const globalstyles = css`
	:root {
		--color-primary: hsla(358, 100%, 68%, 1);
		--color-secondary: hsla(175, 100%, 33%, 1);
		--color-accent: hsla(16, 97%, 58%, 1);
		--color-rare: hsla(39, 98%, 58%, 1);
		--color-alert: hsla(356, 69%, 54%, 1);

		--color-text-black: hsl(0, 0%, 17%);
		--color-text-header: hsla(0, 0%, 0%, 0.8);
		--color-text_default: hsl(0, 0%, 28%);
		--color-dark: hsl(0, 0%, 28%);
		--color-dark-slate: hsl(0, 0%, 13.3%);
		--color-dark-shadow: hsla(224, 62%, 24%, 0.24);
		--color-gray: hsl(0, 0%, 46%);
		--color-gray_lighter: hsl(0, 0%, 85%);
		--color-soft-white: hsl(210, 36%, 96%);
		--color-transparent: hsla(0, 0%,0, 1);

		--color-text: black;
		--color-page_neutral_background: white;
		--color-behind_page_background: linear-gradient(to left, #fc00ff, #00dbde);
		--color-background: lightgray;

		border-top: 4px solid var(--color-secondary);
		scroll-behavior: smooth;

		@media screen and (prefers-reduced-motion: reduce) {
			scroll-behavior: auto;
		}
	}
	background-color: "lightgray";

	body.loading {
		overflow: hidden;
		height: 100vh;
	}

	.hidden {
		display: none;
	}

	.btn {
		position: relative;
		outline: none;
		transition: all 0.2s ease-in-out;
		border: 1px solid var(--color-primary);
		box-shadow: 0 3px 6px 1px var(--color-dark-shadow);
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
			box-shadow: 0 0px 0px var(--color-dark-shadow);
			background: darken(var(--color-secondary), 10);
		}
	}

	p.lead-text {
		font-size: 1.25em;
	}

	@media screen and (min-width: 476px) {
		p.lead-text {
			font-size: 1.3em;
		}
	}

	@media screen and (min-width: 769px) {
		p.lead-text {
			font-size: 1.4em;
		}
	}

	@media screen and (min-width: 1023px) {
		p.lead-text {
			font-size: 1.5em;
		}
	}
`;

const GlobalStyles = () => <Global styles={globalstyles} />;

export default GlobalStyles;
