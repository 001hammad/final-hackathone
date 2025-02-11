"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { FaEye, FaUtensils, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

interface Food {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice: number;
  tags: string | string[];
  available: boolean;
  imageUrl: string;
  _createdAt: string;
  _updatedAt: string;
}

const ShopProduct = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;


// Price Range States
const [minPrice, setMinPrice] = useState<number>(0);
const [maxPrice, setMaxPrice] = useState<number>(100); // Default Max Price

// 💰 Price Filter
useEffect(() => {
  const filtered = foods.filter(
    (food) =>
      (selectedCategories.length === 0 || selectedCategories.includes(food.category)) &&
      food.price >= minPrice &&
      food.price <= maxPrice
  );
  setFilteredFoods(filtered);
}, [selectedCategories, foods, minPrice, maxPrice]);

const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "food"]{
          name, category, description, price, originalPrice, available, tags,
          "slug": slug.current, "imageUrl": image.asset->url
        }`;
        const products = await client.fetch(query);
        setFoods(products);
        setFilteredFoods(products);
      } catch (err) {
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = foods.filter(
      (food) =>
        (selectedCategories.length === 0 || selectedCategories.includes(food.category)) &&
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFoods(filtered);
  }, [selectedCategories, searchQuery, foods]);

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFoods.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-[70%] px-4 mb-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Food List</h1>
          <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-6" />

          {filteredFoods.length === 0 ? (
            <p className="text-center text-lg text-gray-500">No food items found.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((food) => (
                <li key={food.slug} className="bg-white border rounded-lg shadow-md overflow-hidden">
                  <Link href={`/ourshops/${food.slug}`}>
                    <div className="relative h-[300px] bg-gray-100 overflow-hidden">
                      <Image src={food.imageUrl} alt={food.name} layout="fill" objectFit="cover" className="transform transition-transform duration-300 hover:scale-110" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">{food.name}</h2>
                      <p className="text-sm text-gray-600 mb-4">{food.description}</p>
                      <div className="flex justify-between">
                        <p className="text-lg text-green-600">${food.price.toFixed(2)}</p>
                        <p className="text-sm line-through text-gray-500">${food.originalPrice.toFixed(2)}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {/* Pagination */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => setCurrentPage(i + 1)}
                className={`mx-1 px-4 py-2 rounded ${currentPage === i + 1 ? "bg-orange-500 text-white" : "bg-gray-200"}`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[30%] px-4">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Category</h3>
          <div className="space-y-4">
            {["BreakFast", "Lunch", "Dinner", " Desserts", "Main Course", "Diet Salad", "Snacks"].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <input type="checkbox" id={category} checked={selectedCategories.includes(category)}
                  onChange={() => setSelectedCategories((prev) => prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category])} />
                <label htmlFor={category} className="text-gray-700">{category}</label>
              </div>
            ))}
          </div>
           {/* 🏷 Price Range Slider */}
           <div className="mt-6">
            <label className="block text-gray-700 font-bold">Price Range: ${minPrice} - ${maxPrice}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={minPrice}
              onChange={(e) =>  setMinPrice(Number(e.target.value))}
              className="w-full accent-orange-400"
            />
            <input
              type="range"
              min={minPrice}
              max="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-orange-400 mt-2"
            />
            
          </div>
          <div className="flex flex-col items-center justify-center mt-[60px]">
      <div className="grid grid-cols-3 gap-8">
        {/* 5 Normal Images */}
        {Array(5).fill(0).map((_, i) => (
          <div key={i} className="w-24  h-24 bg-orange-400 rounded-lg flex items-center justify-center">
            <Image src="/categ2.png" className="p-2" alt={`Image ${i + 1}`} width={100} height={100} />
          </div>
        ))}

        {/* Dim Image with Eye Icon */}
        <div className="relative w-24 h-24 bg-orange-400 rounded-lg flex items-center justify-center">
          <Image src="/youget.png" alt="Hidden Image" width={100} height={100} className="opacity-50" />
          <FaEye className="absolute text-black text-2xl opacity-80" />
        </div>
      </div>
    </div>
    <div className="flex justify-center py-8"> 
      <div className="bg-orange-400 w-[360px] text-white text-center p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Follow Us On Social Media</h2>
        
        <div className="flex justify-center space-x-4">
          <Link href="https://facebook.com" target="_blank"><FaFacebook className="text-2xl hover:scale-110 transition" /></Link>
          <Link href="https://twitter.com" target="_blank"><FaTwitter className="text-2xl hover:scale-110 transition" /></Link>
          <Link href="https://instagram.com" target="_blank"><FaInstagram className="text-2xl hover:scale-110 transition" /></Link>
          <Link href="https://linkedin.com" target="_blank"><FaLinkedin className="text-2xl hover:scale-110 transition" /></Link>
          <Link href="https://youtube.com" target="_blank"><FaYoutube className="text-2xl hover:scale-110 transition" /></Link>
          <Link href="https://tiktok.com" target="_blank"><FaTiktok className="text-2xl hover:scale-110 transition" /></Link>
        </div>
      </div>
      </div>

        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
