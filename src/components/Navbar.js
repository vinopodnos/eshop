import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar({ id }) {
	const { t } = useTranslation();
	return (
		<nav className={styles["navbar"]} id={id}>
			<Link to="/" title={t("navbar-home")}>
				<img src="/icon.svg" alt="logo" className={styles["logo"]} />
			</Link>
			<ul className={styles["menu"]}>
				<li>
					<Link to="/">Červené víno</Link>
				</li>
				<li>
					<Link to="/">Bílé víno</Link>
				</li>
				<li>
					<Link to="/">Další alkohol</Link>
				</li>
			</ul>
			<div className={styles["buttons"]}>
				<Link to="/" title={t("navbar-user")}>
					<FontAwesomeIcon icon="fa-solid fa-user" />
				</Link>
				<Link to="/" title={t("navbar-cart")}>
					<FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
					<span>2</span>
				</Link>
			</div>
		</nav>
	);
}
