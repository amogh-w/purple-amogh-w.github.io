import React from "react"
import { graphql } from "gatsby"
import General from "../layouts/general"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Page = ({ data: { mdx } }) => {
  return (
    <General title={mdx.frontmatter.title}>
      <article className="prose dark:prose-dark md:prose-lg lg:prose-xl">
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
    </General>
  )
}

export const pageQuery = graphql`
  query GetPage($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default Page
