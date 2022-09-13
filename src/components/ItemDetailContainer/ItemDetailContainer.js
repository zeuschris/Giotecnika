import { useEffect, useState } from "react";
import lookItems from "../../helpers/lookItems";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'

    const ItemDetailContainer = () => {
        
        const [product,setProduct] = useState([])
        const [loading,setLoading] = useState(true)

        const {itemID} = useParams()

        console.log(itemID)

        console.log(product)

        useEffect(() => {
            setLoading(true)
            lookItems()
                .then((resp) => {
                    setProduct(resp.find((element) => element.id === Number(itemID)))
                })
                .catch((error) => console.log(error))
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