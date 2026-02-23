import { useState } from 'react'
import { API_BASE_URL } from '../apiConfig'

function UploadProject({ token }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        tech_stack: '',
        github_link: '',
        demo_link: ''
    })
    const [image, setImage] = useState(null)
    const [message, setMessage] = useState('')

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
  e.preventDefault()

  const formData = new FormData()
  Object.keys(form).forEach((key) => formData.append(key, form[key]))
  formData.append('image', image)

  try {
    const res = await fetch(`${API_BASE_URL}/admin/projects`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        // ❌ NOTE: Don't set Content-Type when using FormData
      },
      body: formData,
    })

    const data = await res.json()
    setMessage(data.success ? 'Project Uploaded Successfully!' : 'Upload Failed')
  } catch (err) {
    setMessage('Server Error!')
  }
}

    return (
        <div className="upload-form-container">
            <h2>Upload New Project</h2>

            <form onSubmit={handleSubmit} className="upload-form">
                <input name="title" placeholder="Project Title" onChange={handleChange} required />

                <textarea name="description" placeholder="Description" rows="3" onChange={handleChange} required />

                <input name="tech_stack" placeholder="Tech Stack (comma separated)" onChange={handleChange} required />

                <input name="github_link" placeholder="GitHub Link" onChange={handleChange} required />

                <input name="demo_link" placeholder="Live Demo Link (optional)" onChange={handleChange} />

                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />

                <button type="submit" className="btn-primary">Upload Project</button>

                {message && <p className="status-msg">{message}</p>}
            </form>
        </div>
    )

}

export default UploadProject
