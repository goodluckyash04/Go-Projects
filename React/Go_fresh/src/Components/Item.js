import React from 'react'

export default function Item(props) {
  const price=props.price*10;
  const title=props.title
  const add= ()=>{
    props.addItem(title,price);
  }

  return (
    <div className="card mb-5" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
          <span className="position-absolute translate-middle badge rounded bg-success fs-5" style={{left:"2rem",top:"2rem" }}>₹ {(props.price*10).toFixed(2)}</span>
            <img src="http://gofresh-uk.com/wp-content/uploads/2021/04/Logo-Amr.png" className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title.slice(0,30)}...</h5>
              <p className="card-text">{props.desc.slice(0,40)}...</p>
              <p className="card-text">EXPIRY: {props.exp}</p> 
              <p className="text-end"><button className='btn btn-outline-success' onClick={add}>Add To Cart</button></p>
            </div>
          </div>
        </div>
      </div>
  )
}
