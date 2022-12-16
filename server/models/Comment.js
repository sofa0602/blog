import { Schema, model } from "mongoose"

const CommentSchema = Schema({
    text: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
})

const Comment = model("Comment", CommentSchema)

export default Comment