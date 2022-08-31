import { Count } from "../ItemCount/ItemCount"

const Item = ({items}) => {
    return (
        <div className='items'>
            <h1>{items.name}</h1>
            <div className='items-card'>
                <p>Descripción: {items.descript}</p>
                <p>Precio: ${items.price}</p>
                <p>Envio: ${items.shipping}</p>
                <p>Stock: {items.stock}</p>
                <img src={items.img} alt={items.name} className='image-products'></img>
                <Count initial = {1} stock = {10}/>
            </div>
        </div>
    )
}

export default Item