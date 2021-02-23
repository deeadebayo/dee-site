import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";

const projectData = [
		{
			id: 1,
			title: "Title",
			subtitle: "Some sub-text",
			backgroundColor: "blue",
			link: "/",
		},
		{
			id: 2,
			title: "Title",
			subtitle: "Some sub-text",
			backgroundColor: "blue",
			link: "/",
		},
		{
			id: 3,
			title: "Title",
			subtitle: "Some sub-text",
			backgroundColor: "blue",
			link: "/",
		},
		{
			id: 4,
			title: "Title",
			subtitle: "Some sub-text",
			backgroundColor: "blue",
			link: "/",
		},
	],
	styles = css`
		.project-display {
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

			&__box {
				grid-area: project;
				grid-column: span 1;
				grid-row: span 1;
				display: flex;
				min-height: 300px;
				max-height: 500px;
				width: 100%;

				&:hover .project-display__img {
					transform: translateY(-65px);
				}

				&:hover .project-display__detail-box {
					transform: translateY(0);
				}

				a,
				a img {
					overflow: hidden;
					text-decoration: none;
					border: none;
					position: relative;
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

			.project-display__img {
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

			.project-display__detail-box {
				position: absolute;
				// left: 0;
				bottom: 0;
				transform: translateY(108px);
				height: 108px;
				width: 100%;
				transition: transform 0.2s ease-in-out;
				background-color: $color--accent;

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

			// &__link {
			//     text-decoration: none;
			//     overflow: hidden;
			// }

			&__btn {
				margin: 3rem 0;
				grid-area: more-btn;
				text-align: center;
			}
		}
	`,
	HomeProject = () =>
		projectData.map((project) => (
			<div className="project-display__box" css={styles}>
				<Link className="project-display__link" to={project.link}>
					<div className="project-display__img">Img here</div>
					<span className="project-display__detail-box">
						<span className="project-display__detail-box__details">
							<span className="project-display__detail-box__details__title">
								{project.title}
							</span>
							<span className="project-display__detail-box__details__subtitle">
								{project.subtitle}
							</span>
							<span className="project-display__detail-box__details__icon-section">
								<span className="project-display__detail-box__details__icon-section__icon"></span>
							</span>
						</span>
					</span>
				</Link>
			</div>
		)),
	HomeProjectList = () => <HomeProject />;

export default HomeProjectList;
