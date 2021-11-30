import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const FadeInPage = ({ children, pageKey }) => {
	const pageContent = {
		pageHidden: { y: 150, opacity: 0 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.87, 0, 0.2, 1],
				duration: 0.75,
			},
		},
		// exitOut: {
		// 	opacity: 0,
		// 	transition: {
		// 		// duration: 0.5,
		// 	},
		// },
	}
	return (
		<motion.div
			key={pageKey}
			initial='pageHidden'
			animate='visible'
			// exit='exitOut'
			variants={pageContent}
			style={{
				display: 'flex',
				flexFlow: 'column',
				width: '100%',
				alignItems: 'center',
			}}
		>
			{children}
		</motion.div>
	)
}

export default FadeInPage
