import path from 'path'
const projectTemplate = path.resolve('./src/templates/ProjectDetails.js')

exports.createPages = async function ({ actions, graphql }) {
	await graphql(`
		{
			allSitePlugin {
				edges {
					node {
						id
					}
				}
			}
		}
	`).then(res => {
		res.data.allSitePlugin.edges.forEach(edge => {
			const slug = edge.node.id
			actions.createPage({
				path: `work/${slug}`,
				component: projectTemplate,
				context: { type: 'projectPage', slug },
			})
		})
	})
}
