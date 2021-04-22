import React from "react"
import { graphql } from "gatsby"
import General from "../layouts/general"
import ProjectCard from "../components/ProjectCard"

const Projects = ({ data }) => {
  return (
    <General title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.projects.nodes.map(project => {
          return <ProjectCard key={project.id} project={project} />
        })}
      </div>
    </General>
  )
}

export const query = graphql`
  query GetProjects {
    projects: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { contentType: { eq: "project" } } }
    ) {
      nodes {
        id
        excerpt
        slug
        frontmatter {
          title
          github
          banner {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          tech
        }
      }
    }
  }
`

export default Projects
