import React from "react"
import Layout from "../components/layout"
import CustomMdxElement from "../components/custom-mdx-element"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from '@mdx-js/react'
import { rhythm } from "../utils/typography"

export default function Template({ data }) {
  return (
    <Layout itemScope itemType="http://schema.org/PostLayout">
      <Seo
        title={data.mdx.frontmatter.title}
        slug={data.mdx.fields.slug}
        type={data.mdx.frontmatter.type}
      />
      <article
        itemScope
        itemType="http://schema.org/Post"
      >
        <div style={{ marginBottom: rhythm(1) }}>
          <h1 style={{ margin: `0` }}>
            {data.mdx.frontmatter.title}
          </h1>
          <small style={{ color: `#808080` }}>
            {data.mdx.frontmatter.date}
          </small>
        </div>
        <MDXProvider components={CustomMdxElement}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($slug: String) {
    mdx(fields: {slug: {eq: $slug}}){
      body
      fields {
        slug
      }
      frontmatter {
        type
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`