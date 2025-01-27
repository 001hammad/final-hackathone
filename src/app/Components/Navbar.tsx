"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingBag, FaBars, FaTimes, FaRegUser } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state
    const [userMenuOpen, setUserMenuOpen] = useState(false); // User dropdown state

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
                        {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white hover:text-orange-400" />} {/* Toggle icon */}
                    </button>
                </div>
            </div>

            {/* Main Navigation for Desktop */}
            <div className="hidden md:flex flex-row items-center justify-around w-full p-2">
                <div className="flex items-center space-x-4">
                    {/* Desktop navigation links */}
                    <Link href="/" className="hover:text-yellow-600 cursor-pointer text-white hover:-translate-y-2 duration-500">Home</Link>
                    <Link href="/Menupage" className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500">Menu</Link>
                    <Link href="/blogs" className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500">Blog</Link>
                    <Link href="/404Error" className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500">Pages</Link>
                    <Link href="/about" className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500">About</Link>
                    <Link href="/ourshops" className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500">Shop</Link>
                    <Link href="/OurChefs" className="hover:text-yellow-600 text-white hover:-translate-y-2 duration-500">Chefs</Link>
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
                        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500" /> {/* Search icon */}
                    </div>

                    {/* User icon with dropdown */}
                    <div className="relative">
                        <button onClick={toggleUserMenu} className="ml-4 text-white hover:text-orange-300 text-2xl focus:outline-none">
                            <FaRegUser className="hover:-translate-y-2 duration-500"/>
                        </button>
                        {userMenuOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-black border border-yellow-500 rounded-md shadow-lg z-50">
                            
                                    <Link href={"/logout"} className="block px-4 py-2 text-white hover:bg-yellow-500">Log Out</Link>
                                
                                
                                        <Link href={"/signin"} className="block px-4 py-2 text-white hover:bg-yellow-500">Sign In</Link>
                                        <Link href={"/signup"} className="block px-4 py-2 text-white hover:bg-yellow-500">Sign Up</Link>
                                    
                            
                            </div>
                        )}
                    </div>
                    
                    <Link href='/cart'><FaShoppingBag className="ml-4 text-2xl hover:text-orange-300 text-white hover:-translate-y-2 duration-500" /></Link>   {/* Shopping bag icon */}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center w-full p-4 bg-black">
                    <Link href="/" className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500">Home</Link>
                    <Link href="/Menupage" className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500">Menu</Link>
                    <Link href="/blogs" className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500">Blog</Link>
                    <Link href="/404Error" className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500">Pages</Link>
                    <Link href="/about" className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500">About</Link>
                    <Link href="/ourshops" className="text-white py-2 hover:text-orange-400 hover:-translate-y-2 duration-500">Shop</Link>
                    <Link href="/OurChefs" className="text-white py-2  hover:text-orange-400 hover:-translate-y-2 duration-500">Chefs</Link>
                    <div className="flex items-center justify-center mt-4">
                        <FaSearch className="text-yellow-500 text-2xl mr-4 hover:text-orange-400 hover:-translate-y-2 duration-500" />
                        <FaRegUser
    className="text-yellow-500 text-2xl mr-4 hover:text-orange-400 hover:-translate-y-2 duration-500 "
    onClick={toggleUserMenu} // Toggle the dropdown menu on click
/>

{/* User dropdown for both mobile and desktop */}
{userMenuOpen && (
    <div className="absolute right-0 mt-2 w-40 bg-black border border-yellow-500 rounded-md shadow-lg z-50">
    
            <Link href={"/logout"} className="block px-4 py-2 text-white hover:bg-yellow-500">Log Out</Link>
        
                <Link href={"/signin"} className="block px-4 py-2 text-white hover:bg-yellow-500">Sign In</Link>
                <Link href={"/signup"} className="block px-4 py-2 text-white hover:bg-yellow-500">Sign Up</Link>
        
    
    </div>
)}
                        <Link href="/cart"><FaShoppingBag className="text-yellow-500 text-2xl hover:text-orange-400 hover:-translate-y-2 duration-500" /></Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
