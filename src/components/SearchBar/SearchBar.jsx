import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim() === "") {
			toast.error("Please enter a search term");
			return;
		}
		onSubmit(input);
		setInput("");
	};

	return (
		<header className={css.searchBar}>
			<form onSubmit={handleSubmit} className={css.searchForm}>
				<input
					className={css.searchInput}
					type="text"
					value={input}
					onChange={handleChange}
					placeholder="Search images and photos"
				/>
				<button type="submit" className={css.searchButton}>
					Search
				</button>
			</form>
		</header>
	);
}
