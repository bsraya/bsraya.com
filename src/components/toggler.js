import React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "react-toggle/style.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

export default function Toggler() {
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <div>
                    <FontAwesomeIcon
                        icon={faAdjust}
                        onClick={() =>
                            theme === "dark" ? toggleTheme("light") : toggleTheme("dark")
                        }
                    />
                </div>
            )}
        </ThemeToggler>
    )
}