import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'

const projectBoxStyles = css`
    width: clamp(16rem, 90vw, 70rem);
    margin: 4em 0;
    display: grid;
    grid-template-areas:
      'title'
      'project'
      'project';
    grid-template-columns: 1fr;

    .project-box:nth-of-type(2) {
      a {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }

    .project-box:nth-of-type(5) {
      a {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }

    .project-box {
      grid-area: project;
      grid-column: span 1;
      grid-row: span 1;
      display: flex;
      width: 100%;

      &__title {
        grid-area: title;
        text-align: center;
      }

      a,
      a > img {
        overflow: hidden;
        text-decoration: none;
        border: none;
        position: relative;
      }

      &__img {
        transform: translateY(0);
        transition: transform 0.25s ease-in-out 0.01s;
        transition-delay: 0.01s;
        display: flex;
      }

      &:hover .project-box__img {
        transform: translateY(-65px);
      }

      &__detail-box {
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateY(108px);
        height: 6em;
        width: 100%;
        transition: transform 0.2s ease-in-out;
        display: flex;
        flex-flow: row nowrap;

        &__details {
          display: flex;
          flex-flow: row nowrap;
          flex-basis: 100%;
          position: relative;

          &--text {
            padding: 1.5em 1.875em;
            color: var(--color-text-black);
            ${'' /* background: a color; */};
          }

          &__title {
            flex: 1;
          }

          &__description {
            flex: 1;
            margin-bottom: 0.5em;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
        }
      }

      &:hover .project-box__detail-box {
        transform: translateY(0);
      }

      @media screen and (min-width: 1170px) {
        &__detail-box {
          height: 6em;
        }
      }

      &__link {
        text-decoration: none;
        overflow: hidden;
        display: flex;
      }
    }
    @media screen and (min-width: 769px) {
      grid-template-areas:
        'title title'
        'project project'
        'project project';
      grid-template-columns: 1fr 1fr;

      .project-box:nth-of-type(2) {
        a {
          border-top-left-radius: 5px;
        }
      }

      .project-box:nth-of-type(3) {
        a {
          border-top-right-radius: 5px;
        }
      }

      .project-box:nth-of-type(4) {
        a {
          border-bottom-left-radius: 5px;
        }
      }

      .project-box:nth-of-type(5) {
        a {
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 0px;
        }
      }
      .project-box {
        &__detail-box {
        }
      }
    }

    @media screen and (min-width: 1025px) {
    }
  `,
  ProjectBox = ({ title, description, link, image, alt, bg }) => (
    <div className="project-box">
      <Link className="project-box__link" to={link}>
        <div className="project-box__img">
          <GatsbyImage
            image={image}
            alt={alt}
            objectFit="cover"
            objectPosition
          />
        </div>
        <span
          className="project-box__detail-box"
          css={css`
            background-color: ${bg};
          `}
        >
          <div className="project-box__detail-box__details">
            <div className="project-box__detail-box__details--text">
              <span className="project-box__detail-box__details__description">
                {description}
              </span>
              <span className="project-box__detail-box__details__title">
                <h2>{title}</h2>
              </span>
            </div>
            <div className="project-box__detail-box__details--icon"></div>
          </div>
        </span>
      </Link>
    </div>
  )

export default function ProjectBoxList() {
  const data = useStaticQuery(
      graphql`
        query {
          comingSoon: file(relativePath: { eq: "work/work__coming-soon.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: TRACED_SVG
                height: 615
                aspectRatio: 1.33
              )
            }
          }
          josh: file(relativePath: { eq: "work/work__jmdrums__cover.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: TRACED_SVG
                height: 615
                aspectRatio: 1.33
              )
            }
          }
          ctkmc: file(
            relativePath: { eq: "work/work__ctkmc__tablet-and-phone.png" }
          ) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: TRACED_SVG
                height: 615
                aspectRatio: 1.33
              )
            }
          }
        }
      `,
    ),
    colorPrimary = 'hsl(358, 100%, 68%)',
    colorSecondary = 'hsl(175, 100%, 33%)',
    colorAccent = 'hsl(16, 97%, 58%)',
    colorRare = 'hsl(39, 98%, 58%)',
    projectData = [
      {
        id: 1,
        title: 'joshmanueldrums.com',
        description: 'Website and ecommerce',
        backgroundColor: colorPrimary,
        link: '/work/jmdrums',
        image: data.josh.childImageSharp.gatsbyImageData,
        alt: 'Josh project image',
      },
      {
        id: 2,
        title: 'ctkmedcenter.com',
        description: 'Website & copywriting',
        backgroundColor: colorAccent,
        link: '/work/ctkmedcenter',
        image: data.ctkmc.childImageSharp.gatsbyImageData,
        alt: 'ctmedcenter project image',
      },
      {
        id: 3,
        title: 'Title',
        description: 'Website',
        backgroundColor: colorRare,
        link: '/work/',
        image: data.ctkmc.childImageSharp.gatsbyImageData,
        alt: 'Josh project image',
      },
      {
        id: 4,
        title: 'Github Projects',
        description: 'Playground',
        backgroundColor: colorPrimary,
        link: '/work/',
        image: data.comingSoon.childImageSharp.gatsbyImageData,
        alt: 'Coming soon image',
      },
    ]

  return (
    <div css={projectBoxStyles}>
      <div className="project-box__title">
        <h2>Featured Projects</h2>
      </div>
      {projectData.map((project) => (
        <ProjectBox
          alt={project.alt}
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
          key={`hp${project.id}`}
          bg={project.backgroundColor}
        />
      ))}
    </div>
  )
}
