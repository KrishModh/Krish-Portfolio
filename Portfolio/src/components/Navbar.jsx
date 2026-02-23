import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'dark'
    )

    useEffect(() => {
        document.body.classList.remove('light-theme', 'dark-theme')
        document.body.classList.add(theme === 'light' ? 'light-theme' : 'dark-theme')
        localStorage.setItem('theme', theme)
    }, [theme])

    const linkClass = ({ isActive }) =>
        'site-nav-link' + (isActive ? ' active' : '')

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <nav className="site-navbar">
            <div className="site-logo">
                <span className="site-logo-dot" />
                <span className="site-logo-text">Krish.</span>
            </div>

            <div className="site-nav-links">
                <NavLink to="/" end className={linkClass}>
                    Home
                </NavLink>
                <NavLink to="/about" className={linkClass}>
                    About
                </NavLink>
                <NavLink to="/certificates" className={linkClass}>
                    Certificates
                </NavLink>
                <NavLink to="/projects" className={linkClass}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={linkClass}>
                    Contact
                </NavLink>

                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
