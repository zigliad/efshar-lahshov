import Cover from "assets/cover.png";

export const Book = () => {
	return (
		<div className="book-container">
			<div className="book">
				<img alt="אפשר לחשוב" src={Cover} className="cover-image" />
			</div>
		</div>
	);
};
