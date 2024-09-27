import css from "./App.module.css";
import axios from "axios";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const API_KEY = "0WUy2s5GnAQWx8pKj5rxUKqETipw_oyzlD_zoWPC9u8";

export default function App() {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const fetchImagesWithInput = async (query, page) => {
		setLoading(true);
		try {
			const response = await axios.get(
				`https://api.unsplash.com/search/photos`,
				{
					params: {
						query,
						page,
						per_page: 12,
						client_id: API_KEY,
					},
				}
			);
			setImages((prevImages) => [
				...prevImages,
				...response.data.results,
			]);
		} catch {
			setError("Error fetching images!");
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = async (input) => {
		setQuery(input);
		setImages([]);
		setPage(1);
		fetchImagesWithInput(input, 1);
	};

	const loadMoreImages = () => {
		fetchImagesWithInput(query, page + 1);
		setPage((prevPage) => prevPage + 1);
	};

	const openModal = (image) => {
		setSelectedImage(image);
		setShowModal(true);
	};

	const closeModal = () => {
		setSelectedImage(null);
		setShowModal(false);
	};

	return (
		<>
			<div className={css.appContainer}>
				<SearchBar onSubmit={handleSearch} />
				{error && <ErrorMessage message={error} />}
				<Toaster />
				<ImageGallery images={images} onImageClick={openModal} />
				{loading && <Loader />}
				{images.length > 0 && !loading && (
					<LoadMoreBtn onClick={loadMoreImages} />
				)}
				{showModal && (
					<ImageModal image={selectedImage} onClose={closeModal} />
				)}
			</div>
		</>
	);
}
