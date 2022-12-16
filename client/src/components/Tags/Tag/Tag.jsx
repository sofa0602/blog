import React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./Tag.module.scss";

const Tag = ({ title }) => {
	const theme = createTheme({
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						fontSize: "1rem",
						lineHeight: "1.5",
					},
				},
			},
		},
		palette: {
			primary: {
				main: "#004642",
			},
		},
	});
	return (
		<>
			<ThemeProvider theme={theme}>
				<Button
					className={styles.tag}
					variant="outlined"
					size="small"
					sx={{ textTransform: "lowercase" }}
				>
					{title}
				</Button>
			</ThemeProvider>
		</>
	);
};
export default Tag;
