import { useContext } from "react";
import {FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import './CartWidget.scss'

export const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext)

   return(
    <div className="cart">
    <Link to='/cart'>
        <FaShoppingCart/>
        <span>{cartQuantity()}</span>
    </Link>
    </div>
   )
}






