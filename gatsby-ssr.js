import React from 'react'
import Layout from './src/components/Layout'
import LayoutProject from './src/components/LayoutProject'

export function wrapPageElement({ element, props }) {
	console.log(props, element)
	return props.pageContext.type === 'projectPage' ? (
		<LayoutProject {...props}>{element}</LayoutProject>
	) : (
		<Layout {...props}>{element}</Layout>
	)
}
