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
          }}
          itemProp="author"
          name={data.site.siteMetadata.author}
        >
          {data.site.siteMetadata.author}
        </p>
        <p itemProp="description" style={{maxWidth: `75ch`}}>
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