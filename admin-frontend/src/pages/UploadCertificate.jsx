import { useState } from 'react'
import { API_BASE_URL } from '../apiConfig'

function UploadCertificate({ token }) {
  const [form, setForm] = useState({
    title: '',
    issuer: '',
    year: '',
    cert_link: '',
  })
  const [image, setImage] = useState(null)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    Object.keys(form).forEach((key) => formData.append(key, form[key]))
    formData.append('image', image)

    try {
      const res = await fetch(`${API_BASE_URL}/admin/certificates`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      const data = await res.json()
      setMessage(data.success ? 'Certificate uploaded successfully!' : 'Upload failed.')
    } catch (err) {
      console.error(err)
      setMessage('Server error')
    }
  }

  return (
    <div className="upload-form-container">
      <h2>Upload Certificate</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          name="title"
          placeholder="Certificate Title"
          onChange={handleChange}
          required
        />
        <input
          name="issuer"
          placeholder="Issued By (e.g., Intel, Great Learning)"
          onChange={handleChange}
          required
        />
        <input
          name="year"
          placeholder="Year (e.g., 2024)"
          onChange={handleChange}
          required
        />
        <input
          name="cert_link"
          placeholder="Certificate / Drive / GitHub Link (optional)"
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button type="submit" className="btn-primary">
          Upload Certificate
        </button>

        {message && <p className="status-msg">{message}</p>}
      </form>
    </div>
  )
}

export default UploadCertificate
