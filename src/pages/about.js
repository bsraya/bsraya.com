import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import ExternalLink from "../components/externallink"
import Introduction from "../components/introduction"
import Experience from "../components/experience"
import Education from "../components/education"

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
      <Experience />
      <Education />
      <p>
        For more informations, you can download my resume <ExternalLink address={link} title="here" />.
        Feel free to contact me anytime at <a itemProp="authorEmail" itemType="http://schema.org/AuthorEmail" href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  )
}



export const pageQuery = graphql`
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
