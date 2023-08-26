import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [detail,setDetail] = useState({name:"",email:"",password:"",userId:2})
  const {name,email,password,userId} = detail
  const adduser=async(name,email,password,userId)=>{
    const response = await fetch("http://localhost:3001/user", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name,email,password,userId}) 
    });
    const json = await response.json(); 
  }
  const signup=(e)=>{
      e.preventDefault()
      adduser(name,email,password,userId)
      setDetail({name:"",email:"",password:""})
      alert("Account Created")
  }
  const onchange=(e)=>{
      setDetail({...detail,[e.target.name]:e.target.value})
  }
  return (
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-5">
                <h2 className='text-primary mb-3'>Create an Account</h2>
            <form onSubmit={signup}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" value={name} id="name" aria-describedby="emailHelp" name='name'  onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} id="email" aria-describedby="emailHelp" name='email'  onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label> 
          <input type="password" className="form-control" value={password} id="password" name='password' onChange={onchange}/>
        </div>
        <button type="submit" className="btn btn-primary mb-3">Sign Up</button><br />
        <Link to="/login">Already Have an Account ?</Link>
      </form>
            </div>
        </div>
    </div>
     )
}
