import { css } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";

import HomeAbout from "../components/HomeAbout";
import ProjectBoxList from "../components/ProjectBoxList";

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Dee Adebayo</title>
			</Helmet>
			<HomeAbout />
			<ProjectBoxList projectData={projectData} />
		</>
	);
};

const projectData = [
	{
		id: 1,
		title: "Title",
		subtitle: "Some sub-text",
		backgroundColor: "blue",
		link: "/",
	},
	{
		id: 2,
		title: "Title",
		subtitle: "Some sub-text",
		backgroundColor: "blue",
		link: "/",
	},
	{
		id: 3,
		title: "Title",
		subtitle: "Some sub-text",
		backgroundColor: "blue",
		link: "/",
	},
	{
		id: 4,
		title: "Title",
		subtitle: "Some sub-text",
		backgroundColor: "blue",
		link: "/",
	},
];

export default IndexPage;
