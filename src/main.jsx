import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import { Category } from "./components/Category.jsx";
import Cuisine from "./components/Cuisine.jsx";
import { FoodProvider } from "./components/context.jsx";
import { Login } from "./components/Login.jsx";
import { SignUp } from "./components/Signup.jsx";
import CuisineDetails from "./components/CuisineDetails.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<FoodProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />

						<Route path="/signup" element={<SignUp />} />

						<Route path="/login" element={<Login />} />

						<Route path="/cuisine" element={<Cuisine />} />

						<Route path="/cuisine/:id/" element={<CuisineDetails />} />
							
						<Route path="/category" element={<Category />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</FoodProvider>
	</StrictMode>
);
