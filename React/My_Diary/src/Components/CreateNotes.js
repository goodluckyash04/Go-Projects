import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function CreateNotes() {
  const navigate = useNavigate();
  const userId=localStorage.usernotes
  const [note, setNote] = useState({ title: "", detail: "" });
  const { title, detail} = note;
  const { id } = useParams();
  const fetchnotes = async (id) => {
    const response = await fetch(`http://localhost:3001/notes/${id}`, {
      method: "GET",
    });
    const json = await response.json();
    setNote({
      ...note,
      title: json.title,
      detail: json.detail,
    });
  };

  const add = async (title, detail,userId) => {
    const response = await fetch("http://localhost:3001/notes", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, detail,userId }),
    });
    const json = await response.json();
  };
  const addnotes = (e) => {
    e.preventDefault();
    add(title, detail,userId);
    setNote({ title: "", detail: "" });
  };

  const editnotes = async (id, title, detail) => {
    const response = await fetch(`http://localhost:3001/notes/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, detail }),
    });
    const json = await response.json();
  };
  const editn = (e) => {
    e.preventDefault();
    editnotes(id, title, detail);
    setNote({ title: "", detail: ""});
    navigate("/notes");
  };
  useEffect(() => {
    if (id) {
      fetchnotes(id);
    }
  }, []);
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="text-primary mb-4">Create New Ideas</h2>
        <form onSubmit={id ? editn : addnotes}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                name="detail"
                id="floatingTextarea"
                value={detail}
                onChange={(e) => setNote({ ...note, detail: e.target.value })}
              />
              <label htmlFor="floatingTextarea">Details</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mb-3">
            {id ? "Edit" : "Add"}
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
