import React from 'react'
import Helmet from 'react-helmet'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import FadeInPage from '../components-ui/FadeInPage'

const projectPageContent = css`
	display: flex;
	flex-flow: column nowrap;

	.wrapper__hero {
		display: flex;
		flex-flow: column nowrap;
		&__title {
			display: flex;
			align-items: center;
			padding: 3rem 0;
			h1 {
				font-size: 4rem;
				font-weight: 500;
			}
			h4 {
				font-size: 1.25rem;
				font-weight: 500;
				margin-bottom: 0;
			}
		}

		&__image {
		}
	}

	.wrapper__content {
		margin-top: 4em;
		display: flex;
		flex-flow: column nowrap;

		.lead {
			font-size: 1.75rem;
		}

		&__company {
			margin: 0;
			border-bottom: 1px solid var(--color-gray_pale);
			padding-bottom: 2em;
		}

		&__metadata {
			display: flex;
			flex-flow: row nowrap;
			gap: 5px;
			flex: 0 1 1;
			margin-top: 2em;
			align-items: flex-start;
			justify-content: flex-start;

			div {
				align-items: flex-start;
				flex-basis: 50%;
			}

			h5 {
				font-size: 1rem;
				font-weight: 400;
				color: var(--color-gray_pale);
				margin-bottom: 0.5rem;
			}

			p {
				font-weight: 500;
			}
		}

		&__details {
			display: flex;
			flex-flow: column nowrap;
			margin: 4em 0;
			padding-bottom: 2em;
			border-bottom: 1px solid var(--color-gray_pale);

			&__client-quote {
				text-decoration: underline;
				align-self: center;
			}

			&__section {
				margin-top: 3em;
				display: flex;
				flex-flow: column nowrap;
			}

			h4 {
				font-size: 1.25rem;
				font-weight: 500;
			}
		}
	}
	@media screen and (min-width: 1200px) {
		.wrapper__hero {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: repeat(4, 1fr);
			&__title {
				grid-row: 1/5;
				grid-column: 1/9;
				z-index: 3;
				display: flex;
				align-items: center;
			}

			&__image {
				grid-row: 1/5;
				grid-column: 6/13;
			}
		}
		.wrapper__content {
			&__details {
				&__section {
					display: flex;
					justify-content: space-between;
					flex-flow: row nowrap;
					&__heading {
						display: flex;
						flex-basis: 35%;
					}
					&__paragraph {
						display: flex;
						flex-basis: 65%;
					}
					& h4 {
						display: flex;
						justify-content: start;
					}
				}
			}
		}
	}
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
	const {
		key,
		slug,
		title,
		pageTitle,
		coverImgPath,
		coverImgAlt,
		backgroundColor,
		projectDate,
		projectLink,
		clientInfo,
		category,
		projectObjective,
		myRole,
		tools,
		myProcess,
		results,
	} = pageInfo

	const {
		childImageSharp: { gatsbyImageData },
	} = projectImage

	console.log(pageInfo)
	return (
		<>
			<Helmet>
				<title>Dee Adebayo - Projects | {pageTitle}</title>
			</Helmet>
			<FadeInPage pageName='projectPage'>
				<div css={projectPageContent}>
					<div className='wrapper__hero'>
						<div className='wrapper__hero__title'>
							<motion.div>
								<motion.h4>{category}</motion.h4>
								<motion.h1>{title}</motion.h1>
							</motion.div>
						</div>
						<div className='wrapper__hero__image'>
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
									alt={coverImgAlt}
									objectFit='cover'
									objectPosition
								/>
							</motion.div>
						</div>
					</div>
					<div className='wrapper__content'>
						<section className='wrapper__content__company'>
							<p className='lead'>
								This text gives a snippet about who the company is
							</p>
							<div className='wrapper__content__metadata'>
								<div>
									<h5>Project date</h5>
									<p>{projectDate}</p>
								</div>
								<div>
									<h5>Site link</h5>
									<p>{projectLink}</p>
								</div>
							</div>
						</section>
						<section className='wrapper__content__details'>
							<p className='wrapper__content__details__client-quote'>
								Random quote from client
							</p>
							<div className='wrapper__content__details__section'>
								<div className='wrapper__content__details__section__heading'>
									<h4>Task</h4>
								</div>
								<div className='wrapper__content__details__section__paragraph'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse vulputate enim ex, at bibendum mauris faucibus
										viverra.
									</p>
								</div>
							</div>
							<div className='wrapper__content__details__section'>
								<div className='wrapper__content__details__section__heading'>
									<h4>Goal</h4>
								</div>
								<div className='wrapper__content__details__section__paragraph'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse vulputate enim ex, at bibendum mauris faucibus
										viverra.
									</p>
								</div>
							</div>
							<div className='wrapper__content__details__section'>
								<div className='wrapper__content__details__section__heading'>
									<h4>Tools</h4>
								</div>
								<div className='wrapper__content__details__section__paragraph'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse vulputate enim ex, at bibendum mauris faucibus
										viverra.
									</p>
								</div>
							</div>
							<div className='wrapper__content__details__section'>
								<div className='wrapper__content__details__section__heading'>
									<h4>Process</h4>
								</div>
								<div className='wrapper__content__details__section__paragraph'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse vulputate enim ex, at bibendum mauris faucibus
										viverra.
									</p>
								</div>
							</div>
							<div className='wrapper__content__details__section'>
								<div className='wrapper__content__details__section__heading'>
									<h4>Result</h4>
								</div>
								<div className='wrapper__content__details__section__paragraph'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse vulputate enim ex, at bibendum mauris faucibus
										viverra.
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</FadeInPage>
		</>
	)
}

export default SingleProjectPage

export const query = graphql`
	query ($slug: String!, $coverImgPath: String!) {
		pageInfo: projectPage(slug: { eq: $slug }) {
			key
			slug
			title
			pageTitle
			coverImgPath
			coverImgAlt
			backgroundColor
			projectDate
			projectLink
			clientInfo
			category
			projectObjective
			myRole
			tools
			myProcess
			results
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
