import './ItemListContainer.scss'
import lookItems from '../../helpers/lookItems'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [stock, setStock] = useState([])

    console.log(stock)

useEffect(() => {
    lookItems()
        .then((data) => {
        setStock(data)
    })
        .catch((error) => {
        console.log(error)
        })
}, [])

    return (
        <div>
            <ItemList productos = {stock}/>
        </div>
    )
}

export default ItemListContainer