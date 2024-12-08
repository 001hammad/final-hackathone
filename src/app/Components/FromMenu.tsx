import React from 'react'
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const InterFont = Inter({ subsets: ['latin'] });


const VibeFont = Great_Vibes({subsets:['latin'],weight:['400']})

const FromMenu = () => {
  return (
    <div className=''>
    <div className='flex flex-col  '>
      <div className=' md:w-[144px] md:h-[40px]'>
        <p className={`${VibeFont.className} font-normal text-[32px] leading-[40px] md:w-[300px] text-[#FF9F0D] md:ml-[700px]`}>Choose & pick</p>
        <h2 className='md:w-[550px] md:ml-[600px] font-bold text-[48px] text-[#FFFFFF] md:h-[56px]'><span className='text-[#FF9F0D]  font-bold text-[48px] leading-[56px]'>Fr</span>om Our Menu</h2>
        <div className='md:w-[1056px] text-[#FFFFFF] md:h-[28px]'>
        <ul className='flex md:ml-[340px] md:my-[34px] md:gap-[90px]'>
            <li className='text-[#FF9F0D] font-bold'>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Dessert</li>
            <li>Drink</li>
            <li>Snack</li>
            <li>Suops</li>
        </ul>
      </div>
      <div className=' flex'>
        <div><Image src='/plate.png' alt='platepic' width={666} height={662} className='md:ml-[340px] md:mt-[70px]'/></div>
          <div className='flex'>
           
          <h2 className='text-white  md:ml-[430px] md:mt-[100px] flex flex-col'>
            <p className={` ${InterFont.className} w-[123px] my-[14px] text-orange-300`}>Lettuce Leaf</p>
            <p className={` ${InterFont.className}  my-[14px]`}>Fresh Breakfast</p>
            <p className={` ${InterFont.className}  my-[14px]`}>Mild Butter</p>
            <p className={` ${InterFont.className}  my-[14px]`}>Fresh Bread</p>
            <p className={` ${InterFont.className}  my-[14px]`}>Glow Cheese</p>
            </h2>  
            <h2 className='text-white  md:ml-[40px] md:mt-[100px] flex flex-col'>
            <p className='w-[123px] my-[14px] text-orange-300'>Glow Cheese</p>
            <p className={` ${InterFont.className}  my-[14px]`}>Italian Pizza</p>
            <p className={` ${InterFont.className}  my-[14px]`}>Sllice Beef</p>
            <p className={` ${InterFont.className}  my-[14px]`}>Fresh Bread</p>
            <p className={` ${InterFont.className}  my-[14px]`}>Mushaom Pizza</p>
            </h2>  
            </div>       
      </div>
      </div>
    </div>
    </div>
  )
}

export default FromMenu