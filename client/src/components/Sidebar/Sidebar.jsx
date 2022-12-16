import React from "react";
import { Typography, Grid } from "@mui/material";
import randomMC from "random-material-color";
import Tags from "../Tags/Tags";
import Tag from "../Tags/Tag/Tag";
import AvatarUser from "../AvatarUser/AvatarUser";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
	const randomColor = randomMC.getColor();
	return (
		<>
			<Grid
				className={styles.sidebar}
				container
				direction="column"
				spacing={6}
				sx={{ padding: "15px" }}
			>
				<Grid item>
					<Typography className={styles.title} variant="h5">
						Filter
					</Typography>
					<Grid container spacing={1}>
						<Grid item>
							<Tag title="new" />
						</Grid>
						<Grid item>
							<Tag title="popular" />
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Typography className={styles.title} variant="h5">
						Related tags
					</Typography>
					<Tags />
				</Grid>
				<Grid item>
					<Typography className={styles.title} variant="h5">
						Profiles
					</Typography>
					<Grid container direction="column" spacing={2}>
						<Grid item sx={{ display: "flex", alignItems: "center" }}>
							<AvatarUser>H</AvatarUser>
							<Typography variant="body3" sx={{ margin: "10px" }}>
								Author Name
							</Typography>
						</Grid>
						<Grid item sx={{ display: "flex", alignItems: "center" }}>
							<AvatarUser>H</AvatarUser>
							<Typography variant="body3" sx={{ margin: "10px" }}>
								Author Name
							</Typography>
						</Grid>
						<Grid item sx={{ display: "flex", alignItems: "center" }}>
							<AvatarUser>H</AvatarUser>
							<Typography variant="body3" sx={{ margin: "10px" }}>
								Author Name
							</Typography>
						</Grid>
						<Grid item sx={{ display: "flex", alignItems: "center" }}>
							<AvatarUser>H</AvatarUser>
							<Typography variant="body3" sx={{ margin: "10px" }}>
								Author Name
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Sidebar;
