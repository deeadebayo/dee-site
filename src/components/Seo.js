import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from '@reach/router'
import { useSiteMetaData } from '../hooks/use-site-metadata'

// TODO: make title: Dee Adebayo | Front-End Software Engineer

export const SEO = ({ title, description, image, keywords, children }) => {
	const { pathname } = useLocation(),
		data = useSiteMetaData(),
		author = 'Adeolu Adebayo',
		{
			buildTime,
			siteMetadata: {
				defaultTitle,
				defaultDescription,
				defaultKeywords,
				siteUrl,
				defaultImage,
			},
		} = data.site,
		seo = {
			title: (title && `${title}| ${author}`) || defaultTitle,
			description: description || defaultDescription,
			image: `${siteUrl}${image || defaultImage}`,
			url: `${siteUrl}${pathname}`,
			keywords:
				(keywords && `${defaultKeywords}, ${keywords}`) || defaultKeywords,
		},
		personStructured = {
			'@type': 'Person',
			name: author,
			hasOccupation: {
				'@type': 'Occupation',
				name: 'Software Engineer',
			},
			email: 'mailto:hi@deeadebayo.com',
			url: 'https://www.deeadebayo.com',
		},
		schemaOrgWebPage = {
			'@context': 'http://schema.org',
			'@type': 'WebPage',
			url: siteUrl,
			headline: 'Personal Site for Dee Adebayo',
			inLanguage: 'English',
			mainEntityOfPage: siteUrl,
			description: defaultDescription,
			name: defaultTitle,
			author: personStructured,
			copyrightHolder: personStructured,
			copyrightYear: '2019',
			creator: personStructured,
			publisher: personStructured,
			datePublished: '2019-01-01T10:30:00+01:00',
			dateModified: buildTime,
			image: {
				'@type': 'ImageObject',
				url: `${siteUrl}${defaultImage}`,
			},
		}

	return (
		<>
			<title>{seo.title}</title>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			{seo.url && <meta property='og:url' content={seo.url} />}
			{seo.title && <meta property='og:title' content={seo.title} />}
			{seo.description && (
				<meta property='og:description' content={seo.description} />
			)}
			{seo.image && <meta property='og:image' content={seo.image} />}
			<meta name='twitter:card' content='summary_large_image' />
			{/* {twitterUsername && (
				<meta name='twitter:creator' content={twitterUsername} />
			)} */}
			{seo.title && <meta name='twitter:title' content={seo.title} />}
			{seo.description && (
				<meta name='twitter:description' content={seo.description} />
			)}
			{seo.image && <meta name='twitter:image' content={seo.image} />}
			{children}
			<script type='application/ld+json'>
				{JSON.stringify(schemaOrgWebPage)}
			</script>
		</>
	)
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	keywords: PropTypes.string,
}

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	keywords: null,
}
