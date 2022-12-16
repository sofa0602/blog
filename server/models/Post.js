import { Schema, model } from "mongoose";

const PostShema = Schema({

    title: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true,
    },
    viewers: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    postTags: {
        type: Schema.Types.ObjectId,
        ref: "Tags",
        require: true,
    },
    reaction: {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
    }
},
    {
        timestamps: true
    }
)

const Post = model("Post", PostShema)
export default Post