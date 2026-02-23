import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import UploadProject from './pages/UploadProject'
import UploadCertificate from './pages/UploadCertificate'
import Messages from './pages/Messages'
import Navbar from './components/Navbar'

function App() {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '')
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      localStorage.setItem('adminToken', token)
    } else {
      localStorage.removeItem('adminToken')
    }
  }, [token])

  const handleLogout = () => {
    setToken('')
    navigate('/login')
  }

  return (
    <div className="admin-app">
      {token && <Navbar onLogout={handleLogout} />}

      <Routes>
        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/upload-project" />
            ) : (
              <Login setToken={setToken} />
            )
          }
        />

        <Route
          path="/upload-project"
          element={
            token ? (
              <UploadProject token={token} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/upload-certificate"
          element={
            token ? (
              <UploadCertificate token={token} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/messages"
          element={
            token ? (
              <Messages token={token} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="*"
          element={
            <Navigate to={token ? '/upload-project' : '/login'} />
          }
        />
      </Routes>
    </div>
  )
}

export default App
