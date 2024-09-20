import {
	faInstagram,
	faLinkedin,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/joy";
import { PropsWithChildren } from "react";

export const MAIL_LILIZIGI = "lilizigi@gmail.com";
export const MAIL_ZIGDONLIAD = "zigdonliad@gmail.com";

export const Mailto = ({
	email,
	bcc = "",
	subject = "",
	body = "",
	children,
}: PropsWithChildren<{
	email: string;
	bcc?: string;
	subject: string;
	body: string;
}>) => {
	let params = subject || body ? "?" : "";
	if (subject) params += `subject=${encodeURIComponent(subject)}`;
	if (bcc) params += `${subject ? "&" : ""}bcc=${encodeURIComponent(bcc)}`;
	if (body) params += `${bcc ? "&" : ""}body=${encodeURIComponent(body)}`;

	return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const BUY_TEXT = `
שלום ליעד! \n
אשמח להזמין עותק של הספר ״אפשר לחשוב״ 🧠\n
`;

export const BuyMailto = ({ children }: PropsWithChildren<{}>) => (
	<Mailto
		email={MAIL_ZIGDONLIAD}
		bcc={MAIL_LILIZIGI}
		subject="אפשר לחשוב"
		body={BUY_TEXT}
	>
		{children}
	</Mailto>
);

export const BuyWhatsapp = ({ children }: PropsWithChildren<{}>) => {
	return (
		<a
			href={`https://wa.me/972545200172?text=${BUY_TEXT}`}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	);
};

export const ContactLinks = () => {
	return (
		<div className="flex gap-6 my-4 flex-row-reverse">
			<a
				href="http://instagram.com/liad_zigdon/"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					icon={faInstagram}
					size="2xl"
					style={{ color: "#E1306C" }}
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/liad-zigdon-4157a41ba/"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					icon={faLinkedin}
					size="2xl"
					style={{ color: "#0b63bc" }}
				/>
			</a>
			<BuyWhatsapp>
				<FontAwesomeIcon
					icon={faWhatsapp}
					size="2xl"
					style={{ color: "#128C7E" }}
				/>
			</BuyWhatsapp>
			<BuyMailto>
				<FontAwesomeIcon
					icon={faEnvelope}
					size="2xl"
					style={{ color: "#f2870e" }}
				/>
			</BuyMailto>
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
			<ContactLinks />
			<Typography textAlign={"right"} fontSize={"1.15rem"} dir="rtl">
				אפשר לחשוב - ליעד זיגדון ©️
			</Typography>
		</div>
	);
};
