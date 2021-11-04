import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

const projectBoxStyles = css`
		width: clamp(16rem, 90vw, 70rem);
		margin: 4em 0;
		display: grid;
		gap: 0;
		grid-template-areas:
			'title'
			'project'
			'project';
		grid-template-columns: 1fr;

		.project-box:nth-of-type(2) {
			a {
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
			}
		}

		.project-box:nth-of-type(5) {
			a {
				border-bottom-left-radius: 5px;
				border-bottom-right-radius: 5px;
			}
		}

		.project-box {
			grid-area: project;
			grid-column: span 1;
			grid-row: span 1;
			display: flex;
			width: 100%;

			&__title {
				grid-area: title;
				text-align: center;
			}

			a,
			a > img {
				overflow: hidden;
				text-decoration: none;
				border: none;
				position: relative;
			}

			&__img {
				transform: translateY(0);
				transition: transform 0.25s ease-in-out 0.01s;
				transition-delay: 0.01s;
				display: flex;
			}

			&:hover .project-box__img {
				transform: translateY(-65px);
			}

			&__detail-box {
				position: absolute;
				left: 0;
				bottom: 0;
				transform: translateY(108px);
				height: 4.5em;
				width: 100%;
				transition: transform 0.2s ease-in-out;
				display: flex;
				flex-flow: row nowrap;

				&__details {
					display: flex;
					flex-flow: row nowrap;
					flex-basis: 100%;
					position: relative;

					&--text {
						display: flex;
						flex-flow: column;
						padding: 1em;
						color: var(--color-text-black);
						${'' /* background: a color; */};
					}

					&__title {
						flex: 1;
					}

					&__description {
						flex: 1;
						margin-bottom: 0.5em;
						font-size: 0.875rem;
						line-height: 1.25rem;
					}
				}
			}

			&:hover .project-box__detail-box {
				transform: translateY(0);
			}

			&__link {
				text-decoration: none;
				overflow: hidden;
				display: flex;
			}
		}

		@media screen and (min-width: 469px) {
			.project-box {
				&__detail-box {
					height: 5.25em;
					&__details {
						&--text {
							padding: 1.3em;
						}
					}
				}
			}
		}

		@media screen and (min-width: 769px) {
			grid-template-areas:
				'title title'
				'project project'
				'project project';
			grid-template-columns: 1fr 1fr;

			.project-box:nth-of-type(2) {
				a {
					border-top-left-radius: 5px;
				}
			}

			.project-box:nth-of-type(3) {
				a {
					border-top-right-radius: 5px;
				}
			}

			.project-box:nth-of-type(4) {
				a {
					border-bottom-left-radius: 5px;
				}
			}

			.project-box:nth-of-type(5) {
				a {
					border-bottom-right-radius: 5px;
					border-bottom-left-radius: 0px;
				}
			}
			.project-box {
				&__detail-box {
					height: 5.5em;
					&__details {
						&--text {
							padding: 1.5em;
						}
					}
				}
			}
		}

		@media screen and (min-width: 1023px) {
			.project-box {
				&__detail-box {
					height: 6em;
					&__details {
						&--text {
							padding: 1.5em 1.875em;
						}
						&__description {
							font-size: 0.975rem;
						}
					}
				}
			}
		}
	`,
	ProjectBox = ({ id, title, description, link, image, alt, bg }) => (
		<motion.div className='project-box' layoutId={`project-${id}`}>
			<Link className='project-box__link' to={link}>
				<div className='project-box__img'>
					<GatsbyImage
						image={image}
						alt={alt}
						objectFit='cover'
						objectPosition
					/>
				</div>
				<span
					className='project-box__detail-box'
					css={css`
						background-color: ${bg};
					`}>
					<div className='project-box__detail-box__details'>
						<div className='project-box__detail-box__details--text'>
							<span className='project-box__detail-box__details__description'>
								{description}
							</span>
							<span className='project-box__detail-box__details__title'>
								<h2>{title}</h2>
							</span>
						</div>
						<div className='project-box__detail-box__details--icon'></div>
					</div>
				</span>
			</Link>
		</motion.div>
	)

const ProjectBoxList = ({ projectImages }) => {
	const colorPrimary = 'var(--color-primary)',
		colorSecondary = 'var(--color-secondary)',
		colorRare = 'var(--color-rare)',
		projectData = [
			{
				id: 1,
				title: 'joshmanueldrums.com',
				description: 'Website and ecommerce',
				backgroundColor: colorSecondary,
				link: '/work/jmdrums',
				image: projectImages.josh.childImageSharp.gatsbyImageData,
				alt: 'Josh project image',
			},
			{
				id: 2,
				title: 'ctkmedcenter.com',
				description: 'Website & copywriting',
				backgroundColor: colorPrimary,
				link: '/work/ctkmedcenter',
				image: projectImages.ctkmc.childImageSharp.gatsbyImageData,
				alt: 'ctmedcenter project image',
			},
			{
				id: 3,
				title: 'Title',
				description: 'Website',
				backgroundColor: colorPrimary,
				link: '/work/other',
				image: projectImages.ctkmc.childImageSharp.gatsbyImageData,
				alt: 'Josh project image',
			},
			{
				id: 4,
				title: 'Github Projects',
				description: 'Playground',
				backgroundColor: colorRare,
				link: '/work/other',
				image: projectImages.comingSoon.childImageSharp.gatsbyImageData,
				alt: 'Coming soon image',
			},
		]

	return (
		<motion.div css={projectBoxStyles}>
			<div className='project-box__title'>
				<h2>Featured Projects</h2>
			</div>
			{projectData.map(
				({ id, alt, title, description, link, image, backgroundColor }) => (
					<ProjectBox
						id={id}
						alt={alt}
						title={title}
						description={description}
						link={link}
						image={image}
						key={`hp${id}`}
						bg={backgroundColor}
					/>
				)
			)}
		</motion.div>
	)
}

export default ProjectBoxList
