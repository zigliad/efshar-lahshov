import "@fontsource/inter";
import Book from "./assets/book.png";

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-full h-full bg-gray-50">
			<div className="">
				<img
					src={Book}
					alt="אפשר לחשוב"
					className="max-h-[50rem] rotate-6 "
				/>
			</div>
		</div>
	);
}

export default App;
