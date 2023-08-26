import React, { Component } from "react";

import TasksList from "./TasksList";

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
                task: "",
                detail: "",
                category:"",
    }
  }
  addtask=()=>{
    if(this.state.task && this.state.detail){
        this.props.add(this.state.task,this.state.detail,this.state.category)
    }
   this.setState({task:"",detail:""})
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <form onSubmit={(e)=>{
                e.preventDefault();
                this.addtask();
               }}>
              <div className=" row my-3">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="tasks"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Tasks"
                    onChange={(e)=>{this.setState({task:(e.target.value)})}}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e)=>{this.setState({category:(e.target.value)})}}
                  >
                    <option defaultValue={""}>Select Task Category</option>
                    <option value="Daily">Daily</option>
                    <option value="Once">Once</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="taskDetails"
                  placeholder="Enter your Task Details"
                  onChange={(e)=>{this.setState({detail:(e.target.value)})}}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                ADD
              </button>
            </form>
          </div>
          <TasksList tasks={this.props.tasks} remove={this.props.remove} />      
        </div>
      </div>
    );
  }
}
