import { Box, Typography } from "@mui/joy";
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

const ReviewsMap = () => {
	return (
		<>
			{reviews.map((review, index) => (
				<div
					key={index}
					className={"bg-white rounded-xl p-4"}
					dir="rtl"
				>
					<Typography
						level="h4"
						textAlign={"right"}
						className="bg-gradient-to-bl from-[#4568dc] to-[#b07cec] inline-block text-transparent bg-clip-text"
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
		</>
	);
};

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
			<Box display={{ xs: "flex", md: "none" }}>
				<div className={"space-y-4 w-full"}>
					<ReviewsMap />
				</div>
			</Box>
			<Box display={{ xs: "none", md: "flex" }}>
				<Masonry
					columns={{ xs: 1, md: 2, lg: 3 }}
					spacing={3}
					dir="rtl"
					style={{ marginLeft: 12 }}
				>
					<ReviewsMap />
				</Masonry>
			</Box>
		</div>
	);
};
