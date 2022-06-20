import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import NotFound from "./NotFound";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/categories/:categoryId" element={<Category />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
