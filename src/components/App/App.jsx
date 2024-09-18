import css from "./App.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import ImageCard from "../ImageCard/ImageCard";

export default function App() {
	return (
		<div className={css.appContainer}>
			<LoadMoreBtn />
			<SearchBar />
			<ImageGallery />
			<Loader />
			<ErrorMessage />
			<ImageModal />
			<ImageCard />
		</div>
	);
}
