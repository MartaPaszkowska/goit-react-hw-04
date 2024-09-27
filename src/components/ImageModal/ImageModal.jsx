import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
	return (
		<Modal
			isOpen={!!image}
			onRequestClose={onClose}
			className={css.imageModal}
			shouldCloseOnOverlayClick={true}
		>
			<img src={image.urls.regular} alt={image.alt_description} />
		</Modal>
	);
}
