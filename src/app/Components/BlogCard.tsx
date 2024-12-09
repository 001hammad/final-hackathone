import Image from 'next/image';
import { FC } from 'react';

interface BlogCardProps {
  imageSrc: string;
  date?: string;
  title?: string;
  description?: string;
  adminName?: string;
}

const BlogCard: FC<BlogCardProps> = ({
  imageSrc,
  date = '14-Feb-2022', // Default date
  title = '10 Reasons To Do A Digital Detox Challenge', // Default title
  description = 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...', // Default description
  adminName = 'Admin' // Default admin name
}) => {
  return (
    <div className='w-full md:w-[700px] flex flex-col md:mt-[30px] mt-[50px] bg-white'>
      {/* Image Section */}
      <div className='relative w-full h-[300px] md:h-[400px]'>
        {/* Label */}
        <div className='absolute top-0 left-0 bg-[#FF9F0D] text-white px-4 py-2 text-sm font-normal'>
          {date}
        </div>
        <Image
          src={imageSrc}
          alt='Blog Image'
          layout='fill'
          objectFit='cover'
          className='object-cover'
        />
      </div>

      {/* Text Content */}
      <div className='p-4'>
        {/* Date and Admin Info */}
        <div className='flex mt-6 items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-4 h-4 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
          {date}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-4 h-4 mx-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9zM12 12V7.5m0 0H7.5'
            />
          </svg>
          3
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-4 h-4 mx-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 9V6.75A2.25 2.25 0 0015 4.5h-3A2.25 2.25 0 009 6.75V9m12 0v9a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18V9m4.5 0h6'
            />
          </svg>
          {adminName}
        </div>

        {/* Title */}
        <h2 className='mt-4 text-[16px] md:text-[18px] font-semibold leading-[24px] text-black'>
          {title}
        </h2>

        {/* Horizontal Line */}
        <hr className='my-4 border-gray-300' />

        {/* Paragraph */}
        <p className='text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500'>
          {description}
        </p>

        {/* Read More Button */}
        <button className='mt-6 flex border-[1px] border-[#FF9F0D] p-2 rounded-md items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D]'>
          Read More
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
      </div>
    </div>
  );
};

export default BlogCard;
