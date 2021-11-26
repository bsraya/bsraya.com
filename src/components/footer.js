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

    return (
        <footer itemScope itemType="http://schema.org/Links">
            <Links
                email={query.site.siteMetadata.email}
                link={query.site.siteMetadata.resume}
            />
            <p style={{ margin: `0`, color: `gray` }}>
                © {new Date().getFullYear()} <span itemProp="author" itemType="http://schema.org/Author" name={query.site.siteMetadata.author}>{query.site.siteMetadata.author}</span>
            </p>
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
        <>
            <a
                itemProp="url"
                itemType="http://schema.org/Url"
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="footerLink"
            >
                {name}
            </a>
            <style jsx>{`
                .footerLink {
                    position: relative;
                    color: gray;
                    text-decoration: none;
                }
                .footerLink::before {
                    content: '';
                    width: 100%;
                    height: 2px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background: var(--fontColor);
                    transition: 0.4s transform ease-in-out;
                    transform: scale3d(0, 1, 1);
                    transform-origin: 0 50%;
                }
                .footerLink:hover::before {
                    transform: scale3d(1, 1, 1);
                }
                .footerLink:hover {
                    color: var(--fontColor);
                }
            `}</style>
        </>
    )
}