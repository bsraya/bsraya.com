import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import CustomMdxElement from "../components/customMdxElements"

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
      <article itemScope itemType="http://schema.org/Post">
        <div style={{ marginBottom: rhythm(1) }}>
          <p style={{ textDecoration: `underline`, color: `var(--fontColor)`, marginBottom: rhythm(0.25)}}>
            {data.mdx.frontmatter.date}
          </p>
          <h1 style={{ marginBottom: rhythm(1), fontWeight: `bold` }}>
            {data.mdx.frontmatter.title}
          </h1>
          <ul className="tag-list">
            {
                data.mdx.frontmatter.tags.map(tag => <li className="tag">{tag}</li>)
            }
          </ul>
        </div>
        <MDXProvider components={CustomMdxElement}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogpostQuery($slug: String) {
    mdx(fields: {slug: {eq: $slug}}){
      body
      fields {
        slug
      }
      frontmatter {
        type
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`