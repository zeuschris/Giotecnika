import { Count } from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'

    const ItemDetail = ({prod}) => {

        return (
            <div className="items">
                <h1>{prod.name}</h1>
                <p>Descripción: {prod.descript}</p>
                <p>Envio: ${prod.shipping}</p>
                <p>Stock: {prod.stock}</p>
                <Link to='/' className="btn btn-dark">Atras</Link>
                <button onClick={Count.onAdd} className= {Count.counter <= Count.stock ? 'btn btn-primary' : 'btn disabled'} >Agregar al carrito</button>
            </div>
        )
    }

export default ItemDetail