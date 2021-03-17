import { css } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";

import ProjectBoxList from "../../components/ProjectBoxList";

const CtkmedPage = () => {
	return (
		<>
			<Helmet>
				<title>Dee Adebayo</title>
			</Helmet>
			<ProjectBoxList />
		</>
	);
};

export default CtkmedPage;
