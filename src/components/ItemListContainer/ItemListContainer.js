import './ItemListContainer.scss'
import lookItems from '../../helpers/lookItems'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [stock, setStock] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoryID} = useParams()
    console.log(categoryID)

    console.log(stock)

useEffect(() => {
    lookItems()
        .then((data) => {
            if(!categoryID) {
                setStock(data)
            }else{
                setStock(data.filter((element) => element.category === categoryID))
            }
    })
        .catch((error) => {
        console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
}, [categoryID])

    return (
        <div>
            {
                loading ?
                <div className='loader'/>
                :
                <ItemList productos = {stock}/>
            }
        </div>
    )
}

export default ItemListContainer