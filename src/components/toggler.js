import React, { useState } from "react"
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import "react-toggle/style.css"

export default function Toggler() {
    const [isDarkMode, setDarkMode] = useState('dark');

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        if (isDarkMode) {
            localStorage.setItem('theme', 'light')
        } else {
            localStorage.setItem('theme', 'dark')
        }
    };

    return (
        <>
            <DarkModeSwitch
                moonColor={isDarkMode ? 'white' : 'black'}
                sunColor={isDarkMode ? 'white' : 'black'}
                checked={isDarkMode}
                size={28}
                onClick={() => {
                    if (isDarkMode) {
                        document.body.classList.remove('dark')
                        toggleDarkMode(false)
                    }
                    else {
                        document.body.classList.add('dark');
                        toggleDarkMode(true);
                    }
                }}
            />
        </>
    )
}