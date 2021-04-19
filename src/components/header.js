import { Link } from "gatsby"
import React from "react"
import { rhythm } from '../utils/typography';

export default function Header({menuLinks}) {
    return (
        <header itemScope itemType="http://schema.org/Menu">
            <Menu links={menuLinks} />
        </header>
    )
}

function Menu({ links }) {
    const styles = {
        ul: {
            display: `flex`,
            flex: `1`,
            margin: `0`,
            padding: `0`
        },
        li: {
            marginRight: rhythm(0.4),
            listStyleType: `none`,
            marginBottom: `0`,
            fontSize: `1rem`
        }
    }

    return (
        <nav>
            <ul style={styles.ul}>
                {
                    links.map(
                        link => (
                            <li key={link.name} style={styles.li}>
                                <Button url={link.link} name={link.name}/>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

function Button({ url, name }) {
    return (
        <Link
            to = {url}
            itemProp = "url"
            className="link"
            getProps = {
                ({ isCurrent, isPartiallyCurrent }) => ({
                        style: {
                            color:
                                (
                                    name === 'Home' ? isCurrent : isPartiallyCurrent
                                )
                                ? `#ffffff` : `grey`,
                            textDecoration: `none`,
                        },
                    }
                )
            }
        >
            {name}
        </Link>
    )
}