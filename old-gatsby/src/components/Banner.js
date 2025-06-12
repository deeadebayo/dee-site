import React from 'react'
import { css } from '@emotion/react'

import './../scss/link-hover.scss'

const banner = css`
		top: 0;
		left: 0;
		padding: 1.5em;
		position: relative;
		width: 100%;
		z-index: 101;
		background-color: var(--color-dark-slate);

		display: flex;
		justify-content: center;
		align-items: center;

		.banner__content {
			display: flex;
			justify-content: center;
			text-align: center;
			flex: 1;
		}
	`,
	githubLink = `https://github.com/deeadebayo/dee-site`,
	Banner = () => (
		<header className='banner' css={banner}>
			<div className='banner__content'>
				<p className='lead' style={{ marginBottom: 0 }}>
					<a href={githubLink} className='banner-link'>
						Bless this mess - site under construction. Follow my progress on
						GitHub
					</a>
				</p>
			</div>
		</header>
	)

export default Banner
