import React from 'react'
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';

// Load custom fonts
const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] })

const FromMenu = () => {
  return (
    <div className=' bg-black min-h-screen'>
      <div className='flex flex-col'>
        {/* Title Section */}
        {/* <div className=' md:w-[144px] md:h-[40px] '> */}
        <div className="flex flex-col items-center justify-center">
  <p className={`${VibeFont.className} font-normal text-[32px] leading-[40px] text-[#FF9F0D] text-center`}>
    Choose & pick
  </p>
  <h2 className="font-bold text-[28px] md:text-[48px] leading-[56px] text-[#FFFFFF] text-center">
    <span className="text-[#FF9F0D] font-bold">Fr</span>om Our Menu
  </h2>
</div>


          {/* Menu categories */}
          <div className="w-full text-[#FFFFFF]">
  <ul className="flex flex-wrap justify-center gap-[20px] md:gap-[60px] lg:gap-[90px] my-[20px]">
    <li className="text-[#FF9F0D] font-bold">Breakfast</li>
    <li>Lunch</li>
    <li>Dinner</li>
    <li>Dessert</li>
    <li>Drink</li>
    <li>Snack</li>
    <li>Soups</li>
  </ul>
</div>


          {/* Image and Menu Items Section */}
          <div className="flex md:flex-row flex-col items-center gap-12">
  {/* Image of the dish */}
  <div>
    <Image
      src="/plate.png"
      alt="platepic"
      width={400} // Optimized size for better responsiveness
      height={400}
      className="mx-auto"
    />
  </div>

  {/* Menu items container */}
  <div className="flex flex-col gap-12">
    {/* First 4 menu items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index} className="flex gap-4 items-center">
          <Image
            src="/gal3.png"
            alt="Post"
            width={70} // Adjusted image size
            height={70}
            className="w-[70px] h-[70px]"
          />
          <div>
            <p className="text-xs text-gray-400">20 Feb 2022</p>
            <p className="text-sm text-gray-200">Keep Your Business in restaurant</p>
            <p className="text-[#FF9F0D] font-semibold">12.5$</p>
          </div>
        </div>
      ))}
    </div>

    {/* Next 4 menu items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index} className="flex gap-4 items-center">
          <Image
            src="/new.png"
            alt="Post"
            width={70} // Adjusted image size
            height={70}
            className="w-[70px] h-[70px]"
          />
          <div>
            <p className="text-xs text-gray-400">20 Feb 2022</p>
            <p className="text-sm text-gray-200">Keep Your Business in hotel view</p>
            <p className="text-[#FF9F0D] font-semibold">14.9$</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    // </div>
  )
}

export default FromMenu;
