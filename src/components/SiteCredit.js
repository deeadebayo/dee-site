import React from "react";
import { css } from "@emotion/react";

const siteCreditStyle = css`
		box-sizing: border-box;
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: visible;

		background: var(--color-primary);
		display: flex;
		flex-flow: row nowrap;
		place-items: center;
		padding: 1em;
		justify-content: center;

		p {
			margin-bottom: 0;
		}
	`,
	SiteCredit = () => (
		<footer css={siteCreditStyle}>
			<p>© 2015 – Today · All Rights Reserved - Adeolu Adebayo</p>
		</footer>
	);

export default SiteCredit;
