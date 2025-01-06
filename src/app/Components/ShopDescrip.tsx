'use client'

import React, { useState, useEffect } from 'react';

// Define the type for product details
interface ProductDetails {
  description: string;
  reviews: number;
  keyBenefits: string[];
}

// Dummy data (replace with data from API or Sanity)
const productDetails: ProductDetails = {
  description: `Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.`,
  reviews: 24,
  keyBenefits: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    'Suspendisse potenti. Morbi in ipsum sit amet pede facilisis laoreet.',
    'Maecenas fermentum consequat mi. Donec fermentum. Pellentesque ligula.',
    'Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
  ],
};

const DescriptionComponent: React.FC = () => {
  const [productData, setProductData] = useState<ProductDetails | null>(null);

  useEffect(() => {
    // Simulating fetching data (replace with API call)
    setProductData(productDetails);
  }, []);

  if (!productData) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="md:mt-0 mt-8 text-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[70px]">
        {/* Button and Review Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
          <button className="bg-[#FF9F0D] text-white w-full md:w-[165px] h-[50px] font-semibold rounded">
            Description
          </button>
          <span className="text-lg md:text-xl font-medium">
            Reviews ({productData.reviews})
          </span>
        </div>

        {/* First Paragraph */}
        <p className="font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] mb-6 text-justify">
          {productData.description}
        </p>

        {/* Key Benefit Section */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">Key Benefits</h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
            {productData.keyBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionComponent;
