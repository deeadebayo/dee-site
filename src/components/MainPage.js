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

const MainPage = ({ children, location }) => {
	const containerReveal = {
		navbarHidden: { y: '-3vh', opacity: 0.35 },
		pageHidden: { y: 55, opacity: 0.5 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				when: 'beforeChildren',
				ease: 'easeIn',
				duration: 0.4,
			},
		},
	}
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		loading
			? document.querySelector('body').classList.add('loading')
			: document.querySelector('body').classList.remove('loading')
	}, [loading])

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
							key='navbar'
							variants={containerReveal}
							initial='navbarHidden'
							animate='visible'
						>
							<Banner />
							<Navbar path={location.pathname} />
						</motion.div>
						<motion.main
							key='restOfPage'
							variants={containerReveal}
							initial='pageHidden'
							animate='visible'
						>
							<div className='page'>{children}</div>
						</motion.main>
					</motion.div>
					<Footer />
				</motion.div>
			)}
		</motion.div>
	)
}

export default MainPage
