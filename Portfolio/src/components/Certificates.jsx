import { useEffect, useState } from 'react'
import { API_BASE_URL, BACKEND_BASE_URL } from '../apiConfig'

function Certificates() {
  const [certs, setCerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = "Certificates | Krish Modh"

    const fetchCerts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/certificates`)

        if (!res.ok) throw new Error('Failed to load certificates')

        const data = await res.json()
        setCerts(data)
      } catch (err) {
        console.error('Certificates fetch error:', err)
        setError('Unable to load certificates right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchCerts()
  }, [])

  return (
    <>

      <section className="certificates">

        <div className="section-header">
          <h2 className="section-title">Certificates</h2>
          <p className="section-sub">
            Learning milestones & verified achievements
          </p>
        </div>
        
        {/* all certi photos */}
        {/* manual */}
        <div className="cert-grid">
          <div className="card cert-card">
            <img
              src="/assets_certificate/Ai IBM.png"
              alt="Getting Started with Artificial Intelligence"
              className="cert-image"
            />

            <h3>Getting Started with Artificial Intelligence</h3>
            <p className="cert-issuer">Issued by: IBM</p>
            <p className="cert-year">Year: 2025</p>

            <a
              href="https://www.credly.com/badges/78c33fa5-6715-47c4-b0e5-14583c1a3646"
              target="_blank"
              rel="noreferrer"
              className="btn github-btn"
            >
              View Certificate
            </a>
          </div>

          <div className="card cert-card">
            <img
              src="/assets_certificate/Cyber security IBM.png"
              alt="Cyber Security Fundamentals"
              className="cert-image"
            />

            <h3>Cyber Security Fundamentals</h3>
            <p className="cert-issuer">Issued by: IBM</p>
            <p className="cert-year">Year: 2025</p>

            <a
              href="https://www.credly.com/badges/faad07fb-1974-43b4-8f27-7f37c82d4c06"
              target="_blank"
              rel="noreferrer"
              className="btn github-btn"
            >
              View Certificate
            </a>
          </div>

          <div className="card cert-card">
            <img
              src="/assets_certificate/python.png"
              alt="Python"
              className="cert-image"
            />

            <h3>Python</h3>
            <p className="cert-issuer">Issued by: IBM</p>
            <p className="cert-year">Year: 2025</p>

            <a
              href="https://courses.etrain.skillsnetwork.site/certificates/91639064b13c47b492a0a6609ed285fa"
              target="_blank"
              rel="noreferrer"
              className="btn github-btn"
            >
              View Certificate
            </a>
          </div>

          <div className="card cert-card">
            <img
              src="/assets_certificate/html.png"
              alt="HTML and CSS"
              className="cert-image"
            />

            <h3>HTML and CSS</h3>
            <p className="cert-issuer">Issued by: Certiport</p>
            <p className="cert-year">Year: 2025</p>
          </div>

          <div className="card cert-card">
            <img
              src="/assets_certificate/js.png"
              alt="JavaScript"
              className="cert-image"
            />

            <h3>JavaScript</h3>
            <p className="cert-issuer">Issued by: Certiport</p>
            <p className="cert-year">Year: 2025</p>
          </div>

          <div className="card cert-card">
            <img
              src="/assets_certificate/Oracle AI.png"
              alt="AI Foundations Associate"
              className="cert-image"
            />

            <h3>AI Foundations Associate</h3>
            <p className="cert-issuer">Issued by: Oracle University</p>
            <p className="cert-year">Year: 2025</p>
          </div>

          <div className="card cert-card">
            <img
              src="/assets_certificate/geminii.png"
              alt="Gemini & Beyond: Your AI Toolkit for Success"
              className="cert-image"
            />

            <h3>
              Gemini &amp; Beyond: Your AI Toolkit for Success (Workshop Participation)
            </h3>

            <p className="cert-issuer">
              Issued by: Google Student Ambassadors – Parul University
            </p>

            <p className="cert-year">Year: 2025</p>
          </div>
        </div>

        {/* automatic */}

        {/* {loading && <p style={{ color: '#9ca3af' }}>Loading certificates...</p>}
        {error && <p style={{ color: '#f97373' }}>{error}</p>}

        {!loading && !error && certs.length === 0 && (
          <p style={{ color: '#9ca3af' }}>No certificates added yet.</p>
        )} */}

        <div className="cert-grid">
          {certs.map((c) => (
            <div key={c.id} className="card cert-card">
              {c.image_url && (
                <img
                  className="cert-image"
                  src={
                    c.image_url.startsWith('/uploads')
                      ? `${BACKEND_BASE_URL}${c.image_url}`
                      : c.image_url.startsWith('http')
                        ? c.image_url
                        : `${window.location.origin}${c.image_url}`
                  }
                  alt={c.title}
                />
              )}

              <h3>{c.title}</h3>
              <p className="cert-issuer">Issued by: {c.issuer}</p>
              <p className="cert-year">Year: {c.year}</p>

              {c.cert_link && (
                <a
                  href={c.cert_link}
                  target="_blank"
                  className="btn github-btn"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Certificates
