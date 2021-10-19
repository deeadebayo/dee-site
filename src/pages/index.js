import React from 'react'
import { Helmet } from 'react-helmet'

import HomeAbout from '../components/HomeAbout'
import ProjectBoxList from '../components/ProjectBoxList'
import FadeInPage from '../components-ui/FadeInPage'

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Dee Adebayo | Front-End Web Developer</title>
			</Helmet>
			<FadeInPage pageName='index'>
				<HomeAbout />
				<ProjectBoxList />
			</FadeInPage>
		</>
	)
}

export default IndexPage
