import React from "react";
import { css } from "@emotion/react";

import GlobalStyles from "../styles/GlobalStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const wrapperStyle = css`
	display: block;
	margin: 0 auto;

	main {
		display: flex;
		flex-flow: column;
		min-height: 100vh;
		width: 100%;
		background: white;
		position: relative;
		z-index: 1;
		padding: 1rem;
		& > .page {
			margin: 0 auto;
			display: flex;
			flex-flow: column;
			align-items: center;
		}
	}
	@media screen and (min-width: 468px) {
	}
	@media screen and (min-width: 800px) {
		main {
			& > .page {
				margin: 0 1em;
			}
		}
	}
	@media screen and (min-width: 1170px) {
		main {
			& > .page {
				max-width: 1500px;
			}
		}
	}
`;

export default function Layout({ children, location }) {
	return (
		<>
			<div css={wrapperStyle}>
				<GlobalStyles />
				<Navbar path={location.pathname} />
				<main>
					<div className="page">{children}</div>
				</main>
				<Footer />
			</div>
			<div id="contact"></div>
		</>
	);
}
