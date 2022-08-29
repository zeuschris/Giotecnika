import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Count} from './components/ItemCount/ItemCount';

const App = () => {
  return (
    <div> 
      <Header/>
      <Navbar/>
      <ItemListContainer title = 'Mochila Jansport' price={200} stock={7} shipping={15}/>
      <Count stock = {6}/>
      <Footer/>
    </div>
  );
}

export default App;
