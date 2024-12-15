import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DescriptionComponent from '../Components/ShopDescrip'
import Navbar from '../Components/Navbar'
import SimilarProducts from '../Components/SimilarProduct'
import Footer from '../Components/Footer'

const Shopdetail = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <section className='w-full  bg-[url("/starbg.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          {/* Flex container for the title and breadcrumb links */}
          <div className='flex flex-col items-center'>
            {/* Hero Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              Shop Details
            </h1>
            {/* Breadcrumb Links for navigation */}
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/SigninPage" className='text-[#FF9F0D]'>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-[1320px] h-[718px] mx-auto mt-[130px] flex flex-col md:flex-row ">
      {/* Left images */}
      <div className="flex flex-col md:ml-0 ml-[80px] gap-4 mr-4">
  {[1, 2, 3, 4].map((img, index) => (
    <Image
      key={index}
      src={`/s${img}.png`} // Updated to match your request
      alt={`Image ${img}`}
      width={132} height={129}
      className=" md:w-[132px] md:h-[129px] w-[200px] h-[200px] rounded-[6px] border-2"
    />
  ))}
</div>


      {/* Large image */}
      <div className="m-[30px] md:mr-4">
        <Image
          src="/l1.png"
          alt="Large Image"
          width={491} height={596}
          className=" rounded-[6px]"
        />
      </div>

      {/* Details section */}
      <div className="flex-1">
        {/* In stock and navigation */}
        <div className="flex items-center mb-4">
          <span className="bg-[#FF9F0D] text-white px-4 py-1 rounded-full">In stock</span>
          <div className="flex items-center ml-4 gap-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span>Prev</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-bold text-[48px] leading-[56px] mb-2">Yummy Chicken Chup</h1>

        {/* Paragraph */}
        <p className="text-[18px] leading-[26px] mb-4 max-w-[608px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>

        {/* Horizontal line */}
        <hr className="mb-4" />

        {/* Price and rating */}
        <div className="flex items-center mb-4">
          <span className="font-bold text-[32px] leading-[40px] mr-4">54.00$</span>
          <div className="flex items-center text-[16px] leading-[24px]">
            <div className="flex items-center text-[#FF9F0D] mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 .587l3.668 7.125 7.864 1.151-5.691 5.548 1.342 7.829L12 18.896l-7.183 3.744 1.342-7.829-5.691-5.548 7.864-1.151z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600">| 5.0 Rating</span>
            <span className="text-gray-600 mx-2">|</span>
            <span className="text-gray-600">22 Review</span>
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border">-</button>
            <span>1</span>
            <button className="px-4 py-2 border">+</button>
          </div>
          <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded">Add to Cart</button>
        </div>

        {/* Horizontal line */}
        <hr className="mb-4" />

        {/* Wishlist and Compare */}
        <div className="flex items-center mb-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0l-.56.57-.56-.57a5.5 5.5 0 00-7.78 7.78l8.34 8.33 8.34-8.33a5.5 5.5 0 000-7.78z"
              />
            </svg>
            <span>WishList</span>
          </div>
          <span className="mx-4">|</span>
          <span className="cursor-pointer">Compare</span>
        </div>

        {/* Category and Tags */}
        <p className="mb-2">Category: Pizza</p>
        <p className="mb-2">Tag: Our shop</p>

        {/* Share Icons */}
        <div className="flex items-center gap-4 mb-4">
          <span>Share:</span>
          {["facebook", "twitter", "instagram", "linkedin", "pinterest"].map((icon, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              {/* Replace this with specific social media SVGs */}
              <circle cx="12" cy="12" r="10" />
            </svg>
          ))}
        </div>

        {/* Horizontal line */}
        <hr />
      </div>
    </div>
    <DescriptionComponent/>
    <SimilarProducts/>
    <Footer/>
    </div>
  )
}

export default Shopdetail
