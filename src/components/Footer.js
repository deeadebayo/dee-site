import React from "react";
import { css } from "@emotion/react";
import ContactForm from "./ContactForm";
import SiteCredit from "./SiteCredit";

const contactFooterStyle = css`
		box-sizing: border-box;
		position: sticky;
		left: 0;
		width: 100%;
		overflow: hidden;
		z-index: 2;

		background: var(--color-secondary);
		display: grid;
		place-items: center;
		padding: 2em 1.2em 1em;

		* {
			box-sizing: border-box;
		}

		&::after {
			content: " ";
			display: block;
			background: blue;
			height: 100px;
			margin: -100px 0 0;
		}

		@media screen and (min-width: 476px) {
		}

		@media screen and (min-width: 769px) {
			padding: 3em 1.5em 2em;
		}

		@media screen and (min-width: 1023px) {
			padding: 3em 2em 2em;
		}
	`,
	Footer = () => (
		<footer>
			<div css={contactFooterStyle}>
				<ContactForm />
			</div>
			<SiteCredit />
		</footer>
	);

export default Footer;
