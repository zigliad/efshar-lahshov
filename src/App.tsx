import { Author } from "sections/about-the-author/Author";
import { AboutTheBook } from "sections/about-the-book/AboutTheBook";
import { BookCover } from "sections/book-cover/BookCover";
import { OpeningWords } from "sections/opening-words/OpeningWords";
import { Reviews } from "sections/reviews/Reviews";

import "./styles/book.css";
import "./styles/main.css";
import "@fontsource/inter";
import { Contact } from "sections/contact/Contact";

function App() {
	return (
		<div className="">
			<div className="section-outer justify-center h-screen">
				<div className="section-inner">
					<BookCover />
				</div>
			</div>

			<div className="section-outer">
				<div className="section-inner">
					<AboutTheBook />
				</div>
			</div>

			<div className="section-outer">
				<div className="section-inner">
					<Author />
				</div>
			</div>

			<div className="section-outer">
				<div className="section-inner">
					<OpeningWords />
				</div>
			</div>

			<div className="section-outer">
				<div className="section-inner">
					<Reviews />
				</div>
			</div>

			<div className="section-outer">
				<div className="section-inner">
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default App;
