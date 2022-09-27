import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';



const App = () => {

  return (
    <CartProvider>

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

    </CartProvider>
  );
}

export default App;
