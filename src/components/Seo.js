import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
	query SeoQuery {
		site {
			buildTime(formatString: "ddd, DD MMM YYYY hh:mm A")
			siteMetadata {
				defaultTitle: title
				defaultDescription: description
				defaultKeywords: keywords
				siteUrl
				defaultImage: image
			}
		}
	}
`
const SEO = ({ title, description, image, keywords }) => {
	const { pathname } = useLocation()
	const data = useStaticQuery(query)

	const { buildTime } = data.site.buildTime
	const author = 'Dee Adebayo'

	const {
		defaultTitle,
		defaultDescription,
		defaultKeywords,
		siteUrl,
		defaultImage,
	} = data.site.siteMetadata

	const seo = {
		title: (title && `${title}| ${author}`) || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
		keywords: `${defaultKeywords} ${keywords || null}`,
	}

	const personStructured = {
		'@type': 'Person',
		name: author,
		hasOccupation: {
			'@type': 'Occupation',
			name: 'Web Developer',
		},
		email: 'mailto:hi@deeadebayo.com',
		url: 'https://www.deeadebayo.com',
	}

	const schemaOrgWebPage = {
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
		<Helmet title={seo.title}>
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
			<script type='application/ld+json'>
				{JSON.stringify(schemaOrgWebPage)}
			</script>
		</Helmet>
	)
}

const MiniSEO = ({ title, description, image, keywords }) => {
	const { site } = useStaticQuery(query)

	const author = 'Dee Adebayo'

	const {
		defaultTitle,
		defaultDescription,
		defaultKeywords,
		siteUrl,
		defaultImage,
	} = site.siteMetadata

	const seo = {
		title: (title && `${title} | ${author}`) || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		keywords:
			(keywords && `${defaultKeywords}, ${keywords}`) || defaultKeywords,
	}

	return (
		<Helmet title={seo.title}>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			{seo.title && <meta property='og:title' content={seo.title} />}
			{seo.description && (
				<meta property='og:description' content={seo.description} />
			)}
			{seo.image && <meta property='og:image' content={seo.image} />}
			{seo.title && <meta name='twitter:title' content={seo.title} />}
			{seo.description && (
				<meta name='twitter:description' content={seo.description} />
			)}
			{seo.image && <meta name='twitter:image' content={seo.image} />}
		</Helmet>
	)
}

export { SEO, MiniSEO }

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

MiniSEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	keywords: PropTypes.string,
}

MiniSEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	keywords: null,
}
