import { useState } from "react"
import './ItemCount.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Count = (props) => {

    const {stock,initial} = props

    const [counter,setCounter] = useState(initial)

    const handleAdd = () => {
        if (counter){
            setCounter(counter + 1)
        }
       
    }

    const handleRest = () => {
        if (counter > 1){
            setCounter(counter - 1)
        }
    }

    const onAdd = () => {
        if ( counter < stock ) {
            toast.success(`Se añadio ${counter} producto al carrito`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        });
    }
}

    return(
        <div>
                <button onClick={handleRest} className='btn btn-danger boton'>-</button>
                <span className="number boton">{counter}</span>
                <button onClick={handleAdd} className='btn btn-danger boton'>+</button>
                <ToastContainer/>
        </div>
    )
}



