import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { BsMoonFill } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';

export default function Toggler() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) =>
        // if theme is dark
        theme === 'dark' ? (
          <BsSun
            style={{ display: `flex`, margin: `auto` }}
            onClick={() =>
              theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')
            }
          />
        ) : (
          <BsMoonFill
            style={{ display: `flex`, margin: `auto` }}
            onClick={() =>
              theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')
            }
          />
        )
      }
    </ThemeToggler>
  );
}
