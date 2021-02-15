import { css } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";

import HomeIndex from "../components/HomeAbout";
import HomeProjectList from "../components/HomeProject";

const style = css``;

// markup
const IndexPage = () => {
	return (
		<main>
			<Helmet>
				<title>Dee Adebayo</title>
			</Helmet>
			<article>
				<HomeIndex />
				<HomeProjectList />
			</article>
		</main>
	);
};

export default IndexPage;
