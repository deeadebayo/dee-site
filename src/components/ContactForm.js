import React from "react";
import { css } from "@emotion/react";

import LinkedIn from "./../images/svg/linkedin.svg";
import Github from "./../images/svg/github.svg";
import Button from "./Button";

const contactFormStyles = css`
		width: clamp(16rem, 90vw, 70rem);
		position: relative;
		margin: 0 auto;
		background: white url(../../images/postcard--blue.jpg);
		border-radius: 8px;
		padding: 0.25em 0.25em;
		border: 1px solid hsla(224, 62%, 24%, 0.1);
		box-shadow: 0px 3px 5px hsla(224, 62%, 24%, 0.24);
		display: flex;
		box-sizing: border-box;

		&:before {
			content: "";
			position: absolute;
			top: 0;
			right: -4px;
			bottom: 0;
			left: 4px;
			border-radius: 8px;
			background: white url(../../images/postcard--blue.jpg);
			transform: rotate(1deg);
			box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
			z-index: -10;
		}
		.content {
			position: relative;
			background: var(--color-soft-white);
			border-radius: 5px;
			border: solid 1px #ccc;
			box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
			${"" /* padding: 0.25em; */}
			display: grid;
			flex-flow: row wrap;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		& .content > .contact__header {
			grid-column: 3/4;
			display: flex;
			flex-flow: row wrap;
			background: hsl(210, 63%, 98%);
			border-left: 1px solid hsl(212, 33%, 89%);

			padding: 1em 1.5em;

			h2 {
				margin: 1rem 0;
				flex-basis: 100%;
				text-align: center;
			}
			p.lead {
				max-width: 65ch;
				font-size: 1.25em;
			}
			.links {
				display: flex;
				flex: 1;
				gap: 0.5em;
				flex-flow: row wrap;
				justify-content: flex-end;
				padding: 1em 1.5em;
				font-size: 1.2rem;

				& > div {
					display: flex;
					flex: 1;
					padding: 0.2em;
					justify-content: center;
					align-self: flex-end;
				}

				svg {
					transition: 0.3s fill;
					fill: var(--color-primary);

					&:hover,
					&:focus,
					&:active {
						fill: var(--color-secondary);
					}
				}
			}
		}
		& .content > .form {
			padding: 1em 1.5em;
			grid-column: 1/3;
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
				}
			}
			&__message {
				flex-basis: 100%;

				.submit {
					display: flex;
					flex-direction: column;
					input {
						display: none;
					}
					& > * {
						align-self: flex-end;
					}
				}
			}

			input[type="text"] {
				background: white;
				border: 2px solid transparent;
				border-bottom: 2px solid var(--color-gray);
				border-radius: 4px;
				padding: 0.5rem 0.5rem;
				overflow: auto;
				margin-bottom: 0.25em;
				transition: 0.3s border;

				color: var(--color-text_default);

				&:hover {
					border: 2px solid var(--color-secondary);
					background: hsl(210, 63%, 98%);
				}
				&:focus,
				&:active {
					border: 2px solid var(--color-secondary);
					background: hsl(210, 63%, 98%);
				}
			}
			textarea {
				width: 100%;
				margin-bottom: 0.75em;
				border: 2px solid var(--color-gray);
				border-radius: 4px;
				padding: 0.5rem 0.5rem;
				overflow: auto;
				transition: 0.3s border;

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
				<div css={contactFormStyles}>
					<div className="content">
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
										{/* <label htmlFor="name">First Name</label> */}
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
										{/* <label htmlFor="email">Email</label> */}
										<br />
										<input
											type="text"
											name="email"
											placeholder="Your email address"
											size="24"
											required
										/>
									</div>
								</div>
								<div className="form-input__message">
									{/* <label htmlFor="message">
										How can I help?
									</label> */}
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
									<div className="submit">
										<input
											type="submit"
											value="Send"
											className="btn"
											// style={{ display: "none" }}
										/>
										<Button text="Send" />
									</div>
								</div>
							</form>
						</div>
						<div className="contact__header">
							<h2>Get in Touch</h2>
							<p className="lead">
								Looking for help on a project or just want to
								say hi? Use the button!
							</p>
							<div className="links">
								<div>
									<a href="https://github.com/deeadebayo">
										<Github />
									</a>
								</div>
								<div>
									<a href="https://www.linkedin.com/in/deeadebayo/">
										<LinkedIn />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="contact"></div>
			</>
		);
	};

export default ContactForm;
