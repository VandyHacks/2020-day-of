module.exports = {
	siteMetadata: {
		title: process.env.STATUS == null ? `VandyHacks VII` : `${process.env.STATUS} VandyHacks VII`,
		description: `VandyHacks VII: Retro Edition will be held on October 2-4. Applications are now open! Are you ready to code a masterpiece?`,
		author: `The VandyHacks Team`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `VandyHacks VII: Nashville's Premier Hackathon`,
				short_name: `VandyHacks VII`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/vhlogo.svg`, // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/,
				},
			},
		},
	],
};
