import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './Context/CartContext';
import { Cart } from './components/Cart/Cart';
import { useState } from 'react';
import { Checkout } from './components/Checkout/Checkout';



const App = () => {

  const [cart, setCart] = useState([])

  const addCart = (prod) => {
    setCart ([...cart, prod])
  }

  const inCart = (id) => {
    return cart.find((item) => item.id === id)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  return (
    <CartContext.Provider value = {{
      cart,
      addCart,
      inCart,
      cartQuantity
    }}>
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>

            <Route path='/' element = { <ItemListContainer/> }/>
            <Route path='/item/:itemID' element = { <ItemDetailContainer/> }/>
            <Route path='/productos/:categoryID' element = { <ItemListContainer/> }/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element = { <Navigate to="/"/>} />

      </Routes>
      <Footer/>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
