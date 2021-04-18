import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export default function About({ data }) {
  const author = data.site.siteMetadata.author
  const link = data.site.siteMetadata.resume
  const email = data.site.siteMetadata.email
  
  return (
    <Layout>
      <Seo title="About" type="website" slug="/about/" />
      <Content author={author} link={link} email={email} />
    </Layout>
  )
}

function Content({ author, link, email }) {
  return (
    <article itemScope itemType="http://schema.org/About">
      <p>
        Hi, I am <span itemProp="author" itemType="http://schema.org/Author">{author}</span>. I am a graduate student at <a itemProp="url" itemType="http://schema.org/Url" href="https://www.nthu.edu.tw" target="_blank" rel="noopener noreferrer">National Tsing Hua University</a> in Hsinchu, Taiwan.
        I am currenyly working on a computer vision related project.
      </p>
      <p>
        Feel free to send me an email anytime at <a itemProp="authorEmail" itemType="http://schema.org/AuthorEmail" href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        My resume can be downloaded <Resume link={link} />.
      </p>
    </article>
  )
}

function Resume({ link }) {
  return (
    <a
      itemProp="url"
      itemType="http://schema.org/Url"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
    here
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