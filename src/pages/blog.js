import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function Blog({data}) {
    return (
        <Layout>
            <Seo title="Blog" type="website" slug="/blog/" />
            <Posts metadata={data} />
        </Layout>
    )
}

function Posts({ metadata }) {
    const posts = metadata.allMdx.edges
    const styles = {
        ol: {
            listStyle: `none`,
            margin: `0`,
            padding: `0`
        },
        li: {
            marginBottom: `3em` 
        }
    }
    return (
        <ol style={styles.ol} itemScope itemType="http://schema.org/Blogs">
            {
                posts.map(
                    post => {
                        const title = post.node.frontmatter.title || post.node.fields.slug
                        const link = post.node.fields.slug
                        const date = post.node.frontmatter.date
                        return (
                            <li key={link} style={styles.li}>
                                <Post link={link} title={title} date={date} />
                            </li>
                        )
                    }
                )
            }
        </ol>
    )
}

function Post({ link, title, date }) {
    const styles = {
        title: {
            margin: `0`
        },
        link: {
            textDecoration: `none`,
            color: `inherit`
        }
    }
    return (
        <>
            <h1 style={styles.title}>
                <Link 
                    to={link} 
                    itemProp="url" 
                    style={styles.link}
                    onClick={() => {
                            trackCustomEvent({
                                category: title,
                                action: "click",
                                label: "View blog"
                            })
                        }
                    } 
                >
                    <span itemProp="headline">{title}</span>
                </Link>
            </h1>
            <small itemProp="datePosted">{date}</small> 
        </>
    )
}

export const blogpostQuery = graphql`
    query blogpostQuery{
        allMdx(
            filter: {fields: {collection: {eq: "blog"}}, frontmatter: {published: {eq: true}}}, 
            sort: {fields: frontmatter___date, order: DESC}
        )   
        {
            edges{
                node {
                    fields{
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`