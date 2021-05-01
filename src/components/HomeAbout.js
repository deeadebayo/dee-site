import { css } from "@emotion/react";
import React from "react";

import "../scss/link-hover.scss";
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
		height: 100px;
		overflow: hidden;

		&__content:hover {
			${"" /* make this only happen on big devices */}
			animation: marqueeEffect 3s linear 1;
			&:first-of-type {
				color: var(--color-secondary);
			}

			h1:nth-of-type(2n) {
				color: var(--color-rare);
			}
		}
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

const HomeAbout = () => (
	<div css={aboutStyle}>
		<div>
			<div className="hello-marquee">
				<div className="hello-marquee__content">
					<h1>Hello</h1>
					<h1>Hi</h1>
					<h1>Heya</h1>
					<h1>Hiya</h1>
					<h1>Hey there</h1>
					<h1>What's up</h1>
					<h1>Whoaaa</h1>
				</div>
			</div>

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
