import React from 'react';
import Image from 'next/image';
import Navbar from '../Components/Navbar';

const OurChefs = () => {
  // 12 chefs ke liye image paths
  const chefImages = [
    '/chefa.png', '/chefb.png', '/chefc.png', '/chefd.png',
    '/pic (1).png', '/pic (2).png', '/pic (3).png', '/pic (4).png',
    '/pic (5).png', '/pic (6).png', '/pic (7).png', '/pic (1).png',
    '/pic (5).png', '/pic (6).png', '/pic (7).png', '/pic (1).png',
  ];

  return (
    <div className="min-h-screen bg-black text-white py-10 px-5">
        <Navbar/>
      <h1 className="text-center text-3xl md:text-5xl font-bold text-[#FF9F0D] mb-8">
        Meet Our Chefs
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {chefImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-48 sm:h-60 md:h-72 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={image}
              alt={`Chef ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurChefs;
