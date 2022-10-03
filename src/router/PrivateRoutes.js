import { Routes, Route, Navigate } from 'react-router-dom';
import {Header} from './../components/Header/Header';
import {Footer} from './../components/Footer/Footer';
import Navbar from './../components/NavBar/NavBar';
import ItemListContainer from './../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './../components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './../components/Cart/Cart';
import { Checkout } from './../components/Checkout/Checkout';

const PrivateRoutes = () => {

    return (
        <>
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
        </>
    )
}

export default PrivateRoutes