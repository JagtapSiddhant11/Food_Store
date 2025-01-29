import React, { useState } from "react";
import { useFoodContext } from "./context";

const Cuisine = () => {
	const { urlCuisineUpdate, cuisineData, listData } =
		useFoodContext();

	const [selectedOption, setSelectedOption] = useState(""); // State to track selected option

	const handleSelectChange = (e) => {
		const selectedValue = e.target.value; // Get selected option value
		urlCuisineUpdate(selectedValue);
		setSelectedOption(selectedValue); // Update state with the selected value

		// Call the context method to update cuisine URL
	};

	return (
		<div>
			<div className="flex flex-col items-center  gap-3  mb-4">
				<label htmlFor="cuisineSelect" className="text-md ">
					Select an item
				</label>

				<select
					onChange={ handleSelectChange}
					id="cuisineSelect"
					className="outline-none px-2 py-1 rounded-lg border "
				>
					<option value="" disabled selected>
						-- Select a Category --
					</option>

					{listData.map((meal, index) => (
						<option key={index} value={meal.strCategory}>
							{meal.strCategory}
						</option>
					))}
				</select>
			</div>

			<h1 className="text-5xl p-4">{selectedOption || "data not found"}</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{cuisineData.map((meal) => (
					<div
						className="bg-white shadow-md rounded-lg overflow-hidden"
						key={meal.idMeal}
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

export default Cuisine;
