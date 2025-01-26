"use client";

import React, { useEffect, useState } from 'react';
import HeroSection from '../Components/HeroSection';
import { client } from "@/sanity/lib/client"; // Import Sanity client
import Image from 'next/image';

// Define a TypeScript interface for chef data
interface Chef {
  _id: string;
  name: string;
  position: string;
  specialty: string;
  description: string;
  experience: number;
  available: boolean;
  imageUrl: string;
}

const ChefsList: React.FC = () => {
  const [chefs, setChefs] = useState<Chef[]>([]); // Use proper type for chefs state
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        // Sanity query to fetch chefs data
        const query = `*[_type == "chef"] {
          _id,
          name,
          position,
          specialty,
          description,
          experience,
          available,
          "imageUrl": image.asset->url
        }`;

        const data = await client.fetch(query); // Fetch data using Sanity client

        if (data.length > 0) {
          setChefs(data); // Set fetched data in chefs state
        } else {
          setError("No chefs found");
        }
      } catch (error) {
        console.error('Error fetching chefs:', error);
        setError("Failed to fetch chefs");
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchChefs(); // Call fetchChefs function
  }, []); // Empty dependency array to run only once when component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-medium text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        title="Our Chefs"
        backgroundImage="/starbg.png"
        currentPage="Chefs"
        homeLink="/"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {chefs.map((chef) => (
          <div key={chef._id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{chef.name}</h2>
            <div className="relative w-full h-48">
  <Image
    src={chef.imageUrl}
    alt={chef.name}
    layout="fill"
    objectFit="cover"
    className="rounded-md"
  />
</div>

            <p className="font-medium text-gray-700">{chef.position}</p>
            <p className="text-sm text-gray-600">{chef.specialty}</p>
            <p className="text-sm text-gray-500">{chef.description}</p>
            <p className="mt-2 font-medium">Experience: {chef.experience} years</p>
            <p className={`font-medium ${chef.available ? 'text-green-500' : 'text-red-500'}`}>
              {chef.available ? 'Available' : 'Not Available'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefsList;
