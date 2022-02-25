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
            size={33}
            onClick={() =>
              theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')
            }
          />
        ) : (
          <BsMoonFill
            size={33}
            onClick={() =>
              theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')
            }
          />
        )
      }
    </ThemeToggler>
  );
}
