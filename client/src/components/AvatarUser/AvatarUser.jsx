import React from "react";
import { Avatar } from "@mui/material";
const AvatarUser = ({ randomColor, name }) => {
	return (
		<>
			<Avatar
				sx={{
					width: 35,
					height: 35,
					bgcolor: `${randomColor}`,
					display: "inline-flex",
				}}
			>
				{name}
			</Avatar>
		</>
	);
};

export default AvatarUser;
