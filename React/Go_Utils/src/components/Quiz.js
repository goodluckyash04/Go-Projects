import React, { useState } from 'react';


export default function Quiz() {
    const quiz=[
        {
        que:"1.What is Your Name",
        ans:
        [{ans:"Yash",isCorrect:true },
        {ans:"Sagar", isCorrect:false},
        {ans:"Abhishek",isCorrect:false },
        {ans:"Parth",isCorrect:false}
        ]
        },

        {
        que:"2.What is Your Age",
        ans:
        [{ans:12,isCorrect:false },
        {ans:50,isCorrect:false},
        {ans:22,isCorrect:false},
        {ans:26,isCorrect:true}]
        },

        {
        que:"3.Who was your friend",
        ans:
        [{ans:"mehul",isCorrect:true },
        {ans:"mitesh",isCorrect:false },
        {ans:"kenil",isCorrect:false} ,
        {ans:"monark",isCorrect:false}]
        },

        {
        que:"4.Where Do You Live",
        ans:
        [{ans:"Surat",isCorrect:true },
        {ans:"Bharuch",isCorrect:false} ,
        {ans:"Anand",isCorrect:false },
        {ans:"Ahmedabad",isCorrect:false}]
        }
]
    const [current, setCurrent] = useState(0)
    const [score, setScore] = useState(false)
    const [count,setCount] = useState(0)

    const next=((e)=>{
    if(e===true){
        setCount(count+1)
    }
    if(current<quiz.length-1){
    setCurrent(current+1)  
    }else{
    setScore(true)
    }
})
  return (
       
    <div className="container mt-5">
        <div className="row border rounded border-primary p-3">
    {score?<p className='text-center'>Your Score is {count} out of {quiz.length}</p>:
    <>
            <div className="col-6 border rounded border-primary my-2">
                <h3>Question: </h3>
                <h5>{quiz[current].que}</h5>
            </div>
            <div className="col-6">
                {quiz[current].ans.map((x)=>{
                    return(
                <div className="row m-2">
                    <button className="btn btn-outline-primary" onClick={()=>{next(x.isCorrect)}}>{x.ans}</button>
                </div>)})}
            </div></>}
        </div>
  </div>
  )
}
