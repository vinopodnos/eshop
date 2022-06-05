import { useState, useEffect } from "react";
import styles from "./Range.module.scss";

export default function Range(props) {
	const min = props.limits[0];
	const max = props.limits[1];
	const size = max - min;
	const { format, onChange } = props;

	const [valueA, setValueA] = useState(format(min));
	const [valueB, setValueB] = useState(format(max));

	useEffect(() => onChange(valueA, valueB), [valueA, valueB, onChange]);

	function changeValueA(newValue) {
		// change the value only if:
		//   - isn't smaller than the minimum allowed
		//   - isn't bigger than the maximum allowed
		//   - isn't bigger than valueB
		if (newValue < min || newValue > max || newValue >= valueB - 1) return;
		setValueA(format(newValue));
	}

	function changeValueB(newValue) {
		// change the value only if:
		//   - isn't smaller than the minimum allowed
		//   - isn't bigger than the maximum allowed
		//   - isn't smaller than valueA
		if (newValue < min || newValue > max || newValue <= valueA + 1) return;
		setValueB(format(newValue));
	}

	function handlePointerDown(e) {
		const dot = e.target;
		const range = dot.parentNode;
		if (
			dot.className !== styles["handler-a"] &&
			dot.className !== styles["handler-b"]
		)
			return;

		range.setPointerCapture(e.pointerId);

		function getNewValue(e) {
			const rect = range.getBoundingClientRect();
			const clickPos = e.clientX - rect.x;
			return min + (clickPos / rect.width) * size;
		}

		function handleMoveA(e) {
			changeValueA(getNewValue(e));
		}

		function handleMoveB(e) {
			changeValueB(getNewValue(e));
		}

		function handleMove(cb) {
			cb(e);
			range.addEventListener("pointermove", cb);
			range.addEventListener(
				"pointerup",
				() => {
					range.removeEventListener("pointermove", cb);
				},
				{ once: true }
			);
		}

		if (dot.className === styles["handler-a"]) handleMove(handleMoveA);
		else handleMove(handleMoveB);
	}

	return (
		<div className={styles["element"]}>
			<input
				aria-label={props.titleA}
				type="range"
				value={valueA}
				min={min}
				max={max}
				onChange={(e) => changeValueA(e.target.value)}
			/>
			<input
				aria-label={props.titleB}
				type="range"
				value={valueB}
				min={min}
				max={max}
				onChange={(e) => changeValueB(e.target.value)}
			/>
			<div
				className={styles["range"]}
				onPointerDown={handlePointerDown}
				style={{
					"--value-a": valueA,
					"--value-b": valueB,
					"--min": props.limits[0],
					"--max": props.limits[1],
				}}
			>
				<div className={styles["handler-a"]}></div>
				<div className={styles["line"]}></div>
				<div className={styles["handler-b"]}></div>
			</div>
		</div>
	);
}

Range.defaultProps = {
	limits: [0, 100],
	format: (x) => Math.round(x),
	onChange: (a, b) => console.log(a, b),
};
