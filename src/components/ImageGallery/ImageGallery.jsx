import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick }) {
	return (
		<ul className={css.imageGallery}>
			{images.map((image) => (
				<li key={image.id} onClick={() => onImageClick(image)}>
					<ImageCard image={image} />
				</li>
			))}
		</ul>
	);
}
