import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from './index.module.css'

export default function Home({data}){
  const author = data.site.siteMetadata.author
  return (
    <Layout>
      <Seo title="Home" type="website" slug="/" />
      <article itemScope itemType="http://schema.org/Author" style={{ textAlign: `left` }}>
        <p className={styles.author} itemProp="author" name={author}>
          {author}
        </p>
        <p className={styles.description} itemProp="description" name>
          An aspiring Machine Learning engineer
        </p>
        <p className={styles.description} itemProp="description">
          A Front-End developer 
        </p>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata{
        author
      }
    }
  }
`