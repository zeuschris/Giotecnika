import { createContext, useState, useContext, useEffect } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)

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
        return cart.reduce((acc, item) =>  acc + item.cantidad * item.precio + parseInt(item.envio), 0)
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

    const endBuy = (id) => {
        Swal.fire({
            title: 'Se aprobo tu compra con exito!',
            text: `El comprobante de orden es: ${id}`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        })
        setCart([])
    }   

    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(cart))
},[cart])

    return (
        <CartContext.Provider value = {{
            cart,
            addCart,
            inCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            endBuy
                                      }}>
            {children}
        </CartContext.Provider>
    )
}

  export const useCartContext = () => {
      return useContext(CartContext)
  }