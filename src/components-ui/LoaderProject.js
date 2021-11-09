import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import LoaderSvg from './LoaderSvg'

const loaderStyles = css`
	width: 100%;
	height: 100vh;
	background: hsl(174, 41%, 18%);
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
	.transition {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
`
const LoaderProject = ({ setLoading }) => {
	const containerVariants = {
		initial: {
			top: 0,
			right: 0,
			background: ['hsl(0, 0%, 90%)', 'hsl(174, 41%, 35%)'],
			// opacity: 0.7,
			y: '0vw',
		},
		show: {
			y: '-100vw',
			delay: 0.2,
			background: 'hsl(174, 41%, 35%)',
			// opacity: 1,
			transition: {
				// when: 'afterChildren',
				delay: 0.5,
				ease: [0.87, 0, 0.53, 1],
				duration: 1.5,
			},
		},
	}

	return (
		<motion.div
			css={loaderStyles}
			initial='initial'
			animate='show'
			variants={containerVariants}
			onAnimationComplete={() => setLoading(false)}
			key='loaderProject'
		>
			{/* <LoaderSvg /> */}
		</motion.div>
	)
}

export default LoaderProject
