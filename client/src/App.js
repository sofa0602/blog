
import { Route, Routes } from "react-router-dom";
import User from "./components/User/User";
import Home from "./pages/Home/Home";
import Posts from "./components/Posts/Posts";
import Post from "./pages/Post/Post";
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getCurrentUser, getAllPosts } from "./redux/actions.js"
import { storage } from "./services/services.js"
import Loader from "./components/Loader/Loader"

function App() {
	const dispatch = useDispatch()
	const token = Boolean(storage.getItem("token"))


	useEffect(() => {
		if (token) {
			dispatch(getCurrentUser())
		}
	}, [token, dispatch])
	useEffect(() => {
		dispatch(getAllPosts())
	}, [dispatch])

	const { user } = useSelector((state) => ({
		user: state.profile.user,
	}));
	const { isLoading } = useSelector((state) => ({
		isLoading: state.profile.isLoading,
	}));

	const isAuth = Boolean(user)

	// useEffect(() => {

	// }, [isLoading])

	if (isLoading) {
		return (<Loader />)
	}


	// useEffect(() => console.log(isAuth), [user])
	return (
		<>

			<Routes>
				<Route element={<Home isAuth={isAuth} isLoading={isLoading} />} path="/" />
				<Route element={<Register />} path="/register" />
				<Route element={<Login />} path="/login" />
				<Route element={<User />} path="/users/:id" />
				<Route element={<Posts />} path="/posts" />
				<Route element={<Post />} path="/posts/:id" />
			</Routes>
		</>

	);
}

export default App;
