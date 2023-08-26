import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
export default function Header() {
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem('usernotes')
    navigate('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MY DIARY</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active " aria-current="page" to="/">HOME</Link>
          </li>
          {localStorage.usernotes?<><li className="nav-item">
            <Link className="nav-link active" to="/notes">NOTES</Link>
          </li>
          <li className="nav-item">
            <button className="btn border-0 " onClick={logout}>LOGOUT</button>
          </li>
          </>
          :<li className="nav-item">
            <Link className="nav-link" to="/login">LOGIN</Link>
          </li>
          }
        </ul>
      </div>
    </div>
  </nav>
  )
}
