import React, { Component } from "react";

export default class NewsItem extends Component {

  render() {
    let {title,description,imgUrl,url,author,date,source}=this.props
    return (
      <div className="card" >
              <span className="position-absolute top-0 translate-middle badge rounded bg-success p-2" style={{zIndex:"1",left:"80%"}} >
              {source}
              </span>
        <img src={imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"> {description} ...</p>
          <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toLocaleString()}</small></p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
             Read More &gt;
          </a>
        </div>
      </div>
    );
  }
}
