import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const [signup, setSignup] = useState({name:"",email:"",password:"",cpassword:""})
  let navigate=useNavigate()

const submitbtn = async (e) => {
  e.preventDefault();
  const {name,email,password}=signup
  const response = await fetch("http://localhost:5000/api/auth/createuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name,email,password}),
  });
  const json =await response.json();
  console.log(json)
  if(json.success){
      //save the authtoken and redirect
      localStorage.setItem("authtoken",json.authToken);
      navigate("/")
      props.alert("Welcome To myNotes","success")
  }else{
    props.alert("User Already Exists","warning")
  }
  setSignup({name:"",email:"",password:"",cpassword:""})
};
const onChange=(e)=>{
      setSignup({...signup,[e.target.name]:e.target.value})
}
  return (
    <>
    <h2 className="text-center my-5 text-primary">Create account to use myNoteBooks</h2>
    <div className="row justify-content-center">
    <div className="col-6">
      <form onSubmit={submitbtn}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name{<span className="text-danger">*</span>}
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={signup.name}
            onChange={onChange}
            minLength={3} 
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email ID{<span className="text-danger">*</span>}
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={signup.email}
            onChange={onChange}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password{<span className="text-danger">*</span>}
          </label>
          <input
            type="password"
            name="password"
            value={signup.password}
            className="form-control"
            onChange={onChange}
            id="password"
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password{<span className="text-danger">*</span>}
          </label>
          <input
            type="password"
            name="cpassword"
            value={signup.cpassword}
            className="form-control"
            onChange={onChange}
            id="cpassword"
            
            required
          />
        </div>

        <button type="submit" disabled={signup.password!==signup.cpassword} className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  </div>
  </>
  )
}
