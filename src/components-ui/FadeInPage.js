import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const FadeInPage = ({ children, pageName }) => {
	//need to add a super uique key if multiple children

	const variants = {
		hidden: { y: 200, opacity: 0 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.1,
				ease: 'easeInOut',
			},
		},
		exitOut: {
			y: -200,
			opacity: 0,
			transition: {
				duration: 3,
			},
		},
	}
	return (
		<motion.div
			key={pageName}
			onAnimationComplete={() => console.log(`completed fadeInPage animation`)}
			onAnimationStart={() => console.log(`animation fadeInPage started`)}
			initial='hidden'
			animate='visible'
			exit='exitOut'
			variants={variants}>
			{children}
		</motion.div>
	)
}

export default FadeInPage
