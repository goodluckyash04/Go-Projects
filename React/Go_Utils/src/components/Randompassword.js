import React, { useState } from 'react';
import RandomNumber from './RandomNumber'

export default function Randompassword() {
  const char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const [length, setLength] = useState(7)
  const [password, setPassword] = useState("")
 

  const random=(l,c)=>{
    let newpass=""
    for (var i = 0; i <= l; i++) {
      var randomNumber = Math.floor(Math.random() * c.length);
      newpass += c.substring(randomNumber, randomNumber +1)
     }
     setPassword(newpass)
  }
  const copy=()=>{
    navigator.clipboard.writeText(password)
  }

  
 
  return (
    <>
    <div className="row">
      <div className="col-md-6">
      <div className="container mt-5 p-5 border">
      <div className="row text-center justify-content-around">
        <div className="col-md-4 ">
          <input className="border-top" type="text" id='min' onChange={(e)=>setLength(e.target.value-1)} placeholder="Enter Length" />
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <h6 className='text-center'>Random Password</h6>
        <h1 className='col-md-4 text-center text-primary '>{password}</h1>
      </div>
      <div className='text-center mt-4 '>
      <button className='btn btn-success' onClick={()=>random(length,char)}>Generate</button>
      <button className='btn btn-primary ms-5' onClick={copy}>Copy</button>
        </div>
    </div>
      </div>
      <div className="col-md-6">
        <RandomNumber/>
      </div>
    </div>
    
   
      
    </>
  )
}





//  {/*
 
//  const char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   const [length, setLength] = useState(7)
//   const [password, setPassword] = useState("")
//    const random=(l,c)=>{
//     let newpass=""
//     for (var i = 0; i <= l; i++) {
//       var randomNumber = Math.floor(Math.random() * c.length);
//       newpass += c.substring(randomNumber, randomNumber +1)
//      }
//      setPassword(newpass)
//   }
//   const copy=()=>{
//     navigator.clipboard.writeText(password)
//   }
//  <div className="container mt-5 p-5 border">
//       <div className="row text-center justify-content-around">
//         <div className="col-4 ">
//           <input className="border-top" type="text" id='min' onChange={(e)=>setLength(e.target.value-1)} placeholder="Enter Length" />
//         </div>
//       </div>
//       <div className="row mt-5 justify-content-center">
//         <h6 className='text-center'>Random Password</h6>
//         <h1 className='col-4 text-center text-primary '>{password}</h1>
//       </div>
//       <div className='text-center mt-4 '>
//       <button className='btn btn-success' onClick={()=>random(length,char)}>Generate</button>
//       <button className='btn btn-primary ms-5' onClick={copy}>Copy</button>
//         </div>
//     </div> */}