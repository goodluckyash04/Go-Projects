import React, { useEffect ,useState} from 'react'

export default function  Accountdetail() {  

   const [detail,setDetail]=useState({userid:"",name:"",email:""})
   
    const acdetail=async()=>{
       
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("authtoken")
      },
      
    })
    const json =await response.json();
    setDetail({userid:json._id,name:json.name,email:json.email})
}
   useEffect(()=>{
    acdetail();
      },[])

  return (
    <div className="container">
        <h2 className='text-center my-5 text-primary'>Hey {detail.name.slice(0,detail.name.indexOf(" "))}.. Welcome to myNoteBook</h2>
        <p className='my-3 fs-4'><strong>UseId : </strong>{detail.userid.slice(-6)} </p>
        <p className='my-3 fs-4'><strong>Name : </strong>{detail.name} </p>
        <p className='fs-4'><strong>Email : </strong>{detail.email}</p>
    </div>
  )
}
