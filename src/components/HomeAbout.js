import { css } from "@emotion/react";
import React from "react";
// import Splitting from "splitting";

import "../scss/link-hover.scss";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";

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
	.hello-marquee {
		${"" /* width: 100%; */}
		overflow: hidden;

		&__text-content {
			position: relative;
			display: inline-block;
			padding-top: .2em;
			padding-right: 0.05em;
			padding-bottom: .1em;
			overflow: hidden;

			${'' /* &:hover {
				animation: marqueeEffect 3s linear 1;
				&:first-of-type {
					color: var(--color-secondary);
				}

				h1:nth-of-type(2n) {
					color: var(--color-rare);
				}
			} */}
		}

		.letter {
			transform-origin: 0 100%;
			display: inline-block;
			line-height: 1em;
		}
	}

	.name {
		background: var(--color-secondary);
		color: white;
	}

	@keyframes marqueeEffect {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-100%);
		}
	}
`;

// const letterArray = ()

const HomeAbout = () => (
	<div css={aboutStyle}>
		<div>
			<h1 className="hello-marquee">
				<span data-splitting className="hello-marquee__text-content">
					<span className="letters">Hi, I'm Adeolu</span>
				</span>
			</h1>
			{/* <div className="hello-marquee">
				<span className="hello-marquee__content">
					<h1>Hello</h1>
					<h1>Hi</h1>
					<h1>Heya</h1>
					<h1>Hiya</h1>
					<h1>Hey there</h1>
					<h1>What's up</h1>
					<h1>Whoaaa</h1>
				</span>
			</div> */}
			<p className="lead">
				I'm a front-end web developer focused on creating interactive
				and accessible web experiences
			</p>
			<p className="lead">
				<ButtonLink text="more words" link="about" /> or{" "}
				<a href="#contact" className="about-link">
					Get in Touch
				</a>
			</p>
		</div>
	</div>
);

export default HomeAbout;

// .hello-animation
// 	ul.hello-animation__hellos
