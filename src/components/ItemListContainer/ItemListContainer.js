import './ItemListContainer.scss'
import lookItems from '../../helpers/lookItems'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { Navigate, useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/fireconfig'
import { useLoginContext } from '../../Context/LoginContext'

const ItemListContainer = () => {

    const [stock, setStock] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoryID} = useParams()

useEffect(() => {
    lookItems()
    
    // 1- referencia a la database de firebase
    const itemsRef = collection(db, 'items')
    const q = categoryID 
              ? query(itemsRef, where('category', '==', categoryID))
              : itemsRef
    // 2- consumir la referencia
    getDocs(q)
        .then((resp) => {
            const productosDB = resp.docs.map((doc) => ({id : doc.id, ...doc.data()}))
            console.log(productosDB)
            setStock(productosDB)
        })
        .finally(() => {
            setLoading(false)
        })
        
}, [categoryID])

    const {user} = useLoginContext()

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