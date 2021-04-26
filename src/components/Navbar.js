import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { AnimatedLogo } from "./AnimatedLogo";

import "./../scss/navbar.scss";

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
	Navbar = () => (
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
