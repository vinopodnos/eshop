import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import style from "./NotFound.module.scss";

export default function NotFound() {
	return (
		<>
			<Navbar />
			<main class={style["content"]}>
				<h1>Not Found!</h1>
			</main>
			<Footer />
		</>
	);
}
