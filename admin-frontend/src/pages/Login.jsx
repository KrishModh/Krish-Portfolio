import { useState } from 'react'
import { API_BASE_URL } from '../apiConfig'

function Login({ setToken }) {
    const [form, setForm] = useState({ username: '', password: '' })
    const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('')
        setLoading(true)

        try {
            const res = await fetch(`${API_BASE_URL}/admin/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })
            const data = await res.json()

            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Login failed')
            }

            setToken(data.token)
            setStatus('Login successful ✅')
        } catch (err) {
            console.error(err)
            setStatus('Invalid username or password ❌')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">Admin Login</h1>
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="admin"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button className="btn primary-btn" type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {status && (
                        <p
                            style={{
                                marginTop: '0.7rem',
                                fontSize: '0.9rem',
                                color: status.includes('✅') ? '#4ade80' : '#f97373'
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

export default Login
