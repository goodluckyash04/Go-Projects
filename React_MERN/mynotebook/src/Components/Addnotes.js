import React, { useState } from "react";

export default function Addnotes({ add }) {
  const [detail, setDetail] = useState({ title: "", description: "", tag: "" });

  const onchange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary">ADD NOTES</h1>
      <form
        className=" border-bottom"
        onSubmit={(e) => {
          e.preventDefault();
          add(detail.title, detail.description, detail.tag);
          setDetail({title:"",description:"",tag:""})
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onchange}
            value={detail.title}
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onchange}
            value={detail.description} 
            minLength={5}
            required
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onchange}
            value={detail.tag} 
            //   onChange={(e)=>{setDetail({...detail,tag:e.target.value})}}
          />
        </div>

        <button  disabled={detail.title.length<3 || detail.description.length <5} type="submit" className="btn btn-primary mb-4">
          ADD
        </button>
      </form>
    </div>
  );
}
