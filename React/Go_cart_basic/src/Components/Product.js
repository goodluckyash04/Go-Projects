import React from 'react'

export default function Product(props) {
  
    return (
        <div className="row my-3">
          <div className="col-5">
            <h3>
              {props.listItem.name}
              <span className="badge bg-success ms-2">₹{props.listItem.price}</span>
            </h3>
          </div>
          <div className="col-3">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-danger" onClick={()=>{props.minusproduct(props.index)}}>
                -
              </button>
              <button type="button" className="btn">
                {props.listItem.quantity}
              </button>
              <button type="button" className="btn btn-outline-success" onClick={()=>{props.addproduct(props.index)}}>
                +
              </button>
            </div>
          </div>
          <div className="col-3 text-center">₹ {props.listItem.quantity*props.listItem.price}
          </div>
          <button className="col-1 btn btn-danger" onClick={()=>{props.remove(props.index)}}>X</button>
        </div>
    )
}
