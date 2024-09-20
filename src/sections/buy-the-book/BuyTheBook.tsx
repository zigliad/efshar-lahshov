import { Button, Typography } from "@mui/joy";
import { BuyWhatsapp } from "sections/contact/Contact";

export const BuyTheBook = () => {
	return (
		<div dir="rtl">
			<Typography
				textAlign={"right"}
				level="h4"
				textColor={"text.tertiary"}
			>
				הסתקרנתם?
			</Typography>
			<Typography textAlign={"right"} level="h1" gutterBottom>
				לרכישת הספר
			</Typography>
			<Typography textAlign={"right"} fontSize={"1.15rem"} dir="rtl">
				מחפשים אתגר מחשבתי מרענן? זה הזמן לקפוץ לגבעתיים ולאסוף את הספר
				שלכם ב-50 שקלים בלבד! התשבצים המרתקים בפנים יכניסו אתכם לעולם
				מלא חשיבה יצירתית וכיף בלתי נגמר.
			</Typography>
			<Typography
				textAlign={"right"}
				fontSize={"1.15rem"}
				dir="rtl"
				className="mt-4"
			>
				רוצים להוסיף טאץ' אישי? תוכלו לבקש הקדשה מיוחדת או אפילו הגדרה
				בהתאמה אישית – בדיוק עבורכם!
			</Typography>
			<BuyWhatsapp>
				<Button
					size="lg"
					className="mt-6 bg-gradient-to-bl from-[#4568dc] to-[#b07cec] hover:shadow-xl transition transform duration-200"
				>
					לרכישת הספר
				</Button>
			</BuyWhatsapp>
		</div>
	);
};
