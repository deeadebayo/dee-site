import React from "react";
import Helmet from "react-helmet";
import { css } from "@emotion/react";

const AboutPageStyles = css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: minmax(100px, auto);

		grid-template-areas:
			"header header"
			"years resume"
			". resume"
			"contact contact";

		.header {
			grid-area: header;
		}

		.years {
			grid-area: years;
		}

		.skills {
			grid-area: skills;
		}

		.resume {
			grid-area: resume;
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
					<p>
						some minor all caps text, maybe a breadcrumb component
					</p>
					<h1>
						I'm a front end developer and "big picture thinker" who-
						*tinkers* and *another fun work buzzy word*.
					</h1>
					<p>
						description underneath. I work with small businesses to
						define their online footprint - creating web experiences
						that balance business and user needs. I excel at taking
						apart complex task and delivering results in an
						informative way
					</p>
				</div>
				<div className="years">
					<p>
						left top box with the years 2014-2020. Maybe have the
						bottom year stay fix to top of screen on scroll
					</p>
				</div>
				<div className="resume">
					<div className="resume__experience">
						<h2>My Experience, some paragraph text, word stuff</h2>
						<p>
							Since 2014, I have have been creating experiences
							for the front-end web. I specialize in building
							SEO-optimized websites that look and function
							seamlessly on anything that can access the web.
							While just the development part of websites is super
							fun, I like all the other pieces that go into it as
							well (looking at you, tone of voice 😍 and design
							systems😎).
						</p>
					</div>
					<div className="resume__toolbox">
						<h2>Toolbox</h2>
						<p>Software stuff</p>
					</div>
					<div className="resume__skills">
						<h2>Skills</h2>
						<p>
							Branding Copywriting Business Analysis ---- SEO
							marketing - rename Response website development
						</p>
					</div>
				</div>
				<div className="contact">
					Contact me component with social links- If the project
					involves HTML/CSS/JS, chances are I'm going to love working
					on it. Say hi, let's start a conversation!
				</div>
			</div>
		</>
	);

export default AboutPage;
// block content
//     section.container
//         // make a header with only work, about, contact. Hide inspiration in a link after whole screen looks like a gameboy
//         .page-title
//             h2 About Me
//             p https://www.lonelyplanet.com/nigeria/lagos
//             p Something of a lead in
//             p actual text
//             p I'm an Atlanta-based front-end developer with a passion for interactive design and technology. I help businesses reach their goals faster by freeing them to work on the stuff that matters. Most of the time, this happens from
//             p I'm a developer, a digital marketer, an introvert, and a dreamer.
//             p I love _____ and _____ with the occasional habits and playing computer games and dancing terribly.
//             p with a cusiness background, I conside myself a creative web developer, standing in the sweet spot where design and code intercept
//             p Ever since I graduated in 2014, I've been using multidisciplinary background to assist Atlanta and online-based businesses. I specialize in creating high-SEO ranked, interactive websites using current (and best) design, marketing, and compliance standards.
//             p I believe putting the client and their audience at the heart of any project is the key to delivering thoughtful and lasting solutions.
//         ul
//
