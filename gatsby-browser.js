import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import React from 'react'
import Layout from './src/components/Layout'
import LayoutProject from './src/components/LayoutProject'

export function wrapPageElement({ element, props }) {
	console.log(props, element)
	return (
		<AnimateSharedLayout type='crossfade'>
			<AnimatePresence exitBeforeEnter>
				{props.pageContext.type === 'projectPage' ? (
					<LayoutProject {...props}>{element}</LayoutProject>
				) : (
					<Layout {...props}>{element}</Layout>
				)}
			</AnimatePresence>
		</AnimateSharedLayout>
	)
}
