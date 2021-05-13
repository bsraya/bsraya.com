import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Footer() {
    const query = useStaticQuery(graphql`
    query {
        site {
            siteMetadata{
                author
                email
                resume
            }
        }
    }
    `)

    const styles = {
        footer: {
            margin: `2em 0 0 0`,
            padding: `0`,
            color: `var(--inactiveLink)`,
        },
        container: {
            margin: `2rem 0 0 0`,
        },
        small: {
            margin: `0`,
            fontSize: `0.9rem`
        }
    }

    return (
        <footer style={styles.footer} itemScope itemType="http://schema.org/Links">
            <Links
                style={styles.container}
                email={query.site.siteMetadata.email}
                link={query.site.siteMetadata.resume}
            />
            <small style={styles.small}>
                © {new Date().getFullYear()} <span itemProp="author" itemType="http://schema.org/Author" name={query.site.siteMetadata.author}>{query.site.siteMetadata.author}.</span>
            </small>
        </footer>
    )
}

function Links({email, link}) {
    return (
        <div>
            <Link
                url="https://www.github.com/nathansetyawan96/"
                name="Github"
            />
            &nbsp;
            <Link
                url="https://www.linkedin.com/in/bijonsetyawan/"
                name="LinkedIn"
            />
            &nbsp;
            <Link
                url={`mailto:${email}`}
                name="Email"
            />
            &nbsp;
            <Link
                url={link}
                name="Resume"
            />
        </div>
    )
}

function Link({ url, name }) {
    return (
        <a
            itemProp="url"
            itemType="http://schema.org/Url"
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            style={{ fontSize: `1rem`, color: `var(--inactiveLink)`, textDecoration: `none`, }}
            className="footerLink"
        >
            {name}
        </a>
    )
}