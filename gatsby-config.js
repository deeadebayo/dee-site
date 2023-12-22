require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: 'Adeolu Adebayo | Front-End Software Engineer',
		siteUrl: 'https://www.deeadebayo.com',
		keywords:
			"adeolu adebayo, dee adebayo, front-end developer, ui/ux, bachelor's, georgia state university, software implementation, web development, freelance, website building, front-end designer, full stack developer, front end developer, software engineer, css engineer, HTML, CSS, JavaScript, Node.js, React.js, Gatsby.js, Jamstack, GraphQL, PostgreSQL",
		description:
			"Hi, I'm Adeolu! Since 2014, I've enjoyed building accessible sites that function seamlessly on anything that can access the web. Thanks for visiting. It's nice to meet you!",
		image: '/images/icon.png',
		author: 'Adeolu Adebayo',
	},
	plugins: [
		'gatsby-plugin-emotion',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
			__key: 'images',
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-image',
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /src/,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: process.env.GOOGLE_TAG_MANAGER_ID,
				includeInDevelopment: false,
				routeChangeEventName: 'gatsby-route-change',
				enableWebVitalsTracking: true,
			},
		},
	],
}
