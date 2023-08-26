import React from "react";

export default function Noteitem({ notes,del,inx,updatenote,alert}) {
  return (
    <div className="col-md-6 mb-3 ">
      <div className="card border-0 border-bottom">
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{notes.tag}</h6>
          <p className="card-text">{notes.description}</p>
            <i className="fa-solid fa-pen text-success"  onClick={()=>{updatenote(notes)}}> </i>
            <i className="fa-solid fa-trash ms-3 text-danger"  onClick={()=>{del(inx);alert("note Deleted","success")}} ></i>
        </div>
      </div>
    </div>
  );
}
