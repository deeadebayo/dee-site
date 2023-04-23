import { useStaticQuery, graphql } from 'gatsby'
export const query = graphql`
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
