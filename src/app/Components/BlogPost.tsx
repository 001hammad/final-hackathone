import React from 'react';
import { Great_Vibes } from "next/font/google";
import Image from 'next/image';

const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const BlogPost = () => {
  return (
    <div className='bg-black min-h-screen py-8'>
      {/* Header */}
      <div className="container mx-auto px-4">
  <h4 className={`${VibeFont.className} text-white text-3xl sm:text-4xl md:text-5xl text-center md:text-left md:pl-10`}>
    Blog Post
  </h4>
  <h4 className='font-bold text-2xl sm:text-3xl md:text-5xl leading-tight text-white text-center md:text-left mt-4 mb-10 md:pl-10'>
    <span className='text-[#FF9F0D]'>La</span>test News & Blog
  </h4>
</div>


      {/* Blog Cards */}
      <div className="container mx-auto px-4 flex justify-center">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 max-w-7xl'>
          {/* Card 1 */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black border border-white">
            <Image 
              src="/card1.png" 
              alt="card1" 
              width={424} 
              height={569} 
              className="w-full h-auto" 
            />
            <div className="p-6">
              <p className="text-[#FF9F0D] text-sm font-medium mb-2">
                10 February 2022
              </p>
              <p className="text-white text-lg font-semibold mb-4">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </p>
              <a href="#" className="text-white text-sm font-medium hover:underline">
                Learn More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black border border-white">
            <Image 
              src="/card2.png" 
              alt="card2" 
              width={424} 
              height={569} 
              className="w-full h-auto" 
            />
            <div className="p-6">
              <p className="text-[#FF9F0D] text-sm font-medium mb-2">
                10 February 2022
              </p>
              <p className="text-white text-lg font-semibold mb-4">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </p>
              <a href="#" className="text-white text-sm font-medium hover:underline">
                Learn More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black border border-white">
            <Image 
              src="/card3.png" 
              alt="card3" 
              width={424} 
              height={569} 
              className="w-full h-auto" 
            />
            <div className="p-6">
              <p className="text-[#FF9F0D] text-sm font-medium mb-2">
                10 February 2022
              </p>
              <p className="text-white text-lg font-semibold mb-4">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </p>
              <a href="#" className="text-white text-sm font-medium hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
