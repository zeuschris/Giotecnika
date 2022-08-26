import './ItemListContainer.scss'

const ItemListContainer = ({title}) => {
    return(
        <div className="items">
            <h1>{title}</h1>
        </div>
    )
}

export default ItemListContainer