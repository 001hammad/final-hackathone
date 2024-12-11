'use client'
import Image from 'next/image'
import { useState } from 'react';
import { Great_Vibes } from 'next/font/google';


const VibeFont = Great_Vibes({subsets:['latin'],weight:['400']})

// Testimonial data array
const testimonials = [
  {
    id: 1,
    name: 'Alamin Hasan',
    role: 'Food Specialist',
    image: '/placeholder.svg?height=80&width=80',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
    rating: 4,
  },
  {
    id: 2,
    name: 'Sarah Lee',
    role: 'Marketing Expert',
    image: '/placeholder.svg?height=80&width=80',
    quote: 'Donec ut lorem eget arcu fringilla ultrices sit amet et ante. Sed malesuada mollis enim, a ullamcorper sem posuere eu. Integer non libero vel leo vehicula tincidunt. Aliquam euismod nunc a turpis tincidunt, a varius sapien facilisis.',
    rating: 5,
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'Web Developer',
    image: '/placeholder.svg?height=80&width=80',
    quote: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In placerat velit vitae nibh scelerisque, ac gravida lorem volutpat.',
    rating: 3,
  },
]

export default function SevenHero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0) // State to track the current testimonial

  return (
    <section className="bg-black text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className={`${VibeFont.className} text-amber-500 text-3xl font-serif mb-2`}>Testimonials</h2> {/* Section header */}
        <h3 className="text-4xl font-bold mb-12">What our clients are saying</h3> {/* Section subtitle */}
        
        <div className="bg-white text-black p-8 rounded-lg relative">
          {/* Testimonial Image */}
          <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 z-10">
            <Image
              src="/profile.png" // Profile picture (Placeholder)
              alt="profile"
              width={80}
              height={80}
              className="rounded-full border-4 border-white"
            />
          </div>
          <div className="text-6xl text-amber-500 mb-4">&quot;</div> {/* Quote mark */}
          <p className="text-gray-600 mb-6">{testimonials[currentTestimonial].quote}</p> {/* Testimonial quote */}
          
          {/* Rating Stars */}
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${i < testimonials[currentTestimonial].rating ? 'text-amber-500' : 'text-gray-300'}`} // Star color based on rating
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          {/* Testimonial Name and Role */}
          <h4 className="font-bold text-xl text-center mt-4">{testimonials[currentTestimonial].name}</h4> {/* Client's name */}
          <p className="text-gray-500 text-center">{testimonials[currentTestimonial].role}</p> {/* Client's role */}
        </div>

        {/* Dots for navigation to switch between testimonials */}
        <div className="flex justify-center mt-6">
          {[...Array(3)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentTestimonial ? 'bg-amber-500' : 'bg-gray-400'}`} // Highlight the current dot
              onClick={() => setCurrentTestimonial(index)} // Change the current testimonial
            />
          ))}
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />
    </section>
  )
}
