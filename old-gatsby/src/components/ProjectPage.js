import { motion } from 'framer-motion'
import React from 'react'
import { css } from '@emotion/react'
import { useInView } from 'react-intersection-observer'

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
	background: var(--color-soft-white);

	main {
		background: var(--color-soft-white);
		display: flex;
		flex-flow: column;
		min-height: 100vh;
		position: relative;
		padding: 0;

		z-index: 3;
		.page {
			margin: 0 auto;
			display: flex;
			flex-flow: column nowrap;
			width: 100%;
			align-items: center;
		}
	}
	@media screen and (min-width: 476px) {
		main {
			.page {
				padding: 0 1rem;
				background: var(--color-soft-white);
			}
		}
	}
	@media screen and (min-width: 769px) {
	}
	@media screen and (min-width: 1023px) {
		main {
			.page {
				max-width: 1500px;
				padding: 0 2.5rem;
			}
		}
	}
`

const ProjectPage = ({ children, location }) => {
	const containerReveal = {
		navbarHidden: { y: '-3vh', opacity: 0.35 },
		pageHidden: { y: 100, opacity: 0.5 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.61, 0.2, 0.5, 1],
				duration: 0.4,
			},
		},
	}

	return (
		<motion.div key='projectContentWrapper' css={behindcontentStyle}>
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
		</motion.div>
	)
}

export default ProjectPage
