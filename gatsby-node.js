const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === "Mdx") {
      const value = createFilePath({ node, getNode })
      const parent = getNode(node.parent)
      let collection = parent.sourceInstanceName

      if(collection === "blog") {
        createNodeField({
          name: `slug`,
          node,
          value: `/blog${value}`,
        })
      } else {
        createNodeField({
          name: `slug`,
          node,
          value: `/portfolio${value}`,
        })
      }

      createNodeField({
        node,
        name: "collection",
        value: collection,
      })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    // Destructure the createPage function from the actions object
    const { createPage } = actions

    const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            body
            fields {
              slug
            }
            frontmatter{
              title
              type
              date
            }
          }
        }
      }
    }
    `)

  if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(post => {
    var templatePath = (post.node.frontmatter.type == 'blog') ?
      `${__dirname}/src/templates/blogpostTemplate.js` :
      `${__dirname}/src/templates/portfolioTemplate.js`
    
      createPage({
          // This is the slug you created before
          // (or `node.frontmatter.slug`)
          path: post.node.fields.slug,
          // This component will wrap our MDX content

          component: path.resolve(templatePath),
          // You can use the values in this context in
          // our page layout component
          context: {
            slug: post.node.fields.slug,
          },
      })
  })
}