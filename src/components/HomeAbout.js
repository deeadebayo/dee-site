import { css } from "@emotion/react";
import React from "react";

import "../scss/link-hover.scss";
import SplitText from "./SplitText";

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
		margin-bottom: 1rem;
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
	.hello-marquee {

		&:hover {
			color: var(--color-secondary);
		}
	}

	.name {
		background: var(--color-secondary);
		color: white;
	}
`;

const HomeAbout = () => (
	<div css={aboutStyle}>
		<div>
			<h1 className="hello-marquee">
				<SplitText initial={{ y: '100%', color: 'var(--color-secondary)' }}
					animate="visible"
					variants={{
						visible: i => ({
							y: 0,
							color: 'var(--color-text-header)',
							transition: {
								delay: i * 0.1
							},
						})
					}}>Hi, I'm Adeolu</SplitText>
			</h1>
			<p className="lead">
				I'm a front-end web developer focused on creating interactive
				and accessible web experiences
			</p>
			<p className="lead">
				<ButtonLink text="learn more" link="about" /> or{" "}
				<a href="#contact" className="about-link">
					Get in Touch
				</a>
			</p>
		</div>
	</div>
);

export default HomeAbout;
