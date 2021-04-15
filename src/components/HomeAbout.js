import { css } from "@emotion/react";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../scss/about-blurb.scss";
import Button, { ButtonLink } from "./Button";

const aboutStyle = css`
	margin: 3em 0;
	padding: 1.5em 2em;
	border: 1px solid hsla(224, 62%, 24%, 0.1);
	border-radius: 5px;
	box-shadow: 0px 3px 5px hsla(224, 62%, 24%, 0.24);

	& > div {
		margin: 1.5rem 2rem;
	}
`;

const HomeAbout = () => (
	<div css={aboutStyle}>
		<div>
			<span>
				<p>Hello Animation Here Inline witth next line</p>
				<p className="lead">I'm Adeolu</p>
			</span>
			<p>
				I'm a front-end web developer focused on creating interactive
				and accessible web experiences. Currently, I'm freelancing
				____________
			</p>
			<p>
				<a href="#footer" className="about-link">
					Say hello
				</a>
				, or keep looking around.
			</p>
			<ButtonLink text="More about" link="about" />
		</div>
	</div>
);

export default HomeAbout;

// .hello-animation
// 	ul.hello-animation__hellos
// 		li Hello
// 		li Hi
// 		li Hola
// 		li Heya
// 		li Hiya
// 		li What's up
// 		li Hey there
// 		li Whoa
