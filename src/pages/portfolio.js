import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from './posts.module.css'
import { Link, graphql } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

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
                className={styles.posts}
                itemType="http://schema.org/Portfolios"
                itemScope
            >
                {
                    posts.map(
                        post => {
                            const title = post.node.frontmatter.title || post.node.fields.slug
                            const link = post.node.fields.slug
                            const date = post.node.frontmatter.date
                            const tags = post.node.frontmatter.tags
                            const description = post.node.frontmatter.description
                            return (
                                <li key={link} className={styles.post}>
                                    <Post link={link} title={title} date={date} />
                                    <p className={styles.description}>{description}</p>
                                    <ul className={styles.taglist}>
                                        {
                                            tags.map(tag => <li className={styles.tag}>{tag}</li>)
                                        }
                                    </ul>
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
        <div className={styles.postblock}>
            <hr className={styles.posthr} />
            <p itemProp="datePosted" className={styles.postdate}>{date}</p>
            <h1 className={styles.posttitle}>
                <Link
                    to={link} 
                    itemProp="url" 
                    className={styles.postlink}
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
                        description
                        tags
                    }
                }
            }
        }
    }
`