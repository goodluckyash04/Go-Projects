import React, { useEffect, useState } from 'react'
import CreateNotes from './CreateNotes';
import Notemodel from './Notemodel'


export default function Notes() {
    const [notes,setNotes] = useState([])
    const mynotes=async()=>{
        const response = await fetch('http://localhost:3001/notes', {
            method: 'GET'
          });
          const json= await response.json();
        setNotes(json.filter(item=>item.userId===localStorage.usernotes))
    }

      useEffect(()=>{
        mynotes()
      },[notes])

  return (
    <div className="container mt-5">
        <CreateNotes/>
    <div className="row">
    {notes.map((n)=>{
        return <Notemodel notes={n} key={n.id}/>
    })}
     </div>
        </div>
   
  )
}
