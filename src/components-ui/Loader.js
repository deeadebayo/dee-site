import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import LoaderSvg from './LoaderSvg'

const loaderStyles = css`
	z-index: 9999;
	width: 100%;
	height: 100vh;
	background: var(--color-page_neutral_background);
	display: flex;
	justify-content: center;
	transform-origin: center;
	align-items: center;
	position: absolute;
	padding: 4rem;

	svg {
		position: absolute;
		max-height: 18vh;
	}
`

const Loader = ({ setLoading }) => {
	const container = {
		show: {
			opacity: 1,
			transition: { duration: 1.7, delay: 0.2 },
		},
	}

	const svgItem = {
		hidden: { opacity: 0, scale: 0.96 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.4,
				duration: 0.4,
				ease: 'easeIn',
			},
		},
	}

	return (
		<motion.div
			css={loaderStyles}
			variants={container}
			initial='initial'
			animate='show'
			exit='exit'
			onAnimationComplete={() => setLoading(false)}
		>
			<LoaderSvg variants={svgItem} />
		</motion.div>
	)
}

export default Loader
