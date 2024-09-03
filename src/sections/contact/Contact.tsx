import {
	faInstagram,
	faLinkedin,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/joy";
import React from "react";

export const Contact = () => {
	return (
		<div>
			<Typography
				textAlign={"right"}
				level="h4"
				textColor={"text.tertiary"}
			>
				לרכישה, או סתם בשביל הכיף
			</Typography>
			<Typography textAlign={"right"} level="h1" gutterBottom>
				צרו קשר
			</Typography>
			<div className="flex gap-6 mt-4 flex-row-reverse">
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
					style={{ color: "#c71610" }}
				/>
			</div>
		</div>
	);
};
