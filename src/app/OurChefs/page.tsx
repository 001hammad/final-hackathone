import React from 'react';
import Image from 'next/image';
import Navbar from '../Components/Navbar';

const OurChefs = () => {
  // Array of image paths for the 12 chefs
  const chefImages = [
    '/chefa.png', '/chefb.png', '/chefc.png', '/chefd.png',
    '/pic (1).png', '/pic (2).png', '/pic (3).png', '/pic (4).png',
    '/pic (5).png', '/pic (6).png', '/pic (7).png', '/pic (1).png',
    '/pic (5).png', '/pic (6).png', '/pic (7).png', '/pic (1).png',
  ];

  return (
    <div className="min-h-screen bg-black text-white py-10 px-5">
      {/* Navbar Component */}
      <Navbar/>

      {/* Heading Section */}
      <h1 className="text-center text-3xl md:text-5xl font-bold text-[#FF9F0D] mb-8">
        Meet Our Chefs
      </h1>

      {/* Grid Display for Chef Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
