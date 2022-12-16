import express from "express"
import { postController } from "../controllers/post.controller.js"

const router = express.Router()

router.get("/", postController.getPostAll)
router.get("/:id", postController.getPostsByUser)
router.post("/add", postController.createPost)
router.patch("/setReaction/:id", postController.setReaction)


export default router
