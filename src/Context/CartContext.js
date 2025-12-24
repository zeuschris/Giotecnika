import { createContext, useState, useContext, useEffect } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

const getInitialCart = () => {
  try {
    const storedCart = localStorage.getItem('carrito');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart);

  const addCart = (prod) => {
    setCart([...cart, prod]);
    
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `${prod.nombre} agregado al carrito`,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  };

  const inCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, item) => 
      acc + item.cantidad * item.precio + parseInt(item.envio || 0), 0
    );
  };

  const removeItem = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart.filter((item) => item.id !== id));
        Swal.fire(
          'Eliminado',
          'Tu producto ha sido eliminado.',
          'success'
        );
      }
    });
  };

  const emptyCart = () => {
    Swal.fire({
      title: '¿Vaciar carrito?',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire(
          'Carrito vaciado',
          'Tu carrito ha sido vaciado.',
          'success'
        );
      }
    });
  };

  const endBuy = (id) => {
    Swal.fire({
      title: '¡Compra aprobada con éxito!',
      html: `<p>El comprobante de orden es:</p><strong>${id}</strong>`,
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    });
    setCart([]);
  };

  useEffect(() => {
    try {
      localStorage.setItem('carrito', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{
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
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within CartProvider');
  }
  return context;
};