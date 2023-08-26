import React from 'react'
import { Link } from 'react-router-dom'

export default function NoteItems(props) {

  return (
    <div className="card" >
    <div className="card-body">
      <h5 className="card-title">{props.item.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Category</h6>
      <p className="card-text">{props.item.description}</p>
      <Link to="" className="card-link" >Edit</Link>
      <Link to="" className="card-link" >Delete</Link>
    </div>
  </div>
  )
}
