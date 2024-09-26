/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const addToCart = (product) => {
    const added = cart.includes(product) 
   if (!added) {

     setCart([...cart, product]);
    }
  };
  const emptyCart = () => {
    setCart([])
  }

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const saveLocal = () => localStorage.setItem("cart", JSON.stringify(cart));
    saveLocal();
  }, [cart]);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
