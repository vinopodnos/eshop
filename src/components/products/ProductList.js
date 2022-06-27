import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "./Product";
import Range from "../Range";
import styles from "./ProductList.module.scss";
import { useRef, useState } from "react";

export default function ProductList({ products }) {
	const { t } = useTranslation();

	const [filterMinPrice, setFilterMinPrice] = useState(0);
	const [filterMaxPrice, setFilterMaxPrice] = useState(0);

	const sidebar = useRef();

	if (!Array.isArray(products) || products.length <= 0) {
		return (
			<div className={styles["product-list"]}>
				<aside className={styles["sidebar"]}></aside>
				<div className={styles["product-grid-empty"]}>
					{t("products-not-found")}
				</div>
			</div>
		);
	}

	let minPrice = products[0].price;
	let maxPrice = minPrice;
	products.forEach((p) => {
		if (p.price < minPrice) minPrice = p.price;
		else if (p.price > maxPrice) maxPrice = p.price;
	});

	function getElementsForArray(array) {
		return array.map((p, i) => <Product key={i} product={p} />);
	}

	let filteredProducts = products;

	// filter with price

	filteredProducts = filteredProducts.filter((p) => {
		return p.price >= filterMinPrice && p.price <= filterMaxPrice;
	});

	function stopPropagation(e) {
		if (e.target.closest(`.${styles["close-btn"]}`)) return;
		e.stopPropagation();
	}

	function clickedOutside() {
		closeSidebar();
	}

	function openSidebar() {
		sidebar.current.classList.add(styles["open"]);
		sidebar.current.addEventListener(
			"transitionend",
			() => {
				sidebar.current.addEventListener("click", stopPropagation);
				document.body.addEventListener("click", clickedOutside);
			},
			{ once: true }
		);
	}

	function closeSidebar() {
		sidebar.current.classList.remove(styles["open"]);
		sidebar.current.removeEventListener("click", stopPropagation);
		document.body.removeEventListener("click", clickedOutside);
	}

	return (
		<div className={styles["product-list"]}>
			<button className={styles["open-btn"]} onClick={openSidebar}>
				<FontAwesomeIcon icon="fa-solid fa-sliders" />
				{t("products-filters")}
			</button>
			<aside ref={sidebar} className={styles["sidebar"]}>
				{minPrice}&ensp;{maxPrice}
				<br />
				{filterMinPrice}&ensp;{filterMaxPrice}
				<br />
				<Range
					limits={[minPrice, maxPrice]}
					onChange={(a, b) => {
						setFilterMinPrice(a);
						setFilterMaxPrice(b);
					}}
				/>
				<button className={styles["close-btn"]}>
					<FontAwesomeIcon icon="fa-solid fa-xmark" />
				</button>
			</aside>
			<div
				className={
					filteredProducts.length > 0
						? styles["product-grid"]
						: styles["product-grid-empty"]
				}
			>
				{filteredProducts.length > 0
					? getElementsForArray(filteredProducts)
					: t("products-not-found")}
			</div>
		</div>
	);
}
