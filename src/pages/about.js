import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import '../scss/link-hover.scss'
import FadeInPage from '../components-ui/FadeInPage'
import { MiniSEO } from '../components/Seo'

const contentVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
}
const titleVariants = {
	hidden: { y: -20, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: [0.17, 0.67, 0.83, 0.67],
		},
	},
}
const textContentVariants = {
	hidden: { y: -20, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: 'easeInOut',
		},
	},
}
const AboutPageStyles = css`
	display: grid;
	grid-template-columns: repeat(1fr);
	grid-gap: 1.25em;
	grid-auto-rows: minmax(100px, auto);
	padding: 1.5em 2em;
	max-width: 1500px;
	h2 {
		font-size: 1.6em;
	}

	p {
		font-size: 1.2em;
	}

	grid-template-areas:
		'header header'
		'resume resume'
		'skills skills'
		'contact contact';

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
		padding: 1.5em 1.8em;
		border: 1px solid var(--color-soft-white);
		background: var(--color-white);
		border-radius: 5px;
		box-shadow: 2.2px 2.8px 2.8px rgba(0, 0, 0, 0.02),
			5.3px 6.7px 6.7px rgba(0, 0, 0, 0.028),
			10px 12.5px 12.5px rgba(0, 0, 0, 0.035),
			17.9px 22.3px 22.3px rgba(0, 0, 0, 0.042),
			33.4px 41.8px 41.8px rgba(0, 0, 0, 0.05),
			80px 100px 100px rgba(0, 0, 0, 0.07);
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
	@media screen and (min-width: 469px) {
		padding: 2rem 2.5rem;
	}
	@media screen and (min-width: 1023px) {
		padding: 2rem 4.5rem;
	}
`
const AboutPage = () => (
	<>
		<MiniSEO
			title='About Me'
			description='Learn more about Dee and the freelance web development services he offers.'
		/>
		<FadeInPage pageName='about'>
			<motion.div
				css={AboutPageStyles}
				variants={contentVariants}
				initial='hidden'
				animate='show'
			>
				<motion.div className='header' variants={titleVariants}>
					<h1>
						full-stack developer
						<br />
						<span className='and'>&</span> web consultant
					</h1>
					{/* <p>
						description underneath. I help my clients define their
						online footprint - creating web experiences that balance
						business and user needs.
					</p> */}
				</motion.div>
				<motion.div
					className='resume'
					variants={textContentVariants}
					key='resumeText'
				>
					<div className='resume__experience'>
						<h2>Hi, my name is Adeolu!</h2>
						<p>
							I live in {` `}
							<a
								href='https://www.lonelyplanet.com/usa/the-south/atlanta'
								target='_blank'
								className='about-page'
							>
								Atlanta
							</a>
							{` `}
							<span>🍑</span> working as a freelance developer.
						</p>
						<p>
							Since 2014, I've enjoyed using modern tools to build accessible
							sites that function seamlessly on anything that can access the
							web.
						</p>
						<p>
							While just the web dev part of projects can be super fun, I like
							all the other pieces that go into it too (looking at you: SEO 😍
							and design systems 😎).
						</p>
						<p>
							If the project involves HTML/CSS/JS, chances are high that I'll
							love working on it. Have a project in mind?{' '}
							<Link to='#contact' className='about-page'>
								Contact me
							</Link>
						</p>
					</div>
				</motion.div>
				<motion.div
					className='skills'
					variants={textContentVariants}
					key='skilsText'
				>
					<div className='skills__toolbox'>
						<h2>Toolbox</h2>
						<p>
							HTML, CSS, JavaScript, Node.js, React.js, Gatsby.js, Jamstack,
							GraphQL, PostgreSQL
						</p>
					</div>
					<div className='skills__specialities'>
						<h2>Specialities</h2>
						<p>
							Responsive web design, Branding, UI/UX wireframing, Usability
							testing, Digital marketing, Analytics & SEO, Ecommerce, and all
							the things!
						</p>
					</div>
				</motion.div>
			</motion.div>
		</FadeInPage>
	</>
)

export default AboutPage
export const Head = () => <title>Dee Adebayo | About Me</title>
