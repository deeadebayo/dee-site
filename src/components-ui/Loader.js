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
	padding: 4rem;
	position: absolute;

	svg {
		display: flex;
		position: absolute;
		max-height: 18vh;
	}
`
const Loader = ({ setLoading }) => {
	const containerVariants = {
		initial: {
			bottom: 0,
			opacity: 0.5,
			y: 0,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 2.2 },
		},
		exit: {
			y: 300,
			transition: {
				delay: 0.5,
				when: 'afterChildren',
				ease: [0.87, 0, 0.13, 1],
			},
		},
	}

	return (
		<motion.div
			css={loaderStyles}
			variants={containerVariants}
			initial='initial'
			animate='show'
			exit='exit'
			onAnimationComplete={() => setLoading(false)}
			key='loader'
		>
			<LoaderSvg />
		</motion.div>
	)
}

export default Loader
