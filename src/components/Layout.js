import React from "react";
import { Global, css } from "@emotion/react";
import "normalize.css";

import Navbar from "./Navbar";
// import Footer from './Footer';

const GlobalStyle = css`
		color: "darkorchid";
		background-color: "lightgray";

		.emoji {
			height: 19px;
			padding: 0 2px;
			line-height: 1.5;
		}
		.hidden {
			display: none;
		}
	`,
	wrapperStyle = css`
		${
			"" /* border-top: 4px solid blue; actual color is secondary brand color*/
		}
		border-top: 4px solid blue;
		margin-bottom: 4.5em;
	`;

export default function Layout({ children }) {
	return (
		<div css={wrapperStyle}>
			<Global styles={GlobalStyle}></Global>
			<Navbar />
			{children}
			{/* <Footer /> */}
		</div>
	);
}
