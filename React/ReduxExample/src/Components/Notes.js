import React from 'react'
import { Link } from 'react-router-dom'
import Details from './Details'
import NoteItems from './NoteItems'
import { useSelector } from "react-redux";

export default function Notes() {
  const notes =useSelector((state)=>state.notes)
  return (
    <div className="container-fluid mt-2">
    <div className="row">
      <div className="col-2">
        <Details/>
      </div>
      <div className="col-10 overflow-auto" style={{maxHeight:"90vh"}}>
      <div className='mt-3 text-center'>
      <Link to="">
      <button className='btn btn-primary disabled'>Add Note</button>
      </Link>
        </div>
        <div className='container mt-5'>
          <div className="row">
            {notes.map((item)=>{ 
              return <div className="col-4 mb-4" key={item.id}>
            <NoteItems item={item}/>
            </div>
            })
            }
          </div>
        </div>    
      </div>
    </div>
   </div>
  )
}
