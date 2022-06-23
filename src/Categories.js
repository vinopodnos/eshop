import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from "./Categories.module.scss";

export default function Categories() {
	const { t } = useTranslation();

	const categories = [
		{
			id: 1,
			title: "Červené víno",
			image: "https://picsum.photos/seed/1/400",
		},
		{
			id: 2,
			title: "Bílé víno",
			image: "https://picsum.photos/seed/2/400",
		},
		{
			id: 3,
			title: "Další alkohol",
			image: "https://picsum.photos/seed/3/400",
		},
	];

	const categoryElements = categories.map((e) => (
		<Link
			key={e.id}
			className={styles["item"]}
			title={e.title}
			to={`/categories/${e.id}`}
		>
			<img src={e.image} alt={e.title} />
			<span>{e.title}</span>
		</Link>
	));

	return (
		<>
			<Navbar />
			<main className={styles["content"]}>
				<h1>{t("categories-title")}</h1>
				<div className={styles["list"]}>{categoryElements}</div>
			</main>
			<Footer />
		</>
	);
}
