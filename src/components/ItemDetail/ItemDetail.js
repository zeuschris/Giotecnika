import { Link } from 'react-router-dom'
import { Count } from "../ItemCount/ItemCount"
import './ItemDetail.scss'

    const ItemDetail = ({prod}) => {

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
                <div className='flex-container'>
                    <button onClick={Count.onAdd} className= {Count.counter <= Count.stock ? 'btn btn-primary' : 'btn disabled'}>Agregar al carrito</button>
                </div>
            </div>
        )
    }

export default ItemDetail