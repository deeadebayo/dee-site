import React from 'react'
import Layout from './src/components/Layout'
import { SEO } from './src/components/Seo'
import GlobalStyles from './src/styles/GlobalStyles'

export const Head = () => <SEO />

export const wrapPageElement = ({ element, props }) => (
	<>
		<GlobalStyles />
		<Layout {...props}>{element}</Layout>
	</>
)

export const onRenderBody = ({ setHtmlAttributes }) => {
	setHtmlAttributes({ lang: 'en' })
}
