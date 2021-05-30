import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"

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
    <article itemScope itemType="http://schema.org/About">
      <h1>Who am I?</h1>
      <p>
        I am <span itemProp="author" itemType="http://schema.org/Author">{author}</span>, and I am a Computer Science student based in Hsinchu, Taiwan.
      </p>
      <p>
        I got my Bachelor's degree in Computer Science at <ExternalLink address="https://www.nthu.edu.tw" title="National Tsing Hua University" /> in Hsinchu, Taiwan.
        Now, I am pursuing my Master's degree in Computer Science at the same university.
      </p>
      <p>
        So far, I have done a few Front-End side projects, including this website, and two Front-End internship programs during my undergraduate program.
      </p>
      <p>
        For now, I am working on an anomaly detection technique using deep learning as my research topic and a distributed deep learning system in a heterogeneous GPU cluster.
      </p>
      <p>
        For more informations, you can download my resume <ExternalLink address={link} title="here" />.
      </p>
      <p>
        Feel free to contact me anytime at <a itemProp="authorEmail" itemType="http://schema.org/AuthorEmail" href={`mailto:${email}`}>{email}</a>.
      </p>
    </article>
  )
}

function ExternalLink({ address, title}) {
  return (
    <a
      itemProp="url"
      itemType="http://schema.org/Url"
      href={address}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {title}
    </a>
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