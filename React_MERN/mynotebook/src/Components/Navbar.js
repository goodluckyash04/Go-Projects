import React from "react";
import { Link,useLocation,useNavigate   } from "react-router-dom";


export default function Navbar() {
  let navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem('authtoken')
    navigate("/login")
  }
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/about">
          myNoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":null}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"?"active":null}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('authtoken')?
          <form className="d-flex" role="search">
            <Link className="btn btn-outline-light me-2" to="/login" role="button" >
            Login
            </Link>
            <Link className="btn btn-outline-light" to="/signup"  role="button">
              SignUP
            </Link>
          </form>:<> <Link className="nav-link text-light" aria-current="page" to="/account">
                Account Detail
              </Link><button className="btn btn-outline-light ms-4" onClick={logout}>
              Logout
            </button></>}
        </div>
      </div>
    </nav>
  );
}


// useEffect(() => {
//  console.log(location)
// }
