import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import Product from "./Product";
import NotFound from "./NotFound";

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/categories" element={<Categories />} />
					<Route
						path="/categories/:categoryId"
						element={<Category />}
					/>
					<Route path="/products/:productId" element={<Product />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
}
