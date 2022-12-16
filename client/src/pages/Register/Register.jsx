import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Grid, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { UserPayload } from "../../enums/enums.js";
import Form from "../../components/Form/Form";
import Input from "../../common/Input/Input";
import { schemaRegistration as registrationValidationSchema } from "../../validation-schemas/validation-schemas.js";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions.js";

const Register = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			[UserPayload.USERNAME]: "",
			[UserPayload.EMAIL]: "",
			[UserPayload.PASSWORD]: "",
		},
		resolver: joiResolver(registrationValidationSchema),
		// mode: "onBlur",
	});
	const { user } = useSelector((state) => ({
		user: state.profile.user,
	}));
	const dispatch = useDispatch();

	const onSubmit = async (payload) => {
		dispatch(register(payload));
	};

	if (user) {
		return <Navigate to="/"></Navigate>;
	}

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Grid item>
					<Typography
						sx={{
							fontSize: "40px",
							lineHeight: "63px",
							textAlign: "center",
							marginBottom: "20px",
						}}
						color="text.secondary"
						variant="h1"
					>
						Create An Account
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Input
						name="username"
						control={control}
						label="Username"
						id="username"
						type="text"
						error={!!errors.username}
						helperText={errors.username?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<Input
						name="email"
						control={control}
						label="Email"
						id="email"
						type="email"
						error={!!errors.email}
						helperText={errors.email?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<Input
						name="password"
						control={control}
						label="Password"
						id="password"
						type="password"
						error={!!errors.password}
						helperText={errors.password?.message}
					/>
				</Grid>
				<Grid item sx={12}>
					<Button
						type="submit"
						color="primary"
						variant="contained"
						sx={{
							color: "#fff",
							textTransform: "none",
							padding: "10px 70px",
							borderRadius: "10px",
							fontSize: "23px",
							lineHeight: "34px",
							marginTop: "20px",
						}}
					>
						Create acount
					</Button>
				</Grid>
				<Grid item>
					<Grid container spacing={1}>
						<Grid item>
							<Typography
								variant="h6"
								sx={{ fontSize: "16px", lineHeight: "25px" }}
							>
								Already Have An Account?
							</Typography>
						</Grid>
						<Grid item>
							<Link to="/login" className="link">
								Sign In
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Form>
		</>
	);
};
export default Register;
