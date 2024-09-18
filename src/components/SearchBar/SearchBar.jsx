import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const form = evt.target;
		const input = form.elements.input.value;

		if (form.elements.input.value.trim() === "") {
			toast.error("Please enter search term!");
			return;
		}
		onSubmit(input);
		form.reset();
	};
	return (
		<header className={css.searchBar}>
			<form onSubmit={handleSubmit}>
				<input
					name="input"
					type="text"
					placeholder="Search images and photos"
				/>
				<button type="submit">Search</button>
			</form>
		</header>
	);
}
