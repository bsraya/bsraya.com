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
      <p>
        Hi, I am <span itemProp="author" itemType="http://schema.org/Author">{author}</span>. I am a graduate student at <Link address="https://www.nthu.edu.tw" title="National Tsing Hua University" /> in Hsinchu, Taiwan.
        I am currently working on a computer vision related project.
      </p>
      <p>
        Feel free to send me an email anytime at <a itemProp="authorEmail" itemType="http://schema.org/AuthorEmail" href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        My resume can be downloaded <Link address={link} title="here" /> as well.
      </p>
    </article>
  )
}

function Link({ address, title}) {
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