import { OpeningWords } from "sections/opening-words/OpeningWords";

import "@fontsource/inter";

import { Author } from "sections/about-the-author/Author";
import { Book } from "sections/book/Book";
import { Reviews } from "sections/reviews/Reviews";
import "./styles/book.css";
import "./styles/main.css";

function App() {
	return (
		<div className="">
			<div className="section-outer justify-center h-screen">
				<div className="section-inner">
					<Book />
				</div>
			</div>

			<div className="section-outer">
				<div className="section-inner">
					<OpeningWords />
				</div>
			</div>

			<div className="section-outer">
				<div className="section-inner">
					<Author />
				</div>
			</div>

			<div className="section-outer">
				<div className="section-inner">
					<Reviews />
				</div>
			</div>
		</div>
	);
}

export default App;
