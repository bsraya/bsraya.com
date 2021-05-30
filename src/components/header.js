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
    return (
        <nav style={{ display: `flex` }}>
            <ul
                style={{
                    display: `flex`,
                    flex: `1`,
                    margin: `0 auto 0 0`,
                    padding: `0`,
                }}
            >
                {
                    links.map(
                        link => (
                            <li
                                style={{
                                    listStyleType: `none`,
                                    margin: `0 0.5rem 0 0`,
                                    paddingTop: `5px`
                                }}
                                key={link.name}
                            >
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
                        { textDecoration: `underline` } :
                        { textDecoration: `none` }
                    }
                )
            }
        >
            {name}
        </Link>
    )
}