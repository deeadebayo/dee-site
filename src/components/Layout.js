import React from "react";
import { css } from "@emotion/react";

import GlobalStyles from "../styles/GlobalStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const wrapperStyle = css`
	display: block;
`;

export default function Layout({ children, location }) {
	return (
		<div css={wrapperStyle}>
			<GlobalStyles />
			<Navbar path={location.pathname} />
			<main>
				<div className="page">{children}</div>
			</main>
			<Footer />
		</div>
	);
}
