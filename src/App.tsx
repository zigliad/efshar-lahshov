import { StyledEngineProvider } from "@mui/material/styles";
import { useRef } from "react";

import { NavBar } from "components/NavBar";
import { Author } from "sections/about-the-author/Author";
import { AboutTheBook } from "sections/about-the-book/AboutTheBook";
import { BookCover } from "sections/book-cover/BookCover";
import { Contact } from "sections/contact/Contact";
import { OpeningWords } from "sections/opening-words/OpeningWords";
import { Reviews } from "sections/reviews/Reviews";

import "@fontsource/inter";
import { BuyTheBook } from "sections/buy-the-book/BuyTheBook";
import "./styles/book.css";
import "./styles/main.css";

function App() {
	const aboutRef = useRef<HTMLDivElement>(null);
	const authorRef = useRef<HTMLDivElement>(null);
	const openingWordsRef = useRef<HTMLDivElement>(null);
	const reviewsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const buyTheBookRef = useRef<HTMLDivElement>(null);

	return (
		<StyledEngineProvider injectFirst>
			<div className="">
				<NavBar
					buyTheBookRef={buyTheBookRef}
					pages={[
						{ title: "על הספר", ref: aboutRef },
						{ title: "על המחבר", ref: authorRef },
						{ title: "מילות פתיחה", ref: openingWordsRef },
						{ title: "תגובות", ref: reviewsRef },
						{ title: "לרכישת הספר", ref: buyTheBookRef },
						{ title: "צרו קשר", ref: contactRef },
					]}
				/>

				<div className="section-outer justify-center h-[70vh]">
					<div className="section-inner items-center flex flex-col space-y-16">
						<BookCover />
					</div>
				</div>

				<div className="section-outer" ref={aboutRef}>
					<div className="section-inner">
						<AboutTheBook />
					</div>
				</div>

				<div className="section-outer" ref={authorRef}>
					<div className="section-inner">
						<Author />
					</div>
				</div>

				<div className="section-outer" ref={openingWordsRef}>
					<div className="section-inner">
						<OpeningWords />
					</div>
				</div>

				<div className="section-outer" ref={reviewsRef}>
					<div className="section-inner">
						<Reviews />
					</div>
				</div>

				<div className="section-outer" ref={buyTheBookRef}>
					<div className="section-inner">
						<BuyTheBook />
					</div>
				</div>

				<div className="section-outer" ref={contactRef}>
					<div className="section-inner">
						<Contact />
					</div>
				</div>
			</div>
		</StyledEngineProvider>
	);
}

export default App;
