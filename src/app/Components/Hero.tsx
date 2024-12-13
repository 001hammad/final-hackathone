import React from "react";
import { Great_Vibes } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";

// Load custom fonts
const InterFont = Inter({ subsets: ["latin"] });
const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-[80px] bg-black p-5 md:h-[800px]">
      {/* First div - Text Content Section */}
      <div className="flex flex-col text-center md:text-left items-center md:items-start w-full md:w-1/2">
        {/* "About Us" Title */}
        <p
          className={`${VibeFont.className} font-normal text-2xl md:text-3xl text-[#FF9F0D] mb-4`}
        >
          About us
        </p>

        {/* Main Heading */}
        <h2 className="font-bold text-2xl md:text-4xl text-[#FFFFFF] leading-[40px] md:leading-[56px] mb-4">
          <span className="text-[#FF9F0D]">We</span> Create the best foody
          product
        </h2>

        {/* Description Paragraph */}
        <p
          className={`${InterFont.className} text-[#FFFFFF] font-normal text-sm md:text-base leading-[24px] max-w-[526px] mb-4`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2 text-white text-sm md:text-base">
          <li>✔️ Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
          <li>
            ✔️ Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
          </li>
          <li>
            ✔️ Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
        </ul>

        {/* See Menu Button */}
        <button className="mt-6 px-6 py-3 bg-[#FF9F0D] rounded-full text-[#E0DFDF] font-medium text-sm md:text-base">
          See Menu
        </button>
      </div>

      {/* Second div - Image Section */}
      <div className="flex flex-col items-center md:items-end w-full md:w-1/2">
        {/* Hero Image */}
        <div className="w-full max-w-[660px]">
          <Image
            src="/hero-egg.png"
            width={660}
            height={330}
            alt="hero-egg"
            className="rounded-[6px] w-full"
          />
        </div>

        {/* Child Images */}
        <div className="flex gap-4 mt-6 w-full justify-center md:justify-end">
          <div className="w-full max-w-[322px]">
            <Image
              src="/child1.png"
              width={322}
              height={194}
              alt="child1"
              className="rounded-[6px] w-full"
            />
          </div>
          <div className="w-full max-w-[322px]">
            <Image
              src="/child2.png"
              width={322}
              height={194}
              alt="child2"
              className="rounded-[6px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
