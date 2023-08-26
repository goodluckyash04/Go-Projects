import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
export default function Navbar() {
  const cart = useSelector((state) => state.cart)
  const balance = useSelector((state) => state.balance)

  return (
    <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">ReduxTasks</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Our Offering</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
              <li className="nav-item">
                  <span className="nav-link link-primary active" >Cart: {cart}</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link link-primary">Balance: {balance}</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
  )
}
       