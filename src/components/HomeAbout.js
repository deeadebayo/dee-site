import { css } from "@emotion/react";
import React from "react";
// import { StaticImage } from "gatsby-plugin-image";

// import "../scss/about-blurb.scss";
import { ButtonLink } from "./Button";

const aboutStyle = css`
	margin: 3em 0;
	padding: 1.5em 2em;
	border: 1px solid hsla(224, 62%, 24%, 0.1);
	border-radius: 5px;
	box-shadow: 0px 3px 5px hsla(224, 62%, 24%, 0.24);

	& > div {
		margin: 1.5rem 2rem;
	}

	h1 {
		font-size: 2.75em;
	}

	a.about-link {
		color: var(--color-primary);
		text-decoration-thickness: 3px;
		text-decoration-style: solid;

		&:hover {
			color: var(--color-secondary);
			width: 0%;
			transition: 0.3s ease;
		}
	}
`;

const HomeAbout = () => (
	<div css={aboutStyle}>
		<div>
			<h1>Hello Animation</h1>
			<p className="lead">
				I'm a front-end web developer focused on creating interactive
				and accessible web experiences.
			</p>
			<p className="lead">
				<ButtonLink text="More about" link="about" /> or{" "}
				<a href="#contact" className="about-link">
					say hello
				</a>
			</p>
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
