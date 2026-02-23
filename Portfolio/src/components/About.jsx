import { useEffect } from 'react'

function About() {

    useEffect(() => {
        document.title = "About | Krish Modh"
    }, [])

    return (
        <div className="about">
            <h2 className="section-title">About Me</h2>

            <p className="about-text">
                I'm a B.Tech CSE student focused on Application Security and Cybersecurity.
                I explore how applications work internally, identify vulnerabilities, and build
                security-focused tools that help monitor, analyze, and protect systems.
                My background in full stack development allows me to understand both developer
                and attacker perspectives — helping me secure applications more effectively.
            </p>


            <div className="about-grid">

                {/* 1) Education */}
                <div className="card">
                    <h3>Education</h3>
                    <p>B.Tech CSE · Parul University</p>
                </div>

                {/* 2) Skill */}
                <div className="card">
                    <h3>Core Skills</h3>

                    <ul className="tag-list">

                        <li>OWASP Top 10</li>
                        <li>Web Application Security</li>
                        <li>API Security Fundamentals</li>
                        <li>Authentication & Session Security</li>
                        <li>Vulnerability Analysis</li>
                        <li>Log Analysis</li>

                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>REST APIs</li>
                        <li><li>Python Backend (Flask, Django)</li></li>
                        <li>MongoDB</li>
                        <li>MySQL Databases</li>

                        <li>Linux (Kali, Ubuntu)</li>
                        <li>Bash Scripting</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Postman</li>
                        <li>Python</li>
                        <li>JavaScript</li>

                    </ul>
                </div>

                {/* 3)Tools */}
                <div className="card">
                    <h3>Tools I Use</h3>

                    <ul className="tag-list">
                        <li>Burp Suite</li>
                        <li>Nmap</li>
                        <li>Wireshark</li>
                        <li>OWASP ZAP</li>
                        <li>Browser DevTools</li>

                        <li>Postman</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Cursor</li>

                        <li>Linux CLI</li>
                        <li>MongoDB Compass</li>
                        <li>MySQL Workbench</li>
                    </ul>
                </div>

                {/* 4) Interests */}
                <div className="card">
                    <h3>Personal Interests</h3>

                    <ul className="tag-list">
                        <li>Cybersecurity Exploration</li>
                        <li>Tech Research & Experimentation</li>
                        <li>Linux Customization</li>
                        <li>Learning New Tools</li>
                    </ul>
                </div>

                {/* 5) os know */}
                <div className="card">
                    <h3>Operating Systems</h3>
                    <ul className="tag-list">
                        <li>Kali Linux</li>
                        <li>Ubuntu</li>
                        <li>Linux (CLI)</li>
                        <li>Windows</li>
                    </ul>
                </div>

                {/* 6) what i do */}
                <div className="card">
                    <h3>What I Do</h3>
                    <p>
                        I analyze how applications work, identify security flaws, and build
                        practical tools that help detect, monitor, and prevent vulnerabilities
                        in real-world systems.
                    </p>
                </div>

                {/* 7) connetc */}
                <div className="card">
                    <h3>Connect With Me</h3>
                    <div className="social-links">

                        <a
                            href="https://github.com/krishmodh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn github"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/krish-modh-b38447300"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn linkedin"
                        >
                            LinkedIn
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About