import React from "react";
import Image from "next/image";
import { Inter } from 'next/font/google';

const InterFont = Inter({subsets:['latin']})

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/chef1.png" },
  { name: "Jorina Begum", role: "Chef", image: "/chef2.png" },
  { name: "M. Mohammad", role: "Chef", image: "/chef3.png" },
  { name: "Munna Kathy", role: "Chef", image: "/chef4.png" },
];

const ChefGrid = () => {
  return (
    <div className="md:mt-[5px] md:px-32">
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-purple-600"
          >
            {/* Chef Image */}
            <div className="relative flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-t-lg"
              />
              {/* Name and Role Overlay */}
              <div className="absolute bottom-0 left-0 w-[200px] bg-white p-4 text-black">
                <h3 className="text-sm font-bold">{chef.name}</h3>
                <p className="text-xs">{chef.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Single "See More" Button */}
      <div className="flex justify-center mt-6">
        <button className={` ${InterFont.className} px-[30px] py-3  rounded-[25px] border-[1px] border-[#FF9F0D] text-white text-lg   focus:outline-none`}>
          See More
        </button>
      </div>
    </div>
  );
};

export default ChefGrid;
