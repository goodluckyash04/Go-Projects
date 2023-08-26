import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";

export default function Productitem(props) {
  const dispatch = useDispatch()
 
  return (
    <div className="card" >
    <div className="card-body">
      <h5 className="card-title">{props.item.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.item.price}</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to={`/editproduct/${props.item.id}`} className="card-link" >Edit</Link>
      <Link to="" className="card-link" onClick={()=>dispatch({type:"del",payload:props.item.id})}>Delete</Link>
    </div>
  </div>
  )
}
