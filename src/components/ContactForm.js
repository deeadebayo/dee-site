import React from "react";
import { css } from "@emotion/react";

const contactFormStyles = css`
		${
			"" /* background: white url("./../images/postcard-border--blue.jpg"); */
		}
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
	`,
	ContactForm = () => {
		return (
			<div css={contactFormStyles}>
				<h2>Contact</h2>
				<form
					action="/"
					name="contact"
					method="POST"
					netlify-honeypot="fake-friends"
					data-netlify="true"
				>
					<div className="contact-form__input">
						<div className="contact-form__details">
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
						<div className="contact-form__message">
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
							<label htmlFor=""></label>
						</div>
					</div>
				</form>
			</div>
		);
	};

export default ContactForm;

// #footer.page-wrapper.page-wrapper__footer
//     .content-wrapper__footer.footer
//         form(name='contact', method='POST' netlify-honeypot='fake-friends' data-netlify='true' action='/').contact-form
//             .contact-form__title
//                 h2 Get In Touch
//                 p.small send some mail
//             section.contact-form__input
//                 .contact-form__details
//                     p
//                         | Hi Dee. My name is
//                         label(for="name")
//                         input(type="text" id="name" name="name" placeholder="Your Full Name" size="19" required)
//                         | , please respond back to me at
//                         label(for="email")
//                         input#email(type="text" name="email" placeholder="Your Email Address" size='24' required)
//                         | .
//                 .contact-form__message
//                     label(for="message")
//                     textarea#message(name="message", cols='30', rows="8", wrap='soft', placeholder="What's on your mind?" required)
//                     p.hidden
//                         label This isn't for humans
//                             input(name="fake-friends")
//             section.contact-form__midsection
//             //- section.contact-form__postage-stamp
//             section.contact-form__info
//                 .contact-form__info__postcard-stamp
//                     include ../_svg-code/postcard-stamp
//                 //- p Although I'm not currently looking for freelance work, my inbox is always open. Say hi or ask any questions. I may not get answer immediately but, I'll do my best to get back to you!
//                 p Ask a question or say hi! I may not be able to answer immediately but, I'll make sure to get back to you as soon as I can!
//                 .contact-form__info__links
//                     p: a(href="https://www.linkedin.com/in/deeadebayo") LinkedIn
//                     p: a(href="https://github.com/deeadebayo/") GitHub
//                     p: a(href="/") Resume
//                 //- text in input fields has to be entered from middle out. how will the text around it behave?
//             section.contact-form__submit
//                 input(type="submit", value="Send")
//                 p: a(href="#top") Back to top &#x2B06;
