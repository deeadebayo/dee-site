import React from 'react'
import { Helmet } from 'react-helmet'

import HomeAbout from '../components/HomeAbout'
import ProjectBoxList from '../components/ProjectBoxList'
import FadeInPage from '../components-ui/FadeInPage'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
	<>
		<Helmet>
			<title>Dee Adebayo | Front-End Web Developer</title>
		</Helmet>
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
					height: 615
					aspectRatio: 1.33
					placeholder: TRACED_SVG
				)
			}
		}
		josh: file(relativePath: { eq: "work/work__jmdrums__cover.jpg" }) {
			childImageSharp {
				gatsbyImageData(
					layout: CONSTRAINED
					height: 615
					aspectRatio: 1.33
					placeholder: TRACED_SVG
				)
			}
		}
		ctkmc: file(
			relativePath: { eq: "work/work__ctkmc__tablet-and-phone.png" }
		) {
			childImageSharp {
				gatsbyImageData(
					layout: CONSTRAINED
					height: 615
					aspectRatio: 1.33
					placeholder: TRACED_SVG
				)
			}
		}
	}
`

export default IndexPage
