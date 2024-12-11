import React from "react";
import { Great_Vibes } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";

// Load custom fonts
const InterFont = Inter({ subsets: ["latin"] });
const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[80px] md:h-[800px] bg-black">
      {/* First div - Text Content Section */}
      <div className="text-black md:ml-[200px] md:my-0 my-[40px] ml-0 md:mt-[110px]">
        {/* "About Us" Title */}
        <p
          className={`${VibeFont.className} md:w-[91px] md:h-[40px] font-normal text-3xl md:ml-0 ml-[130px] leading-[40px] text-[#FF9F0D] `}
        >
          About us
        </p>
        
        {/* Main Heading */}
        <h2 className="font-bold md:text-[48px] text-[30px] md:ml-0 ml-[50px] md:w-[446px] leading-[56px] text-[#FFFFFF]">
          {" "}
          <span className="text-[#FF9F0D]">We</span> Create the best foody
          product
        </h2>
        
        {/* Description Paragraph */}
        <p
          className={`${InterFont.className} text-[#FFFFFF] font-normal md:text-[16px] text-[12px] md:leading-[24px] w-[300px] md:ml-0 ml-[50px] md:w-[526px] md:my-[20px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        
        {/* Bullet Points */}
        <p className={`${InterFont.className} text-white my-[20px] md:text-[16px] text-[12px] md:ml-0 ml-[50px]`}>
          ✔️ Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <p className={`${InterFont.className} text-white my-[20px] md:text-[16px] text-[12px] md:ml-0 ml-[50px]`}>
          ✔️ Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
        </p>
        <p className={`${InterFont.className} text-white my-[20px] md:text-[16px] text-[12px] md:ml-0 ml-[50px]`}>
          ✔️ Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        {/* See Menu Button */}
        <h5 className="md:w-[115px] w-[140px] rounded-[30px] md:h-[50px] bg-[#FF9F0D] md:ml-0 ml-[60px] flex justify-center items-center md:py-3 h-[50px] md:mt-[20px]">
          <p
            className={`${InterFont.className} text-[#E0DFDF] font-normal text-[16px] leading-[24px]`}
          >
            See Menu
          </p>
        </h5>
      </div>

      {/* Second div - Image Section */}
      <div>
        <div className="flex md:mr-[60px] md:m-0 m-[10px] gap-[25px] md:mt-[110px] flex-col text-white">
          {/* Hero Image */}
          <div>
            <Image src='/hero-egg.png' width={660} height={330} alt="hero-egg" className="rounded-[6px]" />
          </div>

          {/* Child Images */}
          <div className="flex gap-[25px] md:mb-0 mb-[120px]">
            <div>
              <Image src='/child1.png' width={322} height={194} alt="hero-egg" className="rounded-[6px]" />
            </div>
            <div>
              <Image src='/child2.png' width={322} height={194} alt="hero-egg" className="rounded-[6px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
