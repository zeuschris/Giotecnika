import './App.css';
import './styles/theme.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './Context/CartContext';
import { ThemeProvider } from './Context/ThemeContext';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;