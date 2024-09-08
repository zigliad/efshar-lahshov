import {
	faInstagram,
	faLinkedin,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/joy";
import React, { PropsWithChildren } from "react";

const Mailto = ({
	email,
	subject = "",
	body = "",
	children,
}: PropsWithChildren<{ email: string; subject: string; body: string }>) => {
	let params = subject || body ? "?" : "";
	if (subject) params += `subject=${encodeURIComponent(subject)}`;
	if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

	return <a href={`mailto:${email}${params}`}>{children}</a>;
};

export const ContactLinks = () => {
	return (
		<div className="flex gap-6 my-4 flex-row-reverse">
			<a href="http://instagram.com/liad_zigdon/" target="_blank">
				<FontAwesomeIcon
					icon={faInstagram}
					size="2xl"
					style={{ color: "#E1306C" }}
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/liad-zigdon-4157a41ba/"
				target="_blank"
			>
				<FontAwesomeIcon
					icon={faLinkedin}
					size="2xl"
					style={{ color: "#0b63bc" }}
				/>
			</a>
			<a
				href="https://api.whatsapp.com/send?phone=+972545200172"
				target="_blank"
			>
				<FontAwesomeIcon
					icon={faWhatsapp}
					size="2xl"
					style={{ color: "#128C7E" }}
				/>
			</a>
			<Mailto
				email="zigdonliad@gmail.com"
				subject="אפשר לחשוב"
				body={`שלום!\nאשמח להזמין עותק של הספר ״אפשר לחשוב״!`}
			>
				<FontAwesomeIcon
					icon={faEnvelope}
					size="2xl"
					style={{ color: "#f2870e" }}
				/>
			</Mailto>
		</div>
	);
};

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
			<Typography textAlign={"right"} fontSize={"1.15rem"} dir="rtl">
				אפשר לחשוב - ליעד זיגדון
			</Typography>
			<ContactLinks />
		</div>
	);
};
