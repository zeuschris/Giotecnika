import Item from "../Item/Item"

const ItemList = ({productos = []}) => {
    return(
        <div className='container-flex'>
           {
                productos.map((element) => <Item items={element} key={element.id}/>)
           }
        </div>
    )
}

export default ItemList