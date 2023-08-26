import React, { useState } from 'react';
import data from '../MOCK_DATA.json'


export default function Search() {
    const [search, setSearch] = useState("")
  
    return (
    <div className="container text-center">
        <input type="text" className="form-control my-4" placeholder='Search...' onChange={(e)=>{setSearch(e.target.value)}} />
        
        {data.filter((val)=>{
            if(search==""){
                return val 
            }else if(val.first_name.toLowerCase().includes(search.toLowerCase())){ 
                return val;
            }}).map((x,key)=>{
           return <p key={key}>{x.first_name}</p>
        })}
  </div>
  )
}
