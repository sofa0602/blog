import { ApiError } from "../exception/api-error.js"
import Post from "../models/Post.js"
import { tokenService } from "../services/token.service.js"
import { reactionService } from "./reaction.service.js"
import { tagsService } from "./tags.service.js"
import { PostDto } from "../dtos/post.dto.js"

class PostService {

    async createPost(data, accessToken) {
        try {
            if (!accessToken) {
                throw ApiError.UnauthorizedError()
            }
            const userData = tokenService.varifyAccessToken(accessToken)
            if (!userData) {
                throw ApiError.UnauthorizedError()
            }
            const { id } = userData

            const postDto = new PostDto(data)
            const post = await Post.create({ ...postDto, user: id })


            await tagsService.saveTags(post._id, data.postTags)
            const tags = await tagsService.getTags(post._id)

            post.postTags = tags;


            const postReaction = await reactionService.saveReaction(id, post._id)
            post.reaction = postReaction

            post.save()

            // const postDto = new PostDto(post, tags, { isLike, user })


            return { post }
        } catch (err) {
            return err
        }
    }
    // async getPostReaction(postId) {
    //     const { reaction, user } = await Post.findById(postId)
    //     const countReaction = await reactionService.getReactionCount(user)
    //     return { reaction: reaction, count: countReaction }
    // }
    // async setReaction(data, accessToken) {
    //     if (!accessToken) {
    //         throw ApiError.UnauthorizedError()
    //     }
    //     const userData = tokenService.varifyAccessToken(accessToken)
    //     if (!userData) {
    //         throw ApiError.UnauthorizedError()
    //     }
    //     const { id } = userData

    //     const post = await Post.updateOne({ ...data, user: id })
    //     return post
    // }
    async getPostsByUser(userId) {
        try {
            const post = await Post.find().where({ user: userId })
            return post
        } catch (err) {
            return err
        }
    }
    async getPost(id) {
        try {
            const post = await Post.findById(id)
            return post
        } catch (err) {
            return err
        }
    }
    async getPostAll() {
        try {
            const userDto = "_id username email";
            const reactionDto = "isLike user";
            const tagsDto = "tags";
            const posts = await Post.find()
                .populate({ path: 'user', select: userDto })
                .populate({ path: "reaction", select: reactionDto })
                .populate({ path: "postTags", select: tagsDto })
                .exec()
            return posts
        } catch (err) {
            return err
        }
    }
    async setReaction(accessToken, postId) {
        try {
            const userData = tokenService.varifyAccessToken(accessToken)

            if (!userData) {
                throw ApiError.UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED_ERROR)
            }

            const { id } = userData
            const userId = id

            const post = await Post.findById(postId)
            const { reaction, user } = post

            // const getReaction = await reactionService.getReaction(reaction)


            // let postReaction;
            // let updatedPost;
            // if (getReaction.isLike) {
            postReaction = await reactionService.updateReaction(reaction, userId)
            //post.reaction = postReaction

            //==================
            // updatedPost = await Post.findByIdAndUpdate(postId, {
            //     reaction: postReaction
            // })
            //=================

            // }
            // else {
            //     postReaction = await reactionService.getReaction(reaction)

            //     updatedPost = await Post.findByIdAndUpdate(postId, {
            //         reaction: postReaction
            //     })
            // }

            // post.reaction = postReaction

            return updatedPost
        } catch (err) {
            return err
        }
    }
}

const postService = new PostService()
export { postService }