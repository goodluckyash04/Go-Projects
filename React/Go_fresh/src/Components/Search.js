import React from 'react'
import data from '../sample.json'
import Item from './Item'
import { useState } from 'react';

export default function Search(props) {
    let product=data.products;
    const [value, setValue] = useState("")

  return (
    <div className="container" style={{marginTop:"11rem",minHeight:"65vh"}}>
        <input type="text" className="form-control" placeholder="Search..." aria-label="Username" onChange={(e)=>{setValue(e.target.value)}} />
        <div className="row mt-4">
       
       {value &&product.filter((item)=>{return (item.title).toLowerCase().includes(value.toLowerCase())}).map((item,key)=>{
       return (
         <div className="col-6" key={key}>
  <Item title={item.title} desc={item.description} img={item.images} price={item.price} exp={item.expDate} key={key} addItem={props.addItem} index={key} />
  </div>
  )})}
        </div>
    </div>
  )
}



 
{/* 
    <div className="container" style={{marginTop:"11rem",minHeight:"64vh"}}>
      <h4 className='text-center text-success'>Category : Frozen Products</h4>
     
        
      </div>
     
     */}

