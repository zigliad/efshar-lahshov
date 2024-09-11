import { Avatar, Typography } from "@mui/joy";

import { ContactLinks } from "sections/contact/Contact";

import Liad from "../../assets/liad.png";

export const Author = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center gap-12">
			<div>
				<Typography
					textAlign={"right"}
					level="h4"
					textColor={"text.tertiary"}
				>
					על המחבר
				</Typography>
				<Typography textAlign={"right"} level="h1" gutterBottom>
					ליעד זיגדון
				</Typography>
				<Typography
					textAlign={"right"}
					fontSize={"1.15rem"}
					gutterBottom
					dir="rtl"
				>
					סרן בצה״ל, בעל תואר ראשון במדעי המחשב אותו סיים בגיל 18.
					אוהב את משפחתו ואת חבריו. משחק כדורגל, טניס, מטקות ואוהד
					מושבע של שלמה ארצי. מעל הכל, פותר ומחבר תשבצי היגיון וחסיד
					גדול של משחקי מילים.
				</Typography>
				<ContactLinks />
				<Typography
					textAlign={"right"}
					level="h4"
					textColor={"text.tertiary"}
				>
					מוזמנים לפנות לרכישה, או סתם בשביל הכיף
				</Typography>
			</div>
			<Avatar
				alt="ליעד זיגדון"
				src={Liad}
				sx={{ width: 240, height: 240 }}
			/>
		</div>
	);
};
