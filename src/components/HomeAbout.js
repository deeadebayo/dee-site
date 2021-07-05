import React from "react";
import { css } from "@emotion/react";

import "../scss/link-hover.scss";
import AnimatedHello from "./AnimatedHello";
import { ButtonLink } from "./Button";

const aboutStyle = css`
	min-width: 60%;
	margin: 3rem 0.5rem;
	padding: 1.5em 2em;
	border: 1px solid var(--color-dark-shadow);
	border-radius: 5px;
	box-shadow: 0px 3px 5px var(--color-dark-shadow);

	.wrapper__about {
		display: flex;
		flex-flow: column wrap;
		align-content: center;
	}

	a.about__link {
		color: var(--color-primary);
		text-decoration-thickness: 3px;
		text-decoration-style: solid;

		&:hover {
			color: var(--color-secondary);
			width: 0%;
			transition: 0.3s ease;
		}
	}

	.about__title {
		font-size: 2.75em;
		margin-bottom: 0.5rem;
		text-align: center;
		&:hover {
			color: var(--color-secondary);
		}
	}

	.isCentered {
		text-align: center;
	}

	.about__lead-text {
		max-width: 38ch;
	}

	.about__learn-more {
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
	}

	@media screen and (min-width: 476px) {
		margin: 3rem 1rem;
		.about__learn-more {
			flex-flow: row nowrap;
			.about__lead-text {
				margin-bottom: 0.5rem;
				text-align: center;
			}
		}
	}

	@media screen and (min-width: 769px) {
		margin: 3rem 1.5rem;
		.about__lead-text {
			max-width: 48ch;
		}
	}

	@media screen and (min-width: 1025px) {
		margin: 3rem 2rem;

		.wrapper__about {
			padding: 0.5rem 2rem;
		}

		.about__title {
			text-align: left;
		}

		.isCentered {
			text-align: left;
		}
		.about__lead-text {
			max-width: 50ch;
		}
		.about__learn-more {
			justify-content: flex-start;
		}
	}
`;

const HomeAbout = () => (
	<div css={aboutStyle}>
		<div className="wrapper__about">
			<h1 className="about__title">
				<AnimatedHello
					whileHover={{ color: "var(--color-secondary)" }}
					initial={{ y: "100%", color: "var(--color-secondary)" }}
					animate="visible"
					variants={{
						visible: (i) => ({
							y: 0,
							color: "var(--color-text-header)",
							transition: {
								delay: i * 0.1,
							},
						}),
					}}
				>
					Hi, I'm Adeolu
				</AnimatedHello>
			</h1>
			<p className="lead-text about__lead-text isCentered">
				I'm a front-end developer with a soft spot for UX/UI. I'm
				focused on creating interactive and accessible web experiences
			</p>
			<div className="about__learn-more">
				<ButtonLink text="Learn more" link="about" />
				<p className="lead-text about__lead-text">
					<a href="#contact" className="about-link about__link">
						Get in touch
					</a>
				</p>
			</div>
		</div>
	</div>
);

export default HomeAbout;
