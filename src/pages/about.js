import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Introduction from "../components/introduction"

export default function About({ data }) {
  return (
    <Layout>
      <Seo title="About" type="website" slug="/about/" />
      <Content
        author={data.site.siteMetadata.author}
        link={data.site.siteMetadata.resume}
        email={data.site.siteMetadata.email}
      />
    </Layout>
  )
}

function Content({ author, link, email }) {
  return (
    <>
      <Introduction author={author} link={link} email={email}/>
    </>
  )
}

export const aboutPageQuery = graphql`
  query {
    site {
      siteMetadata{
        author
        email
        resume
      }
    }
  }
`
