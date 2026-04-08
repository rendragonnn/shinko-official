import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../lib/data';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load from localStorage on mount
    try {
      const stored = JSON.parse(localStorage.getItem('shinko_cart')) || [];
      setCartItems(stored);
    } catch {
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage when it changes
    localStorage.setItem('shinko_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId, size) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === productId && i.size === size);
      if (existing) {
        return prev.map(i => i.id === productId && i.size === size ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: productId, size, qty: 1 }];
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems(prev => prev.filter(i => !(i.id === productId && i.size === size)));
  };

  const updateQuantity = (productId, size, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCartItems(prev => prev.map(i => i.id === productId && i.size === size ? { ...i, qty: newQty } : i));
  };

  const getCartCount = () => {
    return cartItems.reduce((sum, item) => sum + item.qty, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => {
      const product = PRODUCTS.find(p => p.id === item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartCount, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
