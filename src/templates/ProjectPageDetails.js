import React from 'react'
import Helmet from 'react-helmet'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import FadeInPage from '../components-ui/FadeInPage'

const projectPageContent = css`
	display: grid;
`

const projectImageVariant = {
	hidden: { opacity: 0, y: 300 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1.6,
		},
	},
}
const SingleProjectPage = ({ data: { pageInfo, projectImage } }) => {
	const { title, slug, stuff, key } = pageInfo
	const {
		childImageSharp: { gatsbyImageData },
	} = projectImage
	return (
		<>
			<Helmet>
				<title> Dee Adebayo - Projects | {title} </title>
			</Helmet>
			<div css={projectPageContent}>
				<div className='imageWrapper'>
					<motion.div
						layoutId={`project-${key}`}
						animate={{
							opacity: 1,
							y: 0,
							transition: { duration: 1.6, ease: [0.6, 0.01, -0.05, 0.95] },
						}}
						layout
					>
						<GatsbyImage
							image={gatsbyImageData}
							alt={`image for ${title} project`}
							objectFit='cover'
							objectPosition
						/>
					</motion.div>
				</div>
				<div className='contentWrapper'>
					<motion.div>
						<h1>
							Writeups coming soon : Hi, there's supposed to be a page here.
							Instead here's dummy text in my background.
						</h1>
						<h1>Page title container</h1>
					</motion.div>
					<FadeInPage pageName='projectPage'>
						<h1>
							Hi, there's supposed to be a page here. Instead here's dummy text
							and it's in the foreground
						</h1>
						<p>Brief synopsis of project</p>
					</FadeInPage>
				</div>
			</div>
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
					##height: 615
					width: 1330
					aspectRatio: 1.33
					##placeholder: TRACED_SVG
					formats: [AUTO, WEBP]
				)
			}
		}
	}
`
