import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/react";
import { GatsbyImage } from "gatsby-plugin-image";

const projectBoxStyles = css`
		width: clamp(16rem, 90vw, 70rem);
		margin: 4em 0;
		display: grid;
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

				&__details {
					display: block;
					padding: 1.6875rem 9.375rem 1.875rem 1.875rem;
					position: relative;

					&__title {
					}

					&__subtitle {
					}

					&__icon-section {
						&__icon {
						}
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
	ProjectBox = ({ title, subtitle, link, image, alt, bg }) => (
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
					<span className="project-box__detail-box__details">
						<span className="project-box__detail-box__details__title">
							{title}
						</span>
						<span className="project-box__detail-box__details__subtitle">
							{subtitle}
						</span>
						<span className="project-box__detail-box__details__icon-section">
							<span className="project-box__detail-box__details__icon-section__icon"></span>
						</span>
					</span>
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
				title: "Josh",
				subtitle: "Some sub-text",
				backgroundColor: colorPrimary,
				link: "/work/jmdrums",
				image: data.josh.childImageSharp.gatsbyImageData,
				alt: "Josh project image",
			},
			{
				id: 2,
				title: "ctkmc",
				subtitle: "Some sub-text",
				backgroundColor: colorAccent,
				link: "/work/ctkmedcenter",
				image: data.ctkmc.childImageSharp.gatsbyImageData,
				alt: "ctmedcenter project image",
			},
			{
				id: 3,
				title: "Title",
				subtitle: "Some sub-text",
				backgroundColor: colorRare,
				link: "/work/",
				image: data.ctkmc.childImageSharp.gatsbyImageData,
				alt: "Josh project image",
			},
			{
				id: 4,
				title: "Title",
				subtitle: "Some sub-text",
				backgroundColor: colorPrimary,
				link: "/work/",
				image: data.comingSoon.childImageSharp.gatsbyImageData,
				alt: "Coming soon image",
			},
		];

	return (
		<div css={projectBoxStyles}>
			<div className="project-box__title">
				<h2>Here's my title</h2>
			</div>
			{projectData.map((project) => (
				<ProjectBox
					alt={project.alt}
					title={project.title}
					subtitle={project.subtitle}
					link={project.link}
					image={project.image}
					key={`hp${project.id}`}
					bg={project.backgroundColor}
				/>
			))}
		</div>
	);
}
