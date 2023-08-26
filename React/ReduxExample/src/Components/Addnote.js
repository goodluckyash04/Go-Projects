import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Details from "./Details";

export default function Addnote() {
  const [data,setData] = useState({title:"",description:""})
  const {title,description} = data
  const dispatch = useDispatch()
  const add=(e)=>{
      e.preventDefault()
      dispatch({type:"add",payload:{title:title,description:description}})
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
            <form onSubmit={add}>
            <h2 className=" mb-5">Add Note</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
                placeholder="Title"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="description"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
