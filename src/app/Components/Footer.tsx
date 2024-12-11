import React from "react";
import Image from "next/image";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white  w-full">
      {/* Top Section: Subscription form with email input and subscribe button */}
      <div className="flex md:mt-[600px] flex-col md:flex-row justify-between items-center bg-black px-10 md:px-[135px] py-8 md:py-[50px]">
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl md:text-4xl md:ml-[50px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
          </h2>
          <p className="text-sm md:text-base font-light md:ml-[50px] mt-4">
            Don&#39;t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>
        {/* Email input and subscribe button */}
        <div className="flex mt-6 md:mt-0">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 md:py-3 md:px-6 rounded-l-md focus:outline-none "
          />
          <button className="text-[#FF9F0D] bg-white py-2 md:py-3 px-4 md:px-6 rounded-r-md">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Divider between sections */}
      <hr className="border-[#FF9F0D] mx-10 md:mx-[135px]" />

      {/* Main Footer Content: About Us, Useful Links, Help Section, Recent Posts */}
      <div className="max-w-screen-xl mx-auto py-8 md:py-12 px-6 md:px-[135px] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
        
        {/* About Us Section */}
        <div>
          <h2 className="mb-6 text-xl font-semibold ">About Us</h2>
          <p className="text-sm text-gray-300">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car services in major cities worldwide.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="bg-[#FF9F0D] flex items-center justify-center w-[77px] h-[71px] rounded">
              <PiClockClockwiseBold className="text-white text-3xl" />
            </div>
            <div>
              <p className="text-sm font-semibold">Opening Hours</p>
              <p className="text-xs">Mon - Sat (8:00 - 6:00)</p>
              <p className="text-xs">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="mb-6 text-xl font-semibold ">Useful Links</h2>
          <ul className="space-y-4 text-gray-300">
            {["About", "News", "Partner", "Team", "Menu", "Contact"].map((Link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white hover:underline">
                  {Link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="mb-6 text-xl font-semibold ">Help?</h2>
          <ul className="space-y-4 text-gray-300">
            {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((Link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white hover:underline">
                  {Link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h2 className="mb-6 text-xl font-semibold ">Recent Post</h2>
          <ul className="space-y-6">
            {[1, 2, 3].map((_, index) => (
              <li key={index} className="flex gap-4">
                <Image src="/f2.png" alt="Post" width={80} height={80} />
                <div>
                  <p className="text-xs text-gray-400">20 Feb 2022</p>
                  <p className="text-sm text-gray-200">Keep Your Business</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section: Copyright and Social Media Links */}
      <div className="bg-[#4F4F4F] py-6 px-4 md:flex md:justify-between md:items-center text-center md:text-left">
        <span className="text-sm text-gray-300">
          Copyright © 2022 Ayeman. All Rights Reserved.
        </span>
        <div className="flex justify-center md:justify-end gap-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
            <div key={index} className="bg-white w-9 h-9 flex items-center justify-center rounded">
              <Icon className="text-black" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
