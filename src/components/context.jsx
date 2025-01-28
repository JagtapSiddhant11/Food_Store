import React, { createContext, useState, useEffect, useContext } from "react";

const FoodContext = createContext();


export const FoodProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [listData, setListData] = useState([]);
  const [cuisineData, setCuisineData] = useState([]);
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
  );
  const [urlCuisine, setUrlCuisine] = useState(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood"
  );

  // Function to update URL for cuisines
  const urlCuisineUpdate = (item) => {
    setUrlCuisine(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`);
  };

  // Function to update URL for countries
  const updateUrl = (country) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
  };

  useEffect(() => {
    async function fetchRecipes() {
      setLoading(true);
      setError(null);

      try {
        // Fetch all required data
        const [response, listItem, cuisines] = await Promise.all([
          fetch(url),
          fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list"),
          fetch(urlCuisine),
        ]);

        // Check for HTTP errors
        if (!response.ok || !listItem.ok || !cuisines.ok) {
          throw new Error("Failed to fetch data from one or more endpoints.");
        }

        // Parse JSON data
        const [data, ldata, cuisData] = await Promise.all([
          response.json(),
          listItem.json(),
          cuisines.json(),
        ]);

        // Validate fetched data
        if (!data.meals || !ldata.meals || !cuisData.meals) {
          throw new Error("One or more endpoints returned no data.");
        }

        // Update state
        setRecipes(data.meals);
        setListData(ldata.meals);
        setCuisineData(cuisData.meals);
      } catch (err) {
        setError(err.message);
        setRecipes([]);
        setListData([]);
        setCuisineData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [url, urlCuisine]);

  return (
    <FoodContext.Provider
      value={{
        recipes,
        loading,
        error,
        updateUrl,
        urlCuisineUpdate,
        listData,
        cuisineData,
        urlCuisine
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

// Custom hook for accessing context
export const useFoodContext = () => useContext(FoodContext);

export default FoodContext;
