import React from 'react'
import { Great_Vibes } from "next/font/google";

// Importing the Great_Vibes font from Google Fonts
const VibeFont = Great_Vibes({subsets:['latin'], weight:['400']})

function Cheefs() {
  return (
    // Section for the chefs with background image and padding
    <section className='w-full md:mt-[700px] bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        {/* Container for the content, flex centered */}
        <div className='flex flex-col items-center'>
          {/* Title with VibeFont styling */}
          <h1 className={` ${VibeFont.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#FF9F0D] font-bold text-center mb-4 sm:mb-6`}>
            Chefs
          </h1>
          {/* Subheading with styling for the 'Meet our Chef' section */}
          <div className='text-base font-bold  text-white sm:text-lg md:text-[48px] flex gap-2 text-center justify-center'>
           <p><span className='text-[#FF9F0D]'>Me</span>et our Chef</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cheefs;
