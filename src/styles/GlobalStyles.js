import React from 'react'
import { Global, css } from '@emotion/react'

import 'normalize.css'

const globalstyles = css`
	:root {
		// my primary colors
		--base-red: 0, 100%;
		--palette-red-20: var(--base-red), 25%;
		--palette-red-40: var(--base-red), 41%;
		--palette-red-60: var(--base-red), 56%;
		--palette-red-70: var(--base-red), 72%;

		--base-blue: 174, 41%;
		--palette-blue-10: 174, 100%, 72%;
		--palette-blue-30: 174, 65%, 39%;
		--palette-blue-50: var(--base-blue), 28%;
		--palette-blue-60: 174, 66%, 24%;
		--palette-blue-70: 174, 90%, 19%;
		--palette-blue-80: 174, 100%, 15%;

		--base-yellow: 38, 73%;
		--palette-yellow-10: 45, 100%, 73%;
		--palette-yellow-20: 38, 100%, 69%;
		--palette-yellow-50: var(--base-yellow), 66%;
		--palette-yellow-70: 38, 98%, 52%;
		--palette-yellow-80: 38, 100%, 24%;

		//my grays
		--base-gray: 0, 3%;
		--palette-gray-10: var(--base-gray), 5%;
		--palette-gray-10: var(--base-gray), 15%;
		--palette-gray-40: var(--base-gray), 46%;
		--palette-gray-90: var(--base-gray), 94%;
		--palette-gray-100: var(--base-gray), 100%;

		// my goTo colors
		--color-primary: hsla(var(--palette-red-70), 100%);
		--color-secondary: hsla(var(--palette-blue-30), 100%);
		--color-rare: hsla(var(--palette-yellow-50), 100%);

		--color-text-black: hsl(0, 0%, 17%);
		--color-text-header: hsla(0, 0%, 0%, 0.8);
		--color-text_default: hsl(0, 0%, 28%);
		--color-dark: hsl(0, 0%, 28%);
		--color-dark-slate: hsl(0, 0%, 13.3%);
		--color-dark-shadow: hsla(224, 62%, 24%, 0.24);
		--color-gray_pale: hsl(51, 12%, 77%);
		--color-gray_lighter: hsl(0, 0%, 85%);
		--color-soft-white: hsl(210, 36%, 96%);
		--color-transparent: hsla(0, 0%, 0, 1);

		--color-page_neutral_background: white;
		--color-behind_page_background: linear-gradient(
			to right,
			#f78ca0 0%,
			#f9748f 19%,
			#fd868c 60%,
			#fe9a8b 100%
		);
		--color-background: lightgray;

		border-top: 4px solid var(--color-secondary);

		scroll-behavior: smooth;

		@media screen and (prefers-reduced-motion: reduce) {
			scroll-behavior: auto;
		}
	}

	background-color: hsla(var(--palette-gray-90));

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
			background: hsla(var(--palette-blue-70), 100%);
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
`

const GlobalStyles = () => <Global styles={globalstyles} />

export default GlobalStyles
