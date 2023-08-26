import React from 'react'
import data from '../sample.json'
import Item from './Item'

export default function Frozen(props) {
    let product=data.products;
  return (
    <div className="container" style={{marginTop:"11rem",minHeight:"64vh"}}>
      <h4 className='text-center text-success'>Category : Frozen Products</h4>
      <div className="row mt-4">
       
        {product.filter((item)=>{return item.category==="Frozen"}).map((item,key)=>{
        return (
          <div className="col-6" key={key}>
   <Item title={item.title} desc={item.description} img={item.images} price={item.price} exp={item.expDate} key={key} addItem={props.addItem} index={key}/>
   </div>
   )})}
        
      </div>
     </div>
    
 
  )
}
