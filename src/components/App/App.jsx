import css from "./App.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import ImageCard from "../ImageCard/ImageCard";
import { fetchImagesWithInput } from "../../images - api";

export default function App() {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleSearch = async (input) => {
		try {
			setImages([]);
			setError(false);
			setLoading(true);
			const data = await fetchImagesWithInput(input);
			setImages(data);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className={css.appContainer}>
			<SearchBar onSubmit={handleSearch} />
			<LoadMoreBtn />
			<ImageGallery />
			<Loader />
			<ErrorMessage />
			<ImageModal />
			<ImageCard />
		</div>
	);
}
