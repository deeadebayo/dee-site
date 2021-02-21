import { css } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";

import HomeIndex from "../components/HomeAbout";
import HomeProjectList from "../components/HomeProject";

const style = css``;

const IndexPage = () => {
	return (
		<article>
			<Helmet>
				<title>Dee Adebayo</title>
			</Helmet>
			<HomeIndex />
			<HomeProjectList />
		</article>
	);
};

export default IndexPage;
