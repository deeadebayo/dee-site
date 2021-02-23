import { css } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";

import HomeAbout from "../components/HomeAbout";
import HomeProjectList from "../components/HomeProjectList";

const IndexPage = () => {
	return (
		<article>
			<Helmet>
				<title>Dee Adebayo</title>
			</Helmet>
			<HomeAbout />
			<HomeProjectList />
		</article>
	);
};

export default IndexPage;
