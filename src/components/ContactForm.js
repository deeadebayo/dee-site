import React from "react";
import { css } from "@emotion/react";

const contactFormStyles = css`
		${
			"" /* background: white url("./../images/postcard-border--blue.jpg"); */
		}
		background: white;
		border-radius: 8px;
		padding: 0.2em;
		border: 1px solid hsla(224, 62%, 24%, 0.1);
		box-shadow: 0px 3px 5px hsla(224, 62%, 24%, 0.24);

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
			textarea {
				border: 2px solid var(--color-gray);
				${"" /* width: 90%; */}
				padding: 0.625rem 0.8rem;
				overflow: auto;

				color: var(--color-text_default);
				font-size: 1.2rem;

				&:hover {
					border: 2px solid var(--color-secondary);
				}
				&:focus,
				&:active {
					border: 2px solid var(--color-secondary);
				}
			}
		}
	`,
	ContactForm = () => {
		return (
			<div css={contactFormStyles}>
				<h2>Contact</h2>
				<p>
					Are you looking for help on a project? Do you have any
					questions? Or do you just want to say hi? Please use the
					contact form below and I'll get back to you!{" "}
				</p>
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
							<p>My name is</p>
							<label htmlFor="name"></label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Your Full Name"
								size="19"
								required
							/>
							<p>Please respond back to me at:</p>
							<label htmlFor="email"></label>
							<input
								type="text"
								name="email"
								placeholder="Your Email Address"
								size="24"
								required
							/>
						</div>
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
							<input type="submit" value="Send" />
						</div>
					</div>
				</form>
				<p>LinkedIn link</p>
				<p>Github link</p>
				<p>Resume link?</p>
			</div>
		);
	};

export default ContactForm;
