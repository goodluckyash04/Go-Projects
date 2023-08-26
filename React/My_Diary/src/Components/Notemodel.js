import React from "react";
import { Link } from "react-router-dom";
export default function Notemodel(props) {
  const deletenotes = async (id) => {
    const response = await fetch(`http://localhost:3001/notes/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="col-md-4 mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.notes.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted"></h6>
          <p className="card-text">{props.notes.detail}</p>
          <Link to={`/editnote/${props.notes.id}`}>
            <i className="fa-solid fa-pen-to-square text-warning"></i>
          </Link>
          <i
            className="fa-solid fa-trash text-danger ms-3"
            onClick={() => {
              deletenotes(props.notes.id);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
