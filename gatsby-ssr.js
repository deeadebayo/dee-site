import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React from 'react'
import Layout from './src/components/Layout'
import LayoutProject from './src/components/LayoutProject'

export function wrapPageElement({ element, props }) {
	return (
		<AnimateSharedLayout type='crossfade'>
			<AnimatePresence exitBeforeEnter>
				{props.pageContext.type === 'projectPage' ? (
					<motion.div key='projectLoaderWrapper'>
						<LayoutProject {...props}>{element}</LayoutProject>
					</motion.div>
				) : (
					<motion.div key='loaderWrapper'>
						<Layout {...props}>{element}</Layout>
					</motion.div>
				)}
			</AnimatePresence>
		</AnimateSharedLayout>
	)
}
