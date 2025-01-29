import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFoodContext } from "./context";

const Header = () => {
  const [searchItem, setSearchItem] = useState(""); // Initialize as an empty string
  const { recipes } = useFoodContext();

  // Filter recipes based on the search term
  const filteredRecipes = recipes.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchItem.toLowerCase())
  );  

  return (
    <div className="shadow h-1/6 bg-red-400 min-h-fit w-full flex justify-between items-center px-10 font-serif">
      <h1 className="text-3xl">Logo</h1>
      <div className="w-2/3 hidden sm:flex sm:flex-shrink-1 text-xl sm:justify-around sm:items-center">
        <ul className="flex w-1/2 justify-around">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cuisine">Cuisine</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
        </ul>
        <input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)} // Update search term
          type="search"
          className="border outline-none w-1/3 placeholder:text-base px-2 py-1"
          placeholder="Search for Delicious Recipes"
        />
        <button className="">LogOut</button>
      </div>

      {/* Search Results */}
      {searchItem && (
        <div className="absolute top-16 left-1/4 bg-white p-4 shadow-lg rounded-md w-1/2">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((meal) => (
              <div
                className="flex items-center gap-4 mb-4 border-b pb-2"
                key={meal.idMeal}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-16 h-16 rounded"
                />
                <h1 className="text-lg font-semibold">{meal.strMeal}</h1>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No recipes found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
