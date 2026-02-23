import krish from '../assets/krish.png'
import { useEffect, useState } from 'react'

function Hero() {
    const roles = [
        "Application Security engineer",
        "Cybersecurity Enthusiast",
        "Linux & Log Analysiser",
        "Secure Backend Developer"
    ]

    const [currentRole, setCurrentRole] = useState(0)

    useEffect(() => {
        document.title = "Krish Modh | AppSec Portfolio"

        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="hero">
            <div className="hero-left">
                <p className="hero-tag">{roles[currentRole]}</p>

                <h1 className="hero-title">
                    Hi, I'm <span>Krish</span>
                </h1>

                <p className="hero-subtitle">
                    I focus on securing applications, analyzing vulnerabilities, and building security-focused tools.<br />
                    <span className="highlight-text">Explore my cybersecurity & AppSec projects ↓</span>
                </p>

                <div className="hero-actions">
                    <a href="/projects" className="btn primary-btn">
                        View Security Projects
                    </a>

                    <a href="/contact" className="btn secondary-btn">
                        Contact Me
                    </a>

                    <a href="/resume.pdf" className="btn resume-btn" download>
                        Download Resume
                    </a>
                </div>
            </div>

            <div className="hero-right">
                <div className="profile-ring">
                    <img src={krish} alt="Krish" className="profile-image-float" />
                </div>
            </div>
        </div>
    )
}

export default Hero