import { useEffect, useState } from 'react'
import { API_BASE_URL, BACKEND_BASE_URL } from '../apiConfig'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = "Projects | Krish Modh"

    const fetchProjects = async () => {
      try {
        const url = `${API_BASE_URL}/projects`
        // console.log('Projects API URL:', url)

        const res = await fetch(url)

        if (!res.ok) {
          throw new Error(`Status ${res.status}`)
        }

        const data = await res.json()
        // console.log('Projects data:', data)
        setProjects(data)
      } catch (err) {
        console.error('Projects fetch error:', err)
        setError('Unable to load projects right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <>
      <div className="projects">

        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">
            Security tools, development work & practical experiments
          </p>
        </div>

        {/* all projects */}
        {/* manual */}
        <div className="projects-grid">

          <div className="card project-card">
            <img
              src="/assets_projects/linux_log.png"
              alt="Linux Log Analyzer Bash Project"
              className="project-image"
            />

            <h3>Linux Log Analyzer (Bash)</h3>

            <p className="project-desc">
              A practical Linux security log analyzer written in Bash that detects failed SSH login
              attempts, invalid users, and suspicious IP addresses from authentication logs. The
              project demonstrates real-world Linux administration, log analysis, and basic security
              monitoring skills used in SOC and cybersecurity environments.
            </p>

            <div className="tech-stack">
              <span className="tech-badge">Bash</span>
              <span className="tech-badge">Linux</span>
              <span className="tech-badge">SSH</span>
              <span className="tech-badge">Log Analysis</span>
              <span className="tech-badge">Cybersecurity</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/KrishModh/Linux-Log-Analyzer"
                target="_blank"
                rel="noreferrer"
                className="btn github-btn"
              >
                View GitHub
              </a>

            </div>
          </div>

          <div className="card project-card">
            <img
              src="/assets_projects/hostel_mangment.png"
              alt="Hostel Management System"
              className="project-image"
            />

            <h3>Hostel Management System</h3>

            <p className="project-desc">
              A full-stack hostel management web application designed to manage student
              accommodation efficiently. The system includes separate Student and Rector
              panels for handling room allocation, leave applications, complaints,
              and mess menu management. Built as an academic project for
              Python with Full Stack Development.
            </p>

            <div className="tech-stack">
              <span className="tech-badge">React</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">FastAPI</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">CSS</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/KrishModh/Hostel-Managmment-System"
                target="_blank"
                rel="noreferrer"
                className="btn github-btn"
              >
                View GitHub
              </a>
            </div>
          </div>


          <div className="card project-card">
            <img
              src="/assets_projects/portfollio.png"
              alt="Personal Portfolio Website"
              className="project-image"
            />

            <h3>Personal Portfolio Website</h3>

            <p className="project-desc">
              A full-stack personal portfolio website to showcase my projects, skills,
              and certifications. It includes dynamic project data storage, contact
              handling through backend APIs, and a responsive modern UI built with React
              and Vite.
            </p>

            <div className="tech-stack">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Flask</span>
              <span className="tech-badge">MongoDB</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/KrishModh/Krish_Portfolio"
                target="_blank"
                rel="noreferrer"
                className="btn github-btn"
              >
                View GitHub
              </a>
              <a
                href="https://krish-modh-portfolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn demo-btn"
              >
                Live Demo
              </a>
            </div>
          </div>


          <div className="card project-card">
            <img
              src="/assets_projects/password_mannager.png"
              alt="Password Manager"
              className="project-image"
            />

            <h3>Password Manager</h3>

            <p className="project-desc">
              A secure password manager that allows users to save, update, and delete
              passwords for different websites. It supports both local storage and
              MongoDB, includes encryption, and uses React with a Node.js backend API.
            </p>

            <div className="tech-stack">
              <span className="tech-badge">React.js</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express.js</span>
              <span className="tech-badge">MongoDB</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/KrishModh/Password_Manager"
                target="_blank"
                rel="noreferrer"
                className="btn github-btn"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="card project-card">
            <img
              src="/assets_projects/to-do.png"
              alt="Todo App"
              className="project-image"
            />

            <h3>Todo App</h3>

            <p className="project-desc">
              A simple and responsive todo app where users can add, edit, mark complete,
              and delete tasks. Data is stored locally in the browser so tasks remain
              saved even after refresh. Built with React and Tailwind CSS.
            </p>

            <div className="tech-stack">
              <span className="tech-badge">React</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">Tailwind CSS</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/KrishModh/todo_app"
                target="_blank"
                rel="noreferrer"
                className="btn github-btn"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="card project-card">
            <img
              src="/assets_projects/weather.png"
              alt="Weather Forecast WebApp"
              className="project-image"
            />

            <h3>Weather Forecast WebApp</h3>

            <p className="project-desc">
              A web app where users can search any city and get live weather details such
              as temperature, humidity, AQI, wind speed, sunrise–sunset timing, and
              7-day forecast using real-time API data.
            </p>

            <div className="tech-stack">
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Flask</span>
              <span className="tech-badge">OpenWeather API</span>
              <span className="tech-badge">Oracle SQL</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/KrishModh/MyWeather"
                target="_blank"
                rel="noreferrer"
                className="btn github-btn"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="card project-card">
            <img
              src="/assets_projects/calc.png"
              alt="Smart Scientific Calculator"
              className="project-image"
            />

            <h3>Smart Scientific Calculator</h3>

            <p className="project-desc">
              A smart scientific calculator that supports basic arithmetic along with
              advanced functions like trigonometry, logarithms, powers, roots,
              factorial, and percentage. It has a clean UI and works with both buttons
              and keyboard input.
            </p>

            <div className="tech-stack">
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JavaScript</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/KrishModh/calculator"
                target="_blank"
                rel="noreferrer"
                className="btn github-btn"
              >
                View GitHub
              </a>
              <a
                href="https://smartt-calculatorr.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn demo-btn"
              >
                Live Demo
              </a>
            </div>
          </div>

        </div>


      </div>

      {/* automatiic */}

      {/* {loading && <p style={{ color: '#9ca3af' }}>Loading projects...</p>}
        {error && <p style={{ color: '#f97373' }}>{error}</p>}

        {!loading && !error && projects.length === 0 && (
          <p style={{ color: '#9ca3af' }}>No projects added yet.</p>
        )} */}

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="card project-card">

            {p.image_url && (
              <img
                src={
                  p.image_url.startsWith('/uploads')
                    ? `${BACKEND_BASE_URL}${p.image_url}${BACKEND_BASE_URL.includes('ngrok')
                      ? (p.image_url.includes('?') ? '&' : '?') +
                      'ngrok-skip-browser-warning=true'
                      : ''
                    }`
                    : p.image_url.startsWith('http')
                      ? p.image_url
                      : `${window.location.origin}${p.image_url}`
                }
                alt={p.title}
                className="project-image"
              />
            )}

            <h3>{p.title}</h3>
            <p className="project-desc">{p.description}</p>

            {p.tech_stack && (
              <div className="tech-stack">
                {p.tech_stack.split(',').map((t, i) => (
                  <span key={i} className="tech-badge">{t.trim()}</span>
                ))}
              </div>
            )}

            <div className="project-links">
              {p.github_link && (
                <a href={p.github_link} target="_blank" className="btn github-btn">
                  View GitHub
                </a>
              )}

              {p.demo_link && (
                <a href={p.demo_link} target="_blank" className="btn demo-btn">
                  Live Demo
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </>

  )
}

export default Projects
