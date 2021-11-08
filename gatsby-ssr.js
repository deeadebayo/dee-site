import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React from 'react'
import Layout from './src/components/Layout'
import LayoutProject from './src/components/LayoutProject'
import GlobalStyles from './src/styles/GlobalStyles'

export function wrapPageElement({ element, props }) {
	return (
		<>
			<GlobalStyles />
			<AnimateSharedLayout type='crossfade'>
				<AnimatePresence exitBeforeEnter>
					{props.pageContext.type === 'projectPage' ? (
						<motion.div key='layoutProject'>
							<LayoutProject {...props}>{element}</LayoutProject>
						</motion.div>
					) : (
						<motion.div key='layoutRegular'>
							<Layout {...props}>{element}</Layout>
						</motion.div>
					)}
				</AnimatePresence>
			</AnimateSharedLayout>
		</>
	)
}
