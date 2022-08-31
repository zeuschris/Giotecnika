import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <div> 
      <Header/>
      <Navbar/>
      <ItemListContainer/>
      <Footer/>
    </div>
  );
}

export default App;