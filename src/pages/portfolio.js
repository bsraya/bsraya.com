import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link, graphql } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { rhythm } from "../utils/typography"

export default function Portfolio({data}) {
    return (
        <Layout>
            <Seo title="Portfolio" type="website" slug="/portfolio/" />
            <h5>Portfolios</h5>
            <Posts metadata={data} />
        </Layout>
    )
}

function Posts({ metadata }) {
    const posts = metadata.allMdx.edges
    return (
        <>
            <ol
                style={{
                    listStyle: `none`,
                    margin: `0`,
                    padding: `0`
                }}
                itemType="http://schema.org/Portfolios"
                itemScope
            >
                {
                    posts.map(
                        post => {
                            const title = post.node.frontmatter.title || post.node.fields.slug
                            const link = post.node.fields.slug
                            const date = post.node.frontmatter.date
                            return (
                                <li key={link} style={{ marginBottom: `1em` }}>
                                    <Post link={link} title={title} date={date}/>
                                </li>
                            )
                        }
                    )
                }
            </ol>
        </>
    )
}

function Post({ link, title, date }) {
    return (
        <div>
            <hr style={{borderTop: `1px solid var(--fontColor)`, marginBottom: rhythm(0.5)}}/>
            <p itemProp="datePosted" style={{ color: `gray`, marginBottom: rhythm(0.25)}}>{date}</p>
            <h1 style={{ margin: `0` }}>
                <Link
                    to={link} 
                    itemProp="url" 
                    className="post"
                    onClick = { () => {
                            trackCustomEvent({
                                category: title,
                                action: "click",
                                label: "View a portfolio"
                            })
                        }
                    }    
                >
                    <span itemProp="headline">{title}</span>
                </Link>
            </h1>
        </div>
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