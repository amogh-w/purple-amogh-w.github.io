import React from "react"
import { graphql } from "gatsby"
import General from "../layouts/general"
import PublicationCard from "../components/PublicationCard"

const Publications = ({ data }) => {
  return (
    <General title="Publications">
      <div className="grid xl:grid-cols-2 gap-4">
        {data.publications.nodes.map(publication => {
          return (
            <PublicationCard key={publication.id} publication={publication} />
          )
        })}
      </div>
    </General>
  )
}

export const query = graphql`
  query GetPublications {
    publications: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { contentType: { eq: "publication" } } }
    ) {
      nodes {
        id
        slug
        excerpt
        frontmatter {
          title
          authors
          pdf
          link
          doi
          banner {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default Publications
