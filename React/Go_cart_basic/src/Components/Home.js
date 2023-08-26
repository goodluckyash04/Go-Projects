import React from 'react'
import AddItem from './AddItem'

export default function Home(props) {
  return (
    <div className="container" style={{"minHeight":"100vh"}}>
        <h1 className='text-center mt-5 text-primary'>Welcome to GO-FOOD Restaurant</h1>
        <AddItem addItem={props.addItem}/>
        <div className="row">
            <div className="col-12 text-center my-5">
                <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Go-Food" />
            </div>
            <div className="col-12 text-center">
                <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" alt="Go-Food" />
            </div>
        </div>
    </div>
  )
}
