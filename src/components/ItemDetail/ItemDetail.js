import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Count } from '../ItemCount/ItemCount'
import { CartContext } from '../../Context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import './ItemDetail.scss'

    const ItemDetail = ({prod}) => {

        const [cantidad,setCantidad] = useState(1)
        const {cart, addCart, inCart} = useContext(CartContext)

        console.log(cart)

        const handleCart = () => {
            if ( cantidad <= prod.stock ) {
                
                const prodInCart = {
                    id : prod.id,
                    nombre : prod.name,
                    precio : prod.price,
                    imagen : prod.img,
                    cantidad : cantidad
                }
                inCart(prod.id)
            addCart(prodInCart)
            toast.success(`Se añadio ${cantidad} producto al carrito`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }


        return (
            <div className="bg-detail">
                    <h1>{prod.name}</h1>
                    <img src = {prod.img} alt={prod.name} className='image-products-detail'/>
                    <p>Categoria: {prod.category}</p>
                    <p>Genero: {prod.gender}</p>
                    <p>Material: {prod.material}</p>
                    <p>Garantia: {prod.warranty}</p>
                    <p>Stock: {prod.stock}</p>
                    <p className='talle'>{prod.talle ? `Talle: ${prod.talle}` : `Estuche: ${prod.case}`}</p>
                    <p><span>{prod.shipping ? `Envio: $${prod.shipping}` : `Envio: ${prod.shippingFree}`}</span></p>
                    <Link to='/' className="btn btn-warning back">Atras</Link>

                    {
                        inCart(prod.id) && <ToastContainer/>
                    ?   <Link to="/cart" className='btn btn-success my-2'>Terminar mi compra</Link> 
                    :   <Count
                            max = {prod.stock}
                            counter = {cantidad}
                            setCounter = {setCantidad}
                            handleCart = {handleCart}
                        />
                    }
            </div>
        )
    }

export default ItemDetail