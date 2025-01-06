import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function ShopHero() {
  const images = [
    "/h1 (1).png",
    "/h1 (2).png",
    "/h1 (3).png",
    "/h1 (4).png",
    "/h1 (5).png",
    "/h1 (6).png",
    "/h1 (7).png",
    "/h1 (8).png",
    "/h1 (9).png",
    "/h1 (10).png",
    "/h1 (11).png",
    "/h1 (12).png",
    "/h1 (13).png",
    "/h1 (14).png",
    "/h1 (15).png",
  ];

  return (
    <div>
      <section className='w-full bg-[url("/starbg.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl sm:text-4xl  md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              Our Shop
            </h1>
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/ShopDetails" className='text-[#FF9F0D]'>
                Shop Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 flex flex-col md:flex-row  gap-4">
        {/* Left Section for Sort By and Show Dropdown */}
        <div className="w-full  md:w-[70%] lg:w-[75%]">
          <div className="flex md:ml-0 ml-[40px] justify-between items-center mb-6 text-black">
            <div className="flex flex-col md:flex-row items-center space-x-4">
              <span className="text-lg font-medium">Sort By:</span>
              <select className="w-[236px] h-[46px] bg-white border border-gray-300 text-black px-4 rounded-md">
                <option>Newest</option>
              </select>
            </div>

            <div className="  md:flex md:flex-row hidden items-center space-x-4">
              <span className="text-lg font-medium">Show:</span>
              <select className="w-[236px] h-[46px] bg-white border border-gray-300 text-black px-4 rounded-md">
                <option>Default</option>
              </select>
            </div>
          </div>

          <section className="text-black bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={image}
                    alt={`Product Image ${index + 1}`} height={200} width={400}
                    className=" object-cover"
                  />
                  <p className="mt-4 text-black text-lg font-medium">Fresh Lime</p>
                  <div className="flex items-center justify-center mt-2 space-x-2">
                    <p className="text-[#FF9F0D] text-lg font-semibold">$38.00</p>
                    <p className="text-gray-500 line-through">$45.00</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center mt-8 space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF9F0D"
                viewBox="0 0 24 24"
                width="16px"
                height="16px"
                className="cursor-pointer"
              >
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
              </svg>

              <div className="flex items-center space-x-2">
                <span className="text-black hover:bg-[#FF9F0D] rounded px-4 text-lg">1</span>
                <span className="text-white bg-[#FF9F0D] text-lg px-4 py-1 rounded">2</span>
                <span className="text-black px-4 hover:bg-[#FF9F0D] rounded text-lg">3</span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF9F0D"
                viewBox="0 0 24 24"
                width="16px"
                height="16px"
                className="cursor-pointer"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </div>
          </section>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[30%] lg:w-[25%] bg-white p-6">
          <div className="flex items-center space-x-2 mb-6">
            <input
              type="text"
              placeholder="Search Product"
              className="w-[248px] h-[46px] bg-[#FF9F0D1A] text-black px-4 rounded-md placeholder-gray-500"
            />
            <button className="bg-[#FF9F0D] md:w-[200px] p-2">
              <span className="text-white">Q</span>
            </button>
          </div>

          <h2 className="font-bold text-[20px] leading-[28px] mb-4">Category</h2>
          <div className="space-y-2 mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="sandwiches" className="mr-2" />
              <label htmlFor="sandwiches">Sandwiches</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="burger" className="mr-2" />
              <label htmlFor="burger">Burger</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="chicken" className="mr-2" />
              <label htmlFor="chicken">Chicken Chup</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="drink" className="mr-2" />
              <label htmlFor="drink">Drink</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="pizza" className="mr-2" />
              <label htmlFor="pizza">Pizza</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="nonveg" className="mr-2" />
              <label htmlFor="nonveg">Non Veg</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="uncategorized" className="mr-2" />
              <label htmlFor="uncategorized">Uncategorized</label>
            </div>
          </div>

          <Image src="/h16.png" alt="Category" height={286} width={248} className="  mb-6" />

          <div className="mb-6">
            <h3 className="font-bold text-[20px] leading-[28px] mb-2">Filter By Price</h3>
            <div className="border-t-2 border-[#FF9F0D] mb-2"></div>
            <p className="text-sm">From $0 to $8000</p>
            <button className="bg-[#FF9F0D] text-white px-4 py-2 mt-2 rounded-md">Filter</button>
          </div>

          <h3 className="font-bold text-[20px] leading-[28px] mb-4">Latest Products</h3>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <Image src="/h17.png" alt="Product" width={72} height={65}  />
              <div>
                <p className="text-lg font-medium">Pizza</p>
                <div className="flex items-center space-x-1">
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                </div>
                <p className="text-[#FF9F0D]">$45</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Image src="/h17.png" alt="Product" width={72} height={65}  />
              <div>
                <p className="text-lg font-medium">Pizza</p>
                <div className="flex items-center space-x-1">
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                </div>
                <p className="text-[#FF9F0D]">$45</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Image src="/h17.png" alt="Product" width={72} height={65}  />
              <div>
                <p className="text-lg font-medium">Pizza</p>
                <div className="flex items-center space-x-1">
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                </div>
                <p className="text-[#FF9F0D]">$45</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Image src="/h17.png" alt="Product" width={72} height={65}  />
              <div>
                <p className="text-lg font-medium">Pizza</p>
                <div className="flex items-center space-x-1">
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                </div>
                <p className="text-[#FF9F0D]">$45</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Image src="/h17.png" alt="Product" width={72} height={65}  />
              <div>
                <p className="text-lg font-medium">Pizza</p>
                <div className="flex items-center space-x-1">
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                  <svg className="w-[9.84px] h-[9px]" fill="#FF9F0D" viewBox="0 0 24 24">
                    <path d="M12 17.27l-6.18 3.41 1.64-7.03-5.52-4.78 7.19-.61L12 2l2.87 7.27 7.19 .61-5.52 4.78 1.64 7.03L12 17.27z" />
                  </svg>
                </div>
                <p className="text-[#FF9F0D]">$45</p>
              </div>
            </div>
            <section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8">
      Popular Tags
    </h2>
    <div className="flex flex-wrap justify-center gap-4">
      {/* Tag 1 */}
      <span className="bg-[#FF9F0D] text-white px-6 py-2 text-lg font-semibold hover:bg-[#e68906] transition duration-300 cursor-pointer">
        Sandwiches
      </span>
      {/* Tag 2 */}
      <span className="bg-[#FF9F0D] text-white px-6 py-2 text-lg font-semibold hover:bg-[#e68906] transition duration-300 cursor-pointer">
        Burgers
      </span>
      {/* Tag 3 */}
      <span className="bg-[#FF9F0D] text-white px-6 py-2 text-lg font-semibold hover:bg-[#e68906] transition duration-300 cursor-pointer">
        Chicken
      </span>
      {/* Tag 4 */}
      <span className="bg-[#FF9F0D] text-white px-6 py-2 text-lg font-semibold hover:bg-[#e68906] transition duration-300 cursor-pointer">
        Pizza
      </span>
      {/* Tag 5 */}
      <span className="bg-[#FF9F0D] text-white px-6 py-2 text-lg font-semibold hover:bg-[#e68906] transition duration-300 cursor-pointer">
        Drinks
      </span>
      {/* Tag 6 */}
      <span className="bg-[#FF9F0D] text-white px-6 py-2 text-lg font-semibold hover:bg-[#e68906] transition duration-300 cursor-pointer">
        Non Veg
      </span>
      {/* Tag 7 */}
      <span className="bg-[#FF9F0D] text-white px-6 py-2 text-lg font-semibold hover:bg-[#e68906] transition duration-300 cursor-pointer">
        Snacks
      </span>
    </div>
  </div>
</section>

            {/* More Products can go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopHero;
