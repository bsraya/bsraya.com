import { Link } from 'gatsby'
import React from 'react'
import Toggler from './toggler'

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
            padding: `0`,
        },
        li: {
            listStyleType: `none`,
            margin: `0 10px 0 0`
        }
    }

    return (
        <nav style={{ display: `flex` }}>
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
            <Toggler />
        </nav>
    )
}

function Button({ url, name }) {
    return (
        <Link
            to = {url}
            itemProp = "url"
            className="headerLink"
            getProps = {
                ({ isCurrent, isPartiallyCurrent }) => ({
                    style: 
                        (name === 'Home' ? isCurrent : isPartiallyCurrent)
                        ?
                        { textDecoration: `none` } :
                        { textDecoration: `underline` }
                    }
                )
            }
        >
            {name}
        </Link>
    )
}