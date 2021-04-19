import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { rhythm } from "../utils/typography"

export default function Home({data}){
  const author = data.site.siteMetadata.author
  return (
    <Layout>
      <Seo title="Home" type="website" slug="/" />
      <article itemScope itemType="http://schema.org/Author">
        <h1 style={{ marginBottom: rhythm(0.2), fontSize: `2em` }} itemProp="author" name={author}>
          {author}
        </h1>
        <p style={{ marginBottom: rhythm(0.25) }} itemProp="description">
          An aspiring Machine Learning engineer
        </p>
        <p itemProp="description">
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