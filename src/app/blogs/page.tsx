// src/app/products/page.tsx
import { PhotoGallery } from '../utils';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaArrowRight } from 'react-icons/fa';
import DescriptionComponent from '../Components/ShopDescrip';
import SimilarProducts from '../Components/SimilarProduct';
import { categories } from '../utils';
import { products } from '../utils';
import HeroSection from '../Components/HeroSection';




const ProductListPage = () => {
  return (
    <div>
      <HeroSection title='Our Blogs'currentPage='blog' homeLink='/' backgroundImage='/starbg.png'/>
   <div className='flex flex-col md:flex-row bg-white'>
   <div className='md:m-24'>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
           
              <div>
                <Image src={product.image || '/default.png'} alt={product.name} width={700} height={700} />
                <div className="p-4 rounded-lg  max-w-md">
  {/* Row: Icons and Text in a single line */}
  <div className="flex items-center space-x-4 text-sm text-gray-600">
    <span className="flex items-center">
      <FaArrowRight className="text-gray-500 mr-1" />
      Date
    </span>
    <span className="flex items-center">
      <FaClock className="text-gray-500 mr-1" />
      3
    </span>
    <span className="flex items-center">
      <FaUser className="text-gray-500 mr-1" />
      Admin
    </span>
  </div>
</div>
<h2>{product.name}</h2><hr className='my-2'/>
<h2 className='text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500 max-w-[700px]'>{product.description}</h2>
<Link href={`/blogs/${product.id}`}>
<button className='mt-6 m-6 flex border-[1px] border-[#FF9F0D] p-2 rounded-md items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D]'>
          {product.button}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5 ml-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
        </Link>

              </div>
           
          </li>
        ))}
      </ul>
      <DescriptionComponent/>
      <SimilarProducts/>
    </div>
    <div className='flex flex-col m-9'>
    <div className='flex flex-col'>
     <h6 className='mx-auto'><input type="text" placeholder='Search Your Keyword' className='border border-r-[#FF9F0D] p-4 border-r-[60px] md:mb-[40px] border-gray-300 h-[70px] md:w-[425px] md:ml-0 ml-3 w-[280px]' /></h6>
     <div className="w-[147.7px] h-[129.43px] rounded-full overflow-hidden mx-auto">
  {/* Profile Picture Image */}
  <Image
    src="/whiteman.png"
    alt="Profile Picture"
    width={148}
    height={130}
    className="object-cover rounded-full"
  />
</div>

{/* Name and Review */}
<div className="text-center mt-8">
  <p className="font-bold text-[20px] leading-[28px]">Prince Miyako</p>
  <div className="flex items-center justify-center mt-2">
    <div className="flex text-[#FF9F0D] space-x-1">
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
    </div>
    <p className="text-sm ml-2">(1 Review)</p>
  </div>
</div>

{/* Paragraph */}
<div className="text-center mt-8 px-4">
  <p className="font-normal text-[16px] leading-[24px]">
    This is a sample paragraph text describing the user or any additional details you want to include. Centered and styled according to your requirement.
  </p>
</div>

{/* Social Icons */}
<div className="flex justify-center space-x-6 mt-6">
  {/* Facebook Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#333333"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path d="M22.675 0H1.325C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.714-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.592 1.325-1.325V1.325C24 .592 23.408 0 22.675 0z" />
  </svg>
  {/* Twitter Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#333333"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.573 4.9 4.9 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.95 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.874 9.874 0 010 21.542a13.94 13.94 0 007.548 2.212c9.056 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.637A10.01 10.01 0 0024 4.557z" />
  </svg>
  {/* Instagram Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#333333"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.975 1.254 2.242 1.316 3.608.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.316 3.608-.975.975-2.242 1.254-3.608 1.316-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.316-.975-.975-1.254-2.242-1.316-3.608-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.316-3.608.975-.975 2.242-1.254 3.608-1.316C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.738 0 8.332.014 7.052.072 5.771.131 4.48.416 3.515 1.382 2.55 2.348 2.266 3.639 2.207 4.92c-.058 1.28-.072 1.686-.072 4.078s.014 2.798.072 4.078c.059 1.281.343 2.572 1.308 3.538.965.965 2.256 1.249 3.538 1.308 1.28.058 1.686.072 4.078.072s2.798-.014 4.078-.072c1.281-.059 2.572-.343 3.538-1.308.965-.965 1.249-2.256 1.308-3.538.058-1.28.072-1.686.072-4.078s-.014-2.798-.072-4.078c-.059-1.281-.343-2.572-1.308-3.538-.965-.965-2.256-1.249-3.538-1.308C15.798.014 15.362 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
  </svg>
</div>

    </div>
    <div className="md:w-[423px] w-auto md:h-[592px] bg-white border  border-gray-300 p-4 mx-auto my-[10px] flex flex-col md:mr-[60px]">
  {/* Recent Post Heading */}
  <h2 className="font-bold text-[20px] leading-[28px] mb-4">Recent Post</h2>

  {/* Posts */}
  <div className="flex flex-col space-y-4">
    {/* Single Post */}
    <div className="flex items-start space-x-4">
      {/* Image */}
      <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
        <Image src="/post1.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-sm font-medium mb-2">June 22, 2020</p>
        <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
      </div>
    </div>

    {/* Single Post */}
    <div className="flex items-start space-x-4">
      {/* Image */}
      <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
        <Image src="/post2.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-sm font-medium mb-2">June 23, 2020</p>
        <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
      </div>
    </div>

    {/* Single Post */}
    <div className="flex items-start space-x-4">
      {/* Image */}
      <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
        <Image src="/post3.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-sm font-medium mb-2">June 24, 2020</p>
        <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
      </div>
    </div>

    {/* Single Post */}
    <div className="flex items-start space-x-4">
      {/* Image */}
      <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
        <Image src="/post4.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-sm font-medium mb-2">June 25, 2020</p>
        <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
      </div>
    </div>
  </div>
</div>

{/* AGain same portion */}
<div className="md:w-[423px] w-auto md:h-[592px] bg-white border  border-gray-300 p-4 mx-auto my-[10px] flex flex-col md:mr-[60px] ">
  {/* Recent Post Heading */}
  <h2 className="font-bold text-[20px] leading-[28px] mb-4">Recent Post</h2>

  {/* Posts */}
  <div className="flex flex-col space-y-4">
    {/* Single Post */}
    <div className="flex items-start space-x-4">
      {/* Image */}
      <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
        <Image src="/post1.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-sm font-medium mb-2">June 22, 2020</p>
        <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
      </div>
    </div>

    {/* Single Post */}
    <div className="flex items-start space-x-4">
      {/* Image */}
      <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
        <Image src="/post2.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-sm font-medium mb-2">June 23, 2020</p>
        <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
      </div>
    </div>

    {/* Single Post */}
    <div className="flex items-start space-x-4">
      {/* Image */}
      <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
        <Image src="/post3.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-sm font-medium mb-2">June 24, 2020</p>
        <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
      </div>
    </div>

    {/* Single Post */}
    <div className="flex items-start space-x-4">
      {/* Image */}
      <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
        <Image src="/post4.png" alt="Post Image" width={99} height={91.58} className="object-cover w-full h-full" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-sm font-medium mb-2">June 25, 2020</p>
        <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
      </div>
    </div>
  </div>
</div>

<div className="w-full md:w-[423px] h-auto bg-white mb-[30px] border border-gray-300 p-4 mt-4">
  {/* Popular Tags Heading */}
  <h2 className="font-bold text-[20px] leading-[28px] mb-4">Popular Tags</h2>

  {/* Tags */}
  <div className="flex flex-wrap gap-2">
  {categories.map((category, index) => (
        <span
          key={index}
          className="px-3 py-1 border border-gray-200 rounded-md"
        >
          {category}
        </span>
      ))}
  </div>
</div>

{/* Photo Gallery Section */}
<div className="w-full bg-white border mb-[30px] border-gray-300 p-4 mt-4">
  {/* Photo Gallery Heading */}
  <h2 className="font-bold text-[20px] leading-[28px] mb-4">Photo Gallery</h2>

  {/* Gallery Grid */}
  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
    {PhotoGallery.map((photo, index)=>(
      <div key={index}>
      <Image src={photo.image} alt="Gallery Image" width={300} height={300} className="object-cover w-full h-full" />
      </div>
    ))}
  </div>
</div>

{/* Follow Us Section */}
<div className="w-full py-8 text-center border border-gray-300">
  <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
  <div className="flex justify-center gap-1">
    {/* Facebook Icon */}
    <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-1 14h-2v-6h2v6zm-1-7.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2c0 .7-.5 1.2-1.2 1.2zM16 9.8h-2V8c0-.9.7-1.5 1.5-1.5h1.5V5h-2c-2 0-3 1.5-3 3v2h-2v3h2v6h3v-6h2.6l.4-3h-3z"/>
      </svg>
    </div>
    {/* YouTube Icon */}
    <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 6.4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11.2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.4zm-12 7.6v-6l6 3-6 3z"/>
      </svg>
    </div>
    {/* Instagram Icon with orange background */}
    <div className="flex justify-center items-center bg-[#FF9F0D] p-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 4h-8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H8v-4h8v4zm0-6H8V6h8v6z"/>
      </svg>
    </div>
    {/* Pixel Icon */}
    <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zM16 8h-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v2H8c-1.1 0-2 .9-2 2s.9 2 2 2h2v6c0 1.1.9 2 2 2s2-.9 2-2v-6h2c1.1 0 2-.9 2-2s-.9-2-2-2z"/>
      </svg>
    </div>
    {/* Twitter Icon */}
    <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M23 3c-.8.4-1.6.7-2.5.8 1-.6 1.8-1.5 2.1-2.6-.9.5-1.8.8-2.8 1-1-.9-2.4-1.4-3.9-1.4-3 0-5.4 2.4-5.4 5.4 0 .4 0 .7.1 1.1-4.5-.2-8.5-2.4-11.2-5.7-.5.8-.8 1.7-.8 2.7 0 1.9 1 3.6 2.4 4.5-1-.1-2-.3-2.9-.7v.1c0 2.6 1.9 4.7 4.4 5.2-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1 1 3.1 3.8 5.4 7.2 5.4-2.6 2-5.8 3.2-9.2 3.2-.6 0-1.2 0-1.8-.1 3.4 2.2 7.5 3.5 11.8 3.5 14.2 0 22-11.8 22-22 0-.3 0-.6 0-.9 1.5-1.1 2.7-2.4 3.7-3.8z"/>
      </svg>
    </div>
  </div>
</div>

</div>

    
    </div>
    </div>
  );
};

export default ProductListPage;
