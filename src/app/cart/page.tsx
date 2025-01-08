"use client";

import Image from "next/image";
import Hero from "../Components/AboutHero";
import { useCart } from "../Components/CartContext";
import CouponCodeSection from "../Components/Coupon";

const CartPage = () => {
  const { cart, removeItem } = useCart();

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Shopping Cart" 
        homeLink="/" 
        currentPage="Shopping cart" 
        backgroundImage="/starbg.png" 
      />

      {/* Cart Content */}
      <div className="p-4">
        {cart.length === 0 ? (
          <p className="text-center text-lg font-semibold">Your cart is empty!</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4 text-center md:text-left"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={100} 
                      height={100} 
                      className="w-24 h-24 object-cover rounded-lg" 
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <div className="flex justify-center md:justify-start text-yellow-500">
                      {Array.from({ length: Number(item.rating) }).map((_, index) => (
                        <span key={index}>⭐</span>
                      ))}
                    </div>
                    <p className="mt-2 text-gray-700">
                      Price: <span className="font-semibold">${item.price}</span>
                    </p>
                    <p className="text-gray-700">
                      Quantity: <span className="font-semibold">{item.quantity}</span>
                    </p>
                    <p className="text-gray-700 font-bold">
                      Total: ${Number(item.price) && Number(item.quantity) ? (Number(item.price) * Number(item.quantity)).toFixed(2) : '0.00'}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <div className="flex justify-center md:justify-start">
                    <button 
                      onClick={() => removeItem(item.id)} 
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Grand Total */}
            <div className="mt-6 text-center md:text-right">
              <p className="text-xl font-bold">
                Grand Total: $
                {cart.reduce(
                  (total, item) => total + (Number(item.price) * Number(item.quantity)),
                  0
                ).toFixed(2)}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Coupon Section */}
      <CouponCodeSection />
    </div>
  );
};

export default CartPage;
