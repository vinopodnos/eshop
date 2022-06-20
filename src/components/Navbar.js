import { forwardRef, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = forwardRef(({ id }, ref) => {
	const { t } = useTranslation();

	const menu = useRef();
	const button = useRef();
	const hamburger = useRef();

	function toggleMenu() {
		button.current.classList.toggle(styles["open"]);
		const open = button.current.classList.contains(styles["open"]);
		hamburger.current.classList.toggle(styles["open"], open);
		if (open) {
			menu.current.style.maxHeight = menu.current.scrollHeight + "px";
		} else {
			menu.current.style.maxHeight = "";
		}
	}

	return (
		<nav className={styles["navbar"]} id={id} ref={ref}>
			<Link to="/" title={t("navbar-home")}>
				<img src="/icon.svg" alt="logo" className={styles["logo"]} />
			</Link>
			<ul ref={menu} className={styles["menu"]}>
				<li>
					<Link to="/categories/1">Červené víno</Link>
				</li>
				<li>
					<Link to="/categories/2">Bílé víno</Link>
				</li>
				<li>
					<Link to="/categories/3">Další alkohol</Link>
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
				<button
					ref={button}
					className={styles["menu-toggler"]}
					title={t("navbar-toggler")}
					onClick={toggleMenu}
				>
					<span
						ref={hamburger}
						className={styles["hamburger"]}
					></span>
				</button>
			</div>
		</nav>
	);
});

export default Navbar;
