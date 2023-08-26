import React from 'react'

export default function Total(props) {
  return (
    <div className="container" >
        <div className="row ">
            <button className="btn col-3 btn-danger" onClick={()=>{props.reset()}}>Reset</button>
            <div className="col-6 border-bottom text-center bg-secondary">₹ {props.subtotal}</div>
            <button className=" btn col-3 btn-primary">Pay Now</button>
        </div>
    </div>
  )
}