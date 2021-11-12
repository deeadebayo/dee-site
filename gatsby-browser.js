import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from './src/components/Layout'
import GlobalStyles from './src/styles/GlobalStyles'

export const wrapPageElement = ({ element, props }) => (
	<>
		<Helmet>
			<title>Dee Adebayo | Front-End Web Developer</title>
		</Helmet>
		<GlobalStyles />
		<Layout {...props}>{element}</Layout>
	</>
)
