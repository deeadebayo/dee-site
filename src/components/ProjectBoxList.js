import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/react";
import { GatsbyImage } from "gatsby-plugin-image";

const projectBoxStyles = css`
		margin: 3em 0;
		display: grid;
		grid-template-areas:
			"title title"
			"project project"
			"project project"
			"more-btn more-btn";
		grid-template-columns: 1fr 1fr;

		&__title {
			grid-area: title;
			text-align: center;
		}

		.project-box {
			grid-area: project;
			grid-column: span 1;
			grid-row: span 1;
			display: flex;
			min-height: 300px;
			max-height: 500px;
			width: 100%;

			&:hover .project-box__img {
				transform: translateY(-65px);
			}

			&:hover .project-box__detail-box {
				transform: translateY(0);
			}

			a,
			a img {
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
				background-color: var(--color-accent);

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

			&--blue {
				background-color: $color--primary;
				border-top-left-radius: 5px;

				a {
					border-top-left-radius: 5px;
				}
			}

			&--green {
				background-color: $color--secondary;
				border-top-right-radius: 5px;

				a {
					border-top-right-radius: 5px;
				}
			}

			&--yellow {
				background-color: $color--accent;
				border-bottom-left-radius: 5px;

				a {
					border-bottom-left-radius: 5px;
				}
			}

			&--red {
				background-color: $color--alert;
				border-bottom-right-radius: 5px;

				a {
					border-bottom-right-radius: 5px;
				}
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
						backgroundColor={bg}
						objectPosition
					/>
				</div>
				<span className="project-box__detail-box">
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
						id: { eq: "4fba0b40-a120-510a-abab-b01a1860975e" }
					) {
						childrenImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								placeholder: TRACED_SVG
								height: 562
								aspectRatio: 1.33
							)
						}
					}
					josh: file(
						id: { eq: "bd3f399e-d3d6-5eaa-8398-31c3741259eb" }
					) {
						childrenImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								placeholder: TRACED_SVG
								height: 562
								aspectRatio: 1.33
							)
						}
					}
					ctkmc: file(
						id: { eq: "5e1ef454-d1e5-5d1b-9fe4-5ac05d4de7b4" }
					) {
						childrenImageSharp {
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
		projectData = [
			{
				id: 1,
				title: "Josh",
				subtitle: "Some sub-text",
				backgroundColor: "blue",
				link: "/work/jmdrums",
				image: data.josh.childrenImageSharp[0].gatsbyImageData,
				alt: "Josh project image",
				bg: "yellow",
			},
			{
				id: 2,
				title: "ctkmc",
				subtitle: "Some sub-text",
				backgroundColor: "blue",
				link: "/ctkmedcenter",
				image: data.ctkmc.childrenImageSharp[0].gatsbyImageData,
				alt: "ctmedcenter project image",
				bg: "yellow",
			},
			{
				id: 3,
				title: "Title",
				subtitle: "Some sub-text",
				backgroundColor: "blue",
				link: "/work/",
				image: data.ctkmc.childrenImageSharp[0].gatsbyImageData,
				alt: "Josh project image",
				bg: "yellow",
			},
			{
				id: 4,
				title: "Title",
				subtitle: "Some sub-text",
				backgroundColor: "blue",
				link: "/work/",
				image: data.ctkmc.childrenImageSharp[0].gatsbyImageData,
				alt: "Josh project image",
				bg: "yellow",
			},
		];

	return (
		<div css={projectBoxStyles}>
			{projectData.map((project) => (
				<ProjectBox
					alt={project.alt}
					title={project.title}
					subtitle={project.subtitle}
					link={project.link}
					image={project.image}
					key={`hp${project.id}`}
					bg={project.bg}
				/>
			))}
			<div>Div for More projects link</div>
		</div>
	);
}
