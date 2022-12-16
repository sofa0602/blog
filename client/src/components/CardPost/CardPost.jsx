import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	CardActions,
	IconButton,
	Grid,
	Paper,
	Typography,
	Button,
} from "@mui/material";
import {
	FavoriteBorder,
	Favorite,
	Share,
	ChatBubbleOutline,
	BookmarkBorder,
	Bookmark,
} from "@mui/icons-material";
import AvatarUser from "../AvatarUser/AvatarUser";
import styles from "./CardPost.module.scss";

const CardPost = ({ postImg, randomColor, post, author, onPostLike }) => {
	const [likeCount, setLikeCount] = useState(0);
	const [like, setLike] = useState(post.reaction.isLike);
	const [toggleBookmark, setToggleBookmark] = useState(false);
	const [toggleFavorite, setToggleFavorite] = useState(like);

	const handleBookmark = () => {
		setToggleBookmark((toggleBookmark) => !toggleBookmark);
	};
	const { _id } = post;

	console.log(post.reaction.isLike);

	const handleFavorite = async () => {
		setLikeCount((likeCount) => likeCount + 1);
		onPostLike(_id);
		setLike((prev) => !prev);
		setToggleFavorite((toggleFavorite) => !toggleFavorite);
	};

	return (
		<>
			<Card className={styles.card}>
				<Paper variant="outlined" square={false} sx={{ padding: "8px" }}>
					<CardMedia
						className={styles.card__media}
						component="img"
						height="194"
						image={postImg}
						alt="Cat"
					/>
				</Paper>
				<CardContent className={styles.card__content}>
					<CardActions disableSpacing sx={{ padding: "0px" }}>
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item>
								<IconButton
									onClick={handleFavorite}
									aria-label="add to favorites"
								>
									{toggleFavorite ? (
										<Favorite sx={{ color: "#ff1744" }} />
									) : (
										<FavoriteBorder className={styles.card__icons} />
									)}
									<Typography
										variant="body2"
										color="#263238"
										sx={{ paddingLeft: "5px" }}
									>
										{likeCount ? likeCount : ""}
									</Typography>
								</IconButton>
								{like.toString()}
								<IconButton aria-label="coments">
									<ChatBubbleOutline className={styles.card__icons} />
								</IconButton>

								<IconButton aria-label="share">
									<Share className={styles.card__icons} />
								</IconButton>
							</Grid>
							<Grid item>
								<IconButton onClick={handleBookmark} aria-label="share">
									{toggleBookmark ? (
										<Bookmark className={styles.card__icons} />
									) : (
										<BookmarkBorder className={styles.card__icons} />
									)}
								</IconButton>
							</Grid>
						</Grid>
					</CardActions>
					<CardHeader
						className={styles.card__header}
						avatar={<AvatarUser randomColor={randomColor} />}
						title={post.title}
						subheader={author}
					/>
					<Typography variant="body2" color="text.secondary">
						{post.text}
					</Typography>
					{post.postTags.tags.map((tag) => (
						<Typography
							variant="p"
							color="text.primary"
							sx={{ padding: "10px" }}
						>
							{`#${tag}`}
						</Typography>
					))}

					<Grid
						container
						justifyContent="space-between"
						alignItems="center"
						sx={{ margin: "15px 0 10px 0" }}
					>
						<Grid item>{`${post.viewers} view`}</Grid>
						<Grid item>
							<Button
								component={Link}
								to="/posts/:id"
								role="button"
								variant="outlined"
								color="primary"
								size="small"
								sx={{ display: "block", textTransform: "none" }}
							>
								More
							</Button>
						</Grid>
					</Grid>

					<Typography variant="body2" color="text.primary">
						@alisa001 This impressive paella is a perfect party dish and a fun
						meal to cook together
					</Typography>
					<Typography
						className={styles.card__date}
						variant="body2"
						color="text.secondary"
						sx={{ position: "absolute", right: "14px", bottom: "10px" }}
					>
						Septembre 23, 2010
					</Typography>
				</CardContent>
			</Card>
		</>
	);
};

export default CardPost;
