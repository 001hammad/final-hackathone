import React from 'react'; // Import React
import Link from 'next/link'; // Import Next.js Link for routing

function Hero() {
  return (
    <div className='bg-white'>
      {/* Navbar Section */}
      {/* <Navbar /> */}
      
      {/* Hero Section: Background image with padding and text */}
      <section className='w-full bg-[url("/starbg.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          {/* Flex container for the title and breadcrumb links */}
          <div className='flex flex-col items-center'>
            {/* Hero Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              Our About
            </h1>
            {/* Breadcrumb Links for navigation */}
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/about" className='text-[#FF9F0D]'>
                About
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;
