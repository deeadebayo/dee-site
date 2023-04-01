import React from 'react'

import HomeAbout from '../components/HomeAbout'
import ProjectBoxList from '../components/ProjectBoxList'
import FadeInPage from '../components-ui/FadeInPage'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
	<>
		<FadeInPage pageName='index'>
			<HomeAbout />
			<ProjectBoxList projectImages={data} />
		</FadeInPage>
	</>
)

export const query = graphql`
	query {
		comingSoon: file(relativePath: { eq: "work/work__coming-soon.jpg" }) {
			childImageSharp {
				gatsbyImageData(
					layout: CONSTRAINED
					##height: 615
					width: 1330
					aspectRatio: 1.33
					placeholder: TRACED_SVG
					formats: [AUTO, WEBP]
				)
			}
		}
		josh: file(relativePath: { eq: "work/work__jmdrums__cover.jpg" }) {
			childImageSharp {
				gatsbyImageData(
					layout: CONSTRAINED
					##height: 615
					width: 1330
					aspectRatio: 1.33
					placeholder: TRACED_SVG
					formats: [AUTO, WEBP]
				)
			}
		}
		ctkmc: file(
			relativePath: { eq: "work/work__ctkmc__tablet-and-phone.png" }
		) {
			childImageSharp {
				gatsbyImageData(
					layout: CONSTRAINED
					##height: 615
					width: 1330
					aspectRatio: 1.33
					placeholder: TRACED_SVG
					formats: [AUTO, WEBP]
				)
			}
		}
	}
`

export default IndexPage
export const Head = () => <title>Dee Adebayo | Front-End Web Developer</title>
