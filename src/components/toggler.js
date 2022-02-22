import React, { useState, useEffect } from "react"
import "react-toggle/style.css"
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function Toggler() {
    const [isDarkMode, setDarkMode] = useState(false);
    let theme = localStorage.getItem('theme')

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        if (isDarkMode) {
            localStorage.setItem('dark', isDarkMode)
        } else {
            localStorage.setItem('light', isDarkMode)
        }
    };

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            isDarkMode(true)
        } else if (localStorage.getItem('theme') === 'light') {
            isDarkMode(false)
        }
    }, [theme])

    return (
        <>
            <DarkModeSwitch
                moonColor={isDarkMode ? 'white' : 'black'}
                sunColor={isDarkMode ? 'white' : 'black'}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={28}
                onClick={() => {
                    if (isDarkMode) {
                        document.body.classList.remove('dark')
                        toggleDarkMode(false)
                        localStorage.setItem('theme', 'light')
                    }
                    else {
                        document.body.classList.add('dark');
                        toggleDarkMode(true);
                        localStorage.setItem('theme', 'dark')
                    }
                }}
            />
        </>
    )
}