import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import FadeInPage from '../components-ui/FadeInPage'

const SingleProjectPage = ({ data: { pageInfo } }) => {
	const { title, slug, stuff } = pageInfo
	return (
		<>
			<Helmet>
				<title> Dee Adebayo - Projects | {title} </title>
			</Helmet>
			<motion.div>
				<h1>
					Hi, there's supposed to be a page here. Instead here's dummy text:{' '}
					{stuff}
				</h1>
			</motion.div>
			<FadeInPage pageName='yes'>
				<h1>
					Hi, there's supposed to be a page here. Instead here's dummy text:{' '}
					{stuff}
				</h1>

				<motion.svg
					className='transition'
					viewBox='0 0 100 100'
					preserveAspectRatio='none'
				>
					<path
						className='path'
						stroke='#000'
						strokeWidth='2px'
						dur='10s'
						vectorEffect='non-scaling-stroke'
						d='M 0 100 V 100 Q 50 100 100 100 V 100 z'
					/>
				</motion.svg>
			</FadeInPage>
		</>
	)
}

export default SingleProjectPage

export const query = graphql`
	query ($slug: String!) {
		pageInfo: projectPage(slug: { eq: $slug }) {
			stuff
			slug
			title
		}
	}
`

// import { css } from '@emotion/react'
// import React from 'react'
// import LayoutProject from '../../components/LayoutProject'
// import { Helmet } from 'react-helmet'
// import { Link } from 'gatsby'
// import { motion } from 'framer-motion'

// import '../../scss/link-hover.scss'
// import FadeInPage from '../../components-ui/FadeInPage'

// const content = {
// 	hidden: { opacity: 0 },
// 	show: {
// 		opacity: 1,
// 		transition: {
// 			staggerChildren: 0.3,
// 			delayChildre: 2.8,
// 		},
// 	},
// }
// const title = {
// 	hidden: { y: -20, opacity: 0 },
// 	show: {
// 		y: 0,
// 		opacity: 1,
// 		transition: {
// 			duration: 1,
// 			ease: [0.17, 0.67, 0.83, 0.67],
// 		},
// 	},
// }
// const textContent = {
// 	hidden: { y: -20, opacity: 0 },
// 	show: {
// 		y: 0,
// 		opacity: 1,
// 		transition: {
// 			duration: 0.7,
// 			ease: 'easeInOut',
// 		},
// 	},
// }
// const CtkmedPageStyles = css`
// 		display: grid;
// 		grid-template-columns: repeat(1fr);
// 		grid-gap: 1.25em;
// 		grid-auto-rows: minmax(100px, auto);
// 		padding: 1.5em 2em;
// 		h2 {
// 			font-size: 1.6em;
// 		}

// 		p {
// 			font-size: 1.2em;
// 		}

// 		${'' /* background-color: hsla(224, 62%, 24%, 0.24); */}

// 		grid-template-areas:
// 			"header header"
// 			"resume resume"
// 			"skills skills"
// 			"contact contact";

// 		.header {
// 			grid-area: header;
// 			h1 {
// 				font-size: 2.75em;
// 				.and {
// 					color: var(--color-primary);
// 				}
// 			}
// 		}

// 		.skills {
// 			grid-area: skills;
// 			padding: 1.5em 2em;
// 			border: 1px solid hsla(224, 62%, 24%, 0.1);
// 			border-radius: 5px;
// 			box-shadow: 0px 3px 5px hsla(224, 62%, 24%, 0.24);
// 		}

// 		.resume {
// 			grid-area: resume;
// 			margin: 0 auto;
// 			padding: 1em 1em;
// 			max-width: 58ch;
// 			p span {
// 				color: var(--color-primary);
// 			}
// 		}

// 		.contact {
// 			grid-area: contact;
// 		}
// 	`,
// 	CtkmedPage = () => (
// 		<>
// 			<Helmet>
// 				<title>ctkmedcenter.com | Projects - Dee Adebayo</title>
// 			</Helmet>
// 			<LayoutProject>
// 				<h1>Hi, this is layout</h1>
// 			</LayoutProject>
// 		</>
// 	)

// export default CtkmedPage
