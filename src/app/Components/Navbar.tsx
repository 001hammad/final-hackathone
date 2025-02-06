"use client";
import React, { useState } from "react";
import Link from "next/link";
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

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the user dropdown menu
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };
  
  return (
    <nav className="flex flex-col items-center p-4 bg-black relative">
      {/* Navbar header */}
      <div className="flex items-center justify-between w-full">
        <span className="text-yellow-500 font-bold text-lg flex-grow text-center">
          Food<span className="text-white">tuck</span> {/* Brand name */}
        </span>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white hover:text-orange-400" />
            )}{" "}
            {/* Toggle icon */}
          </button>
        </div>
      </div>

      {/* Main Navigation for Desktop */}
      <div className="hidden md:flex flex-row items-center justify-around w-full p-2">
        <div className="flex items-center space-x-4">
          {/* Desktop navigation links */}
          <Link
            href="/"
            className="hover:text-yellow-600 cursor-pointer text-white hover:-translate-y-2 duration-500"
          >
            Home
          </Link>
          
          <Link
            href="/ourshops"
            className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500"
          >
            Shop
          </Link>
          <Link
            href="/Menupage"
            className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500"
          >
            Menu
          </Link>
          <Link
            href="/blogs"
            className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500"
          >
            Blog
          </Link>
          <Link
            href="/404Error"
            className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500"
          >
            Pages
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500"
          >
            About
          </Link>

          <Link
            href="/OurChefs"
            className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500"
          >
            Chefs
          </Link>
        </div>

        {/* Search, User, and Cart for Desktop */}
        <div className="flex items-center mt-4 md:mt-0 relative">
          <div className="relative">
            {/* Search input */}
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full bg-black border border-yellow-500 text-white focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500" />{" "}
            {/* Search icon */}
          </div>
          {/* User icon with dropdown */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="ml-4 text-white hover:text-orange-300 text-2xl focus:outline-none"
            >
              <FaRegUser className="hover:-translate-y-2 duration-500" />
            </button>
            {userMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full mt-6 mr-8 w-20 border border-yellow-500 rounded-md shadow-lg z-50 p-2 bg-orange-400 origin-top text-center"
              >
                <div className="text-white">
                  <SignedOut>
                    <div className="text-white">
                      <SignInButton />
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </motion.div>
            )}
          </div>
          <Link href="/wishlist">
            {" "}
            <div className="text-white ml-4 hover:text-red-600 hover:-translate-y-2 duration-500">
              <FaRegHeart className="text-2xl" />
            </div>
          </Link>
          <Link
            href="/cart"
            className="relative hover:text-orange-300 text-white hover:-translate-y-2 duration-500"
          >
            <FaShoppingBag className="ml-4 text-2xl " />

            {/* Cart Item Count Badge */}
            <span className="absolute top-0  left-7 text-sm text-white bg-orange-400 rounded-full px-2">
              {getItemCount()} {/* Display the cart item count */}
            </span>
          </Link>{" "}
          {/* Shopping bag icon */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center w-full p-4 bg-black">
          <Link
            href="/"
            className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500"
          >
            Home
          </Link>
          <Link
            href="/ourshops"
            className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500"
          >
            Shop
          </Link>
          <Link
            href="/Menupage"
            className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500"
          >
            Menu
          </Link>
          <Link
            href="/blogs"
            className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500"
          >
            Blog
          </Link>
          <Link
            href="/404Error"
            className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500"
          >
            Pages
          </Link>
          <Link
            href="/about"
            className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500"
          >
            About
          </Link>
          <Link
            href="/OurChefs"
            className="text-white py-2  hover:text-orange-400 hover:-translate-y-2 duration-500"
          >
            Chefs
          </Link>
          <div className="flex items-center justify-center mt-4">
            <FaSearch className="text-yellow-500 text-2xl mr-4 hover:text-orange-400 hover:-translate-y-2 duration-500" />
            <FaRegUser
              className="text-yellow-500 text-2xl mr-4 hover:text-orange-400 hover:-translate-y-2 duration-500 "
              onClick={toggleUserMenu} // Toggle the dropdown menu on click
            />

            {/* User dropdown for both mobile and desktop */}
            {userMenuOpen && (
              <div className="relative flex justify-center">
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-full mt-6 mr-8 w-40 border border-yellow-500 rounded-md shadow-lg z-50 p-2 bg-black origin-top text-center"
                  >
                    <SignedOut>
                      <div className="text-white">
                        <SignInButton />
                      </div>
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </motion.div>
                )}
              </div>
            )}
             <Link href="/wishlist">
            {" "}
            <div className=" ml-4 hover:text-red-600 text-orange-300 hover:-translate-y-2 duration-500">
              <FaRegHeart className="text-2xl" />
            </div>
             {/* Cart Item Count Badge */}
             
          </Link>

            <Link
              href="/cart"
              className="relative hover:-translate-y-2 duration-500 "
            >
              <FaShoppingBag className="ml-4 text-2xl text-orange-300 hover:text-orange-300  hover:-translate-y-2 duration-500" />

              {/* Cart Item Count Badge */}
              <span className="absolute top-0 left-7 text-sm  text-white bg-orange-400 rounded-full px-2">
                {getItemCount()} {/* Display the cart item count */}
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;