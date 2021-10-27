import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const FadeInPage = ({ children, pageName, projectImages }) => {
	//need to add a super uique key if multiple children

	const pageContent = {
		pageComingInHot: { y: 150, opacity: 0 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: 'easeIn',
				// ease: [0.87, 0, 0.13, 1],
				duration: 0.7,
				staggerChildren: 4,
				delayChildren: 3,
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
			onAnimationStart={() => console.log(`animation fadeInPage started`)}
			onAnimationComplete={() => console.log(`completed fadeInPage animation`)}
			initial='pageComingInHot'
			animate='visible'
			exit='exitOut'
			variants={pageContent}>
			{children}
		</motion.div>
	)
}

export default FadeInPage
