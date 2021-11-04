import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import LoaderSvg from './LoaderSvg'

const loaderStyles = css`
	width: 100%;
	background: purple;
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
		initial: { height: '100vh', bottom: 0, opacity: 1, y: 0 },
		show: {
			height: '100vh',
			transition: {
				when: 'afterChildren',
				ease: [0.87, 0, 0.13, 1],
				duration: 1.8,
			},
		},
		exitOut: {
			y: -200,
			height: 0,
			top: 0,
			transition: {
				ease: 'easeInOut',
				when: 'beforeChildren',
				duration: 5,
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
			key='loader'
			exit='exitOut'>
			<motion.svg
				class='transition'
				viewBox='0 0 100 100'
				preserveAspectRatio='none'>
				<path
					class='path'
					stroke='#000'
					stroke-width='2px'
					dur='10s'
					vector-effect='non-scaling-stroke'
					d='M 0 100 V 100 Q 50 100 100 100 V 100 z'
				/>
			</motion.svg>

			<LoaderSvg />
		</motion.div>
	)
}

export default LoaderProject
