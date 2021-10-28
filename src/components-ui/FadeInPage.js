import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const FadeInPage = ({ children, pageName }) => {
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
		exitOut: {
			y: -200,
			opacity: 0,
			transition: {
				duration: 1.1,
			},
		},
	}
	return (
		<motion.div
			key={pageName}
			initial='pageHidden'
			animate='visible'
			exit='exitOut'
			variants={pageContent}>
			{children}
		</motion.div>
	)
}

export default FadeInPage
