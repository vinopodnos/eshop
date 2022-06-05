import { useId } from "react";
import styles from "./Rating.module.scss";

export default function Rating({ points, className }) {
	const id = useId();
	const elements = [];
	for (let i = 1; i <= 5; i++) {
		let starState = 0;
		if (i < points) starState = 1;
		else if (i - points < 1) starState = points % 1;
		elements.push(
			<div
				key={`${id}-${i}`}
				className={styles["rating-star"]}
				style={{ "--state": starState }}
			></div>
		);
	}

	return <div className={`${styles["rating"]} ${className}`}>{elements}</div>;
}

Rating.defaultProps = {
	points: 5,
	className: "",
};
