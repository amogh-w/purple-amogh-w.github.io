const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const generalPages = await graphql(`
    query {
      allMdx(filter: { frontmatter: { contentType: { eq: "general" } } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const projectPages = await graphql(`
    query {
      allMdx(filter: { frontmatter: { contentType: { eq: "project" } } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const publicationPages = await graphql(`
    query {
      allMdx(filter: { frontmatter: { contentType: { eq: "publication" } } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (generalPages.errors) {
    reporter.panicOnBuild("🚨  ERROR: Generating General pages")
  }

  if (projectPages.errors) {
    reporter.panicOnBuild("🚨  ERROR: Generating Project pages")
  }

  if (publicationPages.errors) {
    reporter.panicOnBuild("🚨  ERROR: Generating Publication pages")
  }

  const general = generalPages.data.allMdx.edges
  const projects = projectPages.data.allMdx.edges
  const publications = publicationPages.data.allMdx.edges

  general.forEach(({ node }, index) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/page.js`),
      context: { id: node.id },
    })
  })

  projects.forEach(({ node }, index) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/page.js`),
      context: { id: node.id },
    })
  })

  publications.forEach(({ node }, index) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/page.js`),
      context: { id: node.id },
    })
  })
}
