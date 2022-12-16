import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
	const [users, setUsers] = useState([]);
	const getUsers = () => {
		const data = axios
			.get("http://localhost:8080/users")
			.then((res) => setUsers(res.data));
		console.log("data", data);
		return data;
	};

	useEffect(() => {
		getUsers();
	}, []);
	console.log("users", users);
	return (
		<>
			{users.map((e) => (
				<ul key={e._id}>
					<li>{e.username}</li>
					<li>{e.email}</li>
				</ul>
			))}
		</>
	);
};

export default User;
