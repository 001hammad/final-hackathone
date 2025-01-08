import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from './CartContext'; // Assuming you have the useCart hook to access cart data
import { useRouter } from 'next/navigation'; // Importing useRouter from 'next/router'

const CouponCodeSection = () => {
  const { cart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  
  // Only use useRouter hook on the client side
  const router = useRouter();

  // Calculate cart subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate shipping charge (example fixed value, can be dynamic based on cart)
  const shippingCharge = 10.0;

  // Calculate total amount
  const totalAmount = subtotal + shippingCharge - discount;

  // Handle coupon code application
  const handleCouponApply = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10); // Apply $10 discount for the valid code
    } else {
      alert('Invalid Coupon Code');
    }
  };

  // Handle proceed to checkout
  const handleProceedToCheckout = () => {
    // Ensure cart and discount are being passed properly
    if (cart && cart.length > 0) {
      const query = new URLSearchParams({
        cart: JSON.stringify(cart),
        discount: discount.toString(),
      }).toString();
  
      const checkoutUrl = `/checkout?${query}`;
      router.push(checkoutUrl);
    } else {
      alert('Cart is empty.');
    }
  };

  return (
    <div className="w-full flex flex-col space-y-6 px-4 md:px-[20px] py-[20px]">
      <h2 className="font-bold text-xl md:text-2xl mb-4">Checkout</h2>

      {/* Parent Flexbox for Side-by-Side Layout */}
      <div className="w-full flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
        {/* Coupon Code Section */}
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

          {/* Proceed to Checkout Button with Icon */}
          <button
            onClick={handleProceedToCheckout}
            className="w-full mt-4 bg-[#FF9F0D] text-white px-6 py-3 rounded-md text-lg font-semibold flex items-center justify-center space-x-2"
          >
            <span>Proceed to Checkout</span>
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
  );
};

export default CouponCodeSection;
