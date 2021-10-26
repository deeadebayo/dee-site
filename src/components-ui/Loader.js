import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import LoaderSvg from './LoaderSvg'

const loaderStyles = css`
	width: 100%;
	background: green;
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
		initial: { height: '100vh', bottom: 0, opacity: 0, y: 0 },
		show: {
			height: '100vh',
			opacity: 1,
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
				duration: 1,
			},
		},
	}

	return (
		<>
			<motion.div
				css={loaderStyles}
				initial='initial'
				animate='show'
				variants={containerVariants}
				onAnimationComplete={() => setLoading(false)}
				key='loaderWrapper'
				exit='exitOut'>
				<LoaderSvg />
			</motion.div>
		</>
	)
}

export default Loader
