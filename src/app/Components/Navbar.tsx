"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useWishlist } from "./wishlistContext";
import {
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaRegUser,
} from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";
import { FaRegHeart } from "react-icons/fa";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state
  const [userMenuOpen, setUserMenuOpen] = useState(false); // User dropdown state
  const { getItemCount } = useCart(); // Get cart item count
  const { wishlist } = useWishlist(); // Get wishlist from context
  const wishlistCount = wishlist?.length || 0; // Ensure wishlist is always defined
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the user dropdown menu
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };
  
  return (
    <nav className="flex flex-col items-center p-4 bg-black relative w-full">
      {/* Navbar header */}
      <div className="flex items-center justify-between w-full">
        <span className="text-yellow-500 font-bold text-lg flex-grow text-center">
          Food<span className="text-white">tuck</span> {/* Brand name */}
        </span>
        {/* Icons for mobile view */}
        <div className="flex items-center md:hidden space-x-4">
          <FaSearch className="text-yellow-500 text-2xl" />
          <FaRegUser className="text-yellow-500 text-2xl" onClick={toggleUserMenu} />
          <Link href="/wishlist">
            <div className="relative text-white">
              <FaRegHeart className="text-2xl" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </div>
          </Link>
          <Link href="/cart">
            <div className="relative text-white">
              <FaShoppingBag className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {getItemCount()}
              </span>
            </div>
          </Link>
          {/* Mobile menu button */}
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white hover:text-orange-400" />
            )} 
          </button>
        </div>
      </div>

      {/* Main Navigation for Desktop */}
      <div className="hidden md:flex flex-row items-center justify-around w-full p-2">
        <div className="flex items-center space-x-4">
          {/* Desktop navigation links */}
          <Link href="/" className="hover:text-yellow-600 cursor-pointer text-white">Home</Link>
          <Link href="/ourshops" className="hover:text-yellow-600 text-white">Shop</Link>
          <Link href="/Menupage" className="hover:text-yellow-600 text-white">Menu</Link>
          <Link href="/blogs" className="hover:text-yellow-600 text-white">Blog</Link>
          <Link href="/404Error" className="hover:text-yellow-600 text-white">Pages</Link>
          <Link href="/about" className="hover:text-yellow-600 text-white">About</Link>
          <Link href="/OurChefs" className="hover:text-yellow-600 text-white">Chefs</Link>
        </div>

        {/* Search, User, Wishlist, and Cart for Desktop */}
        <div className="flex items-center space-x-4">
          {/* <FaSearch className="text-yellow-500 text-2xl" /> */}
          <FaSearch className="text-yellow-500 text-2xl cursor-pointer" onClick={toggleSearch} />
        
        {searchOpen && (
          <motion.input 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "200px", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          type="text"
          placeholder="Search..."
          className="border border-yellow-500 px-2 py-1 text-black rounded-md shadow-lg w-52"
        />
        
        )}
          <div className="relative">
            <FaRegUser className="text-white cursor-pointer text-2xl" onClick={toggleUserMenu} />
            {userMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full mt-6 right-0 w-20 border border-yellow-500 rounded-md shadow-lg z-50 p-2 bg-orange-400 origin-top text-center"
              >
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </motion.div>
            )}
          </div>
          <Link href="/wishlist">
            <div className="relative text-white">
              <FaRegHeart className="text-2xl" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </div>
          </Link>
          <Link href="/cart">
            <div className="relative text-white">
              <FaShoppingBag className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {getItemCount()}
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center w-full p-4 bg-black">
          <Link href="/" className="text-white py-2">Home</Link>
          <Link href="/ourshops" className="text-white py-2">Shop</Link>
          <Link href="/Menupage" className="text-white py-2">Menu</Link>
          <Link href="/blogs" className="text-white py-2">Blog</Link>
          <Link href="/404Error" className="text-white py-2">Pages</Link>
          <Link href="/about" className="text-white py-2">About</Link>
          <Link href="/OurChefs" className="text-white py-2">Chefs</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
