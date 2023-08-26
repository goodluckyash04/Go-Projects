import React from "react";
import Product from "./Product.js"

export default function ProductList(props) {

  return (
    <div className="container my-5 " style={{"minHeight":"80vh"}}>
    {props.product.length>0  ? 
    props.product.map((item,key) =>
       <Product listItem={item} key={key} addproduct={props.addPr} minusproduct={props.minusPr} remove={props.removeP} index={key}/> 
        ) :<p className="text-center">Cart is Empty. Add Product to Cart</p>}
        
       {/* { props.product.map((item,key) =>
       <Product listItem={item} key={key} addproduct={props.addPr} minusproduct={props.minusPr} remove={props.removeP} index={key}/> 
        ) } */}
    </div>
  );
}
