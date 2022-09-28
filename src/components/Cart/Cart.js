import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import {AiFillDelete} from 'react-icons/ai'
import './Cart.scss'

export const Cart = () => {
    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)
    return (
        <div className="container cart-container">
            <h1>Tu Carrito</h1>
            {
            cart.map((item) =>(
                <div key={item.id}>
                    <h3>Nombre: {item.nombre}</h3>
                    <img src={item.imagen} alt={item.nombre}/>
                    <p>Precio: ${item.precio}</p>
                    <p>Envio: ${item.envio}</p>
                    <small>Cantidad: {item.cantidad}</small>
                    <div>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger my-3"><AiFillDelete/></button>
                    </div>
                    <hr/>
                </div>
            ))
        }
        <h3>Total : ${cartTotal()}</h3>
        <Link className="btn btn-primary" to='/checkout'>Terminar mi compra</Link>
        <button onClick={emptyCart} className="btn btn-dark">Vaciar Carrito</button>
        </div>
    )
}