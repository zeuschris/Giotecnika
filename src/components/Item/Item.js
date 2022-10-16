import { Link } from 'react-router-dom'
import './Item.scss'
import Carousel from 'react-bootstrap/Carousel';

const Item = ({items}) => {

    return (
        <div className='items'>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={items.img}
          alt={items.name}
        />
        <Carousel.Caption>
          <h1>{items.name}</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <p>Descripción: {items.descript}</p>
    <p>Precio: ${items.price}</p>
    <div className='container-lookme'>
    <Link to={`/item/${items.id}`} className="btn btn-primary d-flex justify-content-center lookme">Ver más</Link>
    </div>
        </div>
    )
}

export default Item

