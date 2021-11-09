import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from './src/components/Layout'
import LayoutProject from './src/components/LayoutProject'
import GlobalStyles from './src/styles/GlobalStyles'

export function wrapPageElement({ element, props }) {
	const layoutVariants = {
		exit: { background: 'black' },
	}
	return (
		<>
			<Helmet>
				<title>Dee Adebayo | Front-End Web Developer</title>
			</Helmet>
			<GlobalStyles />
			<AnimateSharedLayout type='crossfade'>
				<AnimatePresence exitBeforeEnter>
					<motion.div key='layoutWrapper' variants={layoutVariants} exit='exit'>
						{props.pageContext.type === 'projectPage' ? (
							<LayoutProject {...props}>{element}</LayoutProject>
						) : (
							<Layout {...props}>{element}</Layout>
						)}
					</motion.div>
				</AnimatePresence>
			</AnimateSharedLayout>
		</>
	)
}
