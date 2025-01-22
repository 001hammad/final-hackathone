"use client";

import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onCategoryChange,
}) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-700 mb-4">Category</h3>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
            />
            <label htmlFor={category} className="text-gray-700">
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
