import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/react";
import { GatsbyImage } from "gatsby-plugin-image";

const projectBoxStyles = css`
		width: clamp(16rem, 90vw, 70rem);
		margin: 4em 0;
		display: grid;
		grid-template-areas:
			"title"
			"project"
			"project"
			"more-btn";

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

		@media screen and (min-width: 860px) {
			grid-template-areas:
				"title title"
				"project project"
				"project project"
				"more-btn more-btn";
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
				}
			}
		}

		.project-box {
			&:hover .project-box__img {
				transform: translateY(-65px);
			}

			&:hover .project-box__detail-box {
				transform: translateY(0);
			}

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

			&__detail-box {
				position: absolute;
				left: 0;
				bottom: 0;
				transform: translateY(108px);
				height: 108px;
				width: 100%;
				transition: transform 0.2s ease-in-out;
				display: flex;

				&__details {
					display: flex;
					flex-direction: column;
					flex-basis: 100%;
					padding: 1.5em 1.875em;
					position: relative;

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

			&__link {
				text-decoration: none;
				overflow: hidden;
				display: flex;
			}
		}
	`,
	ProjectBox = ({ title, description, link, image, alt, bg }) => (
		<div className="project-box">
			<Link className="project-box__link" to={link}>
				<div className="project-box__img">
					<GatsbyImage
						image={image}
						alt={alt}
						objectFit="cover"
						objectPosition
					/>
				</div>
				<span
					className="project-box__detail-box"
					css={css`
						background-color: ${bg};
					`}
				>
					<div className="project-box__detail-box__details">
						<span className="project-box__detail-box__details__description">
							{description}
						</span>
						<span className="project-box__detail-box__details__title">
							<h2>{title}</h2>
						</span>
					</div>
				</span>
			</Link>
		</div>
	);

export default function ProjectBoxList() {
	const data = useStaticQuery(
			graphql`
				query {
					comingSoon: file(
						relativePath: { eq: "work/work__coming-soon.jpg" }
					) {
						childImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								placeholder: TRACED_SVG
								height: 562
								aspectRatio: 1.33
							)
						}
					}
					josh: file(
						relativePath: { eq: "work/work__jmdrums__cover.jpg" }
					) {
						childImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								placeholder: TRACED_SVG
								height: 562
								aspectRatio: 1.33
							)
						}
					}
					ctkmc: file(
						relativePath: {
							eq: "work/work__ctkmc__tablet-and-phone.png"
						}
					) {
						childImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								placeholder: TRACED_SVG
								height: 562
								aspectRatio: 1.33
							)
						}
					}
				}
			`
		),
		colorPrimary = "hsl(358, 100%, 68%)",
		colorSecondary = "hsl(175, 100%, 33%)",
		colorAccent = "hsl(16, 97%, 58%)",
		colorRare = "hsl(39, 98%, 58%)",
		projectData = [
			{
				id: 1,
				title: "joshmanueldrums.com",
				description: "Website and ecommerce",
				backgroundColor: colorPrimary,
				link: "/work/jmdrums",
				image: data.josh.childImageSharp.gatsbyImageData,
				alt: "Josh project image",
			},
			{
				id: 2,
				title: "ctkmedcenter.com",
				description: "Website & copywriting",
				backgroundColor: colorAccent,
				link: "/work/ctkmedcenter",
				image: data.ctkmc.childImageSharp.gatsbyImageData,
				alt: "ctmedcenter project image",
			},
			{
				id: 3,
				title: "Title",
				description: "Website",
				backgroundColor: colorRare,
				link: "/work/",
				image: data.ctkmc.childImageSharp.gatsbyImageData,
				alt: "Josh project image",
			},
			{
				id: 4,
				title: "Github Projects",
				description: "Playground",
				backgroundColor: colorPrimary,
				link: "/work/",
				image: data.comingSoon.childImageSharp.gatsbyImageData,
				alt: "Coming soon image",
			},
		];

	return (
		<div css={projectBoxStyles}>
			<div className="project-box__title">
				<h2>Featured Projects</h2>
			</div>
			{projectData.map((project) => (
				<ProjectBox
					alt={project.alt}
					title={project.title}
					description={project.description}
					link={project.link}
					image={project.image}
					key={`hp${project.id}`}
					bg={project.backgroundColor}
				/>
			))}
		</div>
	);
}
