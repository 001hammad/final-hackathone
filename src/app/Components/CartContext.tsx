"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  image: string;
  largeImage: string;
  status: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  calculateTotalPrice: () => number;
  getItemCount: () => number;  // New method to get total item count
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Load Cart from Local Storage on First Render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save Cart to Local Storage
  const updateLocalStorage = (updatedCart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // 🛒 Add item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        updatedCart = [...prevCart, item];
      }
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // ❌ Remove item from the cart
  const removeItem = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // 🔄 Update item quantity
  const updateItemQuantity = (id: string, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // 💰 Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // 🗑️ Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // 🛍️ Get total number of items in the cart
  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        updateItemQuantity,
        clearCart,
        calculateTotalPrice,
        getItemCount,  // Providing the getItemCount method
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
