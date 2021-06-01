import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { AnimatedLogo } from "./AnimatedLogo";

import "./../scss/link-hover.scss";

const navbar = css`
		display: grid;
		grid-template-columns: 12.5em auto;
		padding: 2em;

		.navbar__logo {
			grid-column: 1/2;
			padding: 2px 0;
		}
		${"" /* @media screen and (max-width: 859px) {
		} */}
		.navbar__links {
			grid-column: 2/3;
			display: block;

			ul {
				list-style: none;
				justify-content: end;
				float: right;

				li {
					display: block;
					float: left;
					margin-right: 2.647em;

					&:last-child {
						margin-right: 0;
					}

					a {
						display: block;
						position: relative;
						text-decoration: none;
						text-transform: capitalize;
						color: var(--color--text-header);
						outline: 1px blue;
						max-height: 55px;
						margin-left: -0.535rem;
						font-size: 1.1em;
						${"" /* font-weight: bold; */}

						&:hover {
							color: var(--color-primary);
						}
					}
					.active {
						text-decoration: underline 3px var(--color-secondary);
						color: var(--color-secondary);
					}
				}
			}
		}
	`,
	internalLinks = [
		{
			id: 1,
			title: "About",
			url: "/about/",
			description:
				"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
			color: "#E95800",
		},
		{
			id: 2,
			title: "Contact",
			url: "/#contact",
			description:
				"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
			color: "#1099A8",
		},
	],
	externalLinks = [
		{
			id: 3,
			title: "Inspiration",
			url: "http://deeadebayo.tumblr.com/",
			color: "#BC027F",
		},
	],
	Navbar = (path) => {
		const pathString = path.path;
		console.log(pathString);
		let activePage = (url) =>
			url === pathString ? `active` : `navbar-link`;
		return (
			<header className="navbar" css={navbar}>
				<div className="navbar__logo">
					<Link to="/" className="logo--wrap" id="logo">
						<AnimatedLogo />
					</Link>
				</div>
				<div className="navbar__links">
					<ul>
						{internalLinks.map((link) => (
							<li key={link.id}>
								<Link
									to={link.url}
									className={activePage(link.url)}
								>
									{link.title}
								</Link>
							</li>
						))}
						{externalLinks.map((link) => (
							<li key={link.id}>
								<a href={link.url} className="navbar-link">
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</header>
		);
	};

export default Navbar;
