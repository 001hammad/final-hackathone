import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurChefs = () => {
  // Array of image paths for the 12 chefs
  const chefImages = [
    '/chefa.png', '/chefb.png', '/chefc.png', '/chefd.png',
    '/pic (1).png', '/pic (2).png', '/pic (3).png', '/pic (4).png',
    '/pic (5).png', '/pic (6).png', '/pic (7).png', '/pic (1).png',
    '/pic (5).png', '/pic (6).png', '/pic (7).png', '/pic (1).png',
  ];

  return (
    <div className="min-h-screen bg-white  ">
      <div className='bg-white'>
      
      {/* Hero Section: Background image with padding and text */}
      <section className='w-full bg-[url("/starbg.png")]  bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          {/* Flex container for the title and breadcrumb links */}
          <div className='flex flex-col items-center'>
            {/* Hero Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              Our Chef
            </h1>
            {/* Breadcrumb Links for navigation */}
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/about" className='text-[#FF9F0D]'>
                 Chef
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Heading Section */}
      

      {/* Grid Display for Chef Images */}
      <div className="grid grid-cols-1 m-[10px] sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Loop through the chefImages array and render each image */}
        {chefImages.map((image, index) => (
          <div
            key={index} // Unique key for each item in the loop
            className="relative w-full h-48 sm:h-60 md:h-72 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Image Component from Next.js to load images optimally */}
            <Image
              src={image}
              alt={`Chef ${index + 1}`} // Alt text for accessibility
              layout="fill" // Image fills the container
              objectFit="cover" // Ensures the image covers the entire container without distortion
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurChefs;
