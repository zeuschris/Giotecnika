import { createContext, useState } from "react";

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
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    return (
        <CartContext.Provider value = {{
            cart,
            addCart,
            inCart,
            cartQuantity,
            cartTotal
          }}>
            {children}
        </CartContext.Provider>
    )
}