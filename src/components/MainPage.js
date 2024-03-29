import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { useInView } from 'react-intersection-observer'

import Loader from '../components-ui/Loader'
import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'

const behindcontentStyle = css`
	background: var(--color-behind_content_background);
`

const wrapperStyle = css`
	box-sizing: border-box;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	margin: 0 auto;
	background: var(--color-white);

	main {
		background: white;
		display: flex;
		flex-flow: column;
		min-height: 100vh;
		position: relative;
		z-index: 3;
		.page {
			margin: 0 auto;
			display: flex;
			flex-flow: column nowrap;
			width: 100%;
			align-items: center;
			background: var(--color-white);
		}
	}
`

const MainPage = ({ children, location }) => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		loading
			? document.querySelector('body').classList.add('loading')
			: document.querySelector('body').classList.remove('loading')
	}, [loading])

	const containerReveal = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
				ease: [0.87, 0.5, 0.6, 1],
				duration: 0.4,
			},
		},
	}

	const navbarVariants = {
		hidden: { y: '-3vh', opacity: 0 },
		show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	}

	const pageVariants = {
		hidden: { opacity: 0.5 },
		show: { opacity: 1, transition: { duration: 0.8 } },
	}

	return (
		<motion.div key='mainContentWrapper'>
			{loading ? (
				<motion.div key='loader'>
					<Loader setLoading={setLoading} />
				</motion.div>
			) : (
				<motion.div css={behindcontentStyle}>
					<motion.div css={wrapperStyle}>
						<motion.div
							variants={containerReveal}
							initial='hidden'
							animate='show'
						>
							<motion.div key='navbar' variants={navbarVariants}>
								<Banner />
								<Navbar path={location.pathname} />
							</motion.div>
							<motion.main key='restOfPage' variants={pageVariants}>
								<div className='page'>{children}</div>
							</motion.main>
						</motion.div>
					</motion.div>
					<Footer />
				</motion.div>
			)}
		</motion.div>
	)
}

export default MainPage
