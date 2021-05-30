import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <Seo title="Home" type="website" slug="/" />
      <article itemScope itemType="http://schema.org/Author" style={{ textAlign: `left` }}>
        <h1
          style={{
            fontSize: `2rem`,
            fontWeight: `bold`,
          }}
          itemProp="author"
          name={data.site.siteMetadata.author}
        >
          {data.site.siteMetadata.author}
        </h1>
        <p>
          I am an aspiring Machine Learning engineer, a Front-End developer, and a graduate student at National Tsing Hua University.
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