import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

const navbar = css`
		a {
			outline: 1px blue;
			display: block;
			max-height: 55px;
			margin-left: -0.535rem;
		}
	`,
	internalLinks = [
		{
			id: 1,
			title: "About",
			url: "/about",
			description:
				"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
			color: "#E95800",
		},
		{
			id: 2,
			title: "Contact",
			url: "/contact",
			description:
				"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
			color: "#1099A8",
		},
	],
	externalLinks = [
		{
			id: 3,
			title: "Inspiration",
			url: "https://www.gatsbyjs.com/docs/reference/",
			description:
				"Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
			color: "#BC027F",
		},
	],
	Navbar = () => (
		<header className="navbar" css={navbar}>
			<div className="navbar__logo">
				<Link to="/" className="logo--wrap" id="logo">
					//Include logo svg image
				</Link>
			</div>
			<div className="navbar__links">
				<ul>
					{internalLinks.map((link) => (
						<li key={link.id}>
							<Link to={link.url}>{link.title}</Link>
						</li>
					))}
					{externalLinks.map((link) => (
						<li key={link.id}>
							<a href={link.url}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);

export default Navbar;

// .navbar
//     .navbar__logo
//         //- logo is declared in a new class
//         a#logo.logo--wrap(href='/')
//             include ../_svg-code/logo--main
//     .navbar__links
//         //- make the nav links the dark grey/black color
//         ul
//             li: a(href="/about.html") About
//             li: a(href="#footer") Contact
//             li: a(href="http://deeadebayo.tumblr.com/") Inspiration
