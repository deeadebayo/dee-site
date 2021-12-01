import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import LoaderSvg from './LoaderSvg'

const loaderStyles = css`
<<<<<<< HEAD
	width: 100%;
	height: 100vh;
	background: hsla(39, 98%, 58%, 1);
=======
	z-index: 9999;
	width: 100%;
	height: 100vh;
	background: var(--color-page_neutral_background);
>>>>>>> d5771be433b5a6d4aa177749599e5b01e777a4b4
	display: flex;
	justify-content: center;
	transform-origin: center;
	align-items: center;
<<<<<<< HEAD
	padding: 4rem;
	position: absolute;

	svg {
		display: flex;
		max-height: 18vh;
	}
`
const Loader = ({ setLoading }) => {
	const containerVariants = {
		hidden: { opacity: 0.6 },
		show: {
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 1.75,
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
				exit='exitOut'
				variants={containerVariants}
				onAnimationComplete={() => console.log(`complete loader parent`)}>
				<LoaderSvg setLoading={setLoading} />
			</motion.div>
		</>
=======
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
>>>>>>> d5771be433b5a6d4aa177749599e5b01e777a4b4
	)
}

export default Loader
