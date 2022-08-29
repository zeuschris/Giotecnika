import './ItemListContainer.scss'
import image from '../../assets/mochila.jpg'

const ItemListContainer = ({title,price,shipping}) => {
    return(
        <div className="items">
            <h1>{title}</h1>
            <div className='items-card'>
            <p>Precio: ${price}</p>
            <p>Envio: ${shipping}</p>
            <p>Stock: 6</p>
            <img src={image} className='image-products' alt='Mochila Jansport'/>
            </div>
        </div>
    )
}

export default ItemListContainer