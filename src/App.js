import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Count } from './components/ItemCount/ItemCount';


const App = () => {

  return (

      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
            <Route path='/' element = {<ItemListContainer/>}/>
            <Route path='/item/:itemID' element = {<ItemDetailContainer/>}/>
            <Route path='*' element= { <Navigate to="/"/>} />
            <Route path='/' element = {<Count initial = {1} stock = {10}/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
       
  );
}

export default App;
