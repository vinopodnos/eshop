import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
	return (
		<nav className={styles["navbar"]}>
			<Link to="/">
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
				<Link to="/">
					<FontAwesomeIcon icon="fa-solid fa-user" />
				</Link>
				<Link to="/">
					<FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
				</Link>
			</div>
		</nav>
	);
}
