import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  // let x=document.getElementById("cartvalue")
// if(props.product.length!=null){
//     x.classList.remove("visually-hidden")
//     x.textContent=props.product.length
//    }else {
//      x.classList.add("visually-hidden")
//    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top" >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          GO-FOOD
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
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <div
              type="button"
              className=" position-relative me-3 "
            >
              <Link className="nav-link active" aria-current="page" to="/cart">
              Cart <i className="fa-solid fa-cart-arrow-down"></i>
              </Link>
              {props.product.length!==0?
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " >{props.product.length}</span>:""}
            </div>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
