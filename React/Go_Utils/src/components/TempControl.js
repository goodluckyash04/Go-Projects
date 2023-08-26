import React, { useState } from 'react';

export default function TempControl() {
  const [count, setCount] = useState(0)
  const [color,setColor]= useState("#d7f1f3")
  const add=()=>{
    let newCount=count+1
      if(newCount>=6){
        setColor("#f8b713")
      }
  setCount(newCount)
}
  const remove=()=>{
    if(count!==0){
      let newCount=count-1
      if(newCount<6){
        setColor("#d7f1f3")
        }
  setCount(newCount)
}
}
  return (
    <div
      className="container border mt-5 p-2"
      style={{ maxWidth: "50vh", minHeight: "70vh",backgroundColor:`${color}` }}>
      <h2 className="text-center p-2">{count}</h2>
      <div className="container d-flex justify-content-between">
        <button className="btn btn-success" onClick={add}>
          +
        </button>
        <button className="btn btn-warning" onClick={remove}>
          -
        </button>
      </div>
    </div>
  );
}
