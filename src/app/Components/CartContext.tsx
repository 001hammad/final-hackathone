"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: string; // Unique identifier for the item
  name: string; // Name of the product
  price: number; // Price as number (no need for string format)
  quantity: number; // Quantity of the item
  rating: number; // Product rating (e.g., 1-5 stars)
  image: string; // Thumbnail image URL
  largeImage: string; // Main large image URL for detailed view
  status: string; // Availability status ("In Stock" or "Out of Stock")
};

type CartContextType = {
  cart: CartItem[]; // Array of cart items
  addToCart: (item: CartItem) => void; // Add item to the cart
  removeItem: (id: string) => void; // Remove item from the cart
  updateItemQuantity: (id: string, quantity: number) => void; // Update the quantity of an item
  clearCart: () => void; // Clear all items from the cart
  calculateTotalPrice: () => number; // Function to calculate the total price of all items in the cart
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  // Remove item from the cart
  const removeItem = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      if (updatedCart.length === prevCart.length) {
        console.warn(`Item with ID ${id} not found in cart.`);
      }
      return updatedCart;
    });
  };

  // Update item quantity
  const updateItemQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCart([]);
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
