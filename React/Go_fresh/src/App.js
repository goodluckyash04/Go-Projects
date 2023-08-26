import './App.css';
import About from './Components/About';
import Bakery from './Components/Bakery';
import Cart from './Components/Cart';
import Dairy from './Components/Dairy';
import Footer from './Components/Footer';
import Frozen from './Components/Frozen';
import Header from './Components/Header'
import Products from './Components/Products';
import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Search from './Components/Search';

function App() {

  const [item, setItem] = useState([])
  const [total,setTotal]=useState(0)

  const addItem=(title,price)=>{
    let newItem=[...item];
    let newTotal=total;
    newItem.push({title:title,price:price,quantity:1});
    newTotal+=newItem[newItem.length-1].price
    setItem(newItem)
    setTotal(newTotal)
  }
  const plus=(e)=>{
    let newItem=[...item];
    newItem[e].quantity++;
    setItem(newItem)
    subtotal()
    
  }
  const minus=(e)=>{
    let newItem=[...item];
    if(newItem[e].quantity!=1){
      newItem[e].quantity--
      setItem(newItem)
      subtotal()
  }
}
const rem=(e)=>{
  let newItem=[...item]
  newItem.splice(e,1)
    setItem(newItem)
   let newTotal=0;
   newItem.map((x)=>{return(newTotal+=x.price*x.quantity)})
   newItem.length?setTotal(newTotal):setTotal(0)
}
const subtotal=()=>{
  let newItem=[...item]
  let newTotal=0;
  newItem.map((x)=>{return(newTotal+=x.price*x.quantity)})
  setTotal(newTotal)
}
const clrall=()=>{
  setItem([])
  setTotal(0)
}
  
  return (
   <BrowserRouter>
<Header item={item.length}/>
    <Routes>
      <Route exact path="/" element={<About/>} />
      <Route exact path="/products" element={<Products addItem={addItem}/>} />
      <Route exact path="/category/frozen" element={<Frozen addItem={addItem}/>} />
      <Route exact path="/category/dairy" element={<Dairy addItem={addItem}/>} />
      <Route exact path="/category/bakery" element={<Bakery addItem={addItem}/>} />
      <Route exact path="/cart" element={<Cart item={item} clrall={clrall} plus={plus} minus={minus} remove={rem} total={total}/>} />
      <Route exact path="/search" element={<Search addItem={addItem}/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;


