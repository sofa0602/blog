import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import randomMC from "random-material-color";
import catImg from "../../images/cat.jpg";
import CardPost from "../CardPost/CardPost";
import { useSelector } from "react-redux";
import { posts as postService } from "../../services/services.js";

const Posts = () => {
	const randomColor = randomMC.getColor();

	const { posts } = useSelector((state) => ({
		posts: state.post.posts,
	}));

	const handleReactionPost = async (id) => {
		const post = await postService.setReaction(id);
		console.log(post);
		return post;
	};

	return (
		<>
			<Grid
				container
				justify-content="center"
				spacing={6}
				sx={{ margin: "10px" }}
			>
				{posts.map((post) => (
					<>
						<Grid item>
							<CardPost
								key={post._id}
								postImg={catImg}
								randomColor={randomColor}
								post={post}
								author={post.user.username}
								onPostLike={handleReactionPost}
							/>
						</Grid>
					</>
				))}
			</Grid>
		</>
	);
};

export default Posts;
