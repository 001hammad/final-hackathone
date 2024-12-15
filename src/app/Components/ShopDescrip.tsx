import React from 'react';

const DescriptionComponent = () => {
  return (
    <div className='md:mt-0 mt-[1300px] '>
    <div className="max-w-4xl mx-auto p-4 ">
      {/* Button and Review Section */}
      <div className="flex  items-center gap-4 mb-6">
        <button 
          className="bg-[#FF9F0D] text-white w-[165px] h-[50px] font-semibold rounded"
        >
          Description
        </button>
        <span className="text-xl font-medium">Reviews (24)</span>
      </div>

      {/* First Paragraph */}
      <p className="font-normal text-[16px] leading-[24px] mb-6">
        Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
      </p>

      {/* Second Paragraph */}
      <p className="font-normal text-[16px] leading-[24px] mb-6">
        Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
      </p>

      {/* Key Benefit Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">Key Benefit</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</li>
          <li>Suspendisse potenti. Morbi in ipsum sit amet pede facilisis laoreet.</li>
          <li>Maecenas fermentum consequat mi. Donec fermentum. Pellentesque ligula.</li>
          <li>Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default DescriptionComponent;
