import React from "react"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const General = ({ data: { mdx } }) => {
  return (
    <div className="background flex flex-col items-center">
      <Navbar />
      <div className="container overflow-auto no-scrollbar">
        <div className="md:flex flex-col items-center mt-20 mb-6 p-4">
          <article class="prose dark:prose-dark md:prose-lg lg:prose-xl">
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </article>
        </div>
      </div>
    </div>
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

export default General
