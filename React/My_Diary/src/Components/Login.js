import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
export default function Login() {
 const navigate = useNavigate()
  const [detail,setDetail]=useState({email:"",password:""})
  const {email,password} = detail
  const login=async (e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:3001/user", {
      method: 'GET', 
    });
    const json = await response.json();
    const myuser=json.filter((x)=>{return x.email===email})
    if(myuser.length!==0){
      if(myuser[0].password === password && myuser[0].userId===2){
         const myid=myuser[0].id
            localStorage.setItem('usernotes',myid)
            alert("logged in Successful")
            navigate('/notes')
      }else{
        alert("check credential")
      }

    }else{
      alert("User Does not Exist")
    }
  }
  
  return (
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-5">
                <h2 className='text-primary mb-3'>LOGIN</h2>
            <form onSubmit={login}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setDetail({...detail,email:e.target.value})} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setDetail({...detail,password:e.target.value})}  />
        </div>
        <button type="submit" className="btn btn-primary mb-3">Login</button><br />
        <Link to="/signup">Create Account</Link>
      </form>
            </div>
        </div>
    </div>
     )
}
