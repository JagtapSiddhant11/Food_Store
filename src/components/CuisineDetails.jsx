import React, { useEffect, useState } from "react";
import { useFoodContext } from "./context";
import { useParams } from "react-router-dom";

const CuisineDetails = () => {
	const { urlCuisineUpdate, cuisineData } = useFoodContext();
	const [selectedItem, setSelectedItem] = useState(null); // State to track the selected item
	const params = useParams();

	useEffect(() => {
		if (params.id) {
			
			urlCuisineUpdate(params.id); // Update cuisine data based on URL params
		}
	}, [params.id, urlCuisineUpdate]);

	const handleClick = (item) => {
		setSelectedItem(item); // Set the clicked item as the selected item
	};

	return (
		<div>
			<h1>Cuisine details</h1>
			<h1 className="text-4xl m-3">{params.id}</h1>

			{/* Conditionally render the selected item */}
			{selectedItem ? (
				<div className="flex flex-col w-1/2 shadow-md rounded-xl overflow-hidden mx-auto">
					<img
						className="w-full h-48 object-cover"
						src={selectedItem.strMealThumb}
						alt={selectedItem.strMeal}
					/>
					<div className="p-4">
						<h1 className="text-lg font-semibold">{selectedItem.strMeal}</h1>
						<p className="mt-2 text-gray-600">{selectedItem.strCategory}</p>
					</div>
					<button
						onClick={() => setSelectedItem(null)} // Reset the selection
						className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
					>
						Go Back
					</button>
				</div>
			) : (
				<div className="flex flex-wrap w-full">
					{cuisineData.map((item) => (
						<div
							className="flex flex-col w-1/4 shadow-md rounded-xl overflow-hidden m-4 cursor-pointer"
							key={item.idMeal}
							onClick={() => handleClick(item)} // Handle click to select an item
						>
							<img
								className="w-full h-48 object-cover"
								src={item.strMealThumb}
								alt={item.strMeal}
							/>
							<div className="p-2">
								<h1 className="text-lg font-semibold">{item.strMeal}</h1>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CuisineDetails;
