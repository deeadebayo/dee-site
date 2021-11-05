import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import LoaderSvg from './LoaderSvg'

const loaderStyles = css`
	width: 100%;
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
			height: '100vh',
			top: 0,
			opacity: 0.7,
			y: 0,
			// background: 'hsl(174, 41%, 36%)',
		},
		show: {
			height: ['100vh', '0vh'],
			opacity: 1,
			// background: 'hsl(174, 41%, 18%)',
			transition: {
				// when: 'afterChildren',
				delay: 0.5,
				ease: 'easeIn',
				duration: 1.8,
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
			key='loader'>
			{/* <LoaderSvg /> */}
		</motion.div>
	)
}

export default LoaderProject
