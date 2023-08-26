import React from 'react'
import data from '../sample.json'
import Item from './Item'

export default function Products(props) {
    let product=data.products;
  return (
    <div className="container" style={{marginTop:"11rem",minHeight:"64vh"}}>
      <div className="row">
       
        {product.map((item,key)=>{
        return (
          <div className="col-6" key={key}>
   <Item title={item.title} desc={item.description} img={item.images} price={item.price} exp={item.expDate} addItem={props.addItem} />
   </div>
   )})}
        
      </div>
     </div>
    
 
  )
}
