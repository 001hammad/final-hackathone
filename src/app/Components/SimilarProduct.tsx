import Image from 'next/image';
import React from 'react';

const SimilarProducts = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Similar Products Heading and Arrows */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Similar Products</h3>
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button className="p-2 border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          {/* Right Arrow with orange background */}
          <button className="p-2 border rounded-full bg-[#FF9F0D]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Similar Product Images and Details */}
      <div className="flex gap-4 overflow-x-auto">
        {/* Product 1 */}
        <div className="flex-shrink-0">
          <Image
            src="/categ1.png"
            alt="Product 1"
            width={312}
            height={267}
            className="rounded-lg"
          />
          <p className="text-center mt-2 text-sm font-medium">Chicken Burger</p>
          <p className="text-center text-xl font-bold">$5.00</p>
        </div>

        {/* Product 2 */}
        <div className="flex-shrink-0">
          <Image
            src="/categ2.png"
            alt="Product 2"
            width={312}
            height={267}
            className="rounded-lg"
          />
          <p className="text-center mt-2 text-sm font-medium">Veggie Pizza</p>
          <p className="text-center text-xl font-bold">$7.50</p>
        </div>

        {/* Product 3 */}
        <div className="flex-shrink-0">
          <Image
            src="/categ3.png"
            alt="Product 3"
            width={312}
            height={267}
            className="rounded-lg"
          />
          <p className="text-center mt-2 text-sm font-medium">Beef Taco</p>
          <p className="text-center text-xl font-bold">$6.00</p>
        </div>

        {/* Product 4 */}
        <div className="flex-shrink-0">
          <Image
            src="/categ4.png"
            alt="Product 4"
            width={312}
            height={267}
            className="rounded-lg"
          />
          <p className="text-center mt-2 text-sm font-medium">Cheese Fries</p>
          <p className="text-center text-xl font-bold">$4.00</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
