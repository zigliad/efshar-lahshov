import { Typography } from "@mui/joy";

export const abouthTheBookSections = [
	`אם אי פעם מצאתם את עצמכם עומדים מול תשבץ היגיון, חסרי אונים, מקללים את המחבר ומוותרים אחרי כמה שניות – אתם לגמרי לא לבד. אבל אל דאגה, הספר ״אפשר לחשוב״ כאן כדי להפוך את האתגר לחוויה!`,
	`מה תמצאו בספר?
החל מהסברים ברורים ומדויקים על מגוון טכניקות פתרון, ועד עשרות תשבצים מקוריים ומשחקי מילים שיאתגרו אתכם, יעוררו את הדמיון ויחדדו את כישורי החשיבה שלכם. עם גישה קלילה, אך יסודית, הספר מוביל אתכם צעד אחר צעד דרך עולם ההיגיון ומעניק כלים שאיתם תוכלו להפוך לפותרים מקצועיים.`,
	`הספר “אפשר לחשוב״ מציע לכם חוויית פתרון שלא רק מעוררת את החשיבה, אלא גם מביאה איתה רגעים של צחוק וסיפוק. בין אם אתם פותרים ותיקים או רק בתחילת הדרך, הספר הזה יפתח לכם דלת לעולם המאתגר והמרתק של משחקי המילים!`,
];

export const AboutTheBook = () => {
	return (
		<div>
			<Typography
				textAlign={"right"}
				level="h4"
				textColor={"text.tertiary"}
			>
				על הספר
			</Typography>
			<Typography textAlign={"right"} level="h1" gutterBottom>
				אפשר לחשוב
			</Typography>
			<div className="space-y-4">
				{abouthTheBookSections.map((section, index) => (
					<Typography
						textAlign={"right"}
						fontSize={"1.15rem"}
						key={index}
						dir="rtl"
					>
						{section}
					</Typography>
				))}
			</div>
		</div>
	);
};
