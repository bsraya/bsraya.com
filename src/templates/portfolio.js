import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import MdxElement from "../components/mdxelements"
import * as styles from './template.module.css'

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from '@mdx-js/react'

export default function portfolioTemplate({ data }) {
  return (
    <Layout itemScope itemType="http://schema.org/PostLayout">
      <Seo
        title={data.mdx.frontmatter.title}
        slug={data.mdx.fields.slug}
        type={data.mdx.frontmatter.type}
      />
      <article itemScope itemType="http://schema.org/Post">
        <div className={styles.container}>
          <p className={styles.date}>
            {data.mdx.frontmatter.date}
          </p>
          <h1 className={styles.title}>
            {data.mdx.frontmatter.title}
          </h1>
          <ul className={styles.taglist}>
            {
                data.mdx.frontmatter.tags.map(tag => <li>{tag}</li>)
            }
          </ul>
        </div>
        <MDXProvider components={MdxElement}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PortfolioQuery($slug: String) {
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