import './ItemCount.scss'
import 'react-toastify/dist/ReactToastify.css';


   export const Count = ({max,counter,setCounter,handleCart}) => {

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
    

    return(
            <div>
                <button onClick={handleRest} className='btn btn-outline-warning boton'>-</button>
                <span className="number boton">{counter}</span>
                <button onClick={handleAdd} className='btn btn-outline-warning boton'>+</button>
                <button onClick={handleCart} className= {counter <= max ? 'btn btn-primary' : 'btn disabled'}>Agregar al carrito</button>
            </div>
        )
    }

