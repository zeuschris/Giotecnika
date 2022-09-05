    
    const ItemDetail = ({prod}) => {

        return (
            <div>
                <h1>{prod.name}</h1>
                <p>Descripción: {prod.descript}</p>
                <p>Precio: ${prod.price}</p>
                <p>Envio: ${prod.shipping}</p>
                <p>Stock: {prod.stock}</p>
            </div>
        )
    }

export default ItemDetail