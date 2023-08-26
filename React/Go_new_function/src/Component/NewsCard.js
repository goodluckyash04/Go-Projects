import React from 'react'

export default function NewsArea(props) {
  return (
    <div className="card" >
    <img src={props.img?props.img :"https://www.dominiqueanselny.com/wp-content/themes/da-ny/img/menu/news.png"} className="card-img-top" alt="news" />
<div className="card-body">
    <h5 className="card-title">{props.title?props.title:"Title"}</h5>
    <p className="card-text">{props.description?props.description.slice(0, 95):"Description"}</p>
    <a href={props.url} className="btn btn-primary">Read More &gt;</a>
</div>
</div>
  )
}

