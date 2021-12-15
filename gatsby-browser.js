import React from 'react'
import Layout from './src/components/Layout'
import { SEO } from './src/components/Seo'
import GlobalStyles from './src/styles/GlobalStyles'

export const wrapPageElement = ({ element, props }) => (
	<>
		<SEO />
		<GlobalStyles />
		<Layout {...props}>{element}</Layout>
	</>
)
