import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Typography } from "@mui/joy";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { RefObject } from "react";
import { BuyMailto } from "sections/contact/Contact";

const Hamburger = ({
	pages,
}: {
	pages: { title: string; ref: RefObject<HTMLDivElement> }[];
}) => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (ref: RefObject<HTMLDivElement>) => {
		ref.current?.scrollIntoView();
		setAnchorElNav(null);
	};
	return (
		<Box
			sx={{
				flexGrow: 1,
				display: "flex",
			}}
		>
			<IconButton
				size="large"
				onClick={handleOpenNavMenu}
				style={{ color: "black" }}
			>
				<MenuRoundedIcon />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{ display: "block" }}
			>
				{pages.map((page) => (
					<MenuItem
						key={page.title}
						onClick={() => handleCloseNavMenu(page.ref)}
						dir="rtl"
					>
						<Typography sx={{ textAlign: "center" }}>
							{page.title}
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

export const NavBar = ({
	pages,
}: {
	pages: { title: string; ref: RefObject<HTMLDivElement> }[];
}) => {
	return (
		<AppBar position="sticky" dir="rtl" style={{ backgroundColor: "#fff" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						level="h2"
						sx={{
							mr: 2,
							fontWeight: 700,
						}}
						className="bg-gradient-to-bl from-[#4568dc] to-[#b07cec] inline-block text-transparent bg-clip-text"
					>
						אפשר לחשוב
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
						}}
						className="flex justify-center"
					/>
					<Box
						sx={{ flexGrow: 0 }}
						display={"flex"}
						flexDirection={"row"}
					>
						<Tooltip title="לרכישת הספר" arrow>
							<div>
								<BuyMailto>
									<IconButton
										size="large"
										style={{ color: "black" }}
									>
										<ShoppingBagOutlinedIcon />
									</IconButton>
								</BuyMailto>
							</div>
						</Tooltip>
						<Hamburger pages={pages} />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
