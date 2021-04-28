import { css } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";

import HomeAbout from "../components/HomeAbout";
import ProjectBoxList from "../components/ProjectBoxList";

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Dee Adebayo | Front-End Web Developer</title>
			</Helmet>
			<HomeAbout />
			<ProjectBoxList />
		</>
	);
};

export default IndexPage;
