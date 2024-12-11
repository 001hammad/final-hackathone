import React from 'react'
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import { Inter } from 'next/font/google';

// Load custom fonts
const InterFont = Inter({ subsets: ['latin'] });
const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] })

const FromMenu = () => {
  return (
    <div className=''>
      <div className='flex flex-col'>
        {/* Title Section */}
        <div className=' md:w-[144px] md:h-[40px]'>
          <p className={`${VibeFont.className} font-normal text-[32px] leading-[40px] md:w-[300px] text-[#FF9F0D] ml-[100px] md:ml-[700px]`}>
            Choose & pick
          </p>
          <h2 className='md:w-[550px] md:ml-[600px] font-bold md:text-[48px] text-[28px]  ml-[78px] text-[#FFFFFF] md:h-[56px]'>
            <span className='text-[#FF9F0D]  font-bold md:text-[48px] leading-[56px]'>Fr</span>om Our Menu
          </h2>

          {/* Menu categories */}
          <div className='md:w-[1056px] text-[#FFFFFF] md:h-[28px]'>
            <ul className='flex flex-col md:flex-row md:ml-[340px] ml-[100px] md:my-[34px] md:gap-[90px]'>
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
          <div className='flex flex-col md:flex-row'>
            {/* Image of the dish */}
            <div>
              <Image src='/plate.png' alt='platepic' width={666} height={662} className='md:ml-[340px] md:mt-[70px]' />
            </div>

            {/* Menu item details */}
            <div className='flex'>
              <h2 className='text-white md:ml-[430px] ml-[68px] md:mt-[100px] flex flex-col'>
                <p className={` ${InterFont.className} w-[123px] my-[14px] text-orange-300`}>Lettuce Leaf</p>
                <p className={` ${InterFont.className}  my-[14px]`}>Fresh Breakfast</p>
                <p className={` ${InterFont.className}  my-[14px]`}>Mild Butter</p>
                <p className={` ${InterFont.className}  my-[14px]`}>Fresh Bread</p>
                <p className={` ${InterFont.className}  my-[14px]`}>Glow Cheese</p>
              </h2>

              {/* Another set of menu items */}
              <h2 className='text-white md:ml-[40px] md:mt-[100px] flex flex-col'>
                <p className='w-[123px] my-[14px] text-orange-300'>Glow Cheese</p>
                <p className={` ${InterFont.className}  my-[14px]`}>Italian Pizza</p>
                <p className={` ${InterFont.className}  my-[14px]`}>Slice Beef</p>
                <p className={` ${InterFont.className}  my-[14px]`}>Fresh Bread</p>
                <p className={` ${InterFont.className}  my-[14px]`}>Mushroom Pizza</p>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FromMenu;
