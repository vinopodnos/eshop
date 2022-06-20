import { useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/products/ProductList";
import styles from "./Category.module.scss";

import data from "./temporaryData";

export default function Category() {
	const { categoryId } = useParams();
	return (
		<>
			<Navbar />
			<main className={styles["content"]}>
				<h1>Category {categoryId}</h1>
				<ProductList products={data} />
			</main>
			<Footer />
		</>
	);
}
