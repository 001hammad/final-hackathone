'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DescriptionComponent from '../Components/ShopDescrip';
import SimilarProducts from '../Components/SimilarProduct';

const Shopdetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState('');

  const handleAddToCart = () => {
    setCartMessage(`Successfully added ${quantity} item(s) to the cart.`);
    setTimeout(() => setCartMessage(''), 3000); // Message will disappear after 3 seconds
  };

  return (
    <div className="bg-white">
      <section className="w-full bg-[url('/starbg.png')] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
              Shop Details
            </h1>
            <div className="text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center">
              <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors duration-300">
                Home
              </Link>
              <span className="text-white">/</span>
              <Link href="/SigninPage" className="text-[#FF9F0D]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-[1320px] h-[718px] mx-auto mt-[130px] flex flex-col md:flex-row ">
        <div className="flex flex-col md:ml-0 ml-[80px] gap-4 mr-4">
          {[1, 2, 3, 4].map((img, index) => (
            <Image
              key={index}
              src={`/s${img}.png`}
              alt={`Image ${img}`}
              width={132}
              height={129}
              className=" md:w-[132px] md:h-[129px] w-[200px] h-[200px] rounded-[6px] border-2"
            />
          ))}
        </div>

        <div className="m-[30px] md:mr-4">
          <Image
            src="/l1.png"
            alt="Large Image"
            width={491}
            height={596}
            className="rounded-[6px]"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center mb-4">
            <span className="bg-[#FF9F0D] text-white px-4 py-1 rounded-full">In stock</span>
          </div>

          <h1 className="font-bold text-[48px] leading-[56px] mb-2">Yummy Chicken Chup</h1>

          <p className="text-[18px] leading-[26px] mb-4 max-w-[608px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum.
          </p>

          <hr className="mb-4" />

          <div className="flex items-center mb-4">
            <span className="font-bold text-[32px] leading-[40px] mr-4">54.00$</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <button
                className="px-4 py-2 border"
                onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-4 py-2 border"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-[#FF9F0D] text-white px-6 py-2 rounded"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          {cartMessage && <p className="text-green-500">{cartMessage}</p>}

          <hr className="mb-4" />
        </div>
      </div>
      <DescriptionComponent />
      <SimilarProducts />
    </div>
  );
};

export default Shopdetail;
