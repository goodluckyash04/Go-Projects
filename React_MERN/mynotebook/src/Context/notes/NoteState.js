// import NoteContext from "./NoteContext";
import { useState, React ,createContext } from "react";

export const NoteContext = createContext();

export default function NoteState(props){
  const host ="http://localhost:5000"
  const [notes, setNotes] = useState([]);
  // .........................................Get all notes.................
  const getNotes = async()=>{
    // API call
    const response = await fetch(`${host}/api/note/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem("authtoken")
      },
    });
    const json = await response.json()
    setNotes(json)
  }
  // .............................................Add Note.................
  const addnote = async (title,description,tag) => {
    // API call
    const url = `${host}/api/note/addnote`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem("authtoken")
      },
        body: JSON.stringify({title,description,tag})
    });
    // client side
    const note = await response.json();
    setNotes(notes.concat(note))
  };
  // ............................................Edit Note.................
  const editnote = async (id,title,description,tag) => {
    //api calling fetch api header
    const url = `${host}/api/note/updatenote/${id}`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem("authtoken")
      },
        body: JSON.stringify({id,title,description,tag})
    });
    const json= response.json(); 
    

    // logic for client side
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index=0;index< notes.length;index++){
      const element=newNotes[index];
      if(element._id === id){
        newNotes[index].title=title
        newNotes[index].description=description
        newNotes[index].tag=tag
        break;
      }
    }
    setNotes(newNotes)
  };
  //...................................... Delete Note.................
  const deletenote = async(id) => {
  
      // API call
      const url = `${host}/api/note/deletenote/${id}`
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem("authtoken")
        },
      });
      const json = await response.json()
      setNotes(json)

      const newNotes=notes.filter((note)=>{return note._id !== id})
      setNotes(newNotes)
  };

  return (
    <NoteContext.Provider value={{ notes,deletenote,addnote,editnote,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};



//value ={state:state,update:update}}

