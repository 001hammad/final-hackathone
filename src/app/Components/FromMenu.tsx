import React from 'react'
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';

// Load custom fonts
const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] })

const FromMenu = () => {
  return (
    <div className='sm:mt-[100px]'>
      <div className='flex flex-col'>
        {/* Title Section */}
        <div className=' md:w-[144px] md:h-[40px]'>
          <p className={`${VibeFont.className} font-normal text-[32px] leading-[40px] md:w-[300px] text-[#FF9F0D] ml-[100px] md:ml-[450px] lg:ml-[700px] `}>
            Choose & pick
          </p>
          <h2 className='md:w-[550px] md:ml-[350px] lg:ml-[600px] font-bold md:text-[48px] text-[28px]  ml-[78px] text-[#FFFFFF] md:h-[56px]'>
            <span className='text-[#FF9F0D]  font-bold md:text-[48px] leading-[56px]'>Fr</span>om Our Menu
          </h2>

          {/* Menu categories */}
          <div className='md:w-[1056px] text-[#FFFFFF] md:h-[28px]'>
            <ul className='flex flex-col sm:flex-row sm:gap-[20px] md:flex-row md:ml-[170px] lg:ml-[340px] ml-[100px] md:my-[34px] md:gap-[60px] lg:gap-[90px]'>
              <li className='text-[#FF9F0D] font-bold'>Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
              <li>Dessert</li>
              <li>Drink</li>
              <li>Snack</li>
              <li>Soups</li>
            </ul>
          </div>

          {/* Image and Menu Items Section */}
          <div className='flex flex-col gap-[90px] md:flex-row'>
            {/* Image of the dish */}
            <div>
              <Image src='/plate.png' alt='platepic' width={666} height={662} className='md:ml-[200px] lg:ml-[340px] md:mt-[70px]' />
            </div>

           {/* Menu item details */}
<div className="flex flex-col lg:mt-[50px] md:flex-row gap-6">
  {/* Left Section */}
  <div className="md:ml-[250px] md:w-1/2 w-full">
    <ul className="space-y-6">
      {[1, 2, 3, 4].map((_, index) => (
        <li key={index} className="flex gap-4 items-center">
          <Image
            src="/gal3.png"
            alt="Post"
            className="w-[80px] h-[80px]" // Same size across all screens
            width={80}
            height={80}
          />
          <div>
            <p className="text-xs text-gray-400 w-[300px]">
              20 Feb 2022
            </p>
            <p className="text-sm text-gray-200">Keep Your Business in restruant</p>
            <p className='text-[#FF9F0D] font-semibold'>12.5$</p>
          </div>
        </li>
      ))}
    </ul>
  </div>

  {/* Right Section */}
  <div className="md:w-1/2 w-full">
    <ul className="space-y-6">
      {[1, 2, 3, 4].map((_, index) => (
        <li key={index} className="flex gap-4 items-center">
          <Image
            src="/new.png"
            alt="Post"
            className="w-[80px] h-[80px]" // Same size across all screens
            width={80}
            height={80}
          />
          <div>
            <p className="text-xs text-gray-400 w-[300px]">
              20 Feb 2022
            </p>
            <p className="text-sm text-gray-200">Keep Your Business in hotel view</p>
            <p className='text-[#FF9F0D] font-semibold'>14.9$</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default FromMenu;
