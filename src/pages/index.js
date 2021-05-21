import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <Seo title="Home" type="website" slug="/" />
      <article itemScope itemType="http://schema.org/Author" style={{ textAlign: `left` }}>
        <p
          style={{
            fontSize: `2.25rem`,
            fontWeight: `bold`,
            marginBottom: `2rem`,
            color: `var(--headerColor)`
          }}
          itemProp="author"
          name={data.site.siteMetadata.author}
        >
          {data.site.siteMetadata.author}
        </p>
        <p 
          style={{
            fontSize: `1rem`,
            MarginBottom: `10px`
          }}
          itemProp="description"
        >
          An aspiring Machine Learning engineer
        </p>
        <p
          style={{
            fontSize: `1rem`,
            MarginBottom: `10px`
          }}
          itemProp="description"
        >
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