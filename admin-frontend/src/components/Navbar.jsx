import { Link, useLocation } from 'react-router-dom'

function Navbar({ onLogout }) {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="admin-navbar">
      <div className="logo">
        <span className="logo-mark">K</span>
        <span className="logo-text">Admin Panel</span>
      </div>

      <div className="nav-links">
        <Link
          className={`nav-link ${isActive('/upload-project') ? 'active' : ''}`}
          to="/upload-project"
        >
          Upload Project
        </Link>

        <Link
          className={`nav-link ${isActive('/upload-certificate') ? 'active' : ''}`}
          to="/upload-certificate"
        >
          Upload Certificate
        </Link>

        <Link
          className={`nav-link ${isActive('/messages') ? 'active' : ''}`}
          to="/messages"
        >
          Messages
        </Link>

        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
