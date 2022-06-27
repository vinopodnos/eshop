import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: "en",
		resources: {
			en: {
				translation: {
					// Currencies
					"currency-code": "EUR",
					"currency-format": (v) =>
						new Intl.NumberFormat("en", {
							style: "currency",
							currency: "EUR",
						}).format(v),

					// Products
					"products-not-found": "No products found",
					"products-filters": "Filters",
					"product-prev-price": "previous price",
					"product-add-to-cart": "Add to Cart",
					"product-more-info": "More Info",
					"product-rating": "Rating: {rating} stars",

					// Navbar
					"navbar-home": "Go to Home Page",
					"navbar-user": "User Section",
					"navbar-cart": "Cart",
					"navbar-toggler": "Toggle Menu",

					// Footer
					"footer-phone": "Phone Number",
					"footer-email": "E-mail",
					"footer-location": "Where you can find us?",
					"footer-github": "Source code on GitHub",

					// Home
					"home-order-now": "Order Now",
					"home-scroll-down": "Scroll Down",
					"home-featured": "Featured",
					"home-show-all": "Show All",

					// Categories
					"categories-title": "All Categories",

					// Checkout
					"checkout-cart": "Cart",

					// 404
					"not-found": "This page was not found! 🙁️",
				},
			},
			cs: {
				translation: {
					// Currencies
					"currency-code": "CZK",
					"currency-format": (v) =>
						new Intl.NumberFormat("cs", {
							style: "currency",
							currency: "CZK",
						}).format(v),

					// Products
					"products-not-found": "Žádné produkty nebyly nalezeny",
					"products-filters": "Filtry",
					"product-prev-price": "předchozí cena",
					"product-add-to-cart": "Přidat do košíku",
					"product-more-info": "Více informací",
					"product-rating": "Hodnocení: {rating} hvězdiček",

					// Navbar
					"navbar-home": "Přejít na domovskou stránku",
					"navbar-user": "Uživatelská sekce",
					"navbar-cart": "Košík",
					"navbar-toggler": "Přepnout menu",

					// Footer
					"footer-phone": "Telefonní číslo",
					"footer-email": "E-mail",
					"footer-location": "Kde nás najdete?",
					"footer-github": "Zdrojový kód na GitHubu",

					// Home
					"home-order-now": "Objednat",
					"home-scroll-down": "Přejít dolů",
					"home-featured": "Doporučujeme",
					"home-show-all": "Zobrazit vše",

					// Categories
					"categories-title": "Všechny kategorie",

					// Checkout
					"checkout-cart": "Košík",

					// 404
					"not-found": "Tato stránka nebyla nalezena! 🙁️",
				},
			},
		},
	});
