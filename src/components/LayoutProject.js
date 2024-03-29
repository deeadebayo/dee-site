import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'
import LoaderProject from '../components-ui/LoaderProject'

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

export default function LayoutProject({ children }) {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		loading
			? document.querySelector('body').classList.add('loading')
			: document.querySelector('body').classList.remove('loading')
	}, [loading])

	const containerReveal = {
		navbarHidden: { y: '-3vh', opacity: 0.35 },
		pageHidden: { y: 100, opacity: 0.5 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: -1.2,
				when: 'beforeChildren',
				ease: [0.61, 0.2, 0.5, 1],
				duration: 0.4,
			},
		},
	}

	return (
		<>
			{loading ? (
				<motion.div key='projectLoader'>
					<LoaderProject setLoading={setLoading} />
				</motion.div>
			) : (
				<motion.div key='projectPageWrapper'>
					<motion.div key='contentWrapper' css={behindcontentStyle}>
						<motion.div css={wrapperStyle}>
							<motion.div
								key='navbarProject'
								variants={containerReveal}
								initial='navbarHidden'
								animate='visible'
							>
								<Banner />
								<Navbar />
							</motion.div>
							<motion.main
								key='restOfPage'
								variants={containerReveal}
								initial='pageHidden'
								animate='visible'
							>
								<div className='page'>{children}</div>
							</motion.main>
							<Footer />
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</>
	)
}
