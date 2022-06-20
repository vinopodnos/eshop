import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from "./Categories.module.scss";

export default function Categories() {
	return (
		<>
			<Navbar />
			<main className={styles["content"]}></main>
			<Footer />
		</>
	);
}
