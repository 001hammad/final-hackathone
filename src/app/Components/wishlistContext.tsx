// app/Components/WishlistContext.tsx

'use client';

import { createContext, useContext, useState, ReactNode } from "react";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  largeImage: string;
  slug?: string;
  status: string;
}

type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
