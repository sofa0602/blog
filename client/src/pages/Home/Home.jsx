import { useEffect } from "react";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../redux/actions";

const Home = ({ isAuth, isLoading }) => {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#004642",
			},
			info: {
				main: "#ffffff",
			},
			secondary: {
				main: grey[900],
			},
		},
	});
	// const dispatch = useDispatch();
	// useEffect(() => dispatch(getAllPosts()), []);
	return (
		<>
			<ThemeProvider theme={theme}>
				{!isLoading && <Header isAuth={isAuth}></Header>}

				<Grid container sx={{ marginTop: "40px", position: "relative" }}>
					<Grid
						item
						md={3}
						sx={{ position: "sticky", alignSelf: "flex-start", top: "80px" }}
					>
						<Sidebar />
					</Grid>
					<Grid item md={9}>
						<Posts />
					</Grid>
				</Grid>
				<Footer></Footer>
			</ThemeProvider>
		</>
	);
};

export default Home;
