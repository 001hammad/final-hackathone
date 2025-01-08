import React from 'react';

const CouponCodeSection = () => {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter Here Code"
              className="w-full px-4 py-2 focus:outline-none focus:border-orange-300 border rounded-md text-base md:text-lg"
            />
            <button
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
              <span>$120.00</span>
            </div>
            <div className="flex justify-between text-base md:text-lg">
              <span>Shipping Charge:</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between text-base md:text-lg font-bold border-t pt-2">
              <span>Total Amount:</span>
              <span>$130.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCodeSection;
