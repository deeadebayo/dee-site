import React from "react";
import { css } from "@emotion/react";

const contactFormStyles = css`
		${
			"" /* background: white url("./../images/postcard-border--blue.jpg"); */
		}
		background: white;
		border-radius: 5px;
		padding: 0.5em 1rem;
		border: 1px solid hsla(224, 62%, 24%, 0.1);
		box-shadow: 0px 3px 5px hsla(224, 62%, 24%, 0.24);
		display: grid;
		grid-template-areas: "info info" "form links";
		transition: all 0.3s ease 0s;
		box-sizing: border-box;

		& > .info {
			grid-area: info;
			text-align: center;
			h2 {
				margin: 1rem 0;
			}
			p {
				max-width: 60ch;
				margin: 0 2em;
			}
		}
		& > .form {
			grid-area: form;
			padding: 1em 1.5em;
		}
		& > .links {
			display: grid;
			grid-area: links;
			padding: 1em 1.5em;
			grid-template-columns: 1fr;
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
		.form-input {
			input[type="text"],
			textarea {
				border: 2px solid var(--color-gray);
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

			textarea {
				width: 80%;
			}
		}
		form p {
			margin: 1rem 0 0;
		}
	`,
	ContactForm = () => {
		return (
			<>
				<div css={contactFormStyles}>
					<div className="info">
						<h2>Contact</h2>
						<p>
							Looking for help on a project or do you just want to
							say hi? Please use the contact form below and I'll
							get back to you!
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
							<div className="input">
								<div className="form-input__details">
									<p>Hi Dee, my name is</p>
									<label htmlFor="name"></label>
									<input
										type="text"
										id="name"
										name="name"
										placeholder="What's your name?"
										size="19"
										required
									/>
									<p>
										Please respond back to me at the email
										address below:
									</p>
									<label htmlFor="email"></label>
									<input
										type="text"
										name="email"
										placeholder="Your Email Address"
										size="24"
										required
									/>
								</div>
								<p>How can I help?</p>
								<div className="message">
									<label htmlFor="message"></label>
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
								</div>
								<div className="submit">
									<input
										type="submit"
										value="Send"
										className="btn"
									/>
								</div>
							</div>
						</form>
					</div>
					<div className="links">
						<div>
							<p>
								<a href="https://www.linkedin.com/in/deeadebayo/">
									LinkedIn
								</a>
							</p>
							<p>
								<a href="https://github.com/deeadebayo">
									Github
								</a>
							</p>
						</div>
					</div>
				</div>
				<div id="contact"></div>
			</>
		);
	};

export default ContactForm;
