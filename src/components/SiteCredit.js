import React from "react";
import { css } from "@emotion/react";

const siteCreditStyle = css`
		box-sizing: border-box;
		position: sticky;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: visible;
		z-index: 0;

		background: var(--color-secondary);
		display: flex;
		flex-flow: row nowrap;
		place-items: center;
		padding: 1em;
		justify-content: center;

		p {
			margin-bottom: 0;
			text-align: center;
			color: var(--color-soft-white);
		}
	`,
	SiteCredit = () => (
		<div css={siteCreditStyle}>
			<p>Copyright © 2021 Dee Adebayo. All rights reserved.</p>
		</div>
	);

export default SiteCredit;
