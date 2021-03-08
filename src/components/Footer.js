import React from "react";
import { css } from "@emotion/react";

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
		</footer>
	);

export default Footer;
