'use client';

import Blogright from '@/app/Components/blogright';
import Comment3 from '@/app/Components/comment3';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { blogPosts } from '@/app/utils';
import HeroSection from '@/app/Components/HeroSection';



const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
       {/* <Hero title='Blog Details' homeLink='/' currentPage='Blog Details' backgroundImage='/starbg.png'  /> */}

       <HeroSection title='Blog Details' homeLink='/' backgroundImage='/starbg.png' currentPage='blog details'/>

    <div className="px-4 lg:px-20 py-10">
     
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Blog Content */}
        <div className="flex-1">
          {/* Large Image */}
          <div className="w-full">
            <Image
              src={post.largeImage}
              alt={post.title}
              width={900}
              height={720}
              className="w-full lg:w-[800px] lg:h-[500px] rounded-lg object-cover"
            />
          </div>

          {/* Date and Info */}
          <p className="text-gray-500 text-sm mt-4">
            {post.date} / {post.comments} Comments / By {post.author}
          </p>

          {/* Title */}
          <h1 className="text-black font-bold text-2xl lg:text-3xl mt-4">{post.title}</h1>
          <hr className="my-4 lg:w-[800px]" />

          {/* Content */}
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 lg:w-[800px] text-base lg:text-lg leading-6 mt-4">
              {paragraph}
            </p>
          ))}

          {/* Quote Section */}
          <div className="bg-orange-400 text-white mt-6 p-4 lg:p-6 lg:w-[800px] rounded-lg">
            <p className="text-lg lg:text-xl font-bold">{post.quote.text}</p>
          </div>

          {/* Additional Content */}
          <div className="flex flex-col lg:flex-row lg:w-[800px] items-start mt-6 gap-6">
            <p className="text-gray-700 text-base  leading-6 flex-1">
              {post.additionalParagraph}
              {post.additionalParagraph}
            </p>
            <div className="flex-1 mx-auto">
              <Image
                src={post.image}
                alt="Additional Image"
                width={424}
                height={250}
                className=" w-[424px] h-[350px] rounded-lg"
              />
            </div>
          </div>

          {/* Tags and Share Section */}
          <div className="flex flex-col lg:flex-row lg:w-[800px] justify-between items-center mt-8 gap-4 border-t border-gray-300 pt-4">
            <div className="flex gap-2">
              <span className="font-bold">Tags:</span>
              {post.tags.map((tag, index) => (
                <span key={index} className="text-gray-700">
                  {tag}
                  {index < post.tags.length - 1 && ','}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <span className="font-bold">Share:</span>
              {post.socialMedia.map((platform, index) => (
                <span key={index} className="text-blue-600 cursor-pointer">
                  {platform}
                </span>
              ))}
            </div>
          </div>
           <p className="text-gray-700 font-normal text-[16px] leading-[24px] lg:w-[870px] order-1 lg:order-1">
    {post.additionalParagraph}
    {post.additionalParagraph}
    {post.additionalParagraph}
    {post.additionalParagraph}
    {post.additionalParagraph}
    {post.additionalParagraph}
  </p>
      <p className="text-gray-700 font-normal mt-[18px] text-[16px] leading-[24px] lg:w-[870px] order-1 lg:order-1">
    {post.additionalParagraph}
    {post.additionalParagraph}
    {post.additionalParagraph}
    {post.additionalParagraph}
  </p>
      <p className="text-gray-700 font-normal mt-[18px] text-[16px] leading-[24px] lg:w-[870px] order-1 lg:order-1">
    {post.additionalParagraph}
    {post.additionalParagraph}
  </p>
        </div>

        {/* Blog Sidebar */}
        <div className="w-full lg:w-[300px]">
          <Blogright />
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-10">
        <Comment3 />
      </div>
    </div>
    </div>
  );
};

export default BlogDetailPage;
