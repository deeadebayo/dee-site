import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";

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

				img {
					display: block;
					width: 100%;
					background-position: center center;
					background-size: cover;
				}
			}
			&__detail-box {
				position: absolute;
				left: 0;
				bottom: 0;
				transform: translateY(108px);
				height: 108px;
				width: 100%;
				transition: transform 0.2s ease-in-out;
				${"" /* background-color: $color--accent; */}

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
	ProjectBox = ({ title, subtitle, link }) => (
		<div className="project-box">
			<Link className="project-box__link" to={link}>
				<div className="project-box__img">Img here</div>
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

export default function ProjectBoxList({ projectData }) {
	return (
		<div css={projectBoxStyles}>
			{projectData.map((project) => (
				<ProjectBox
					title={project.title}
					subtitle={project.subtitle}
					link={project.link}
					key={`hp${project.id}`}
				/>
			))}
		</div>
	);
}
