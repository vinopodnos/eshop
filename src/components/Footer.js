import { useTranslation } from "react-i18next";
import info from "../info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export default function Footer() {
	const { t } = useTranslation();
	return (
		<footer className={styles["footer"]}>
			<section className={styles["address"]}>
				<p>
					<a href="tel:00420123456789" title={t("footer-phone")}>
						<FontAwesomeIcon icon="fa-solid fa-phone" /> +420 123
						456 789
					</a>
					<br />
					<a href="mailto:info@example.com" title={t("footer-email")}>
						<FontAwesomeIcon icon="fa-solid fa-envelope" />{" "}
						info@example.com
					</a>
				</p>
				<p>
					<a href="https://mapy.cz" title={t("footer-location")}>
						<FontAwesomeIcon icon="fa-solid fa-location-dot" />{" "}
						Street 123, Karlovy Vary
					</a>
				</p>
			</section>
			<section className={styles["copyright"]}>
				<Link to="/" title={t("navbar-home")}>
					&copy; Víno Podnos 2022
				</Link>
				<Link to="/">Obchodní podmínky</Link>
				<Link to="/">Zásady ochrany osobních údajů</Link>
			</section>
			<section className={styles["github"]}>
				<a
					href={`https://github.com/vinopodnos/eshop${
						info.devel ? "/tree/dev" : ""
					}`}
					aria-label={t("footer-github")}
				>
					<FontAwesomeIcon icon="fa-brands fa-github" /> Víno Podnos{" "}
					{info.version} {info.devel && "(development)"}
				</a>
			</section>
		</footer>
	);
}
