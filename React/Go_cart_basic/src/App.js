import './App.css';
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Home from './Components/Home';
import Total from './Components/Total';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
const [cart, setCart] = useState([])
const [total, setTotal] = useState(0)

const add=(e)=>{                  //always use arrow function
  let newList=[...cart]          //[...arrayname]will copy the whole array to the new var(... is spread operator)
  let newTotal=total;
  newList[e].quantity++
  newTotal += newList[e].price;
  setCart(newList)
  setTotal(newTotal)
 
}
const minus=(e)=>{  
       
  let newList=[...cart] 
  let newTotal=total;
  if(newList[e].quantity!==1){      
  newList[e].quantity--
  newTotal -= newList[e].price;
  setCart(newList)
  setTotal(newTotal)
  }else{
    remove(e)
  }
 

    // newList[e].quantity!=0 ? newList[e].quantity-- : newList[e].quantity = 0;
}
const reset=()=>{
  let newList=[...cart] 
  newList.map((item)=>item.quantity=0)
  setCart(newList)
  setTotal(0)
}
const remove=(e)=>{
  let newList=[...cart];
  let newTotal=total;
  newTotal -= newList[e].price*newList[e].quantity;
  newList.splice(e,1)
  setCart(newList)
  setTotal(newTotal)
  

}
const addItem=(nam,pric)=>{
  let newList=[...cart];
  let newTotal=total;
  if(!nam || !pric){
    alert("item name or price cannot be empty")
  }else{
  newList.push({name:nam,price:pric,quantity:1});
  newTotal+=newList[newList.length-1].price
  }
  setCart(newList)
  setTotal(newTotal)
}



  return (
    <BrowserRouter>
    <Navbar product={cart}/>
    
    <Routes>  
      <Route exact path="/cart" element={ 
        <>
        <ProductList product={cart} addPr={add} minusPr={minus} removeP={remove}/>
        <Total subtotal={total} reset={reset}/>
        </>}
        >
        </Route>
        <Route exact path="/" element={<Home addItem={addItem}/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
