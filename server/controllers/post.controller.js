import { postService } from "../services/post.service.js"
import { tokenHelper } from "../helpers/token-helper.js"

class PostController {

    async createPost(req, res, next) {
        try {
            const data = req.body
            const accessToken = tokenHelper.getToken(req)

            const post = await postService.createPost(data, accessToken)
            res.json(post)
        } catch (err) {
            next(err)
        }
    }
    async getPostsByUser(req, res, next) {
        try {
            const { id } = req.params

            const posts = await postService.getPostsByUser(id)
            res.json(posts)
        } catch (err) {
            next(err)
        }
    }
    async getPost(req, res, next) {
        try {
            const { id } = req.params
            const post = await postService.getPost(id)
            res.json(post)
        } catch (err) {
            next(err)
        }
    }
    async getPostAll(req, res, next) {
        try {
            const posts = await postService.getPostAll()
            res.json(posts)
        } catch (err) {
            next(err)
        }
    }
    async setReaction(req, res, next) {
        try {
            const { id } = req.params
            const accessToken = tokenHelper.getToken(req)
            const post = await postService.setReaction(accessToken, id)
            res.json(post)
        } catch (err) {
            next(err)
        }
    }
    // async getPostReaction(req, res, next) {
    //     try {
    //         const { id } = req.params
    //         const postReaction = await postService.getPostReaction(id)
    //         res.json(postReaction)
    //     } catch (err) {
    //         next(err)
    //     }
    // }
}

const postController = new PostController()
export { postController } 