import React from "react";
import Helmet from "react-helmet";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const AboutPageStyles = css`
		display: grid;
		grid-template-columns: repeat(1fr);
		grid-gap: 1.25em;
		grid-auto-rows: minmax(100px, auto);
		padding: 1.5em 2em;

		${"" /* background-color: hsla(224, 62%, 24%, 0.24); */}

		grid-template-areas:
			"header header"
			"resume resume"
			"skills skills"
			"contact contact";

		.header {
			grid-area: header;
			h1 {
				font-size: 3em;
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
			max-width: 55ch;
		}

		.contact {
			grid-area: contact;
		}
	`,
	AboutPage = () => (
		<>
			<Helmet>
				<title>Dee Adebayo</title>
			</Helmet>
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
						<h2>Hi, I'm Adeolu,</h2>
						<p>
							I'm originally from {` `}
							<a
								href="https://www.lonelyplanet.com/nigeria/lagos"
								target="_blank"
								className="about-link"
							>
								Lagos 🇳🇬
							</a>
							{` `}but, now I live in {` `}
							<a
								href="https://www.lonelyplanet.com/usa/the-south/atlanta"
								target="_blank"
								className="about-link"
							>
								Atlanta 🍑
							</a>
							{` `}working as a freelance web developer.
						</p>
						<p>
							Since 2014, I have have been creating experiences
							for the front-end web. I enjoy building semantic,
							SEO-optimized websites that look and function
							seamlessly on anything that can access the web.
						</p>
						<p>
							While just the development part of websites is super
							fun, I like all the other pieces that go into it too
							(looking at you, SEO 💰, tone of voice 😍 and design
							systems😎).
						</p>
						<p>
							If the project involves HTML/CSS/JS, chances are
							high that I'll love working on it. Feel free to{" "}
							<Link to="#contact">contact me</Link>.
						</p>
					</div>
				</div>
				<div className="skills">
					<div className="skills__toolbox">
						<h2>Toolbox</h2>
						<p>
							HTML, CSS, JavaScript, Node, React, Gatsby, GraphQL,
							SQL, npm, JAMstack
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
		</>
	);

export default AboutPage;
