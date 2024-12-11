import React from "react";
import Image from "next/image";

const Labelpic = () => {
  return (
    <div className="relative w-full md:mt-[200px]">
      {/* Restaurant Image */}
      <Image
        src="/restu-pic.png" // Ensure the image is in the public folder
        alt="Restaurant Picture" // Alt text for accessibility
        layout="responsive" // Automatically adjust dimensions for responsiveness
        width={1920} // Base width for aspect ratio
        height={558} // Base height for aspect ratio
        className="object-cover" // Maintain proper aspect ratio and cover the area
        priority={true} // Optimize loading for this image
      />
    </div>
  );
};

export default Labelpic;
