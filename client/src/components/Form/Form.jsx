import React from "react";
import { Grid, Card, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./Form.module.scss";

const Form = ({ children, onSubmit }) => {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#021b19",
			},
			secondary: {
				main: "#84C7AE",
			},
		},
	});
	return (
		<>
			<ThemeProvider theme={theme}>
				<div className={styles.bg}>
					<form onSubmit={onSubmit}>
						<Card
							variant="outlined"
							sx={{
								width: "550px",
								borderRadius: "50px",
								backgroundColor: "#f6fbf9",
							}}
						>
							<Box className={styles.form__content}>
								<Grid
									container
									spacing={2}
									justifyContent="center"
									alignItems="center"
									sx={{ maxWidth: "400px" }}
								>
									{children}
								</Grid>
							</Box>
						</Card>
					</form>
				</div>
			</ThemeProvider>
		</>
	);
};

export default Form;
