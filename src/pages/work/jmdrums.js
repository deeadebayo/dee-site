import { css } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";

import HomeAbout from "../../components/HomeAbout";
import ProjectBoxList from "../../components/ProjectBoxList";

const JMDrumsPage = () => {
	return (
		<>
			<Helmet>
				<title> Work | Dee Adebayo</title>
			</Helmet>
			<ProjectBoxList />
		</>
	);
};

export default JMDrumsPage;
