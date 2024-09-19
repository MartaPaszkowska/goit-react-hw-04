import css from "./App.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import ImageCard from "../ImageCard/ImageCard";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
	useEffect(() => {
		async function fetchArticles() {
			const response = await axios.get(
				`https://api.unsplash.com/photos/?client_id=0WUy2s5GnAQWx8pKj5rxUKqETipw_oyzlD_zoWPC9u8`
			);
			console.log(response);
		}

		fetchArticles();
	}, []);
	return (
		<div className={css.appContainer}>
			<SearchBar />
			<LoadMoreBtn />
			<ImageGallery />
			<Loader />
			<ErrorMessage />
			<ImageModal />
			<ImageCard />
		</div>
	);
}
