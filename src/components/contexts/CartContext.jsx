import {
  React, createContext, useState, useContext,
} from 'react';
import { getLocalStorage } from '../functions/localStorage';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartCount, setCartCount] = useState(getLocalStorage().length);

  function changecartCount() {
    setCartCount(cartCount + 1);
  }

  return (
    <CartContext.Provider value={{ cartCount, changecartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
