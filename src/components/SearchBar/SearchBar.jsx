import css from "./SearchBar.module.css";

export default function SearchBar() {
	return (
		<header className={css.searchBar}>
			<form className={css.searchForm}>
				<input
					className={css.searchInput}
					name="input"
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
				/>
				<button type="submit" className={css.searchButton}>
					Search
				</button>
			</form>
		</header>
	);
}
