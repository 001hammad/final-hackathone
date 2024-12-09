import React from 'react';
import { Great_Vibes } from "next/font/google";
import Image from 'next/image';
const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });




const BlogPost = () => {
  return (
    <div>
        <div>
      <h4 className={`${VibeFont.className} text-white text-[32px] md:ml-[700px] md:my-[10px]`}>Blog Post</h4>
      <h4 className='font-bold  text-[48px] leading-[56px text-white ]'><span className='text-[#FF9F0D] md:ml-[550px] '>La</span>test News & Blog</h4>
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center gap-9 md:mt-[50px] text-white'>
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black border border-white">
  <Image src="/card1.png" alt="card1" width={424} height={569} className="w-full h-auto" />
  
  <div className="p-6">
    {/* Date */}
    <p className="text-[#FF9F0D] text-sm font-medium mb-2">10 February 2022</p>

    {/* Title */}
    <p className="text-white text-lg font-semibold mb-4">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>

    {/* Learn More Link */}
    <a href="#" className="text-white text-sm font-medium hover:underline">
      Learn More
    </a>
  </div>
</div>
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black border border-white">
  <Image src="/card2.png" alt="card1" width={424} height={569} className="w-full h-auto" />
  
  <div className="p-6">
    {/* Date */}
    <p className="text-[#FF9F0D] text-sm font-medium mb-2">10 February 2022</p>

    {/* Title */}
    <p className="text-white text-lg font-semibold mb-4">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>

    {/* Learn More Link */}
    <a href="#" className="text-white text-sm font-medium hover:underline">
      Learn More
    </a>
  </div>
</div>
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black border border-white">
  <Image src="/card3.png" alt="card1" width={424} height={569} className="w-full h-auto" />
  
  <div className="p-6">
    {/* Date */}
    <p className="text-[#FF9F0D] text-sm font-medium mb-2">10 February 2022</p>

    {/* Title */}
    <p className="text-white text-lg font-semibold mb-4">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>

    {/* Learn More Link */}
    <a href="#" className="text-white text-sm font-medium hover:underline">
      Learn More
    </a>
  </div>
</div>

    </div>
    </div>
  )
}

export default BlogPost
