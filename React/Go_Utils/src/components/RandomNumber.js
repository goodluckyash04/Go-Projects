import React, { useState } from 'react';

export default function RandomNumber() {
  const [min,setMin]=useState(0)
  const [max,setMax]=useState(0)
  const [num,setNum]=useState(0)
  const random=(min,max)=>{
    let newNum=Math.floor(Math.random() * (max - min + 1) + min)
      setNum(newNum)
  }
  const copy=()=>{
    navigator.clipboard.writeText(num)
  }
  return (
    <div className="container mt-5 p-5 border">
      <div className="row text-center justify-content-around">
      <div className="col-md-4 ">
          <input  className="border-top" type="text" id='min' onChange={(e)=>setMin(Number(e.target.value))} placeholder="Enter Min"/>
        </div>
        <h4>TO</h4>
        <div className="col-md-4 ">
          <input  className="border-top" type="text" id='max' onChange={(e)=>setMax(Number(e.target.value))} placeholder="Enter Max"/>
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <h6 className='text-center'>Random Number</h6>
        <h1 className='col-md-4 text-center text-primary '>{num}</h1>
      </div>
      <div className='text-center mt-4 '>
      <button className='btn btn-success' onClick={()=>{random(min,max)}}>Generate</button>
      <button className='btn btn-primary ms-5' onClick={copy}>Copy</button>
        </div>
    </div>
    
  )
}
