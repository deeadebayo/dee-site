import { css } from "@emotion/react";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../scss/about-blurb.scss";

const aboutStyle = css`
	margin: 3em 0;
	padding: 1.5em 2em;
	border: 1px solid hsla(224, 62%, 24%, 0.1);
	border-radius: 5px;
	box-shadow: 0px 3px 5px hsla(224, 62%, 24%, 0.24);

	div {
		margin: 1.5rem 2rem;
	}
`;

const HomeAbout = () => (
	<div css={aboutStyle}>
		<div>
			<p>Hello Animation Here</p>
			<p className="lead">I'm Adeolu</p>
			<p>
				I'm a front-end web developer focused on creating interactive
				and functional web experiences
			</p>
			<p>
				I'm originally from
				<a
					href="https://www.lonelyplanet.com/nigeria/lagos"
					target="_blank"
					className="about-link"
				>
					Lagos
					{/* <StaticImage
						className="emoji"
						src="../images/emoji__ng-flag.png"
						alt="Nigerian flag emoji"
					/> */}
				</a>
				but reside in
				<a
					href="https://www.lonelyplanet.com/usa/the-south/atlanta"
					target="_blank"
					className="about-link"
				>
					Atlanta
					{/* <StaticImage
						src="../images/emoji__peach.png"
						alt="peach emoji"
						className="emoji"
					/> */}
				</a>
				building static websites for small businesses.
			</p>
			<p>
				<a href="#footer" className="about-link">
					Say hello
				</a>
				, or keep looking around.
			</p>
			<p>About me button that's really a div</p>
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
