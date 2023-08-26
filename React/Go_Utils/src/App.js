import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import TempControl from './components/TempControl';
import Search from './components/Search';
import Registration from './components/Registration';
import Tasks from './components/Tasks';
import Quiz from './components/Quiz';
import Randompassword from './components/Randompassword';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
 const [dark, setDark] = useState("light")
 const [alert, setAlert] = useState(null)

 const alertmsg=(msg,type)=>{   
      setAlert({
        msg:msg,
        type:type
      })
      setTimeout(()=>setAlert(null),1000)
 }
 const darkmode=()=>{
         if(dark==="light"){
           setDark("dark") 
           document.body.style.backgroundColor="#212529"
           alertmsg("Dark Mode Enabled","success")
           document.title="Text Enhancer - Dark Mode"
           //to change title
          //  setInterval(() => {
          //   document.title="Dark Mode Enabled"
          //  }, 1000);
          //  setInterval(() => {
          //   document.title="Text Enhacer"
          //  }, 2000);
          }else{
            setDark("light")
            document.body.style.backgroundColor="white"
            alertmsg("Dark Mode Disabled","success")
            document.title="Text Enhancer"
          
 }
 }

 let storage;
if(localStorage.getItem("myTasks")=== null){
  storage=[]
}else{
  storage=JSON.parse(localStorage.getItem("myTasks"))
}

const [tasks, setTasks] = useState(storage)



const add=(task,detail,cat)=>{
   let newTasks=[...tasks]
   newTasks.push({
    task:task,
    detail:detail,
    category:cat
  })
    setTasks(newTasks)
  }
 const remove =(e)=>{
  let newTasks=[...tasks]
    newTasks.splice(e,1);
    setTasks(newTasks)
  }



  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks))
    }, [tasks])

  return (
    <>
   <BrowserRouter>
   <Navbar mode={dark} darkmode={darkmode} />
   <Alert alert={alert}/>
    <Routes>
      <Route path="/" element={<TextArea heading="Enter data" mode={dark} alertms={alertmsg}/>}></Route>
      <Route exact path="/about" element={<About mode={dark}/>}></Route>
      <Route path="/temp" element={<TempControl/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/random" element={<Randompassword/>} />
      
      <Route path="/tasks" element={<Tasks tasks={tasks} add={add} remove={remove} />} />
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
