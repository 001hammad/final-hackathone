import React from "react";
import Image from "next/image";
import Link from "next/link";

function ShopPage() {
  const products = [
    { id: 1, image: "/malaiboti.jpg", name: "Fresh Lime", price: 38, oldPrice: 45 },
    { id: 2, image: "/muffin.jpg", name: "Chocolate Muffin", price: 42, oldPrice: 50 },
    { id: 3, image: "/burger.jpg", name: "Burger", price: 35, oldPrice: 40 },
    { id: 4, image: "/juices.jpg", name: "Drink", price: 55, oldPrice: 60 },
    { id: 5, image: "/pizzas.jpg", name: "Cheesy Pizza", price: 48, oldPrice: 55 },
    { id: 6, image: "/hotdog.jpg", name: "Hot Dog", price: 30, oldPrice: 35 },
    { id: 7, image: "/chup.jpg", name: "Chicken Chup", price: 25, oldPrice: 30 },
    { id: 8, image: "/muffin.jpg", name: "Chocolate Muffin", price: 40, oldPrice: 50 },
    { id: 9, image: "/juices.jpg", name: "Drink", price: 38, oldPrice: 45 },
  ];

  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
      {/* Left Section */}
      <div className="w-full md:w-[70%] lg:w-[75%]">
        {/* Sort and Show Controls */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <label htmlFor="sort" className="text-gray-700 font-medium">
              Sort By:
            </label>
            <select
              id="sort"
              className="border border-gray-300 rounded-md p-2 text-gray-700"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <label htmlFor="show" className="text-gray-700 font-medium">
              Show:
            </label>
            <select
              id="show"
              className="border border-gray-300 rounded-md p-2 text-gray-700"
            >
              <option value="10">10 items per page</option>
              <option value="15">15 items per page</option>
              <option value="20">20 items per page</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/ourshops/${product.id}`}
              className="block text-center hover:-translate-y-5 duration-700"
            >
              <Image
                src={product.image}
                alt={product.name}
                height={200}
                width={400}
                className="object-cover"
              />
              <p className="mt-4 text-black text-lg font-medium">{product.name}</p>
              <div className="flex items-center justify-center mt-2 space-x-2">
                <p className="text-[#FF9F0D] text-lg font-semibold">${product.price}.00</p>
                <p className="text-gray-500 line-through">${product.oldPrice}.00</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="border border-gray-300 text-gray-500 rounded-md px-4 py-2">
            &lt;&lt;
          </button>
          <button className="border border-gray-300 text-gray-500 rounded-md px-4 py-2">
            1
          </button>
          <button className="bg-[#FF9F0D] text-white rounded-md px-4 py-2">
            2
          </button>
          <button className="border border-gray-300 text-gray-500 rounded-md px-4 py-2">
            3
          </button>
          <button className="border border-gray-300 text-gray-500 rounded-md px-4 py-2">
            &gt;&gt;
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[30%] lg:w-[25%]">
      {/* Search Product */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search Product"
          className="border border-gray-300 rounded-l-md p-2 text-gray-700 w-full"
        />
        <button
          className="bg-[#FF9F0D] text-white p-2 rounded-r-md"
          aria-label="Search"
        >
          Q
        </button>
      </div>

      {/* Category Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Category</h3>
        <div className="space-y-4">
          {["Lime", "Orange", "Mango", "Burger", "Pizza", "Cake", "Wrap", "Sandwich"].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <input type="checkbox" id={category} />
              <label htmlFor={category} className="text-gray-700">{category}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Promotion Image Section */}
      <div className="mb-6">
        <Image
          src="/h16.png" // Replace with the actual image path
          alt="Promotion Image"
          width={248}
          height={286}
          className="object-cover rounded-md"
        />
      </div>

      {/* Filter By Price */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-700 mb-2">Filter By Price</h3>
        <div className="w-full border-b border-[#FF9F0D] mb-2"></div>
        <p className="text-gray-700 mb-4">From $0 to $8000</p>
      </div>

      {/* Latest Products */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Latest Products</h3>
        <div className="space-y-4">
          {[
            { name: "Product 1", price: 34, image: "/h17.png" },
            { name: "Product 2", price: 40, image: "/h17.png" },
            { name: "Product 3", price: 28, image: "/h17.png" },
            { name: "Product 4", price: 60, image: "/h17.png" },
          ].map((product) => (
            <div key={product.name} className="flex items-center space-x-4">
              <Image
                src={product.image}
                alt={product.name}
                width={71.81}
                height={65}
                className="object-cover"
              />
              <div className="flex flex-col">
                <p className="text-sm text-gray-700">{product.name}</p>
                <div className="flex items-center">
                  <span className="text-yellow-500">⭐⭐⭐⭐</span>
                </div>
                <p className="text-sm text-[#FF9F0D]">${product.price}.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Tags */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Product Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["Food", "Burger", "Pizza", "Cake", "Drink", "Sandwich", "Healthy", "Fresh"].map((tag) => (
            <span key={tag} className="bg-[#FF9F0D] text-white px-4 py-1 rounded-md text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    </div>
  );
}

export default ShopPage;
