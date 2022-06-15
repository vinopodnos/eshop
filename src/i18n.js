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

					// footer
					"footer-github": "Source code on GitHub",

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

					// footer
					"footer-github": "Zdrojový kód na GitHubu",

					// 404
					"not-found": "Tato stránka nebyla nalezena! 🙁️",
				},
			},
		},
	});
