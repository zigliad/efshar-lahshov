import { faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Typography } from "@mui/joy";

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
				{/* <Divider /> */}
				<div className="flex gap-6 my-4 flex-row-reverse">
					<FontAwesomeIcon
						icon={faInstagram}
						size="2xl"
						style={{ color: "#E1306C" }}
					/>

					<FontAwesomeIcon
						icon={faLinkedin}
						size="2xl"
						style={{ color: "#0b63bc" }}
					/>
					<FontAwesomeIcon
						icon={faWhatsapp}
						size="2xl"
						style={{ color: "#128C7E" }}
					/>
					<FontAwesomeIcon
						icon={faEnvelope}
						size="2xl"
						style={{ color: "#f2870e" }}
					/>
				</div>
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
