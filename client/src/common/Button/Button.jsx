import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ButtonPrimary = ({ title, isLink }) => {
	// function Router(props) {
	// 	const { children } = props;
	// 	if (typeof window === "undefined") {
	// 		return <StaticRouter location="/">{children}</StaticRouter>;
	// 	}

	// 	return <MemoryRouter>{children}</MemoryRouter>;
	// }
	return (
		<>
			{isLink ? (
				<Button
					component={Link}
					to="/register"
					role="button"
					variant="outlined"
					color="primary"
					size="small"
					sx={{ display: "block", textTransform: "none" }}
				>
					{title}
				</Button>
			) : (
				<Button
					role="button"
					variant="outlined"
					color="primary"
					size="small"
					sx={{ display: "block", textTransform: "none" }}
				>
					{title}
				</Button>
			)}
		</>
	);
};

export default ButtonPrimary;
