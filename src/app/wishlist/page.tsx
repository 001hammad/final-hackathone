'use client'

import { useWishlist } from "@/app/Components/wishlistContext";
import Image from "next/image";
import Link from "next/link";
import { FaHeartBroken, FaHeart } from "react-icons/fa"; // Adding heart and heartbroken icons

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-100 rounded-lg shadow-lg border-2 border-gray-300">
          <FaHeartBroken className="text-red-500 text-6xl mb-4" /> {/* Heartbroken icon */}
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-4">Looks like you haven&apos;t added any items yet. Start browsing and add your favorites!</p>
          <Link href="/ourshops" className="mt-4 bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {wishlist.map((item) => (
            <div key={item.id} className="relative border p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 bg-white flex flex-col items-center">
              <div className="overflow-hidden rounded-lg mb-4">
                <Image src={item.image} alt={item.name} width={300} height={300} className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="absolute top-2 right-2 z-10">
                <button 
                  onClick={() => removeFromWishlist(item.id)} 
                  className="bg-red-500  text-white p-2 rounded-full hover:bg-red-200 transition duration-300"
                >
                  <FaHeart className="text-2xl" />
                </button>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{item.name}</h2>
              <p className="text-lg text-yellow-600 font-semibold">${item.price.toFixed(2)}</p>
              <Link 
                href={`/product/${item.slug?.toString()}`} 
                className="mt-4 text-blue-500 text-sm hover:underline transition duration-300"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
