import React, { useEffect, useState, useContext, useRef } from "react";
import {useNavigate } from "react-router-dom";
import { NoteContext } from "../Context/notes/NoteState";
import Addnotes from "./Addnotes";
import Noteitem from "./Noteitem";

export default function Notes(props) {
  const mynote = useContext(NoteContext);
  let navigate=useNavigate()
  const { notes, getNotes, deletenote, addnote, editnote } = mynote;
  useEffect(() => {
    if(localStorage.getItem('authtoken')){
      getNotes();
      //eslint-disable-next-line
    }else{
      navigate("/login")
    }
  }, []);

  const ref = useRef(null); //initial value or activity null
  const refClose = useRef(null); //initial value or activity null
  const [detail, setDetail] = useState({id:"", etitle: "", edescription: "", etag: "" });

  const updateNote = (currentNote) => {
    ref.current.click();  //auto click on launch demo modal
    setDetail({
      id:currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    
  };

  const onchange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };
  const handelclick = (e) => {
    editnote(detail.id, detail.etitle, detail.edescription, detail.etag);
    refClose.current.click();
    props.alert("note has been updated","success")
  };
  return (
    <>
      <Addnotes add={addnote} />

      <button
        type="button"
        className="btn btn-primary d-none "
        data-bs-toggle="modal"
        ref={ref}
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={detail.etitle}
                    aria-describedby="emailHelp"
                    onChange={onchange}
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
                    id="edescription"
                    name="edescription"
                    value={detail.edescription}
                    onChange={onchange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={detail.etag}
                    onChange={onchange}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                ref={refClose}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={detail.etitle.length<3 || detail.edescription.length <5}
                onClick={handelclick}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h1 className="text-center text-primary my-3 ">MY NOTES</h1>
        {notes.length!==0?notes.map((nts, key) => {
          return (
            <Noteitem
              notes={nts}
              key={nts._id}
              updatenote={updateNote}
              del={deletenote}
              alert={props.alert}
              inx={nts._id}
            />
          );
        }):<p className="text-center fs-5 text-secondary">Empty!! You don't have Any thaughts to complete...</p>}
      </div>
    </>
  );
}
