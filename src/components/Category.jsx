import React from "react";
import { useFoodContext } from "./context";

export const Category = () => {
  const { recipes, updateUrl } = useFoodContext();

  return (
    <div className="mb-8">
      {/* Category Dropdown */}
      <div className="mb-6 flex flex-col items-center">
      
      </div>

      <div className="mb-6 flex flex-col items-center">
        <label htmlFor="category" className="mb-2 text-lg font-semibold text-gray-700">
          Select a Category:
        </label>
        <select
          id="category"
          onChange={(e) => updateUrl(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Indian">Indian</option>
          <option value="Canadian">Canadian</option>
          <option value="American">American</option>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Russian">Russian</option>
          <option value="Turkish">Turkish</option>
          <option value="Japanese">Japanese</option>
          <option value="British">British</option>
          {/* Add other categories as needed */}
        </select>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {meal.strMeal}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
