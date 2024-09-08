import { Typography } from "@mui/joy";
import React from "react";

const reviews = [
	{
		reviewer: "מאיר כהן",
		message: `יש לך כישרון מיוחד, אני מאוד נהנה מההגדרות שלך! תודה רבה`,
	},
	{
		reviewer: "מירב א. גולדנברג",
		message: "הגדרות גאוניות, תשבצים מהנים ברמות!!",
	},
	{
		reviewer: "רחל פלינט",
		message: "מאתגר מאוד מאוד, מיוחד מאוד, מהנה ומעולה!!!",
	},
	{
		reviewer: "מרים שני",
		message: "איזה הברקות, שאפו. גם ניסוח ההגדרות וגם הפתרונות עצמם",
	},
	{
		reviewer: "שלומי ש",
		message: "יופי של תשבצים, מדוייקים ונהדרים. כן ירבו...",
	},
	{
		reviewer: "רותם חקלאי",
		message: "התשבצים שלך תמיד כיפיים ממש לפתור. המשך כך!",
	},
	{
		reviewer: "לאה ברוך",
		message: "אתה מוכשר מאד בפירוק והרכבת מילים",
	},
];

// const moreReviews = [
// 	{
// 		reviewer: "דפנה שטרן",
// 		message: "תשבצים מעולים שכיף לפתור",
// 	},
// 	{
// 		reviewer: "שוש כהן",
// 		message: "אחלה תשבצים, שנונים ומהנים! תודה",
// 	},
// 	{
// 		reviewer: "מרדכי",
// 		message: "יפהיפה. תענוג אמיתי!!",
// 	},
// 	{
// 		reviewer: "מיכל אמזלג",
// 		message: "וואוו! מדהים, תודה רבה",
// 	},
// 	{
// 		reviewer: "עמי מהל",
// 		message: "תשבצים נפלאים, מאוד נהניתי!",
// 	},

// 	{
// 		reviewer: "תהלה אלזס",
// 		message: "ואו. הגדרות מעולות.",
// 	},
// ];

export const Reviews = () => {
	return (
		<div>
			<Typography
				textAlign={"right"}
				level="h4"
				textColor={"text.tertiary"}
			>
				חוכמת ההמונים
			</Typography>
			<Typography textAlign={"right"} level="h1" gutterBottom>
				תגובות הפותרים והקוראים
			</Typography>
			<div className="space-y-4">
				{reviews.map((review, index) => (
					<div
						key={index}
						className="bg-white rounded-xl rounded-br-none p-4"
					>
						<Typography
							textAlign={"right"}
							level="h4"
							dir="rtl"
							textColor={"#5468d5"}
						>
							{review.reviewer}
						</Typography>
						<Typography
							textAlign={"right"}
							fontSize={"1.15rem"}
							dir="rtl"
						>
							{review.message}
						</Typography>
					</div>
				))}
			</div>
		</div>
	);
};
