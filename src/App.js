import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./ScrollToTop";
import { CartProvider } from "./CartContext";
import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import Product from "./Product";
import Cart from "./Cart";
import NotFound from "./NotFound";

export default function App() {
	const { i18n } = useTranslation();

	document.documentElement.lang = i18n.language;

	return (
		<BrowserRouter>
			<ScrollToTop>
				<CartProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/categories" element={<Categories />} />
						<Route
							path="/categories/:categoryId"
							element={<Category />}
						/>
						<Route
							path="/products/:productId"
							element={<Product />}
						/>
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</CartProvider>
			</ScrollToTop>
		</BrowserRouter>
	);
}
