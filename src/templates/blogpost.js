import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import MdxElement from "../components/mdxelements"
import Donation from "../components/donation"
import * as styles from './template.module.css'

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from '@mdx-js/react'

export default function blogpostTemplate({ data }) {
  return (
    <Layout itemScope itemType="http://schema.org/PostLayout">
      <Seo
        title={data.mdx.frontmatter.title}
        slug={data.mdx.fields.slug}
        type={data.mdx.frontmatter.type}
        description={data.mdx.frontmatter.description}
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
              data.mdx.frontmatter.tags.map(tag => <li key={tag} className={styles.tag}>{tag}</li>)
            }
          </ul>
        </div>
        <MDXProvider components={MdxElement}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
      <Donation />
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
        tags
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`