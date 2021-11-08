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
				ease: [0.87, 0, 0.13, 1],
				duration: 0.8,
			},
		},
		// exitOut: {
		// 	y: -400,

		// 	opacity: 0,
		// 	transition: {
		// 		duration: 0.5,
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
		>
			{children}
		</motion.div>
	)
}

export default FadeInPage
