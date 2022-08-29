import { useState } from "react"
import './ItemCount.scss'

export const Count = ({stock}) => {

    const [counter,setCounter] = useState(1)

    const handleAdd = () => {
        if (counter < stock){
            setCounter(counter + 1)
        }
       
    }

    const handleRest = () => {
        if (counter > 1){
            setCounter(counter - 1)
        }
    }

    return(
        <div>
                <button onClick={handleRest} className='btn btn-danger boton'>-</button>
                <span className="number boton">{counter}</span>
                <button onClick={handleAdd} className='btn btn-danger boton'>+</button>
        </div>
    )
}