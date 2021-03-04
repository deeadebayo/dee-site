import React from "react";
import { css } from "@emotion/react";

import GlobalStyles from "../styles/GlobalStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const wrapperStyle = css`
	display: block;

	${
		"" /* width: 90vw;
	width: clamp(16rem, 90vw, 70rem);
	margin-left: auto;
	margin-right: auto;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	position: relative; */
	}
	${"" /* margin-bottom: 4.5em; */}
`;

export default function Layout({ children }) {
	return (
		<div css={wrapperStyle}>
			<GlobalStyles />
			<Navbar />
			<main>
				<div className="page">{children}</div>
			</main>
			<Footer />
		</div>
	);
}
