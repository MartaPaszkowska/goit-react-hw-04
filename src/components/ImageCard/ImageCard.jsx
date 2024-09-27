import css from "./ImageCard.module.css";

export default function ImageCard({ image }) {
	if (!image || !image.urls) {
		return null;
	}
	return (
		<div className={css.imageCard}>
			<img src={image.urls.small} alt={image.alt_description} />
		</div>
	);
}
