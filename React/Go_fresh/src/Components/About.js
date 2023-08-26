import React from 'react'
import { Link } from "react-router-dom";

export default function About() {
    const abstyle={
        position:"relative",
        width:"50vw",
        margin:"auto",
        bottom:"10rem"
        
    }
  return (
    <div className='container' style={{marginTop:"11rem"}}>
        <h2 className='text-center text-success'>About Go Fresh</h2>
        <div className='bg-success m-4' style={{minHeight:"20rem"}}>
        </div>
            <div className='text-center' style={abstyle}>
                <img src="https://cdn.atriumhealth.org/dailydose/-/media/daily-dose-blog/featured-images/sanger-healthy-living_featured.jpg?rev=668bf9d4918345419f166b69fca74395" alt="" style={{width:"50vw"}}/>
                <p className='m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laboriosam eveniet tenetur? Perspiciatis obcaecati dolore quia, eius possimus reiciendis voluptates dignissimos aspernatur est architecto, doloribus molestias vero tenetur ut debitis? Est illum, veritatis voluptate cupiditate architecto ipsa ullam blanditiis atque.</p>
                <p className='m-2'> consequatur vitae repellat ipsam iusto provident delectus debitis reiciendis nobis eveniet odit aliquam repellendus quisquam amet fugiat deleniti velit? Animi aspernatur voluptatum facilis doloremque cum consequuntur laudantium reiciendis quis labore soluta laborum earum harum, veritatis commodi eos voluptatibus esse quae qui fugit ipsum praesentium necessitatibus quo. Repellendus eos sed distinctio tenetur unde repudiandae, animi maxime provident saepe, laborum odit modi.</p>
                <p className='m-2'> consequatur vitae repellat ipsam iusto provident delectus debitis reiciendis nobis eveniet odit aliquam repellendus quisquam amet fugiat deleniti velit? Animi aspernatur voluptatum facilis doloremque cum consequuntur laudantium reiciendis quis labore soluta laborum earum harum, veritatis commodi eos voluptatibus esse quae qui fugit ipsum praesentium necessitatibus quo. Repellendus eos sed distinctio tenetur unde repudiandae, animi maxime provident saepe, laborum odit modi.</p>
                <p className="btn btn-outline-success mt-5"><Link className="nav-link" to="/products">Explore &rarr;</Link></p>
            </div> 
    </div>
  )
}
