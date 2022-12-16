import { Schema, model } from "mongoose"

const TagsSchema = Schema({
    tags: {
        type: Array,
        default: []
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
})

const Tags = model("Tags", TagsSchema)

export default Tags