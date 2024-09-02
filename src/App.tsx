import "@fontsource/inter";
import Book from "./assets/book.png";
import Logo from "./assets/logo.png";
import Cover from "./assets/cover.png";
import { Divider, Grid, Sheet, Typography } from "@mui/joy";
import "./styles/book.css";

function App() {
	return (
		<div className="bg-gray-100 h-screen p-4">
			<div className="flex flex-col items-center justify-center h-full w-full">
				<Grid container spacing={2} className=" w-full">
					<Grid xs={12} md={6}>
						<div>
							<Typography
								textAlign={"right"}
								level="h3"
								textColor={"text.tertiary"}
							>
								ליעד זיגדון
							</Typography>
							<Typography
								textAlign={"right"}
								level="h1"
								gutterBottom
							>
								צרו קשר / להזמנות
							</Typography>
							<Divider />
							<Typography
								textAlign={"right"}
								level="h4"
								gutterBottom
								className="pt-4"
							>
								ווצאפ 0545200172
							</Typography>
						</div>
					</Grid>
					<Grid xs={12} md={6}>
						<a
							className="book-container"
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
							<div className="book">
								<img
									alt="אפשרמלחשוב"
									src={Cover}
									className="cover-image"
								/>
							</div>
						</a>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default App;
