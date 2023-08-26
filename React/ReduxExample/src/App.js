import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './Components/Products';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import CommingSoon from './Components/CommingSoon';
import Notes from './Components/Notes';
import AddProduct from './Components/AddProduct';
import Addnote from './Components/Addnote';
import Login from './Components/Login';


function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="products" element={<Products/>}/>
    <Route path="" element={<Home/>}/>
    <Route path="commingsoon" element={<CommingSoon/>}/>
    <Route path="notes" element={<Notes/>}/>
    <Route path="addproduct" element={<AddProduct/>}/>
    <Route path="editproduct/:id" element={<AddProduct/>}/>
    <Route path="addnote" element={<Addnote/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
