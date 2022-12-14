import './ItemListContainer.scss'
import lookItems from '../../helpers/lookItems'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/fireconfig'

const ItemListContainer = () => {

    const [stock, setStock] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoryID} = useParams()

useEffect(() => {
    lookItems()
    
    const itemsRef = collection(db, 'items')
    const q = categoryID 
              ? query(itemsRef, where('category', '==', categoryID))
              : itemsRef

    getDocs(q)
        .then((resp) => {
            const productosDB = resp.docs.map((doc) => ({id : doc.id, ...doc.data()}))
            setStock(productosDB)
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