import React from 'react'
import { css } from '@emotion/react'

import LinkedIn from './../images/svg/linkedin.svg'
import Github from './../images/svg/github.svg'
import Button from '../components-ui/Button'

const contactFormStyles = css`
		max-width: 1070px;
		position: relative;
		margin: 0 auto;
		background: white url(../../images/postcard--blue.jpg);
		border-radius: 8px;
		padding: 0.25em 0.25em;
		border: 1px solid hsla(224, 62%, 24%, 0.1);
		box-shadow: 0px 3px 5px hsla(224, 62%, 24%, 0.24);
		display: block;
		box-sizing: border-box;

		&:before {
			content: '';
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
			display: flex;
			flex-flow: column wrap;
		}

		.content > .contact__header {
			display: flex;
			flex-flow: column nowrap;
			background: hsl(210, 63%, 98%);
			border-left: 1px solid hsl(212, 33%, 89%);

			padding: 1em 1.5em;

			h2 {
				margin: 1rem 0;
				flex-basis: 100%;
				text-align: center;
				font-size: 1.75rem;
			}
			p.lead {
				max-width: 65ch;
				font-size: 1.25em;
				text-align: center;
			}
			.links {
				display: flex;
				flex: 1;
				gap: 0.5em;
				flex-flow: row wrap;
				justify-content: space-around;
				padding: 0.5em 1.5em;
				font-size: 1.2rem;
				max-height: 50%;

				& > * {
					display: flex;
					flex: 1;
					padding: 0.2em;
					max-width: 125px;
				}

				svg > * {
					transition-duration: 0.25s;
					height: 100%;
				}

				.svg__linkedin {
					.linkedin--top-back {
						fill: hsl(358, 100%, 70%);
					}
					.linkedin--bot-back {
						fill: hsl(358, 100%, 68%);
					}
					.linkedin--shadow {
						fill: hsla(358, 100%, 63%, 0.7);
					}

					&:hover,
					&:focus,
					&:active {
						.linkedin--top-back {
							fill: hsla(175, 100%, 33%, 0.9);
						}
						.linkedin--bot-back {
							fill: hsla(175, 100%, 33%, 0.6);
						}
						.linkedin--shadow {
							fill: hsla(39, 98%, 56%, 1);
						}
					}
				}

				.svg__github {
					.github--top-back,
					.github--outline {
						fill: hsla(358, 100%, 70%, 1);
					}
					.github--bot-back {
						fill: hsla(358, 100%, 65%, 1);
					}
					.github--top-liner,
					.github--bot-liner,
					.github--underarm,
					.github--abovearm {
						fill: hsla(358, 100%, 62%, 0.9);
					}
					&:hover,
					&:focus,
					&:active {
						.github--top-back,
						.github--outline {
							fill: hsla(175, 100%, 33%, 0.6);
						}
						.github--bot-back {
							fill: hsla(175, 100%, 33%, 0.6);
						}

						.github--underarm,
						.github--abovearm {
							fill: hsla(39, 98%, 56%, 1);
							transition-delay: 0.02s;
						}

						.github--top-liner,
						.github--bot-liner {
							fill: hsla(39, 98%, 56%, 1);
							transition-delay: 0.01s;
						}
					}
				}
			}
		}

		.content > .form {
			padding: 1em 1.5em;
		}

		.info {
			display: flex;
			flex: 1;
			flex-flow: column wrap;
			margin-bottom: 0.75em;
		}

		.form-input {
			display: flex;
			flex-flow: row wrap;

			&__name,
			&__email {
				flex: 1;
				input[type='text'] {
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

			input[type='text'] {
				background: white;
				border: 2px solid transparent;
				border-bottom: 2px solid hsla(var(--palette-gray-40), 100%);
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
				border: 2px solid hsla(var(--palette-gray-40), 100%);
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

		@media screen and (min-width: 476px) {
			.content > .contact__header {
				h2 {
					font-size: 2em;
				}

				.links {
					padding: 1em 1.5em;

					& > * {
						max-width: 150px;
					}
				}
			}
		}
		@media screen and (min-width: 769px) {
			.content {
				flex-flow: row nowrap;

				& > div {
					flex: 1 1 0;
				}
			}

			.content > .contact__header {
				h2 {
					font-size: 2.3em;
				}

				justify-content: center;
				order: 2;
				max-width: 50%;
				.links {
					padding: 1em 1.5em;

					& > * {
						max-width: 150px;
					}
				}
			}
		}
		@media screen and (min-width: 1023px) {
			.content > .contact__header {
				h2 {
					font-size: 2.9em;
				}

				.links {
					padding: 1em 1.5em;
				}
				.links > * {
					max-width: 150px;
				}
			}
		}
	`,
	ContactForm = () => {
		return (
			<>
				<div css={contactFormStyles}>
					<div className='content'>
						<div className='contact__header'>
							<div className='contact__header__text'>
								<h2>📮Get in Touch📮</h2>
								<p className='lead'>
									Need help on a project or just want to say hi - send mail!
								</p>
							</div>
							<div className='links'>
								<a href='https://github.com/deeadebayo'>
									<Github />
								</a>
								<a href='https://www.linkedin.com/in/deeadebayo/'>
									<LinkedIn />
								</a>
							</div>
						</div>
						<div className='form'>
							<form
								action='/'
								name='contact'
								method='POST'
								netlify-honeypot='fake-friends'
								data-netlify='true'
								className='form-input'>
								<div className='info'>
									<div className='form-input__name'>
										{/* <label htmlFor="name">First Name</label> */}
										<br />
										<input
											type='text'
											id='name'
											name='name'
											placeholder="What's your name?"
											size='19'
											required
										/>
									</div>
									<div className='form-input__email'>
										{/* <label htmlFor="email">Email</label> */}
										<br />
										<input
											type='text'
											name='email'
											placeholder='Your email address'
											size='24'
											required
										/>
									</div>
								</div>
								<div className='form-input__message'>
									{/* <label htmlFor="message">
										How can I help?
									</label> */}
									<br />
									<textarea
										name='message'
										id='message'
										cols='30'
										rows='8'
										wrap='soft'
										placeholder="What's on your mind?"
										required></textarea>
									<span style={{ display: 'none' }} className='hidden'>
										<label htmlFor='fake-friends'>
											Not for the real friends
										</label>
										<input name='fake-friends' />
									</span>
									<div className='submit'>
										<input
											type='submit'
											value='Send'
											className='btn'
											// style={{ display: "none" }}
										/>
										<Button text='Send' />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		)
	}

export default ContactForm
