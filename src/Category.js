import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/products/ProductList";
import styles from "./Category.module.scss";

import data from "./temporaryData";

export default function Category() {
	return (
		<>
			<Navbar />
			<main className={styles["content"]}>
				<h1>Červené víno</h1>
				<ProductList products={data} />
			</main>
			<Footer />
		</>
	);
}
