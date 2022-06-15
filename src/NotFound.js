import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import style from "./NotFound.module.scss";

export default function NotFound() {
	const { t } = useTranslation();
	return (
		<>
			<Navbar />
			<main className={style["content"]}>
				<h1>404</h1>
				<p>{t("not-found")}</p>
			</main>
			<Footer />
		</>
	);
}
