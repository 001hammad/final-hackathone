import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { Great_Vibes } from 'next/font/google';
import LandingAbout from './LandingAboutSec';

// Load custom fonts
const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });
const InterFont = Inter({ subsets: ['latin'] });

// Social Media Links
const socialLinks = [
  { icon: <FaFacebookF />, color: '#FFFFFF', link: 'https://facebook.com' },
  { icon: <FaTwitter />, color: '#FF9F0D', link: 'https://twitter.com' },
  { icon: <FaPinterestP />, color: '#FFFFFF', link: 'https://pinterest.com' },
];

const HeroSection = ({ title, description, buttonText }: { title: string, description: string, buttonText: string }) => (
  <div className='md:mt-[160px] flex flex-col md:w-[472px] md:h-[356px]'>
    <p className={`${VibeFont.className} text-[32px] text-[#FF9F0D] md:mt-0 mt-[40px]`}>Its Quick & Amusing!</p>
    <h1 className='font-bold text-[30px] md:text-[46px] lg:text-[60px] leading-[68px] text-[#FFFFFF]'>
      {title}
    </h1>
    <p className='md:w-[418px] sm:w-[500px] md:h-[48px] leading-[24px] text-[14px] md:text-base text-[#FFFFFF] md:mt-5 md:my-0 my-4'>
      {description}
    </p>
    <button className='md:w-[115px] w-[120px] rounded-[30px] md:h-[50px] bg-[#FF9F0D] flex justify-center items-center md:py-3 h-[50px] md:mt-[20px]'>
      <p className={`${InterFont.className} text-[#E0DFDF] font-normal text-[16px] leading-[24px]`}>{buttonText}</p>
    </button>
  </div>
);

const SocialMediaIcons = () => (
  <div className='flex flex-col md:w-[25.28px] h-[80px] md:my-0 my-11 md:mt-[50px] gap-6'>
    {socialLinks.map(({ icon, color, link }) => (
      <a key={link} href={link} className='md:ml-[40px] lg:ml-[70px]' style={{ color }}>
        {icon}
      </a>
    ))}
  </div>
);

const HeroImage = ({ src, alt, width, height }: { src: string, alt: string, width: number, height: number }) => (
  <div className='text-white h-[400px] sm:w-[500px] md:w-[460px] md:h-[160px] md:mt-[270px] lg:w-[600px] lg:mt-[280px] mt-[30px] md:mr-0 mr-[10px] flex justify-center items-center'>
    <Image src={src} alt={alt} width={width} height={height} className='object-contain' />
  </div>
);

const LandingHero = () => (
  <div>
    {/* Header Section */}
    <div className='w-full h-[800px] bg-[#0D0D0DF2] relative'>
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image 
          src="/home-bg.png" 
          alt="Home Background" 
          fill 
          priority 
          style={{ objectFit: 'cover', opacity: 0.5, zIndex: -1 }}
        />
      </div>
      
      {/* Hero Section */}
      <div className='flex gap-[20px] md:mt-0 lg:gap-[80px]'>
        
        {/* Social Media Section */}
        <div className='flex flex-col md:ml-0 ml-9'>
          <Image src='/Line 11.png' alt='linepic' width={1} height={1} className='md:ml-[50px] lg:ml-[80px] ml-[7px] md:mt-[70px] text-[#FFFFFF]' />
          <SocialMediaIcons />
          <Image src='/Line 11.png' alt='linepic' width={1} height={1} className='md:ml-[50px] lg:ml-[80px] ml-[7px] md:mt-[50px] text-[#FFFFFF]' />
        </div>

        {/* Hero Content Section */}
        <div className='flex flex-col lg:gap-[180px] md:flex-row lg:flex-row'>
          <HeroSection 
            title="The Art of Speed Food Quality" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." 
            buttonText="See Menu" 
          />
          <HeroImage src='/mypic.png' alt='Hero Image' width={624} height={624} />
        </div>
      </div>
    </div>

    {/* Hero Content Below Header */}
    <LandingAbout/>
  </div>
);

export default LandingHero;
