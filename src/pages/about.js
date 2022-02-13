import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Introduction from "../components/introduction"

export default function About({ data }) {
  return (
    <Layout>
      <Seo title="About" type="about" slug="/about/" />
      <Introduction
        author={data.site.siteMetadata.author}
        email={data.site.siteMetadata.email}
      />
    </Layout>
  )
}

export const aboutPageQuery = graphql`
  query {
    site {
      siteMetadata{
        author
        email
      }
    }
  }
`
