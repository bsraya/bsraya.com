import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function Portfolio({data}) {
    return (
        <Layout>
            <Seo title="Portfolio" type="website" slug="/portfolio/" />
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
        <ol style={styles.ol} itemScope itemType="http://schema.org/Portfolios">
            {
                posts.map(
                    post => {
                        const title = post.node.frontmatter.title || post.node.fields.slug
                        const link = post.node.fields.slug
                        const date = post.node.frontmatter.date
                        return (
                            <li key={link} style={styles.li}>
                                <Post link={link} title={title} date={date}/>
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
            color: `var(--linkColor)`
        }
    }
    return (
        <>
            <h1 style={styles.title}>
                <Link 
                    to={link} 
                    itemProp="url" 
                    style={styles.link}
                    onClick = { () => {
                            trackCustomEvent({
                                category: title,
                                action: "click",
                                label: "View portfolio"
                            })
                        }
                    }    
                >
                    <span itemProp="headline">{title}</span>
                </Link>
            </h1>
            <small style={{ color: `#808080` }} itemProp="datePosted">{date}</small>
        </>
    )
}

export const portfolioQuery = graphql`
    query portfolioQuery{
        allMdx(
            filter: {fields: {collection: {eq: "portfolio"}}, frontmatter: {published: {eq: true}}},  
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