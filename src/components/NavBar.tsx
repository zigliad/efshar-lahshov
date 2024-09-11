import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Typography } from "@mui/joy";
import { Mailto } from "sections/contact/Contact";

const pages = ["על הספר", "על המחבר", "מילות פתיחה", "תגובות", "צרו קשר"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Hamburger = ({ position }: { position: "right" | "left" }) => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	return (
		<Box
			sx={{
				flexGrow: 1,
				display: {
					xs: position === "right" ? "flex" : "none",
					md: position === "left" ? "flex" : "none",
				},
			}}
		>
			<IconButton
				size="large"
				onClick={handleOpenNavMenu}
				style={{ color: "#5468d5" }}
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
					<MenuItem key={page} onClick={handleCloseNavMenu} dir="rtl">
						<Typography sx={{ textAlign: "center" }}>
							{page}
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

export const NavBar = () => {
	return (
		<AppBar position="sticky" dir="rtl" style={{ backgroundColor: "#fff" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Hamburger position="left" />
					<Typography
						level="h2"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontWeight: 700,
							color: "#5468d5",
						}}
					>
						אפשר לחשוב
					</Typography>
					<Hamburger position="right" />
					<Typography
						level="h2"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontWeight: 700,
							color: "#5468d5",
						}}
					>
						אפשר לחשוב
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
						className="flex justify-center"
					>
						{/* {pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "#5468d5" }}
							>
								{page}
							</Button>
						))} */}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="לרכישת הספר">
							<Mailto
								email="zigdonliad@gmail.com"
								subject="אפשר לחשוב"
								body={`שלום!\nאשמח להזמין עותק של הספר ״אפשר לחשוב״!`}
							>
								<IconButton
									size="large"
									style={{ color: "#5468d5" }}
								>
									<ShoppingCartRoundedIcon />
								</IconButton>
							</Mailto>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
