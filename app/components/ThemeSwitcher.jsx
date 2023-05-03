// components/ThemeSwitcher.js

import { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem('isDarkMode')
        setIsDarkMode(isDark === 'true')
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
        localStorage.setItem('isDarkMode', isDarkMode)
    }, [isDarkMode])

    return (
        <button
            onClick={() => setIsDarkMode(prevState => !prevState)}
            className="rounded-full p-2 focus:outline-none"
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 22h-2a9 9 0 01-9-9v-2M11 3h2a9 9 0 019 9v2M7 7l-4 4m0 0l4 4m-4-4h18"
                    />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12.79A8.96 8.96 0 0012 7a8.96 8.96 0 00-9 5.79 8.04 8.04 0 000 8.42A8.96 8.96 0 0012 17a8.96 8.96 0 009 5.79 8.04 8.04 0 000-8.42"
                    />
                </svg>
            )}
        </button>
    )
}
