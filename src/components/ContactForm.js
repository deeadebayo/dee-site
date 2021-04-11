import React from "react";
import { css } from "@emotion/react";

import "./../scss/contactForm.scss";

import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";

const BackgroundBorder = ({ className }) => {
	const data = useStaticQuery(
		graphql`
			query {
				postcard: file(relativePath: { eq: "postcard--blue.jpg" }) {
					childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							placeholder: TRACED_SVG
						)
					}
				}
			}
		`
	);
	const imageData = data.postcard.childImageSharp.gatsbyImageData;

	return <BackgroundImage Tag="div" />;
};

const contactFormStyles = css`
		background: white;
		border-radius: 5px;
		padding: 0.5em 1rem;
		border: 1px solid hsla(224, 62%, 24%, 0.1);
		box-shadow: 0px 3px 5px hsla(224, 62%, 24%, 0.24);
		display: grid;
		grid-template-areas: "info" "form";
		transition: all 0.3s ease 0s;
		box-sizing: border-box;

		& > .contact__header {
			grid-area: info;
			display: flex;
			flex-flow: row wrap;
			margin-top: 1.2em;

			padding: 1em 1.5em 0;

			h2 {
				margin: 1rem 0;
				flex-basis: 100%;
				text-align: center;
			}
			p.lead {
				max-width: 65ch;
				font-size: 1.25em;
			}
		}
		& > .form {
			grid-area: form;
			padding: 1em 1.5em;
		}

		&:before {
			content: "";
			position: absolute;
			top: 0;
			right: -4px;
			padding: 1px;
			bottom: 0;
			left: 4px;
			border-radius: 8px;
			${
				"" /* background: white url("./../images/postcard-border--blue.jpg"); */
			}
			transform: rotate(1deg);
			box-shadow: hsla(0, 0%, 0%, 0.5);
			z-index: -1;
		}
		.info {
			gap: 2em;
			display: flex;
			flex: 1;
			margin-bottom: 1em;
		}

		.form-input {
			display: flex;
			flex-flow: row wrap;

			&__name,
			&__email {
				flex: 1;
				input[type="text"] {
					width: 100%;
					background: transparent;
					border: none;
					border-bottom: 1px solid #000000;
				}
			}
			&__message {
				flex-basis: 100%;

				textarea {
					width: 100%;
					margin-bottom: 0.5em;
				}

				.submit-wrapper {
					display: flex;

					.submit {
						flex: 0 1 40%;
					}

					.links {
						flex: 1;
						display: flex;
						flex-flow: row wrap;
						justify-content: flex-end;
						padding: 1em 1.5em;
						font-size: 1.2rem;

						& > a {
							flex: 1;
							text-align: center;
							padding: 0.2em 0.5em;
						}
					}
				}
			}

			input[type="text"],
			textarea {
				border: 2px solid var(--color-gray);
				border-radius: 4px;
				padding: 0.5rem 0.5rem;
				overflow: auto;

				color: var(--color-text_default);

				&:hover {
					border: 2px solid var(--color-secondary);
				}
				&:focus,
				&:active {
					border: 2px solid var(--color-secondary);
				}
			}
			label {
				margin: 1rem 0 0;
			}
		}
	`,
	ContactForm = () => {
		return (
			<>
				<div css={contactFormStyles} className="contactFormStyles">
					<div className="contact__header">
						<h2>Say hello</h2>
						<p className="lead">
							Looking for help on a project or do you just want to
							say hi? Let's get in touch!
						</p>
					</div>
					<div className="form">
						<form
							action="/"
							name="contact"
							method="POST"
							netlify-honeypot="fake-friends"
							data-netlify="true"
							className="form-input"
						>
							<div className="info">
								<div className="form-input__name">
									<label htmlFor="name">First Name</label>
									<br />
									<input
										type="text"
										id="name"
										name="name"
										placeholder="What's your name?"
										size="19"
										required
									/>
								</div>
								<div className="form-input__email">
									<label htmlFor="email">Email</label>
									<br />
									<input
										type="text"
										name="email"
										placeholder="Your Email Address"
										size="24"
										required
									/>
								</div>
							</div>
							<div className="form-input__message">
								<label htmlFor="message">How can I help?</label>
								<br />
								<textarea
									name="message"
									id="message"
									cols="30"
									rows="8"
									wrap="soft"
									placeholder="What's on your mind?"
									required
								></textarea>
								<p className="hidden">
									<label htmlFor="fake-friends">
										Not for the real friends
									</label>
									<input name="fake-friends" />
								</p>
								<div className="submit-wrapper">
									<div className="submit">
										<input
											type="submit"
											value="Send"
											className="btn"
										/>
									</div>
									<div className="links">
										<a href="https://www.linkedin.com/in/deeadebayo/">
											LinkedIn
										</a>
										<a href="https://github.com/deeadebayo">
											Github
										</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div id="contact"></div>
			</>
		);
	};

export default ContactForm;
