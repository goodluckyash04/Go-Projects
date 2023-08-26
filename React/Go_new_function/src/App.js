import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import NewsArea from './Component/NewsArea';
import React,{ useState } from "react";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const api=process.env.REACT_APP_NEWS_API ;
  const pageSize=9;
  const [progress, setProgress] = useState(0)


  return (
    <BrowserRouter>
    <Navbar/>
    <LoadingBar color='#0550ae' progress={progress} height={3}/>
    <Routes>
      <Route exact path="/" element={<NewsArea progress={setProgress} pageSize={pageSize} category="general" api={api} key="general"/>}/>

      <Route exact path="/business" element={<NewsArea progress={setProgress} pageSize={pageSize} category="business" api={api} key="business"/>}/>

      <Route exact path="/entertainment" element={<NewsArea progress={setProgress} pageSize={pageSize} category="entertainment" api={api} key="entertainment" />}/>

      <Route exact path="/health" element={<NewsArea progress={setProgress} pageSize={pageSize} category="health" api={api} key="health" />}/>

      <Route exact path="/science" element={<NewsArea progress={setProgress} pageSize={pageSize} category="science" api={api} key="science"/>}/>
      
      <Route exact path="/sports" element={<NewsArea progress={setProgress} pageSize={pageSize} category="sports" api={api} key="sports" />}/>

      <Route exact path="/technology" element={<NewsArea progress={setProgress} pageSize={pageSize} category="technology" api={api} key="technology" />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
