import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetaData = () => {
	const data = useStaticQuery(
		graphql`
			query {
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
	)

	return data
}
