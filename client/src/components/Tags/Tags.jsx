import React from "react";
import { Grid } from "@mui/material";
import Tag from "./Tag/Tag";

const Tags = () => {
	const tags = [
		"design",
		"ui",
		"app",
		"flat",
		"web design",
		"icon",
		"free",
		"web",
	];
	return (
		<>
			<Grid container spacing={1.3}>
				{tags.map((tag) => (
					<Grid item>
						<Tag key={tag} title={tag}></Tag>
					</Grid>
				))}
			</Grid>
		</>
	);
};
export default Tags;
