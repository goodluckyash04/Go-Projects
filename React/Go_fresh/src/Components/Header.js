import React from 'react'
import icon from '../Components/logo.png' 
import { Link } from "react-router-dom";

export default function Header(props) {
    const logostyle={
        height:"6.5rem",
        borderRadius:"50%",
        position:"relative",
        left:"5rem",
       
    }
  return (
    <nav className="navbar navbar-expand-lg bg-white border-success border-bottom fixed-top" >
          <img src={icon} className="" style={logostyle} alt="" />
        <div className="container-fluid">
          <Link className="navbar-brand " style={{marginLeft:"8rem"}} to="/"><h2 className='text-success'>GO-Fresh</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
            <ul className="navbar-nav me-5 mb-2 mb-lg-0 fs-5 ">
              <li className="nav-item me-2 ">
                <Link className="nav-link active text-success" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link active" to="/products">Products</Link>
              </li>
              <li className="nav-item dropdown me-2 ">
                <Link className="nav-link dropdown-toggle active" to="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </Link> 
                <ul className="dropdown-menu me-2">
                  <li><Link className="dropdown-item" to="/products">All</Link></li>
                  <li><Link className="dropdown-item" to="/category/dairy">Dairy</Link></li>
                  <li><Link className="dropdown-item" to="/category/frozen">Frozen</Link></li>
                  <li><Link className="dropdown-item" to="/category/bakery">Bakery</Link></li>
                </ul>
              </li>
              <li className="nav-item position-relative">
                <Link className="nav-link active " to="/cart"><i className="fa-solid fa-cart-arrow-down"></i> Cart

        {props.item ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         {props.item}
        </span>:""}</Link>
    
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <Link className="btn btn-outline-success" to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
            </form>
          </div>
        </div>
      </nav>
  )
}
