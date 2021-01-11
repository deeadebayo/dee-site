import React from "react";
import styled from "@emotion/styled";

import Navbar from "./Navbar";
// import Footer from './Footer';

const Wrapper = styled.div`
	border-top: 4px solid blue;
	margin-bottom: 4.5em;
`;

export default function Layout({ children }) {
	return (
		<Wrapper>
			<Navbar />
			{children}
			{/* <Footer /> */}
		</Wrapper>
	);
}
