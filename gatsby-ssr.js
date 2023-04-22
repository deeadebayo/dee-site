import React from 'react'
import Layout from './src/components/Layout'
import { SEO } from './src/components/Seo'
import GlobalStyles from './src/styles/GlobalStyles'

export const wrapPageElement = ({ element, props }) => (
	<>
		<GlobalStyles />
		<Layout {...props}>{element}</Layout>
	</>
)

exports.onRenderBody = ({ setHtmlAttributes }) => {
	setHtmlAttributes({ lang: 'en' })
}

export const Head = () => <title>Dee Adebayo | Front-End Web Developer</title>
