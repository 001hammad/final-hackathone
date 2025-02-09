"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Sanity client import
import { FaUtensils } from "react-icons/fa";

// Define types for the data being fetched
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
  const [currentpage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;


  const indexOfLastItem = currentpage * itemsPerPage; // Example: Page 1 -> 6th item
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Example: Page 1 -> 0th item
  const currentItems = filteredFoods.slice(indexOfFirstItem, indexOfLastItem); // Slice the data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "food"]{
          name,
          category,
          description,
          price,
          originalPrice,
          available,
          tags,
          "slug": slug.current,
          "imageUrl": image.asset->url
        }`;
        const products = await client.fetch(query);
        // console.log(products[5])
        setFoods(products);
        setFilteredFoods(products);
      } catch (err: unknown) {
        console.error("Error fetching data:", err);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(query) ||
      (Array.isArray(food.tags)
        ? food.tags.some((tag) => tag.toLowerCase().includes(query))
        : food.tags?.toLowerCase().includes(query))
    );

    setFilteredFoods(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  useEffect(() => {
    const filtered = foods.filter((food) =>
      selectedCategories.length === 0 || selectedCategories.includes(food.category)
    );
    setFilteredFoods(filtered);
  }, [selectedCategories, foods]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="loader-overlay">
        <FaUtensils className="loader-icon" />
        <div className="loader-text">Cooking Something Special...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-medium text-red-600">Error: {error}</p>
      </div>
    );
  }






  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-[70%] px-4 mb-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Food List
          </h1>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by name or tags..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {filteredFoods.length === 0 ? (
            <p className="text-center text-lg font-medium text-gray-500">
              No food items found.
            </p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((food) => (
                <li
                  key={food.slug}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <Link href={`/ourshops/${food.slug}`}>
                    <div className="relative h-[300px] w-full bg-gray-100 overflow-hidden group">
                      <Image
                        src={food.imageUrl}
                        alt={food.name}
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {food.name}
                      </h2>
                      <p className="text-sm text-gray-600 mb-4">
                        {food.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-lg font-medium text-green-600">
                          ${food.price.toFixed(2)}
                        </p>
                        <p className="text-sm line-through text-gray-500">
                          ${food.originalPrice.toFixed(5)}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        <p>
                          Category:{" "}
                          <span className="font-medium">{food.category}</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {/* Pagination Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              className="border border-gray-300 text-gray-500 rounded-md px-4 py-2"
              onClick={() => paginate(currentpage - 1)}
              disabled={currentpage === 1}
            >
              &lt;&lt;
            </button>
            {[...Array(Math.ceil(filteredFoods.length / itemsPerPage))].map((_, index) => (
              <button
                key={index}
                className={`border border-gray-300 text-gray-500 rounded-md px-4 py-2 ${currentpage === index + 1 ? "bg-[#FF9F0D] text-white" : ""}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="border border-gray-300 text-gray-500 rounded-md px-4 py-2"
              onClick={() => paginate(currentpage + 1)}
              disabled={currentpage === Math.ceil(filteredFoods.length / itemsPerPage)}
            >
              &gt;&gt;
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[30%] px-4">
          {/* Filter Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Category</h3>
            <div className="space-y-4">
              {["BreakFast", "Lunch", "Dinner", " Desserts", "Main Course", "Deit Salad", "Snacks"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <label htmlFor={category} className="text-gray-700">
                    {category}
                  </label>
                </div>
              ))}
            </div>
            <div>
              <input type="range" name="" id="" className="w-full accent-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
