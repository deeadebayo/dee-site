import React from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'

import MainPage from './MainPage'
import ProjectPage from './ProjectPage'

const Layout = ({ children, location, pageContext: { type } }) => (
	<motion.div key='pageWrapper'>
		<LayoutGroup>
			<AnimatePresence exitBeforeEnter>
				{type && type === 'projectPage' ? (
					<motion.div
						key='ppage'
						initial='initial'
						animate='animate'
						// exit={{ opacity: 0, y: -100, transition: { duration: 3 } }}
					>
						<ProjectPage location={location}>{children}</ProjectPage>
					</motion.div>
				) : (
					<motion.div
						key='hpage'
						initial='initial'
						animate='animate'
						// exit={{ opacity: 0, transition: { duration: 0.8 } }}
						// exit={{ opacity: 0, y: -100, transition: { duration: 3 } }}
					>
						<MainPage location={location}>{children}</MainPage>
					</motion.div>
				)}
			</AnimatePresence>
		</LayoutGroup>
	</motion.div>
)

export default Layout
