import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Grid, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { UserPayload } from "../../enums/enums.js";
import Form from "../../components/Form/Form";
import Input from "../../common/Input/Input";
import { schemaLogin as loginValidationSchema } from "../../validation-schemas/validation-schemas.js";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions.js";

const Login = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			[UserPayload.EMAIL]: "",
			[UserPayload.PASSWORD]: "",
		},
		resolver: joiResolver(loginValidationSchema),
		// mode: "onBlur",
	});

	const { user } = useSelector((state) => ({
		user: state.profile.user,
	}));

	const dispatch = useDispatch();

	const onSubmit = async (payload) => {
		dispatch(login(payload));
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
							lineHeight: "62px",
							textAlign: "center",
						}}
						color="text.secondary"
						variant="h1"
					>
						Log in
					</Typography>
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
				<Grid item>
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
						Log in
					</Button>
				</Grid>
				<Grid item>
					<Grid container spacing={1}>
						<Grid item>
							<Typography
								variant="h6"
								sx={{ fontSize: "16px", lineHeight: "25px" }}
							>
								You not have an Account?
							</Typography>
						</Grid>
						<Grid item>
							<Link to="/register" className="link">
								Sign Up
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Form>
		</>
	);
};
export default Login;
