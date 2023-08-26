import React from 'react'
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
  
         <nav className={`navbar navbar-expand-lg border-bottom border-secondary navbar-${props.mode} bg-${props.mode} mb-1`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Text Enhancer</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
          <Link className="nav-item nav-link" to="/temp">Temperature</Link>
          </li>
          <li class="nav-item dropdown">
          <Link className="nav-item nav-link" to="/registration">Registration</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-item nav-link" to="/quiz">Quiz</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-item nav-link" to="/search">Search</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-item nav-link" to="/random">Random</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-item nav-link" to="/tasks">Tasks</Link>
          </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>

            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
                 <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" onChange={()=>{props.darkmode()}} role="switch" id="switch" />
                  <label className={`form-check-label text-${props.mode === "dark"?"light":"dark"}`} htmlFor="switch" >Dark Mode</label>
                </div>
          </div>
        </div>
      </nav>
  )
}
