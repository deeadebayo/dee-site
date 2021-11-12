import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedTextHeaders({
	children,
	disabled = false,
	...rest
}) {
	const letterAnimation = {
		initial: { y: 400 },
		animate: {
			y: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 1,
			},
		},
	}
	const animatedLetters = [...children].map((letter, key) => (
		<motion.span
			{...rest}
			variants={disabled ? null : letterAnimation}
			key={key}
		>
			{letter}
		</motion.span>
	))

	return animatedLetters
}
