import React from "react";
import { css } from "@emotion/react";
import ContactForm from "./ContactForm";

const footerStyle = css`
		box-sizing: border-box;
		position: sticky;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;

		background: var(--color-secondary);
		display: grid;
		place-items: center;
		padding: 50px;

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
	`,
	Footer = () => (
		<footer css={footerStyle}>
			<ContactForm />
		</footer>
	);

export default Footer;
