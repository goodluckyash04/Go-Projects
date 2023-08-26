import React, { useState } from 'react';

export default function Registration() {
 const [submit,setSubmit] = useState(false)
 const [valid,setValid] =useState(false)
 const [details,setDetails]=useState(
  {email:"",
  password:""
 })

  const onSubmit=(e)=>{
      e.preventDefault()
      if(details.email && details.password){
        setValid(true)
      }
      setSubmit(true)
  }

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-4">
          <form className="mt-5" onSubmit={onSubmit}>
         {submit && valid? <div class="alert alert-success alert-dismissible fade show" role="alert">Successfully Registered
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>:""}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e)=>{setDetails({...details,email:e.target.value})}}
              />
            {submit && !details.email?<p className="text-danger">Email can not Be Empty</p>:null}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>{setDetails({...details,password:e.target.value})}}
              />
               {submit && !details.password?<p className="text-danger">Password can not Be Empty</p>:null}
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
