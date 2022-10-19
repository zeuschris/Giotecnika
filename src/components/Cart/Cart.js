import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import {AiFillDelete} from 'react-icons/ai'
import './Cart.scss'

export const Cart = () => {
    const {cart, cartTotal, emptyCart, removeItem} = useCartContext()

    return (
        <div className="container cart-container">
            {
                cart.length === 0

                ?

                <>
                    <h2>Tu carrito esta vacio</h2>
                    <Link to='/' className='btn btn-primary my-3'>Ir al inicio</Link>
                </>

                :
                <>
                    <h1>Tu Carrito</h1>
                {
                        cart.map((item) =>(
                        <div key={item.id}>
                        <h3>Producto: {item.nombre}</h3>
                        <img src={item.imagen} alt={item.nombre}/>
                        <p>Precio: ${item.precio}</p>
                        <p>Envio: ${item.envio}</p>
                        <small>Cantidad: {item.cantidad}</small>
                        <div>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger my-3 remove-item"><AiFillDelete/></button>
                        </div>
                        <hr/>
        </div>
                    ))
                }

                    <h3>Total : ${cartTotal()}</h3>
                    <Link className="btn btn-primary me-2" to='/checkout'>Terminar mi compra</Link>
                    {cart.length >= 2 ? <button onClick={emptyCart} className="btn btn-dark">Vaciar Carrito</button> : null}
                </>
                }
        </div>
    )
}