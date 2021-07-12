import React from "react";
import { css } from "@emotion/react";
import { AnimatePresence } from "framer-motion";

import GlobalStyles from "../styles/GlobalStyles";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const wrapperStyle = css`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	margin: 0 auto;

	main {
		display: flex;
		flex-flow: column;
		min-height: 100vh;
		${"" /* width: 100%; */}
		background: var(--color-page-background);
		position: relative;
		z-index: 3;
		padding: 1rem;
		& > .page {
			margin: 0 auto;
			display: flex;
			flex-flow: column;
			align-items: center;
		}
	}
	@media screen and (min-width: 476px) {
	}
	@media screen and (min-width: 769px) {
	}
	@media screen and (min-width: 1023px) {
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
				<Banner />
				<Navbar path={location.pathname} />
				<main>
					<AnimatePresence>
						<div className="page">{children}</div>
					</AnimatePresence>
				</main>
				<Footer />
			</div>
		</>
	);
}
