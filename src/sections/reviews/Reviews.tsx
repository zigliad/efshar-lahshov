import { Typography } from "@mui/joy";
import { Masonry } from "@mui/lab";
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
		message: "אתה מוכשר מאד בפירוק והרכבת מילים. כיף לפתור, תמשיך כך!",
	},
	{
		reviewer: "דפנה שטרן",
		message: "תשבצים מעולים שכיף לפתור",
	},
	{
		reviewer: "עמי מהל",
		message: "תשבצים נפלאים, מאוד נהניתי!",
	},
];

// const moreReviews = [

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
				<Masonry
					columns={{ xs: 1, md: 2, lg: 3 }}
					spacing={3}
					dir="rtl"
					style={{ marginLeft: 12 }}
				>
					{reviews.map((review, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-lg p-4"
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
				</Masonry>
				{/* {reviews.map((review, index) => (
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
				))} */}
			</div>
		</div>
	);
};
