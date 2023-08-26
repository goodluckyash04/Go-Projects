import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login(props) {
    const [login, setLogin] = useState({email:"",password:""})
    let navigate=useNavigate()

  const submitbtn = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:login.email,password:login.password}),
    });
    const json =await response.json();
    
    if(json.success){
        //save the authtoken and redirect
        localStorage.setItem('authtoken',json.authToken);
        navigate("/")
        props.alert("Logged In Successfully","success")
    }else{
        props.alert("Invalid login Detail","warning")
    }
    setLogin({email:"",password:""})
  };
  const onChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
  }
  return (
  <>
    <h2 className="text-center my-5 text-primary">Login to Access Notes</h2>
    <div className="row justify-content-center">
      <div className="col-6">
        <form onSubmit={submitbtn}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email ID
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={login.email}
              onChange={onChange}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={login.password}
              className="form-control"
              onChange={onChange}
              id="password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
