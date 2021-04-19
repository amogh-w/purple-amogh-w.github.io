import React from "react"
import { graphql } from "gatsby"
import General from "../layouts/general"

const Publications = () => {
  return (
    <General title="Publications">
      <p>Publications</p>
    </General>
  )
}

export const query = graphql`
  query GetPublications {
    publications: allMdx(
      filter: {
        frontmatter: {
          isHighlight: { eq: true }
          contentType: { eq: "publication" }
        }
      }
    ) {
      nodes {
        id
        slug
        excerpt
        frontmatter {
          title
          authors
          pdf
          doi
        }
      }
    }
  }
`

export default Publications
