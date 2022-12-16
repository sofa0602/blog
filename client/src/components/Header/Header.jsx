import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
	AppBar,
	Container,
	Typography,
	Toolbar,
	Grid,
	Button,
} from "@mui/material";
import AvatarUser from "../AvatarUser/AvatarUser";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions.js";
// import { randomColor } from "./constant.js";

const Header = ({ isAuth }) => {
	const dispatch = useDispatch();

	// const colorR = useRef();

	// colorR.current = randomColor;

	// const [color, setColor] = useState(() => colorR.current);

	// const { isLoading } = useSelector((state) => ({
	// 	isLoading: state.profile.isLoading,
	// }));

	const { user } = useSelector((state) => ({
		user: state.profile.user,
	}));

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<>
			<AppBar color="secondary" sx={{ marginBottom: "30px" }}>
				<Container maxWidth="xl">
					<Toolbar>
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Grid item>
								<Typography
									variant="h6"
									component="a"
									href="/"
									sx={{
										mr: 2,
										display: { xs: "none", md: "flex" },
										fontFamily: "monospace",
										fontWeight: 700,
										letterSpacing: ".3rem",
										color: "inherit",
										textDecoration: "none",
									}}
								>
									LOGO
								</Typography>
							</Grid>
							<Grid item>
								<Grid container spacing={4}>
									<Grid item>
										{/* {isLoading && <></>} */}
										{!isAuth ? (
											<Button
												component={Link}
												to="/login"
												role="button"
												variant="outlined"
												color="info"
												size="small"
												sx={{
													display: "block",
													textTransform: "none",
													textAlign: "center",
												}}
											>
												login
											</Button>
										) : (
											<Grid container spacing={4}>
												<Grid item>
													<Typography>{user?.username}</Typography>
												</Grid>
												<Grid item>
													<AvatarUser
														name={user?.username.slice(0, 1).toUpperCase()}
													/>
												</Grid>
												<Grid item>
													<Button
														onClick={handleLogout}
														role="button"
														variant="outlined"
														color="info"
														size="small"
														sx={{
															display: "block",
															textTransform: "none",
															textAlign: "center",
														}}
													>
														logout
													</Button>
												</Grid>
											</Grid>
										)}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};
export default Header;
