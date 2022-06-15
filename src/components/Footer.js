import info from "../info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles["footer"]}>
			<section className={styles["address"]}>
				<p>
					<a href="tel:00420123456789">
						<FontAwesomeIcon icon="fa-solid fa-phone" /> +420 123
						456 789
					</a>
					<br />
					<a href="mailto:info@example.com">
						<FontAwesomeIcon icon="fa-solid fa-envelope" />{" "}
						info@example.com
					</a>
				</p>
				<p>
					<FontAwesomeIcon icon="fa-solid fa-location-dot" /> Street
					123, Karlovy Vary
				</p>
			</section>
			<section className={styles["copyright"]}>
				<Link to="/">&copy; Víno Podnos 2022</Link>
				<Link to="/">Obchodní podmínky</Link>
				<Link to="/">Zásady ochrany osobních údajů</Link>
			</section>
			<section className={styles["github"]}>
				<a
					href={`https://github.com/vinopodnos/eshop${
						info.devel ? "/tree/dev" : ""
					}`}
				>
					<FontAwesomeIcon icon="fa-brands fa-github" /> Víno Podnos{" "}
					{info.version} {info.devel && "(development)"}
				</a>
			</section>
		</footer>
	);
}
