import path from 'path'
const projectTemplate = path.resolve('./src/templates/ProjectDetails.js')
const projectPages = require('./src/data/projectPages')

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
	const { createNode } = actions
	for (const page of projectPages) {
		const nodeMeta = {
			id: createNodeId(`project-${page.key}`),
			parent: null,
			children: [],
			internal: {
				type: `ProjectPage`,
				mediaType: `application/json`,
				contentDigest: createContentDigest(page),
			},
		}
		const node = { ...page, ...nodeMeta }
		createNode(node)
	}
}

exports.createPages = async function ({ actions, graphql }) {
	await graphql(`
		{
			allProjectPage {
				nodes {
					key
					stuff
					slug
					title
				}
			}
		}
	`).then(res => {
		res.data.allProjectPage.nodes.forEach(node => {
			const slug = node.slug
			actions.createPage({
				path: `work/${slug}`,
				component: projectTemplate,
				context: { type: 'projectPage', slug },
			})
		})
	})
}
