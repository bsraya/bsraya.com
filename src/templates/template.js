import React from "react"
import Layout from "../components/layout"
import MarkdownComponents from "../components/markdown_elements"
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
          <small style={{fontSize: `1rem`}}>
            {data.mdx.frontmatter.date}
          </small>
        </div>
        <MDXProvider components={MarkdownComponents}>
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