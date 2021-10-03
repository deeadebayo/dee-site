import React from "react";
import Helmet from "react-helmet";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

import "../scss/link-hover.scss";
import FadeInPage from "../components-ui/FadeInPage";

const AboutPageStyles = css`
		display: grid;
		grid-template-columns: repeat(1fr);
		grid-gap: 1.25em;
		grid-auto-rows: minmax(100px, auto);
		padding: 1.5em 2em;
		h2 {
			font-size: 1.6em;
		}

		p {
			font-size: 1.2em;
		}

		${"" /* background-color: hsla(224, 62%, 24%, 0.24); */}

		grid-template-areas:
			"header header"
			"resume resume"
			"skills skills"
			"contact contact";

		.header {
			grid-area: header;
			h1 {
				font-size: 2.75em;
				.and {
					color: var(--color-primary);
				}
			}
		}

		.skills {
			grid-area: skills;
			padding: 1.5em 2em;
			border: 1px solid hsla(224, 62%, 24%, 0.1);
			border-radius: 5px;
			box-shadow: 0px 3px 5px hsla(224, 62%, 24%, 0.24);
		}

		.resume {
			grid-area: resume;
			margin: 0 auto;
			padding: 1em 1em;
			max-width: 58ch;
			p span {
				color: var(--color-primary);
			}
		}

		.contact {
			grid-area: contact;
		}
	`,
	AboutPage = () => (
		<>
			<Helmet>
				<title>About - Dee Adebayo</title>
			</Helmet>
			<FadeInPage pageName='about'>
				<div css={AboutPageStyles}>
					<div className="header">
						<h1>
							front-end developer
							<br />
							<span className="and">&</span> web consultant
						</h1>
						{/* <p>
						description underneath. I help my clients define their
						online footprint - creating web experiences that balance
						business and user needs.
					</p> */}
					</div>

					<div className="resume">
						<div className="resume__experience">
							<h2>Hi, I'm Adeolu!</h2>
							<p>
								I live in {` `}
								<a
									href="https://www.lonelyplanet.com/usa/the-south/atlanta"
									target="_blank"
									className="about-page"
								>
									Atlanta
								</a>
								{` `}
								<span>🍑</span> working as a freelance developer.
							</p>
							<p>
								Since 2014, I've enjoyed building accessible
								websites that function seamlessly on anything that
								can access the web.
							</p>
							<p>
								While just the web dev part of projects can be super
								fun, I like all the other pieces that go into it too
								(looking at you: SEO 😍 and design systems 😎).
							</p>
							<p>
								If the project involves HTML/CSS/JS, chances are
								high that I'll love working on it. Have a project in
								mind?{" "}
								<Link to="#contact" className="about-page">
									Contact me
								</Link>
							</p>
						</div>
					</div>
					<div className="skills">
						<div className="skills__toolbox">
							<h2>Toolbox</h2>
							<p>
								HTML, CSS, JavaScript, Node, React, Gatsby,
								JAMstack, GraphQL, SQL
							</p>
						</div>
						<div className="skills__specialities">
							<h2>Specialities</h2>
							<p>
								Responsive web design, Branding, UI/UX wireframing,
								Usability testing, Digital marketing, Analytics &
								SEO, Ecommerce, all the things
							</p>
						</div>
					</div>
				</div>
			</FadeInPage>
		</>
	);

export default AboutPage;
