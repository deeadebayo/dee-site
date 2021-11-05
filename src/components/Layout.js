import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

import GlobalStyles from '../styles/GlobalStyles'
import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from '../components-ui/Loader'
import FadeInPage from '../components-ui/FadeInPage'

const wrapperStyle = css`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	margin: 0 auto;
	background: var(--color-behind_page_background);

	main {
		background: var(--color-page_neutral_background);
		display: flex;
		flex-flow: column;
		min-height: 100vh;
		position: relative;
		padding: 1rem;
		z-index: 3;
		.page {
			margin: 0 auto;
			display: flex;
			flex-flow: column;
			align-items: center;
		}
	}
	@media screen and (min-width: 476px) {
		main {
			.page {
				padding: 1rem;
				background: var(--color-page_neutral_background);
			}
		}
	}
	@media screen and (min-width: 769px) {
	}
	@media screen and (min-width: 1023px) {
		main {
			.page {
				max-width: 1500px;
				padding: 1.1rem;
			}
		}
	}
`

const Layout = ({ children, location: { key } }) => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		loading
			? document.querySelector('body').classList.add('loading')
			: setTimeout(() => {
					document.querySelector('body').classList.remove('loading')
			  }, 1000)
		return () =>
			clearTimeout(
				setTimeout(() => {
					document.querySelector('body').classList.remove('loading')
				}, 1000)
			)
	}, [loading])

	return (
		<>
			{loading ? (
				<motion.div key='loader'>
					<Loader setLoading={setLoading} />
				</motion.div>
			) : (
				<motion.div key='pageWrapper'>
					<div css={wrapperStyle}>
						<GlobalStyles />
						<motion.div animate={{ opacity: [0.3, 1], y: [-20, 0] }}>
							<Banner />
							<Navbar path={location.pathname} />
						</motion.div>
						<motion.main>
							<div className='page'>{children}</div>
						</motion.main>
						<Footer />
					</div>
				</motion.div>
			)}
		</>
	)
}

export default Layout
