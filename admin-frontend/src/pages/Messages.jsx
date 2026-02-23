import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../apiConfig'

function Messages({ token }) {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchMessages = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/admin/messages`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            if (!res.ok) throw new Error('Failed to load messages')

            const data = await res.json()
            setMessages(data)
        } catch (err) {
            console.error(err)
            setError('Unable to load messages.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMessages()
    }, [token])

    const handleMarkRead = async (id) => {
        try {
            const res = await fetch(`${API_BASE_URL}/admin/messages/${id}/read`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            const data = await res.json()
            if (!data.success) return

            setMessages((prev) =>
                prev.map((m) =>
                    m.id === id ? { ...m, is_read: 1 } : m
                )
            )
        } catch (err) {
            console.error('mark read error', err)
        }
    }

    const total = messages.length
    const unread = messages.filter((m) => !m.is_read).length

    return (
        <div className="messages-page">
            <h2>Messages</h2>

            {loading && <p className="status-msg">Loading...</p>}
            {error && <p className="status-msg error">{error}</p>}

            {!loading && !error && total === 0 && (
                <p className="status-msg">No messages yet.</p>
            )}

            {!loading && !error && total > 0 && (
                <>
                    <div className="messages-table-wrapper">
                        <table className="messages-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    {/* <th>Received At</th> */}
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((m) => (
                                    <tr key={m.id} className={m.is_read ? 'row-read' : 'row-unread'}>
                                        <td>{m.name}</td>
                                        <td>{m.email}</td>
                                        <td>{m.message}</td>
                                        {/* <td>{m.created_at}</td> */}
                                        <td>{m.is_read ? 'Read' : 'Unread'}</td>
                                        <td>
                                            <button
                                                className="mark-btn"
                                                onClick={() => handleMarkRead(m.id)}
                                                disabled={m.is_read}
                                            >
                                                {m.is_read ? 'Done' : 'Mark as read'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="message-counts">
                        <span>Total Messages: {total}</span>
                        <span>Unread: {unread}</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default Messages
