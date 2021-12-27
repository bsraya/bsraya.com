import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"

import ExternalLink from "../components/externallink"
import Work from "../components/work"
import Education from "../components/education"

export default function Resume({ data }) {
  return (
      <Layout>
          <Seo title="Resume" type="website" slug="/resume/" />
          <Education />    
          <Work />
          <p>
            For more details, my resume can also be downloaded <ExternalLink address={data.site.siteMetadata.resume} text="here" />.
            Feel free to contact me anytime at <a itemProp="authorEmail" itemType="http://schema.org/AuthorEmail" href={`mailto:${data.site.siteMetadata.email}`}>{data.site.siteMetadata.email}</a>.
          </p>
      </Layout>
  )
}

export const resumePageQuery = graphql`
  query {
    site {
      siteMetadata{
        email
        resume
      }
    }
  }
`