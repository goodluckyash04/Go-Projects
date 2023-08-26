import React, { Component } from 'react'
import TasksDetail from "./TasksDetail";

export default class TasksList extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <div className="col-12 col-md-6 border-start">
            <h3 className="border-bottom">MY TASKS</h3>
            {this.props.tasks.length?this.props.tasks.map((ts, i) => {
              return (
                <TasksDetail
                  task={ts.task}
                  detail={ts.detail}
                  category={ts.category}
                  remove={this.props.remove}
                //   done={this.props.done}
                //   style={this.props.style}
                  index={i}
                  key={i}
                />
              );
            }):<p className='text-center mt-5 fs-5'>Add Tasks to List</p>}
          </div>
    )
  }
}
