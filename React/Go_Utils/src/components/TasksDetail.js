import React, { Component } from 'react'

export default class TasksDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            style:""
        }
    }
    done =()=>{
        if(this.state.style){
            this.setState({style:null})
        }else{
            this.setState({style:"text-decoration-line-through"})
        }
       }
  render() {
    return (
    
     <div className={`row border-bottom mt-3 ${this.state.style}`}>
        <div className="col-10">
            <h5 className='text-primary'>{this.props.task}</h5><span className='text-success'>{this.props.category}</span>
            <p className='fs-5'>{this.props.detail}</p>
        </div>
        <div className="col-1">
            <button className="btn btn-danger" onClick={()=>{this.props.remove(this.index)}}>X</button>
        </div>
        <div className="col-1">
            <button className="btn btn-success" onClick={this.done}>✓</button>
        </div>
     </div>
    
    )
  }
}
//  