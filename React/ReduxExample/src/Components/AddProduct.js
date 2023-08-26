import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Details from "./Details";

export default function AddProduct() {
  const navigate =useNavigate()
  const {id} = useParams()
  const [data,setData] = useState({title:"",price:""})
  const {title,price} = data
  const rid =Math.floor(Math.random()*997+3);

  const dispatch = useDispatch()
  const product = useSelector((state)=>state.product)
  useEffect(()=>{
    if(id){
      const myproduct = product.filter((p)=>p.id===id)
      setData({title:myproduct[0].title,price:myproduct[0].price})
  }
},[]) 
  const add=(e)=>{
    e.preventDefault()
    dispatch({type:"add",payload:{title:title,price:price,id:rid}})
    navigate("/products")
}
const edit=  (e)=>{
  e.preventDefault()
  navigate("/products")
   dispatch({type:"edit",payload:{title:title,price:price,id:id}})
    
}
  
  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-2">
          <Details />
        </div>
        <div className="col-10 overflow-auto mt-5" style={{ maxHeight: "90vh" }}>
          <div className="row justify-content-center">
            <div className="col-4">
            <form onSubmit={id?edit:add}>
            <h2 className=" mb-5">{id?"Edit Product":"Add Product"}</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                aria-describedby="emailHelp"
                placeholder="Title"
                onChange={(e)=>{setData({...data,title:e.target.value})}}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Price"
                value={price}
                onChange={(e)=>{setData({...data,price:e.target.value})}}
              />
            </div>
            <button type="submit" className="btn btn-primary">
            {id?"EDIT":"ADD"}
            </button>
          </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
