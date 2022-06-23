import { useTranslation } from "react-i18next";
import { convert } from "../../currency";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating";
import { useCart } from "../../CartContext";
import styles from "./Product.module.scss";
import { useEffect, useState } from "react";

export default function Product({ product }) {
	const { t } = useTranslation();
	const [price, setPrice] = useState(product.price);
	const [prevPrice, setPrevPrice] = useState(product.prevPrice);

	useEffect(() => {
		convert(t("currency-code"), product.price).then((v) =>
			setPrice(t("currency-format")(v))
		);
		convert(t("currency-code"), product.prevPrice).then((v) =>
			setPrevPrice(t("currency-format")(v))
		);
	}, [product.price, product.prevPrice, t]);
	const { increaseQuantity } = useCart();

	return (
		<div
			className={styles["product"]}
			style={product.color && { "--line-color": "#d71f26" }}
		>
			<div className={styles["content"]}>
				<img alt={product.title} src={product.image} />
				<div className={styles["text"]}>
					<h2>{product.title}</h2>
					<p>{product.describtion}</p>
					<strong>
						{t("currency-str").replace("{price}", price)}
						{product.prevPrice && (
							<small aria-label={t("product-prev-price")}>
								{t("currency-str").replace(
									"{price}",
									prevPrice
								)}
							</small>
						)}
						{product.rating && (
							<Rating
								className={styles["rating"]}
								points={product.rating}
							/>
						)}
					</strong>
				</div>
				<Link
					className={styles["link"]}
					to="/products/1"
					aria-label={product.title}
				></Link>
			</div>
			<div className={styles["buttons"]}>
				<button onClick={() => increaseQuantity(1)}>
					<FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
					{t("product-add-to-cart")}
				</button>
				<Link to="/">
					<FontAwesomeIcon icon="fa-solid fa-circle-info" />
					{t("product-more-info")}
				</Link>
			</div>
		</div>
	);
}
