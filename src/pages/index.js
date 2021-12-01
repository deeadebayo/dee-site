import React from 'react'
import { Helmet } from 'react-helmet'

<<<<<<< HEAD
import HomeAbout from "../components/HomeAbout";
import ProjectBoxList from "../components/ProjectBoxList";
import FadeInPage from "../components-ui/FadeInPage";

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Dee Adebayo | Front-End Web Developer</title>
			</Helmet>
			<FadeInPage pageName='index'>
				<HomeAbout />
				<ProjectBoxList />
			</FadeInPage>
		</>
	);
};
=======
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
>>>>>>> d5771be433b5a6d4aa177749599e5b01e777a4b4

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
