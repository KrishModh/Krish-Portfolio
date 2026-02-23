import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../apiConfig'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    document.title = "Contact | Krish Modh"
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    setLoading(true)

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message')
      }

      setStatus('Message sent & saved successfully ✅')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('Failed to send message. Try again ❌')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-layout">
        <div className="contact-info">
          <p>
            Want to work together or have a project idea? Send me a message and I
            will get back to you.
          </p>
          <p>Email: krish2good1@gmail.com</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
            />
          </div>
          <button className="btn primary-btn" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p
              style={{
                marginTop: '0.8rem',
                fontSize: '0.9rem',
                color: status.includes('successfully') ? '#4ade80' : '#f97373'
              }}
            >
              {status}
            </p>
          )}

        </form>
      </div>
    </div>
  )
}

export default Contact
