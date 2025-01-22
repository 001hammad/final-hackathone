import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  title: string; // Main heading
  backgroundImage: string; // Background image URL
  homeLink?: '/' | string; // Home link can be '/' or any other string
  currentPage?: string; // Current page name
}

const HeroSection: React.FC<HeroSectionProps> = ({ title,homeLink='/', currentPage, backgroundImage }) => {
  return (
    <section
      className="w-full bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamic background
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
            {title}
          </h1>
          <div className='flex'>
            <Link href={homeLink} className='text-white'>Home</Link> <p className='mx-2 text-white'>/</p>
            <p className='text-orange-300'>{currentPage}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
