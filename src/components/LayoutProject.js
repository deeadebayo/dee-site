import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

import GlobalStyles from '../styles/GlobalStyles'
import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'
import LoaderProject from '../components-ui/LoaderProject'

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
		& > .page {
			margin: 0 auto;
			display: flex;
			flex-flow: column;
			align-items: center;
		}
	}
	@media screen and (min-width: 476px) {
		main {
			& > .page {
				padding: 1rem;
				background: var(--color-page_neutral_background);
			}
		}
	}
	@media screen and (min-width: 769px) {
	}
	@media screen and (min-width: 1023px) {
		main {
			& > .page {
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

	return (
		<motion.div key='projectLoaderWrapper'>
			{loading ? (
				<motion.div key='loader'>
					<LoaderProject setLoading={setLoading} />
				</motion.div>
			) : (
				<motion.div css={wrapperStyle}>
					<GlobalStyles />
					<Banner />
					<Navbar />
					<motion.main>
						<div className='page'>{children}</div>
					</motion.main>
					<Footer />
				</motion.div>
			)}
		</motion.div>
	)
}
