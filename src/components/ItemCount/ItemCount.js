import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { BsPlus, BsDash, BsCartPlus } from 'react-icons/bs';
import './ItemCount.scss';

export const Count = ({ max, counter, setCounter, handleCart }) => {
  const handleAdd = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const handleRest = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="counter-wrapper">
        <Button 
          variant="outline-primary"
          className="counter-btn"
          onClick={handleRest}
          disabled={counter <= 1}
          aria-label="Disminuir cantidad"
        >
          <BsDash size={20} />
        </Button>
        
        <div className="counter-display">
          <span className="counter-number">{counter}</span>
          <span className="counter-label">unidad{counter !== 1 ? 'es' : ''}</span>
        </div>
        
        <Button 
          variant="outline-primary"
          className="counter-btn"
          onClick={handleAdd}
          disabled={counter >= max}
          aria-label="Aumentar cantidad"
        >
          <BsPlus size={20} />
        </Button>
      </div>
      
      <Button 
        variant="primary" 
        onClick={handleCart}
        disabled={counter > max}
        className="add-to-cart-btn"
        size="lg"
      >
        <BsCartPlus size={20} className="me-2" />
        Agregar al carrito
      </Button>
      
      {counter >= max && (
        <small className="text-warning d-block text-center mt-2">
          ⚠️ Cantidad máxima disponible
        </small>
      )}
      
      <small className="text-muted d-block text-center mt-2">
        Stock disponible: {max} unidades
      </small>
    </div>
  );
};

Count.propTypes = {
  max: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
  handleCart: PropTypes.func.isRequired
};