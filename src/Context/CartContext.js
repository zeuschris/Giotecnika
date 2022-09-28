import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addCart = (prod) => {
        setCart ([...cart, prod])
    }

    const inCart = (id) => {
        return cart.find((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) =>  acc + item.cantidad * item.precio + item.envio, 0)
    }


    const removeItem = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
          
          swalWithBootstrapButtons.fire({
            title: 'Estas seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                  'Eliminado!',
                  'Su producto ha sido eliminado.',
                  'success',
                  setCart(cart.filter((item) => item.id !== id))
              )
            } else if (

              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Tu producto está a salvo :)',
                'error'
            )
        }
    })
}

    const emptyCart = () => {
        Swal.fire({
            title: 'Vaciar carrito?',
            text: "No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              setCart([])
        }
    })
}

    return (
        <CartContext.Provider value = {{
            cart,
            addCart,
            inCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem
          }}>
            {children}
        </CartContext.Provider>
    )
}