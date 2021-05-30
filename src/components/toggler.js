import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

function Toggler() {
  return (
    <>
      <ThemeToggler > 
        {({ theme, toggleTheme }) => (
          <label style={{paddingTop: `10px`}} for='checkbox'>
            <Toggle
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
              unchecked={theme === 'light'}
            />{' '}
            <div className="slider round"></div>
          </label>
        )}
      </ThemeToggler>
      </>
  )
}

export default Toggler