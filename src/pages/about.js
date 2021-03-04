import React from "react";
import Helmet from "react-helmet";
import { css } from "@emotion/react";

const AboutPageStyles = css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: minmax(100px, auto);

		grid-template-areas:
			"years prose"
			". prose";

		.years {
			grid-area: years;
		}

		.skills {
			grid-area: skills;
		}

		.prose {
			grid-area: prose;
		}
	`,
	AboutPage = () => (
		<>
			<Helmet>
				<title>Dee Adebayo</title>
			</Helmet>
			<div css={AboutPageStyles}>
				<div className="years">
					<p>
						left top box with the years 2014-2020. Maybe have the
						bottom year stay fix to top of screen on scroll
					</p>
				</div>
				{/* <div className="skills">bottom left box with skills in it</div> */}
				<div className="prose">
					<p>Actual ABout us content</p>contact - use this form<p></p>
					<p>Socials</p>
					<p>credits</p>
				</div>
			</div>
		</>
	);

export default AboutPage;

// extends pug-templates/_layout__normal

// append startScript
//     - var pageTitle = "About";
//     - var keywordContent = "Some SEO stuff"
//     - var pageDescContent = "Here's a page description"
//     - var page = ".page-wrapper__template__content--about";

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
//     section#specialties
//         h2 Specialities
//         p more leadin stuff - I'm always striving to add more strings to my bow, here's where I absolutely can offer to you
//         ul
//             li Branding
//             li Copywriting
//             li Business Analysis ----
//             li SEO marketing - rename
//             li Response website development
//         ul
//             li Put them all together and you have a pretty nifty website, adherring to current best practices and --working well-- on devices of all sizes.
//     //- .section__specialties The need for better naming. This is a list item that I will continously reuse
//     .timeline-wrapper

// block endScript
//     //- script footer script?
//     //- timeline script for sure
