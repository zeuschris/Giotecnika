import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
import { doc,getDoc } from "firebase/firestore";
import { db } from "../../firebase/fireconfig";

    const ItemDetailContainer = () => {

        
        const [product,setProduct] = useState([])
        const [loading,setLoading] = useState(true)

        const {itemID} = useParams()

        useEffect(() => {
            setLoading(true)
            
            const docRef = doc(db, 'items', itemID)

            getDoc(docRef)
                .then((doc) => {
                    setProduct({id: doc.id, ...doc.data()})
                })
                .finally(() => {
                    setLoading(false)
                })
        },[])

        return (    
            <div>
            {
                loading ?
                <div className='loader'/>
                :
                <ItemDetail prod = {product}/>
            }
            </div>
        )
    }
    

export default ItemDetailContainer