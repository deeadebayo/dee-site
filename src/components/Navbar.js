import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { AnimatedLogo } from '../components-ui/AnimatedLogo'

import './../scss/link-hover.scss'

const navbar = css`
		z-index: 1;
		display: flex;
		flex-flow: row wrap;
		padding: 1.5em;
		justify-content: space-between;
		align-items: center;

		.navbar__logo {
			padding: 2px 0;
		}

		.navbar__links {
			ul {
				list-style: none;
				display: flex;
				flex-flow: row wrap;
				align-items: center;
				justify-content: space-around;
				margin: 0;

				li {
					display: block;
					margin: 0;
					padding: 0 0.5rem;

					a {
						display: block;
						position: relative;
						text-decoration: none;
						text-transform: capitalize;
						color: var(--color--text-header);
						outline: 1px blue;
						max-height: 55px;
						margin: 1rem 0;
						font-size: 1.1rem;
						font-weight: 500;

						&:hover,
						&:focus {
							color: var(--color-secondary);
						}
					}
					.active {
						text-decoration: underline 2px var(--color-primary);
						text-underline-offset: 6px;
						color: var(--color-secondary);
					}
				}
			}
		}

		@media screen and (min-width: 476px) {
			.navbar__links {
				ul {
					li {
						padding: 0 1rem;

						a {
							font-size: 1.2rem;
						}
					}
				}
			}
		}

		@media screen and (min-width: 769px) {
			.navbar__links {
				ul {
					li {
						padding: 0 2rem;

						a {
							font-size: 1.4rem;
						}
					}
				}
			}
		}

		@media screen and (min-width: 1023px) {
			.navbar__links {
				ul {
					li {
						padding: 0 2.25rem;
					}
				}
			}
		}
	`,
	internalLinks = [
		{
			id: 1,
			title: 'About',
			url: '/about/',
		},
		{
			id: 2,
			title: 'Contact',
			url: '#contact',
		},
	],
	externalLinks = [
		{
			id: 3,
			title: 'Inspiration',
			url: 'http://deeadebayo.tumblr.com/',
			color: '#BC027F',
		},
	],
	Navbar = path => {
		const pathString = path.path
		let activePage = url => (url === pathString ? `active` : `navbar-link`)
		return (
			<header className='navbar' css={navbar}>
				<div className='navbar__logo'>
					<Link to='/' className='logo--wrap' id='logo'>
						<AnimatedLogo />
					</Link>
				</div>
				<div className='navbar__links'>
					<ul>
						{internalLinks.map(link => (
							<li key={link.id}>
								<Link to={link.url} className={activePage(link.url)}>
									{link.title}
								</Link>
							</li>
						))}
						{/* {externalLinks.map((link) => (
							<li key={link.id}>
								<a href={link.url} className="navbar-link">
									{link.title}
								</a>
							</li>
						))} */}
					</ul>
				</div>
			</header>
		)
	}

export default Navbar
