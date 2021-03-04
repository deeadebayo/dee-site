module.exports = {
	siteMetadata: {
		title: "dee-site",
	},
	plugins: [
		"gatsby-plugin-emotion",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-offline",
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images/`,
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /src/,
				},
			},
		},
	],
};
