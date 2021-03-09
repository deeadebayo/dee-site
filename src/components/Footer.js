import React from "react";
import { css } from "@emotion/react";
import ContactForm from "./ContactForm";

const footerStyle = css`
		position: sticky;
		bottom: 0;
		left: 0;
		width: 100%;

		background: var(--color-secondary);
		display: grid;
		place-items: center;
		padding: 50px;
	`,
	Footer = () => (
		<footer id="contact" css={footerStyle}>
			Some text
			<ContactForm />
		</footer>
	);

export default Footer;
