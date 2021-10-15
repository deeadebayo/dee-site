import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import LoaderSvg from './LoaderSvg'

const loaderStyles = css`
	width: 100%;
	height: 100vh;
	background: var(--color-gray_pale);
	display: flex;
	justify-content: center;
	transform-origin: center;
	align-items: center;
	padding: 4rem;
	position: absolute;

	svg {
		display: flex;
		max-height: 18vh;
	}
`
const Loader = ({ setLoading }) => {
	const containerVariants = {
		hidden: { opacity: 0.4 },
		show: {
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 1.8,
			},
		},
		exitOut: {
			opacity: 0,
			y: -100,
			transition: {
				ease: 'easeInOut',
				duration: 0.8,
			},
		},
	}
	return (
		<>
			<motion.div
				css={loaderStyles}
				initial='hidden'
				animate='show'
				key='loaderWrapper'
				exit='exitOut'
				variants={containerVariants}>
				<LoaderSvg setLoading={setLoading} />
			</motion.div>
		</>
	)
}

export default Loader
