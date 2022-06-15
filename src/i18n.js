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
					// currencies
					"currency-code": "EUR",
					"currency-str": "€ {price}",
					"currency-format": (v) => v.toFixed(2),

					// products
					"products-not-found": "No products found",
					"product-prev-price": "previous price",
					"product-add-to-cart": "Add to Cart",
					"product-more-info": "More Info",

					// navbar
					"navbar-home": "Go to Home Page",
					"navbar-user": "User Section",
					"navbar-cart": "Cart",

					// footer
					"footer-phone": "Phone Number",
					"footer-email": "E-mail",
					"footer-location": "Where you can find us?",
					"footer-github": "Source code on GitHub",

					// Home
					"home-featured": "Featured",
					"home-show-all": "Show All",

					// 404
					"not-found": "This page was not found! 🙁️",
				},
			},
			cs: {
				translation: {
					// currencies
					"currency-code": "CZK",
					"currency-str": "{price} Kč",
					"currency-format": (v) => Math.ceil(v),

					// products
					"products-not-found": "Žádné produkty nebyly nalezeny",
					"product-prev-price": "předchozí cena",
					"product-add-to-cart": "Přidat do košíku",
					"product-more-info": "Více informací",

					// navbar
					"navbar-home": "Přejít na domovskou stránku",
					"navbar-user": "Uživatelská sekce",
					"navbar-cart": "Košík",

					// footer
					"footer-phone": "Telefonní číslo",
					"footer-email": "E-mail",
					"footer-location": "Kde nás najdete?",
					"footer-github": "Zdrojový kód na GitHubu",

					// Home
					"home-featured": "Doporučujeme",
					"home-show-all": "Zobrazit vše",

					// 404
					"not-found": "Tato stránka nebyla nalezena! 🙁️",
				},
			},
		},
	});
