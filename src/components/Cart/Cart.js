import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import './Cart.scss'

export const Cart = () => {
    const {cart} = useContext(CartContext)
    return (
        <div className="container cart-container">
            <h1>Tu Carrito</h1>
            {
            cart.map((item) =>(
                <div key={item.id}>
                    <h3>Nombre: {item.nombre}</h3>
                    <img src={item.imagen} alt={item.nombre}/>
                    <p>Precio: ${item.precio}</p>
                    <p>Envio: ${item.shipping}</p>
                    <small>Cantidad: {item.cantidad}</small>
                    <hr/>
                </div>
            ))
        }
        <Link className="btn btn-primary" to='/checkout'>Terminar mi compra</Link>
        </div>
    )
}