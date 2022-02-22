import { Link } from 'gatsby'
import React from 'react'
import Toggler from './toggler'
import * as styles from './header.module.css'

export default function Header({menuLinks}) {
    return (
        <header className={styles.container} itemScope itemType="http://schema.org/Menu">
            <Menu links={menuLinks} />
        </header>
    )
}

function Menu({ links }) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {
                    links.map(
                        link => (
                            <li className={styles.li} key={link.name}>
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
        <>
            <Link
                to = {url}
                itemProp = "url"
                className={styles.headerlink}
                getProps = {
                    ({ isCurrent, isPartiallyCurrent }) => ({
                        style: 
                            (name === 'Home' ? isCurrent : isPartiallyCurrent)
                            ? {} : { textDecoration: `none`, color: `gray` }
                        }
                    )
                }
            >
                {name}
            </Link>
        </>
    )
}