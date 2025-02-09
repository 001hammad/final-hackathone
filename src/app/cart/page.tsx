"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "../Components/CartContext";
import HeroSection from "../Components/HeroSection";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs"; // Clerk authentication hook
import { useRouter } from "next/navigation"; // Router for navigation

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

const CartPage = () => {
  const { cart, removeItem, updateItemQuantity, calculateTotalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const { isSignedIn } = useUser(); // Check if user is signed in
  const router = useRouter();

  // Calculate cart subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCharge = 10.0; // Example fixed shipping charge
  const totalAmount = subtotal + shippingCharge - discount;

  const handleCheckout = async () => {
    if (!isSignedIn) {
      router.push("/sign-up"); // Redirect to sign-up page if user is not logged in
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems: cart }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        console.error("Stripe checkout URL not received");
      }
    } catch (error) {
      console.error("Stripe Checkout Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCouponApply = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      alert("Invalid Coupon Code");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Shopping Cart" 
        homeLink="/" 
        currentPage="Cart" 
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
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={100} 
                      height={100} 
                      className="w-24 h-24 object-cover rounded-lg" 
                    />
                  </div>
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
                    <div className="mt-2 flex items-center justify-center md:justify-start gap-2">
                      <button 
                        onClick={() => updateItemQuantity(item.id, Math.max(item.quantity - 1, 1))} 
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
                      >
                        -
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button 
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)} 
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-700 font-bold">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
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
            <div className="mt-6 text-center md:text-right">
              <p className="text-xl font-bold">Grand Total: ${totalAmount.toFixed(2)}</p>
            </div>
          </>
        )}
      </div>

      {/* Coupon Section */}
      <div className="w-full flex flex-col space-y-6 px-4 md:px-[20px] py-[20px]">
        <h2 className="font-bold text-xl md:text-2xl mb-4">Checkout</h2>
        <div className="w-full flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h2 className="font-bold text-lg md:text-xl mb-2">Coupon Code</h2>
            <div className="w-full border p-4 rounded-lg mb-4">
              <p className="text-base md:text-lg leading-6">
                Use coupon code <strong>DISCOUNT10</strong> for a $10 discount on your order.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code"
                className="w-full px-4 py-2 focus:outline-none focus:border-orange-300 border rounded-md text-base md:text-lg"
              />
              <button
                onClick={handleCouponApply}
                className="bg-[#FF9F0D] text-white px-6 py-2 rounded-md text-base md:text-lg font-semibold"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Total Bill Section */}
          <div className="w-full md:w-1/2">
            <h2 className="font-bold text-lg md:text-xl mb-2">Total Bill</h2>
            <div className="w-full border p-4 rounded-lg space-y-2">
              <div className="flex justify-between text-base md:text-lg">
                <span>Cart Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base md:text-lg">
                <span>Shipping Charge:</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base md:text-lg font-bold border-t pt-2">
                <span>Total Amount:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Proceed to Stripe Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full mt-4 bg-[#FF9F0D] text-white px-6 py-3 rounded-md text-lg font-semibold flex items-center justify-center space-x-2"
              disabled={loading}
            >
              <span>{loading ? "Redirecting..." : "Proceed to Checkout"}</span>
              <Image
                src="/CheckSquareOffset.png"
                alt="CheckSquareOffset Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
