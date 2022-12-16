import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { schemaLogin as loginValidationSchema } from "../../validation-schemas/validation-schemas.js";

export default function FormLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: joiResolver(loginValidationSchema),
		defaultValues: {
			email: email,
			password: password,
		},
	});
	const onSubmit = (data) => console.log(data);
	const handleChange = (e) => {
		return e.target.value;
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="email"
				control={control}
				onChange={(e) => setEmail(handleChange(e))}
				render={({ field }) => <input {...field} />}
			/>
			<p>{errors.email?.message}</p>
			<Controller
				name="password"
				control={control}
				onChange={(e) => setPassword(handleChange(e))}
				render={({ field }) => <input {...field} />}
			/>
			<p>{errors.password?.message}</p>
			<input type="submit" />
		</form>
	);
}
