import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/notes/NoteState";
import Alert from "./Components/Alert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useState } from "react";
import Accountdetail from "./Components/Accountdetail";

function App(){
  const [alert, setAlert] = useState(null)
  const showalert=(msg,type)=>{
      setAlert({msg:msg,type:type})
      setTimeout(()=>{
       setAlert(null) 
      },2000)
  }
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home  alert={showalert}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login alert={showalert} />} />
            <Route exact path="/signup" element={<Signup alert={showalert} />} />
            <Route exact path="/account" element={<Accountdetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
