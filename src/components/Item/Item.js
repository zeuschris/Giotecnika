import { Count } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './Item.scss'

const Item = ({items}) => {

    return (
        <div className='items'>
            <h1>{items.name}</h1>
            <div className='items-card'>
                <p>Descripción: {items.descript}</p>
                <p>Precio: ${items.price}</p>
                <img src={items.img} alt={items.name} className='image-products'></img>
                <div className='container-lookme'>
                <Link to={`/item/${items.id}`} className="btn btn-primary d-flex justify-content-center lookme">Ver más</Link>
                </div>
                <Count initial = {1} stock = {10}/>
            </div>
        </div>
    )
}

export default Item