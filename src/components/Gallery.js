import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Gallery.module.scss";

export default function Gallery({ images, className }) {
	const [currentImage, setCurrentImage] = useState(0);
	const lightbox = useRef();

	if (!images.length) return <div className={className}></div>;

	const controls = (
		<div className={styles["controls"]}>
			<button onClick={previousImage}>
				<FontAwesomeIcon icon="fa-solid fa-angle-left" />
			</button>
			<button onClick={nextImage}>
				<FontAwesomeIcon icon="fa-solid fa-angle-right" />
			</button>
		</div>
	);

	function previousImage(e) {
		e?.stopPropagation();
		if (currentImage <= 0) setCurrentImage((p) => images.length - 1);
		else setCurrentImage((p) => p - 1);
	}

	function nextImage(e) {
		e?.stopPropagation();
		if (currentImage >= images.length - 1) setCurrentImage(0);
		else setCurrentImage((p) => p + 1);
	}

	function openLightbox() {
		lightbox.current.classList.add(styles["open"]);
		document.body.style.overflow = "hidden";
	}

	function closeLightbox(e) {
		lightbox.current.classList.remove(styles["open"]);
		document.body.style.overflow = "auto";
	}

	const galleryImages = images.map((e, i) => (
		<img
			key={i}
			src={e}
			alt=""
			className={i === currentImage ? styles["active"] : undefined}
		/>
	));

	const galleryButtons = galleryImages.map((e, i) => (
		<button key={i} onClick={() => setCurrentImage(i)}>
			{e}
		</button>
	));

	return (
		<div className={`${styles["gallery"]} ${className}`}>
			<div className={styles["images"]} onClick={openLightbox}>
				{galleryImages}
				{controls}
			</div>
			<div className={styles["buttons"]}>{galleryButtons}</div>
			<div
				ref={lightbox}
				className={styles["lightbox"]}
				data-count={images.length}
				data-current={currentImage + 1}
			>
				{galleryImages}
				{controls}
				<button className={styles["close"]} onClick={closeLightbox}>
					<FontAwesomeIcon icon="fa-solid fa-xmark" />
				</button>
			</div>
		</div>
	);
}
