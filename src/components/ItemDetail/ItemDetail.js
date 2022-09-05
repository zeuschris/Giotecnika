import { Count } from "../ItemCount/ItemCount"

    const ItemDetail = ({prod}) => {

        return (
            <div>
                <h1>{prod.name}</h1>
                <p>Descripción: {prod.descript}</p>
                <p>Precio: ${prod.price}</p>
                <p>Envio: ${prod.shipping}</p>
                <p>Stock: {prod.stock}</p>
                <button onClick={Count.onAdd} className= {Count.counter <= Count.stock ? 'btn btn-primary btn-carrito' : 'btn disabled btn-carrito'} >Agregar al carrito</button>
            </div>
        )
    }

export default ItemDetail