import path from 'path'
const projectTemplate = path.resolve('./src/templates/ProjectPageDetails.js')
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
		query {
			allProjectPage {
				edges {
					node {
						slug
						coverImgPath
					}
				}
			}
		}
	`).then(res => {
		res.data.allProjectPage.edges.forEach(edge => {
			const slug = edge.node.slug
			const coverImgPath = edge.node.coverImgPath
			actions.createPage({
				path: `work/${slug}`,
				component: projectTemplate,
				context: { type: 'projectPage', slug, coverImgPath },
			})
		})
	})
}
