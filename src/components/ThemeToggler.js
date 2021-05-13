import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

function Toggler() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label style={{ marginLeft: `auto`}} for='checkbox'>
          <Toggle
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />{' '}
          <div className="slider round"></div>
        </label>
      )}
    </ThemeToggler>
  )
}

export default Toggler