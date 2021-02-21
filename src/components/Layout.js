import React from "react";
import { css } from "@emotion/react";

import GlobalStyles from "../styles/GlobalStyles";
import Navbar from "./Navbar";
// import Footer from './Footer';

const wrapperStyle = css`
	html {
		--color-primary: red;
		--color-secondary: blue;
		--color-text: black;
		--color-background: lightgray;
	}
	display: block;
	border-top: 4px var(--color-secondary);
	${"" /* margin-bottom: 4.5em; */}
`;

const footerStyle = css`
	position: sticky;
	bottom: 0;
	left: 0;
	width: 100%;

	background: #252a47;
	display: grid;
	place-items: center;
	padding: 50px;
`;

export default function Layout({ children }) {
	return (
		<div css={wrapperStyle}>
			<GlobalStyles />
			<Navbar />
			<main>{children}</main>
			<div css={footerStyle}></div>
			{/* <Footer /> */}
		</div>
	);
}
