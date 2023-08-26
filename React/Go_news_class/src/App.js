import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsScroll from './Components/NewsScroll';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  state={
      progress:0
  }
  setProgress=(newProgress)=>{
    this.setState({
      progress:newProgress
    })
  }
   pageSize=9;
   country="in"
   api=process.env.REACT_APP_NEWS_API
   
  render() {
    return (
      <BrowserRouter>
       <Navbar/>
       <LoadingBar height={3} color='#0d6efd' progress={this.state.progress}/>
    <Routes>
      <Route exact path="/" element={
      <NewsScroll setProgress={this.setProgress}  pgsize={this.pageSize} key="general" country={this.country} category="general" api={this.api}/>}/>

      <Route exact path="/business" element={
      <NewsScroll setProgress={this.setProgress}  pgsize={this.pageSize} key="business" country={this.country} category="business" api={this.api}/>}/>

      <Route exact path="/entertainment" element={
      <NewsScroll setProgress={this.setProgress}  pgsize={this.pageSize} key="entertainment" country={this.country} category="entertainment" api={this.api}/>}/>

      <Route exact path="/health" element={
      <NewsScroll setProgress={this.setProgress}  pgsize={this.pageSize} key="health" country={this.country} category="health" api={this.api}/>}/>

      <Route exact path="/science" element={
      <NewsScroll setProgress={this.setProgress}  pgsize={this.pageSize} key="science" country={this.country} category="science" api={this.api}/>}/>

      <Route exact path="/sports" element={
      <NewsScroll setProgress={this.setProgress}  pgsize={this.pageSize} key="sports" country={this.country} category="sports" api={this.api}/>}/>

      <Route exact path="/technology" element={
      <NewsScroll setProgress={this.setProgress}  pgsize={this.pageSize} key="technology" country={this.country} category="technology" api={this.api}/>}/>
  
    </Routes>
  </BrowserRouter>
    )
  }
}







// apikey= "a0b8dfba14de4632a7c3769f0eff619c"

// ......................Without News Scroll...............................
// import News from './Components/News';
// <Route exact path="/" element={
// <News  pgsize={this.pageSize} key="general" country={this.country} category="general" api={this.api}/>}/>

// <Route exact path="/business" element={
// <News  pgsize={this.pageSize} key="business" country={this.country} category="business" api={this.api}/>}/>

// <Route exact path="/entertainment" element={
// <News  pgsize={this.pageSize} key="entertainment" country={this.country} category="entertainment" api={this.api}/>}/>

// <Route exact path="/health" element={
// <News  pgsize={this.pageSize} key="health" country={this.country} category="health" api={this.api}/>}/>

// <Route exact path="/science" element={
// <News  pgsize={this.pageSize} key="science" country={this.country} category="science" api={this.api}/>}/>

// <Route exact path="/sports" element={
// <News  pgsize={this.pageSize} key="sports" country={this.country} category="sports" api={this.api}/>}/>

// <Route exact path="/technology" element={
// <News  pgsize={this.pageSize} key="technology" country={this.country} category="technology" api={this.api}/>}/>

