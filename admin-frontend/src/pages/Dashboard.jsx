import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../apiConfig'

function Dashboard({ token, onLogout }) {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const loadMessages = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(`${API_BASE_URL}/admin/messages`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await res.json()

            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Failed to load messages')
            }

            setMessages(data.messages)
        } catch (err) {
            console.error(err)
            setError('Failed to load messages')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadMessages()
    }, [])

    return (
        <div className="dashboard">
            <header className="dash-header">
                <h1>Admin Dashboard</h1>
                <button className="btn secondary-btn" onClick={onLogout}>
                    Logout
                </button>
            </header>

            <section className="dash-section">
                <h2>Contact Messages</h2>

                {loading && <p style={{ color: '#9ca3af' }}>Loading...</p>}
                {error && <p style={{ color: '#f97373' }}>{error}</p>}

                {!loading && !error && messages.length === 0 && (
                    <p style={{ color: '#9ca3af' }}>No messages yet.</p>
                )}

                <div className="messages-list">
                    {messages.map((m) => (
                        <div key={m.id} className="card message-card">
                            <div className="msg-header">
                                <strong>{m.name}</strong> <span>{m.email}</span>
                            </div>
                            <p className="msg-body">{m.message}</p>
                            {m.created_at && (
                                <p className="msg-time">Received: {m.created_at}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Dashboard
