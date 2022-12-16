import React from "react";
import { useController } from "react-hook-form";
import { TextField } from "@mui/material";
const Input = ({ label, error, helperText, control, name, type }) => {
	const { field } = useController({ name, control });
	return (
		<>
			<TextField
				{...field}
				label={label}
				name={name}
				helperText={helperText}
				error={error}
				fullWidth
				variant="outlined"
				color="secondary"
				type={type}
				// sx={{ bgcolor: "#fff" }}
			/>
		</>
	);
};

export default Input;
