import { Link } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import { BsCart3 } from "react-icons/bs";
import { useCartContext } from "../../Context/CartContext";
import './CartWidget.scss';

export const CartWidget = () => {
  const { cartQuantity } = useCartContext();
  const quantity = cartQuantity();

  return (
    <Link to='/cart' className="cart-widget">
      <div className="cart-icon-wrapper">
        <BsCart3 className="cart-icon" />
        {quantity > 0 && (
          <Badge bg="danger" pill className="cart-badge">
            {quantity}
          </Badge>
        )}
      </div>
    </Link>
  );
};