import React from "react";
import { css } from "@emotion/react";

import "./../scss/link-hover.scss";

const banner = css`
		top: 0;
		left: 0;
		position: fixed;
		width: 100%;

		align-items: center;
		display: flex;
		justify-content: center;

		.banner__content {
			flex: 1;
		}
	`,
	githubLink = `https://github.com/deeadebayo/dee-site`;

export const Banner = () => {
	return (
		<div className="banner" css={banner}>
			<div className="banner__content">
				Site is very experimental right now - follow the progress on{" "}
				<a href={githubLink} className="navbar-link">
					GitHub
				</a>
			</div>
		</div>
	);
};
