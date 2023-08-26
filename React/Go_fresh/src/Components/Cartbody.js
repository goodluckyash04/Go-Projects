import React from 'react'

export default function Cartbody(props) {
  return (
    <div className="row mb-4">
    <div className="col-4">
      <h4>{props.title}</h4>
    </div>
    <div className="col-5">
      <button className="btn btn-danger" onClick={()=>props.minus(props.index)}>-</button>
      <button className="btn">{props.quantity}</button>
      <button className="btn btn-success" onClick={()=>props.plus(props.index)} >
        +
      </button>
    </div>
    <div className="col-2 fs-5">
      <p>₹  {(props.price*props.quantity).toFixed(2)}</p>
    </div>
    <div className="col-1 ">
    <button className="btn btn-danger" onClick={()=>props.remove(props.index)} >
        X
      </button>
    </div>
  </div>
  )
}
