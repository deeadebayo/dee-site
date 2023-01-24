require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: 'Fullstack Web Developer | Dee Adebayo',
		siteUrl: 'https://www.deeadebayo.com',
		keywords:
			"dee adebayo, adeolu adebayo, front-end developer, ui/ux, bachelor's, georgia state university, software implementation, web development, freelance, website building, front-end designer, full stack developer, front end developer, software engineer, HTML, CSS, JavaScript, Node.js, React.js, Gatsby.js, Jamstack, GraphQL, PostgreSQL",
		description:
			"Hi, I'm Adeolu! Since 2014, I've enjoyed building accessible sites that function seamlessly on anything that can access the web. Thanks for visiting. It's nice to meet you!",
		image: '/images/icon.png',
		author: 'Dee Adebayo',
	},
	plugins: [
		'gatsby-plugin-emotion',
		'gatsby-plugin-react-helmet',
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
