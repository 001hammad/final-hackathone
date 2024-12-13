"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                        {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />} {/* Toggle icon */}
                    </button>
                </div>
            </div>

            {/* Main Navigation for Desktop */}
            <div className="hidden md:flex flex-row items-center justify-around w-full p-2">
                <div className="flex items-center space-x-4">
                    {/* Desktop navigation links */}
                    <Link href="/" className="hover:text-yellow-500 cursor-pointer text-white">Home</Link>
                    <Link href="/Menupage" className="hover:text-yellow-500 text-white">Menu</Link>
                    <Link href="/blog" className="hover:text-yellow-500 text-white">Blog</Link>
                    <Link href="/404Error" className="hover:text-yellow-500 text-white">Pages</Link>
                    <Link href="/about" className="hover:text-yellow-500 text-white">About</Link>
                    <Link href="/SignUppage" className="hover:text-yellow-500 text-white">SignUp</Link>
                    <Link href="/OurShop" className="hover:text-yellow-500 text-white">Shop</Link>
                    <Link href="/OurChefs" className="hover:text-yellow-500 text-white">Chefs</Link>
                </div>

                {/* Search and Cart for Desktop */}
                <div className="flex items-center mt-4 md:mt-0">
                    <div className="relative">
                        {/* Search input */}
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-4 pr-10 py-2 rounded-full bg-black border border-yellow-500 text-white focus:outline-none"
                        />
                        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500" /> {/* Search icon */}
                    </div>
                    <FaShoppingBag className="ml-4 text-white" /> {/* Shopping bag icon */}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                {/* Close button */}
                <button onClick={toggleMenu} aria-label="Close menu" className="absolute top-4 right-4">
                    <FaTimes className="text-white" />
                </button>
                {/* Mobile navigation links */}
                <div className="flex flex-col mt-12 space-y-4 px-6">
                    <Link href="/" className="hover:text-yellow-500">Home</Link>
                    <Link href="/Menupage" className="hover:text-yellow-500">Menu</Link>
                    <Link href="/blog" className="hover:text-yellow-500">Blog</Link>
                    <Link href="/404Error" className="hover:text-yellow-500 text-white">Pages</Link>
                    <Link href="/OurShop" className="hover:text-yellow-500">Shop</Link>
                    <Link href="/about" className="hover:text-yellow-500">About</Link>
                    <Link href="/SignUppage" className="hover:text-yellow-500">SignUp</Link>
                    <Link href="/OurChefs" className="hover:text-yellow-500">Chefs</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
