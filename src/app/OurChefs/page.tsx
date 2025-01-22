"use client";

import React, { useEffect, useState } from 'react';
import HeroSection from '../Components/HeroSection';
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

async function fetchChefs(): Promise<Chef[]> {
  try {
    const query = `*[_type == "chef"] {
      _id,
      name,
      position,
      specialty,
      description,
      experience,
      available,
      "imageUrl": image.asset->url,
      _createdAt,
      _updatedAt
    }`;

    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.result; // Return the list of chefs
  } catch (error) {
    console.error('Error fetching chefs:', error);
    return []; // Return an empty array in case of an error
  }
}

const ChefsList: React.FC = () => {
  const [chefs, setChefs] = useState<Chef[]>([]); // Use proper type for chefs state
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchChefs().then((data) => {
      setChefs(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
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
                width={400}
                height={400}
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
