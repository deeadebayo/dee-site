import React from 'react'
import Helmet from 'react-helmet'
import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import FadeInPage from '../components-ui/FadeInPage'

const SingleProjectPage = ({ data }) => {
	const { title, slug, stuff, key } = data.pageInfo
	const {
		childImageSharp: { gatsbyImageData },
	} = data.projectImage
	return (
		<>
			<Helmet>
				<title> Dee Adebayo - Projects | {title} </title>
			</Helmet>
			<motion.div layoutId={`project-${key}`}>
				<GatsbyImage
					image={gatsbyImageData}
					alt={`image for ${title} project`}
					objectFit='cover'
					objectPosition
				/>
			</motion.div>
			<motion.div>
				<h1>
					Hi, there's supposed to be a page here. Instead here's dummy text in
					my background
				</h1>
			</motion.div>
			<FadeInPage pageName='projectPage'>
				<h1>
					Hi, there's supposed to be a page here. Instead here's dummy text and
					it's in the foreground
				</h1>
			</FadeInPage>
		</>
	)
}

export default SingleProjectPage

export const query = graphql`
	query ($slug: String!, $coverImgPath: String!) {
		pageInfo: projectPage(slug: { eq: $slug }) {
			key
			title
			pageTitle
			slug
			coverImgPath
			stuff
			backgroundColor
		}
		projectImage: file(relativePath: { eq: $coverImgPath }) {
			childImageSharp {
				gatsbyImageData(
					layout: CONSTRAINED
					height: 615
					aspectRatio: 1.33
					placeholder: TRACED_SVG
				)
			}
		}
	}
`

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
